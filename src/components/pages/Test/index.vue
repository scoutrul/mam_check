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
                <div class="testSelf__speech-control">
                    <speech-control
                        :speaking="isSpeaking"
                        :recording="isRecorded"
                    />
                </div>
            </div>

            <div class="testSelf__body_picture">
                <img
                    v-if="shortName"
                    :src="`/assets/images/test_${shortName}_pic.svg`"
                />
            </div>

            <portal-target
                v-for="item in currentTestQuestions"
                :key="item.id"
                :name="'dest' + item.id"
            />
            <v-stepper-items>
                <v-stepper-content
                    v-for="(item, index) in currentTestQuestions"
                    :key="item.id"
                    class="testSelf__body"
                    :step="index + 1"
                >
                    <portal :to="'dest' + item.id">
                        <div
                            class="testSelf__buttons"
                            :if="stepper === index + 1"
                            :class="
                                stepper === index + 1
                                    ? 'testSelf__buttons-hide testSelf__buttons-show'
                                    : 'testSelf__buttons-hide'
                            "
                        >
                            <SimpleButton
                                v-for="(answer, i) in item.answers"
                                :key="i"
                                @click.native="goNext(answer.weight, index)"
                            >
                                {{ answer.title }}
                            </SimpleButton>
                        </div>
                    </portal>
                    <div class="testSelf__body_question">{{ item.name }}</div>
                </v-stepper-content>
            </v-stepper-items>
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
    }),
    beforeRouteEnter(to, from, next) {
        next(vm => {
            services.fetchTestQuestions({ id: +vm.$route.params.testId });
        });
    },
    computed: {
        currentTestQuestions() {
            return (
                this.$store.state.tests.find(
                    item => item.id === +this.$route.params.testId,
                ).questions || []
            );
        },
        countProgress() {
            const koef =
                (this.stepper / this.currentTestQuestions.length) * 100;

            return koef - 100 - 100 / this.currentTestQuestions.length;
        },
    },

    async mounted() {
        const currTest = this.$store.state.tests.find(
            test => test.id === +this.$route.params.testId,
        );
        try {
            this.shortName = await currTest.shortName;
            this.stepper = currTest.currentStep || 1;
        } catch (e) {
            console.log(e, 'err');
            this.closeSelf();
        }
        this.stopSpeaking();
        this.stopRecognition();
        this.startSpeaking();
    },

    destroyed() {
        this.stopSpeaking();
        this.stopRecognition();
    },

    methods: {
        goBack() {
            if (this.stepper > 1) {
                this.stepper = this.stepper - 1;
            } else {
                this.stepper = 1;
            }

            this.stopSpeaking();
            this.stopRecognition();

            delay(this.startSpeaking, 200);
        },
        closeSelf() {
            this.$router.push(CONST.PAGE_PROFILE);
        },
        goNext(weight, answerIndex) {
            this.stepper += 1;
            const payload = {
                testId: +this.$route.params.testId,
                answerIndex,
                weight,
                currentStep: this.stepper,
            };
            this.$store.dispatch('store_test_answer', payload);

            delay(this.startSpeaking, 300);
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
            if (!SpeechService.canUse()) {
                return false;
            }

            SpeechService.textConversion(
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
            SpeechService.stopTextConversion();
        },

        startRecognition() {
            if (!SpeechService.canUse()) {
                return false;
            }

            this.goalPhrase = null;
            SpeechService.speechRecognition({
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
                        console.log('goalPhrase', this.goalPhrase);
                        this.goNext(
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
            SpeechService.stopSpeechRecognition();
        },
    },
    updated() {
        if (this.stepper > this.currentTestQuestions.length) {
            delay(this.closeSelf, 500);
        }
    },
};
</script>
<style lang="stylus">
@import 'styles.styl';
</style>
