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

        <v-flex class="checkup__section">
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
                <TestItem
                    name="Мозговое кровообращение"
                    color="#FEE245"
                    short-description="Не кушайте с пола"
                    :questions-num="10"
                    :completed-num="10"
                    treatment="У Вас повышен риск развития сердечно-сосудитстых заболеваний. Откажитесь от курения - это очень важно для Вас! Проходить пешком 
                                в день в среднем или высоком темпе 30 минут и более или 3 км. 

                                Контролируйте уровень Вашего артериального давления и обязательно периодически проверяйте уровень холестерина в крови."
                    :recommendations="[
                        'больше спите',
                        'лучше питайтесь',
                        'радуйтесь',
                    ]"
                />
                <TestItem
                    name="Вредные привычки"
                    color="#58B379"
                    short-description="Не кушайте с пола"
                    :questions-num="10"
                    :completed-num="10"
                    treatment="Вы можете выпить рюмку-другую за праздничным столом или на дне рождения у друзей. И все-таки больше того, что Вы употребляете, пить не нужно! Ведите здоровый образ жизни, проходите в день пешком 30 минут и больше или не менее 3 км, ешьте не менее 400 г фруктов и овощей в день, не курите!"
                />
            </v-layout>
        </v-flex>
    </v-layout>
</template>

<script>
import { mapState } from 'vuex';
import filter from 'lodash/filter';
import get from 'lodash/get';
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
    },
};
</script>
<style lang="stylus">
@import './checkup.styl';
</style>
