<template>
    <v-layout column class="container checkup">
        <v-flex class="black checkup__section">
            <Header1
                >Анкета заполнена на
                <span style="color: #00BAFF"
                    >{{ $store.state.user.profileProgress || 0 }}%</span
                ></Header1
            >
            <portal
                to="StartButtonSimple"
                v-if="$store.state.user.profileProgress > PROCENT_TO_SHOW"
            >
                <StartButtonSimple @click.native="medFormPopUp = !medFormPopUp">
                    Скачать анкету
                </StartButtonSimple>
            </portal>
            <v-dialog
                class="medFormPopUp"
                v-model="medFormPopUp"
                fullscreen="false"
            >
                <AnketaPopUp :close-self="closeModal" />
            </v-dialog>
        </v-flex>
        <v-flex class="checkup__section">
            <Header4>Мои данные</Header4>
            <ProfileInfo />
        </v-flex>
        <template v-if="$store.state.user.birthYear">
            <v-flex v-if="dispAvailable" class="black">
                <div class="banner">
                    <Header2 class="pad16"
                        >В этом году вам доступна диспансеризация</Header2
                    >
                    <RegularLg class="pad16"
                        >Завершите все тесты чекапа и получите информацию по
                        необходимым обследованиям, анализам и диагностике,
                        положенным вам по программе всеобщей диспансеризации.
                        Также вы получите готовую анкету, с которой сможете
                        пройти диспансеризацию в вашей поликлинике</RegularLg
                    >
                </div>
            </v-flex>
            <v-flex v-else>
                <div class="banner">
                    <Header2 class="pad16"
                        >В этом году вам доступен профосмотр</Header2
                    >
                    <RegularLg class="pad16"
                        >Завершите все тесты и получите информацию по
                        необходимым обследованиям, анализам и диагностике,
                        положенным вам по программе профосмотра. Также вы
                        получите готовую анкету, с которой сможете пройти
                        профосмотр в вашей поликлинике</RegularLg
                    >
                </div>
            </v-flex>
        </template>
        <v-flex
            class="checkup__section"
            v-if="filterInProgressTests.length || filterTests.length"
        >
            <Header4>Доступные тесты</Header4>
            <v-layout column class="testItems_list">
                <TestItem
                    v-for="item in filterInProgressTests"
                    :id="item.id"
                    :key="item.id"
                    :short-name="item.shortName"
                    :name="item.name"
                    :short-description="item.shortDescription"
                    :questions-num="
                        (item.questions && item.questions.length) || 0
                    "
                    :completed-num="item.currentStep"
                    :start-self="startCurrentTest"
                    :reset-self="resetCurrentTest"
                    :treatment="item.treatment"
                    :recommendations="item.recommendations"
                    :color="item.color"
                />
                <TestItem
                    v-for="item in filterTests"
                    :id="item.id"
                    :key="item.id"
                    :short-name="item.shortName"
                    :name="item.name"
                    :short-description="item.shortDescription"
                    :questions-num="
                        (item.questions && item.questions.length) || 0
                    "
                    :completed-num="item.currentStep"
                    :start-self="startCurrentTest"
                    :reset-self="resetCurrentTest"
                    :treatment="item.treatment"
                    :recommendations="item.recommendations"
                    :color="item.color"
                />
            </v-layout>
        </v-flex>

        <v-flex v-if="filterCompletedTests.length" class="checkup__section">
            <Header4>Заключения</Header4>
            <v-layout column class="testItems_list">
                <TestItem
                    v-for="item in filterCompletedTests"
                    :id="item.id"
                    :key="item.id"
                    :short-name="item.shortName"
                    :name="item.name"
                    :short-description="item.shortDescription"
                    :questions-num="
                        (item.questions && item.questions.length) || 0
                    "
                    :completed-num="item.currentStep"
                    :start-self="startCurrentTest"
                    :reset-self="resetCurrentTest"
                    :treatment="item.treatment"
                    :recommendations="item.recommendations"
                    :color="item.color"
                />
            </v-layout>
        </v-flex>

        <v-flex v-if="medicalFormComplete" class="checkup__section">
            <div class="separate-banner">
                <v-layout row wrap xs12>
                    <v-flex xs12 md8 class="separate-banner__left">
                        <Header2 class="pad16"
                            >В этом году вам доступна всеобщая
                            диспансеризация</Header2
                        >
                        <RegularLg class="pad16"
                            >Для прохождения диспансеризации вам нужно
                            записаться к поликлинику, к которой вы прикреплены.
                            Для этого вы можете воспользоваться нашим
                            сервисом</RegularLg
                        >
                        <v-btn
                            depressed
                            flat
                            round
                            dark
                            ripple
                            class="button__yellow"
                        >
                            <span>Записаться к врачу</span>
                        </v-btn>
                    </v-flex>
                    <v-flex xs12 md4 class="separate-banner__right">
                        <Header2 class="pad16">Анкета</Header2>
                        <RegularLg class="pad16"
                            >Ваша анкета диспансеризации уже заполнена.
                            Распечатайте ее и возьмите с собой в поликлинику,
                            чтобы сделать процесс прохождения быстрее и
                            комфортнее</RegularLg
                        >
                        <v-btn
                            depressed
                            flat
                            round
                            dark
                            ripple
                            :loading="medicalFormLoading"
                            @click="getMedicalForm"
                        >
                            <span>Скачать анкету</span>
                        </v-btn>
                    </v-flex>
                </v-layout>
            </div>
        </v-flex>
    </v-layout>
