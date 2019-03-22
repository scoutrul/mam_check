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
                <div class="answer_list">
                    <v-layout class="answer_list__title">
                        Говорил ли Вам врач когда либо, что у Вас имеется:
                    </v-layout>

                    <v-layout
                        v-for="(question, i) in questions"
                        :key="i"
                        class="answer_list__item"
                    >
                        <v-flex class="answer_list__question" xs6 md8 lg 10
                            >{{ question.name }}
                        </v-flex>

                        <v-flex
                            v-if="
                                question.type === 'variant' &&
                                    question.answers.length === 2
                            "
                            class="answer_list__answer"
                        >
                            <v-layout class="answer_list__answer_binar">
                                <div
                                    v-for="(answer, i) of question.answers"
                                    :key="i"
                                    :class="
                                        `answer_list__answer_binar_item ${answer.checked &&
                                            'active'}`
                                    "
                                    @click="
                                        onVariantAnswerClick(
                                            question.id,
                                            answer.id,
                                        )
                                    "
                                >
                                    {{ answer.title }}
                                </div>
                            </v-layout>
                        </v-flex>

                        <v-flex
                            v-if="
                                question.type === 'variant' &&
                                    question.answers.length > 2
                            "
                            class="answer_list__answer"
                        >
                            <v-layout class="answer_list__answer_multi">
                                <div
                                    v-for="answer of question.answers"
                                    :key="answer.id || answer.title"
                                    :class="
                                        `answer_list__answer_multi_item ${answer.checked &&
                                            'active'}`
                                    "
                                    style="text-align: right"
                                    @click="
                                        onVariantAnswerClick(
                                            question.id,
                                            answer.id,
                                        )
                                    "
                                >
                                    {{ answer.title }}
                                </div>
                            </v-layout>
                        </v-flex>

                        <v-flex
                            v-if="question.type === 'list'"
                            class="answer_list__answer"
                        >
                            <v-layout class="answer_list__answer_multi">
                                <div
                                    v-for="(answer, i) of question.answers"
                                    :key="i"
                                    :class="
                                        `answer_list__answer_multi_item ${answer.checked &&
                                            'active'}`
                                    "
                                    style="text-align: right"
                                    @click="
                                        onListAnswerClick(
                                            question.id,
                                            answer.title,
                                        )
                                    "
                                >
                                    {{ answer.title }}
                                </div>
                            </v-layout>
                        </v-flex>

                        <v-flex
                            v-if="question.type === 'string'"
                            class="answer_list__answer"
                        >
                            <v-layout class="">
                                <v-text-field
                                    v-model="question.value"
                                ></v-text-field>
                            </v-layout>
                        </v-flex>
                    </v-layout>
                </div>
            </v-layout>
        </v-layout>
    </div>
</template>

<script>
import { mapGetters, mapState } from 'vuex';
import portalApi from '@/services/portalApi';
import { SimpleButton, RecordButton } from '@/components/blocks';
import Questions from './questions';

export default {
    components: {
        SimpleButton,
    },

    props: {
        closeSelf: {
            type: Function,
            default: null,
        },
    },

    data: () => ({
        questions: Questions,
    }),

    computed: {
        ...mapGetters({
            answersDataForPortalApi: 'answersDataForPortalApi',
        }),
        ...mapState(['user']),

        answersDataForApi() {
            const answersData = [];

            this.questions.forEach(question => {
                switch (question.type) {
                    case 'variant':
                        let variant = question.answers.find(
                            item => item.checked === true,
                        );

                        if (variant) {
                            answersData.push({
                                questionId: question.id,
                                variants: [variant.id],
                            });
                        }

                        break;
                    case 'string':
                        answersData.push({
                            questionId: question.id,
                            string: question.value,
                        });

                        break;
                    case 'list':
                        answersData.push({
                            questionId: question.id,
                            diseases: question.answers
                                .filter(item => item.checked === true)
                                .map(item => item.title),
                        });

                        break;
                    default:
                        break;
                }
            });

            return answersData;
        },
    },

    mounted() {
        if (this.answersDataForPortalApi.length > 0) {
            this.correctAnswers();
        }
    },

    methods: {
        correctAnswers() {
            this.questions.forEach(question => {
                const answer = this.answersDataForPortalApi.find(
                    item => item.questionId === question.id,
                );

                if (answer) {
                    switch (question.type) {
                        case 'variant':
                            let variant;

                            answer.variants.forEach(item => {
                                variant = item;
                            });

                            if (variant) {
                                question.answers.forEach(item => {
                                    if (item.id === variant) {
                                        item.checked = true;
                                    } else {
                                        item.checked = false;
                                    }
                                });
                            }

                            break;
                        case 'string':
                            if (
                                typeof answer.string !== 'undefined' &&
                                answer.string.length > 0
                            ) {
                                question.value = answer.string;
                            }

                            break;
                        default:
                            break;
                    }
                }
            });
        },

        onVariantAnswerClick(questionId, answerId) {
            const question = this.questions.find(
                item => item.id === questionId,
            );

            if (question) {
                question.answers.forEach(answer => {
                    answer.checked = answer.id === answerId;
                });
            }
        },

        onListAnswerClick(questionId, answerTitle) {
            const question = this.questions.find(
                item => item.id === questionId,
            );

            if (question) {
                question.answers.forEach(answer => {
                    if (answer.title === answerTitle) {
                        answer.checked = !answer.checked;
                    }
                });
            }
        },

        getMedicalForm() {
            portalApi
                .setMedicalTestAnswers({
                    answers: this.answersDataForApi,
                    birthday: `${this.user.birthDay}.${this.user.birthMonth}.${
                        this.user.birthYear
                    }`,
                    gender: this.user.gender,
                    grow: this.user.grow,
                    weight: this.user.weight,
                })
                .then(result => {
                    window.open(
                        `https://medaboutme.ru/zdorove/servisy/dispanserizatsiya/download-result/${
                            result.id
                        }/`,
                        '_blank',
                    );
                })
                .catch(() => {});
        },
    },
};
</script>
