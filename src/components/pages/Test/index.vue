<template>
    <v-layout column align-center class="container testSelf">
        <v-stepper
            v-if="
                currentTestQuestions.length &&
                    stepper <= currentTestQuestions.length + 1
            "
            v-model="stepper"
            light
            :ripple="false"
            class="stepper__clear stepper__container"
        >
            <SimpleButton
                v-if="stepper > 1 && stepper < currentTestQuestions.length + 1"
                class="button__simple--arrow back_button"
                @click.native="goBack"
            >
                <img
                    svg-inline
                    src="@/assets/images/arrow.svg"
                    alt="Вернуться"
                />
            </SimpleButton>
            <portal to="closeCurrentTest">
                <SimpleButton
                    v-if="stepper < currentTestQuestions.length + 1"
                    class="button__simple--arrow close_button"
                    @click.native="closeSelf"
                >
                    <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M17.7549 4.7549C18.1656 4.33879 18.8366 4.33659 19.25 4.75V4.75C19.6634 5.16342 19.6612 5.83437 19.2451 6.24507L13.4142 12L19.2451 17.7549C19.6612 18.1656 19.6634 18.8366 19.25 19.25V19.25C18.8366 19.6634 18.1656 19.6612 17.7549 19.2451L12 13.4142L6.24507 19.2451C5.83437 19.6612 5.16342 19.6634 4.75 19.25V19.25C4.33659 18.8366 4.33879 18.1656 4.7549 17.7549L10.5858 12L4.7549 6.24507C4.33878 5.83437 4.33658 5.16342 4.75 4.75V4.75C5.16342 4.33658 5.83437 4.33878 6.24507 4.7549L12 10.5858L17.7549 4.7549Z"
                            fill="#1E1E1E"
                        />
                    </svg>
                </SimpleButton>
            </portal>

            <div class="testSelf__header">
                <div class="testSelf__stepperBar">
                    <div v-if="stepper <= currentTestQuestions.length">
                        <span>Вопрос {{ stepper }}</span> из
                        {{ currentTestQuestions.length }}
                    </div>
                </div>
                <div class="testSelf__progressBar">
                    <div
                        class="testSelf__progressBar_completed"
                        :style="`transform: translateX(${countProgress}%)`"
                    ></div>
                </div>
                <div
                    v-if="stepper <= currentTestQuestions.length"
                    class="testSelf__speech-control"
                >
                    <speech-control
                        :speaking="isSpeaking"
                        :recording="isRecorded"
                        @click.native="changeMicrophoneMode()"
                    />
                </div>
            </div>

            <div class="testSelf__body_picture">
                <img
                    v-if="shortName"
                    :src="`/assets/images/test_${shortName}_pic.svg`"
                />
            </div>

            <v-stepper-items>
                <v-stepper-content
                    v-for="(question, questionIndex) in currentTestQuestions"
                    :key="question.id"
                    class="testSelf__body"
                    :step="questionIndex + 1"
                >
                    <div class="testSelf__body_question">
                        {{ question.name }}
                    </div>
                    <portal :to="'dest' + question.id">
                        <div
                            v-if="stepper === questionIndex + 1"
                            class="testSelf__buttons"
                            :class="
                                stepper === questionIndex + 1
                                    ? 'testSelf__buttons-hide testSelf__buttons-show'
                                    : 'testSelf__buttons-hide'
                            "
                        >
                            <SimpleButton
                                v-for="(answer,
                                answerIndex) in question.answers"
                                v-if="
                                    !answer.gender ||
                                        answer.gender ===
                                            '$store.state.user.gender'
                                "
                                :key="answerIndex"
                                @click.native="
                                    goNextQuestion(
                                        answer.weight,
                                        questionIndex,
                                        answer.title,
                                    )
                                "
                            >
                                {{ answer.title }}
                            </SimpleButton>
                        </div>
                    </portal>
                </v-stepper-content>
            </v-stepper-items>
            <portal-target
                v-for="item in currentTestQuestions"
                :key="item.id"
                :name="'dest' + item.id"
            />
        </v-stepper>
    </v-layout>
</template>

<script>
import CONST from '@/const.js';
import delay from 'lodash/delay';
import map from 'lodash/map';
import each from 'lodash/each';

import services from '@/services';
import { SpeechService } from '@/services';

import { SimpleButton, SpeechControl } from '../../blocks';

