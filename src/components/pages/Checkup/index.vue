<template>
    <v-layout column class="container checkup">
        <v-flex class="black">
            <Header1
                >Анкета заполнена на
                <span style="color: #00BAFF"
                    >{{ $store.state.user.profileProgress }}%</span
                ></Header1
            >
        </v-flex>
        <template v-if="$store.state.user.birthYear">
            <v-flex class="black" v-if="dispAvailable">
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
    </v-layout>
</template>

<script>
import { mapState } from 'vuex';
import filter from 'lodash/filter';
import sum from 'lodash/sum';
import size from 'lodash/size';
import get from 'lodash/get';
import map from 'lodash/map';
import each from 'lodash/each';
import fakeApi from '@/services/fakeApi';

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
    data: () => ({}),
    computed: {
        ...mapState({
            getTests: state => state.tests,
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
    },
    mounted() {
        this.getAllQuestionsResult();
        this.getProfileProgress();
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
        getProfileProgress() {
            let completedQuestionsCount = 0;
            let questionsCount = 0;
            completedQuestionsCount = map(this.getTests, test => {
                return size(
                    each(test.questions, question => {
                        questionsCount += 1;
                        return question.weight !== undefined ? 1 : 0;
                    }),
                );
            });
            const profileProgress = {
                questionsCount,
                completedQuestionsCount: sum(completedQuestionsCount),
            };
            this.$store.dispatch('count_profile_progress', profileProgress);
        },
        getAllQuestionsResult() {
            let weight = 0;
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
            });
        },
    },
};
</script>
<style lang="stylus">
@import './checkup.styl';
</style>
