<template>
    <v-layout column class="container checkup">
        <v-flex class="black">
            <Header1
                >Анкета заполнена на
                <span style="color: #00BAFF">72%</span></Header1
            >
        </v-flex>
        <v-flex class="black">
            <div class="banner">
                <Header2 class="pad16"
                    >В этом году вам доступна диспансеризация</Header2
                >
                <RegularLg class="pad16"
                    >Завершите все тесты чекапа и получите информацию по
                    необходимым обследованиям, анализам и диагностике,
                    положенным вам по программе всеобщей диспансеризации. Также
                    вы получите готовую анкету, с которой сможете пройти
                    диспансеризацию в вашей поликлинике</RegularLg
                >
                <v-layout class="banner__button" align-center>
                    <SimpleButton>Продолжить заполнение</SimpleButton>
                    <SimpleButton class="button--alt"
                        >Начать заново</SimpleButton
                    >
                </v-layout>
            </div>
        </v-flex>
        <v-flex class="checkup__section">
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
                    :start-self="startTestItem"
                    :reset-self="resetTestItem"
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
                    :start-self="startTestItem"
                    :reset-self="resetTestItem"
                    :treatment="item.treatment"
                    :recommendations="item.recommendations"
                    :color="item.color"
                />
            </v-layout>
        </v-flex>

        <v-flex class="checkup__section" v-if="filterCompletedTests.length">
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
                    :start-self="startTestItem"
                    :reset-self="resetTestItem"
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
import filter from 'lodash/filter';
import get from 'lodash/get';
import each from 'lodash/each';
import fakeApi from '@/services/fakeApi';
import portalApi from '@/services/portalApi';

import {
    Header1,
    Header2,
    Header4,
    TestItem,
    RegularLg,
    SimpleButton,
} from '../../blocks';

export default {
    components: {
        Header1,
        Header2,
        Header4,
        RegularLg,
        TestItem,
        SimpleButton,
    },
    data: () => ({
        medicalFormLoading: false,
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
    },
    beforeMount() {
        this.$store.dispatch('get_tests');
    },
    mounted() {
        this.getAllQuestionsResult();
    },

    methods: {
        startTestItem({ id }) {
            this.$router.push({
                path: `/test/${id}/`,
            });
        },
        resetTestItem({ id }) {
            this.$store.dispatch('reset_test_questions', { id });
            this.$router.push({
                path: `/test/${id}/`,
            });
        },
        getAllQuestionsResult() {
            each(this.getTests, test => {
                let weight = 0;
                each(test.questions, question => {
                    weight = weight + question.weight || 0;
                });
                fakeApi
                    .getTreatmentByResult({
                        testId: test.id,
                        answerSum: weight,
                    })
                    .then(result => {
                        const payload = {
                            id: test.id,
                            treatment: result.treatment.decode,
                            recommendations: result.recommendations,
                            color: result.color,
                        };
                        this.$store.dispatch('set_treatments', payload);
                    });
            });
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
