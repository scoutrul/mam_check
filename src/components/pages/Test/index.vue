<template>
    <v-layout column align-center class="container testSelf">
        <v-stepper
            v-if="stepper <= currentTest.length"
            v-model="stepper"
            light
            :ripple="false"
            class="stepper__clear stepper__container"
        >
            <SimpleButton
                v-if="stepper > 1"
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

            <div class="testSelf__stepperBar">
                <div>
                    <span> Вопрос {{ stepper }}</span> из
                    {{ currentTest.length }}
                </div>
            </div>
            <div class="testSelf__progressBar">
                <div
                    class="testSelf__progressBar_completed"
                    :style="`transform: translateX(${countProgress}%)`"
                ></div>
            </div>
            <div class="testSelf__body_picture">pic</div>
            <portal-target
                v-for="(item, index) in currentTest"
                :key="item.id"
                :name="'dest' + item.id"
            />
            <v-stepper-items>
                <v-stepper-content
                    v-for="(item, index) in currentTest"
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
                                @click.native="stepper += 1"
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
import fakeApi from '@/services/fakeApi';

import { SimpleButton } from '../../blocks';

export default {
    components: {
        SimpleButton,
    },
    data: () => ({
        stepper: 1,
        currentTest: [],
    }),
    computed: {
        countProgress() {
            const koef = (this.stepper / this.currentTest.length) * 100;

            return koef - 100 - 100 / this.currentTest.length;
        },
    },
    created() {
        this.fetchTestQuestions({ id: +this.$route.params.testId });
    },
    beforeUpdate() {
        if (this.stepper > this.currentTest.length) {
            this.$router.push('/checkup');
        }
    },
    methods: {
        fetchTestQuestions({ id }) {
            fakeApi.getQuestionsByTestId({ id }).then(item => {
                this.currentTest = item;
            });
        },
        goBack() {
            if (this.stepper > 1) {
                this.stepper = this.stepper - 1;
            } else {
                this.stepper = 1;
            }
        },
        closeSelf() {
            this.$router.push('/checkup');
        },
    },
};
</script>
<style lang="stylus">
@import 'styles.styl';
</style>
