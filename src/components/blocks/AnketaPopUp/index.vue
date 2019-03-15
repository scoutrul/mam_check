<template>
    <div class="medform">
        <v-layout class="inner" column>
            <div class="medform__header">
                <v-spacer></v-spacer>
                <v-layout flex xs11 sm8 md11 align-center
                    ><div class="title">Анкета диспансеризации</div>
                    <SimpleButton
                        class="hideBtn"
                        :loading="medicalFormLoading"
                        @click.native="getMedicalForm"
                        >Скачать анкету</SimpleButton
                    ></v-layout
                >

                <v-layout flex justify-end xs1 sm4 md1 class="medform__close"
                    ><SimpleButton
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
                        </svg> </SimpleButton
                ></v-layout>
            </div>
            <label>Распечатайте анкету и возьмите с собой в поликлинику</label>
            <v-layout flex class="medform__body">
                <div class="answer_list">
                    <v-layout class="answer_list__title">
                        Говорил ли Вам врач когда либо, что у Вас имеется:
                    </v-layout>

                    <v-layout class="answer_list__item">
                        <v-flex class="answer_list__question" xs8 sm9
                            >Повышенное артериальное давление?</v-flex
                        >
                        <v-flex class="answer_list__answer" xs4 sm3>
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
                    <v-layout class="answer_list__item">
                        <v-flex class="answer_list__question" xs8 sm9
                            >Ишемическая болезнь сердца (стенокардия)?</v-flex
                        >
                        <v-flex class="answer_list__answer" xs4 sm3>
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
                    <v-layout class="answer_list__item">
                        <v-flex class="answer_list__question" xs8 sm9
                            >Цереброваскулярное заболевание (заболевание сосудов
                            головного мозга)?</v-flex
                        >
                        <v-flex class="answer_list__answer" xs4 sm3>
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
                    <v-layout class="answer_list__item">
                        <v-flex class="answer_list__question" xs8 sm9
                            >Туберкулез (легких или иных локализаций)?</v-flex
                        >
                        <v-flex class="answer_list__answer" xs4 sm3>
                            <v-layout class="answer_list__answer_binar">
                                <div
                                    class="answer_list__answer_binar_item active"
                                >
                                    Да
                                </div>
                                <div class="answer_list__answer_binar_item">
                                    Нет
                                </div>
                            </v-layout>
                        </v-flex>
                    </v-layout>
                    <v-layout class="answer_list__item">
                        <v-flex class="answer_list__question" xs8 sm9
                            >Сахарный диабет или повышенный уровень сахара в
                            крови?</v-flex
                        >
                        <v-flex class="answer_list__answer" xs4 sm3>
                            <v-layout class="answer_list__answer_binar">
                                <div
                                    class="answer_list__answer_binar_item active"
                                >
                                    Да
                                </div>
                                <div class="answer_list__answer_binar_item">
                                    Нет
                                </div>
                            </v-layout>
                        </v-flex>
                    </v-layout>

                    <v-layout class="answer_list__item">
                        <v-flex class="answer_list__question" xs8 sm9
                            >Если «Да», то принимаете ли Вы препараты для
                            снижения уровня сахара?</v-flex
                        >
                        <v-flex class="answer_list__answer" xs4 sm3>
                            <v-layout class="answer_list__answer_binar">
                                <div
                                    class="answer_list__answer_binar_item active"
                                >
                                    Да
                                </div>
                                <div class="answer_list__answer_binar_item">
                                    Нет
                                </div>
                            </v-layout>
                        </v-flex>
                    </v-layout>
                    <v-layout class="answer_list__item">
                        <v-flex class="answer_list__question" xs8 sm9
                            >Заболевания желудка (гастрит, язвенная
                            болезнь)?</v-flex
                        >
                        <v-flex class="answer_list__answer" xs4 sm3>
                            <v-layout class="answer_list__answer_binar">
                                <div
                                    class="answer_list__answer_binar_item active"
                                >
                                    Да
                                </div>
                                <div class="answer_list__answer_binar_item">
                                    Нет
                                </div>
                            </v-layout>
                        </v-flex>
                    </v-layout>
                </div>
            </v-layout>
            <div class="medform__footer">
                <SimpleButton @click.native="getMedicalForm"
                    >Скачать анкету</SimpleButton
                >
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
    data: () => ({}),
};
</script>
<style lang="stylus">
@import './style.styl';
</style>
