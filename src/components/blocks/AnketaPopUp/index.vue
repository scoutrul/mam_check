<template>
    <div class="medform">
        <v-layout class="inner" column>
            <div class="medform__header">
                <v-spacer></v-spacer>
                <v-layout flex xs11 sm8 md11 align-center>
                    <div class="title">Анкета диспансеризации</div>
                    <SimpleButton class="hideBtn" @click.native="getMedicalForm"
                        >Скачать анкету
                    </SimpleButton>
                </v-layout>

                <v-layout flex justify-end xs1 sm4 md1 class="medform__close">
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
                            ></path>
                        </svg>
                    </SimpleButton>
                </v-layout>
            </div>
            <label>Распечатайте анкету и возьмите с собой в поликлинику</label>
            <v-layout flex class="medform__body">
                <div
                    v-for="test of allTests"
                    :key="test.title"
                    class="answer_list"
                >
                    <v-layout class="answer_list__title">
                        {{ test.title }}
                    </v-layout>

                    <v-layout
                        v-for="question of test.questions"
                        :key="question.title"
                        class="answer_list__item"
                    >
                        <v-flex class="answer_list__question" xs6 md8 lg 10
                            >{{ question.title }}
                        </v-flex>
                        <v-flex class="answer_list__answer" >
                            <v-layout class="answer_list__answer_binar">
                                <div class="answer_list__answer_binar_item">
                                    Да
                                </div>
                                <div
                                    class="answer_list__answer_binar_item active"
                                >
                                    Нет
                                </div>
                            </v-layout>
                        </v-flex>
                    </v-layout>
                </div>
            </v-layout>
            <div class="medform__footer">
                <SimpleButton @click.native="getMedicalForm"
                    >Скачать анкету
                </SimpleButton>
                <RecordButton>Запись к врачу</RecordButton>
            </div>
        </v-layout>
    </div>
</template>

<script>
import { SimpleButton, RecordButton } from '@/components/blocks';
import { $pdfAnketa } from '@/mixins';

export default {
    components: {
        SimpleButton,
        RecordButton,
    },
    mixins: [$pdfAnketa],
    props: {
        closeSelf: {
            type: Function,
            default: null,
        },
    },
    data: () => ({
        allTests: [],
    }),
    created() {
        this.getAllTestResults();
    },
    methods: {
        getAllTestResults() {
            const Tests = this.$store.state.tests;
            const allTests = [];
            Tests.forEach(test => {
                const currTest = {
                    title: test.name,
                    questions: [],
                };
                test.questions.forEach(question => {
                    const findAnswer = () =>
                        question.answers.filter(
                            answer => answer.weight === question.weight,
                        );

                    const currQuest = {
                        title: question.name,
                        answer: findAnswer(),
                    };

                    currTest.questions.push(currQuest);
                });
                allTests.push(currTest);
            });
            this.allTests = allTests;
        },
    },
};
</script>
<style lang="stylus">
@import './style.styl';
</style>