</template>

<script>
import { mapState, mapGetters } from 'vuex';

import each from 'lodash/each';
import isUndefined from 'lodash/isUndefined';
import fakeApi from '@/services/fakeApi';
import portalApi from '@/services/portalApi';
import CONST from '@/const.js';

import {
    Header1,
    Header2,
    Header4,
    TestItem,
    RegularLg,
    ProfileInfo,
    AnketaPopUp,
    StartButtonSimple,
} from '../../blocks';

export default {
    components: {
        StartButtonSimple,
        Header1,
        Header2,
        Header4,
        RegularLg,
        TestItem,
        ProfileInfo,
        AnketaPopUp,
    },
    data: () => ({
        medicalFormLoading: false,
        medFormPopUp: false,
        PROCENT_TO_SHOW: CONST.PROCENT_TO_SHOW,
    }),
    computed: {
        ...mapState({
            getTests: state => state.tests,
        }),
        ...mapGetters({
            medicalFormComplete: 'medicalFormComplete',
            answersDataForPortalApi: 'answersDataForPortalApi',
        }),
        filterCompletedTests() {
            return (
                this.getTests.filter(
                    item =>
                        item.questions &&
                        item.currentStep &&
                        item.currentStep >= item.questions.length,
                ) || []
            );
        },
        filterInProgressTests() {
            return (
                this.getTests.filter(
                    item =>
                        item.currentStep > 1 &&
                        item.questions &&
                        item.currentStep <= item.questions.length,
                ) || []
            );
        },
        filterTests() {
            return (
                this.getTests.filter(
                    item => !item.currentStep || item.currentStep <= 1,
                ) || []
            );
        },
        dispAvailable() {
            return this.$store.getters.dispAvailable;
        },
    },
    beforeMount() {
        this.$store.dispatch('get_tests');
        this.getAllQuestionsResult();
        this.getProfileProgress();
    },
    methods: {
        closeModal() {
            this.medFormPopUp = false;
        },
        startCurrentTest({ id }) {
            this.$router.push({
                path: `/test/${id}/`,
            });
        },
        resetCurrentTest({ id }) {
            this.$store.dispatch('reset_test_questions', { id });
            this.$router.push({
                path: `/test/${id}/`,
            });
        },
        getProfileProgress() {
            let completedQuestionsCount = 0;
            let questionsCount = 0;
            each(this.getTests, test =>
                each(test.questions, question => {
                    questionsCount += 1;
                    if (!isUndefined(question.weight)) {
                        completedQuestionsCount += 1;
                    }
                }),
            );
            const profileProgress = {
                questionsCount,
                completedQuestionsCount,
            };
            this.$store.dispatch('count_profile_progress', profileProgress);
        },
        getAllQuestionsResult() {
            let weight = 0;
            Promise.all(
                each(this.getTests, test => {
                    each(test.questions, question => {
                        weight = weight + question.weight || 0;
                    });

                    fakeApi
                        .getTreatmentByResult({
                            testId: test.id,
                            answerSum: weight,
                        })
                        .then(result => {
                            const treatments = {
                                id: test.id,
                                treatment: result.treatment.decode,
                                recommendations: result.recommendations,
                                color: result.color,
                            };
                            this.$store.dispatch('set_treatments', treatments);
                        });
                }),
            );
        },
        getMedicalForm() {
            if (this.answersDataForPortalApi.length > 0) {
                this.medicalFormLoading = true;

                portalApi
                    .setMedicalTestAnswers({
                        answers: this.answersDataForPortalApi,
                        birthday: '29.03.1995',
                        gender: 'M',
                        grow: 175,
                        weight: 75,
                    })
                    .then(result => {
                        this.medicalFormLoading = false;
                        window.open(
                            `https://medaboutme.ru/zdorove/servisy/dispanserizatsiya/download-result/${
                                result.id
                            }/`,
                            '_blank',
                        );
                    })
                    .catch(() => {
                        this.medicalFormLoading = false;
                    });
            }
        },
    },
};
</script>
<style lang="stylus">
@import './checkup.styl';
</style>