export default {
    components: {
        SimpleButton,
        SpeechControl,
    },
    data: () => ({
        stepper: 1,
        currentStep: 1,
        shortName: '',
        isSpeaking: false,
        isRecorded: false,
        goalPhrase: null,
        microphoneMode: false,
    }),
    beforeRouteEnter(to, from, next) {
        next(vm => {
            services.fetchTestQuestions({ id: +vm.$route.params.testId });
        });
    },
    computed: {
        currentTestQuestions() {
            try {
                const tests = this.$store.state.tests.find(
                    item => item.id === +this.$route.params.testId,
                );
                return tests.questions;
            } catch (e) {
                return [];
            }
        },
        countProgress() {
            const kef = (this.stepper / this.currentTestQuestions.length) * 100;

            return kef - 100 - 100 / this.currentTestQuestions.length;
        },
    },

    created() {
        const currTest = this.$store.state.tests.find(
            test => test.id === +this.$route.params.testId,
        );
        try {
            this.shortName = currTest.shortName;
            this.stepper = currTest.currentStep + 1 || 1;
        } catch (e) {
            this.closeSelf();
        }
        this.stopSpeaking();
        this.stopRecognition();
    },

    destroyed() {
        this.stopSpeaking();
        this.stopRecognition();
    },
    updated() {
        if (this.stepper > this.currentTestQuestions.length) {
            delay(this.closeSelf, 500);
        }
    },

    methods: {
        changeMicrophoneMode() {
            if (!this.microphoneMode) {
                this.microphoneMode = !this.microphoneMode;
                this.startSpeaking();
            } else {
                this.microphoneMode = !this.microphoneMode;
                this.stopSpeaking();
                this.stopRecognition();
            }
        },
        goBack() {
            if (this.stepper > 1) {
                this.stepper = this.stepper - 1;
            } else {
                this.stepper = 1;
            }
            if (this.microphoneMode) {
                this.stopRecognition();
                this.startSpeaking();
            }
        },
        closeSelf() {
            this.$router.push(CONST.PAGE_PROFILE);
            this.stopSpeaking();
            this.stopRecognition();
        },

        goNextQuestion(weight, questionIndex, questionTitle) {
            const payload = {
                testId: +this.$route.params.testId,
                questionIndex,
                weight: weight === undefined ? 0 : weight,
                title: questionTitle,
                currentStep: this.stepper,
            };

            this.$store.dispatch('store_test_answer', payload).then(() => {
                this.stepper += 1;
                if (this.microphoneMode) {
                    this.stopRecognition();
                    this.startSpeaking();
                }
            });
        },
        getCurrentQuestionAnswers() {
            return (
                this.currentTestQuestions.length &&
                map(
                    this.currentTestQuestions[this.currentStep].answers,
                    item => item.title,
                )
            );
        },
        getCurrentQuestionAnswerWeight(answer) {
            let result;

            this.currentTestQuestions.length &&
                each(
                    this.currentTestQuestions[this.currentStep].answers,
                    item => {
                        if (item.title === answer) result = item.weight;
                    },
                );
            return result;
        },
        startSpeaking() {
            if (
                !SpeechService.canUse() ||
                !this.currentTestQuestions[this.stepper - 1]
            ) {
                return false;
            }

            return SpeechService.textConversion(
                this.currentTestQuestions[this.stepper - 1].name,
                {
                    onStart: event => {
                        this.isSpeaking = true;
                    },
                    onEnd: event => {
                        this.isSpeaking = false;

                        if (
                            !(
                                typeof event.manuallyStopped !== 'undefined' &&
                                event.manuallyStopped === true
                            )
                        ) {
                            this.startRecognition();
                        }
                    },
                },
            );
        },

        stopSpeaking() {
            if (!SpeechService.canUse()) {
                return false;
            }

            this.isSpeaking = false;
            return SpeechService.stopTextConversion();
        },

        startRecognition() {
            if (!SpeechService.canUse()) {
                return false;
            }

            this.goalPhrase = null;

            return SpeechService.speechRecognition({
                onStart: event => {
                    this.isRecorded = true;
                },
                onEnd: event => {
                    this.isRecorded = false;

                    if (
                        !this.goalPhrase &&
                        !(
                            typeof event.manuallyStopped !== 'undefined' &&
                            event.manuallyStopped === true
                        )
                    ) {
                        this.startRecognition();
                    }

                    if (this.goalPhrase) {
                        this.goNextQuestion(
                            this.getCurrentQuestionAnswerWeight(
                                this.goalPhrase,
                            ),
                            this.stepper,
                        );
                    }
                },
                onResult: (event, phrase) => {
                    this.goalPhrase = SpeechService.identityPhrase(
                        phrase,
                        this.getCurrentQuestionAnswers(),
                    );
                },
            });
        },
        stopRecognition() {
            if (!SpeechService.canUse()) {
                return false;
            }

            this.isRecorded = false;
            return SpeechService.stopSpeechRecognition();
        },
    },
};
</script>
<style lang="stylus">
@import 'styles.styl';
</style>
