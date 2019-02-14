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
            <div class="testSelf__stepperBar">
                <div>
                    <span> Вопрос {{ stepper }}</span> из {{ currentTest.length }}
                </div>
            </div>
            <div class="testSelf__progressBar">
                <div
                    class="testSelf__progressBar_completed"
                    :style="`transform: translateX(-${100 - countProgress}%)`"
                ></div>
            </div>
            <div class="testSelf__body_picture">pic</div>
            <portal-target  v-for="(item, index) in currentTest" :key="item.id" :name="'dest'+item.id"></portal-target>
            <v-stepper-items>
                <v-stepper-content
                    v-for="(item, index) in currentTest"
                    :key="item.id"
                    class="testSelf__body"
                    :step="index+1"
                >
                <portal :to="'dest'+item.id">
                    <div class="testSelf__buttons"
                            :if="stepper === index+1" :class="stepper === index+1  ? 'testSelf__buttons-hide testSelf__buttons-show' : 'testSelf__buttons-hide'">
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
    created() {
        this.fetchTestQuestions({ id: +this.$route.params.testId });
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
    },
    computed: {
        countProgress() {
            return 100 / (this.currentTest.length / this.stepper);
        },
    },
    beforeUpdate() {
        if (this.stepper > this.currentTest.length) {
            this.$router.push('/checkup');
        }
    },
};
</script>
<style lang="stylus">
@import 'styles.styl';
</style>
