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
                <v-layout class="section2__button" align-center>
                    <SimpleButton>Продолжить заполнение</SimpleButton>
                    <SimpleButton>Начать заново</SimpleButton>
                </v-layout>
            </div>
        </v-flex>
        <v-flex class="checkup__section">
            <Header4>Доступные тесты</Header4>
            <v-layout column class="testItems_list">
                <TestItem
                    v-for="item in TEST_LIST"
                    :id="item.id"
                    :key="item.id"
                    :icon="item.shortName"
                    :name="item.name"
                    :short-description="item.shortDescription"
                    :questions-num="item.questionsNum"
                    :reset-self="resetTestItem"
                    :start-self="startTestItem"
                />
                <TestItem
                    name="Здоровое дыхание"
                    short-description="Проверьте, нет ли у вас заболеваний легких или бронхов"
                    :questions-num="10"
                    :completed-num="7"
                    :reset-self="resetTestItem"
                />
            </v-layout>
        </v-flex>

        <v-flex class="checkup__section">
            <Header4>Заключения</Header4>
            <v-layout column class="testItems_list">
                <TestItem
                    name="Мозговое кровообращение"
                    color="#FEE245"
                    short-description="Не кушайте с пола"
                    :questions-num="10"
                    :completed-num="10"
                    :reset-self="resetTestItem"
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
                    :reset-self="resetTestItem"
                    treatment="Вы можете выпить рюмку-другую за праздничным столом или на дне рождения у друзей. И все-таки больше того, что Вы употребляете, пить не нужно! Ведите здоровый образ жизни, проходите в день пешком 30 минут и больше или не менее 3 км, ешьте не менее 400 г фруктов и овощей в день, не курите!"
                />
            </v-layout>
        </v-flex>
    </v-layout>
</template>

<script>
import { mapGetters } from 'vuex';
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
    data: () => ({
        TEST_LIST: [],
    }),
    created() {
        //    this.redirectToPreTest();
        this.fetchMedicalTests();
    },
    ...mapGetters({
        isUserInfoDone: 'isUserInfoDone',
    }),
    methods: {
        redirectToPreTest() {
            if (!this.isUserInfoDone) {
                this.$router.push('pretest');
            }
        },
        resetTestItem() {
            console.log('resetItem');
        },
        startTestItem({ id }) {
            console.log(id);
            this.$router.push(`/test/${id}/`);
        },
        fetchMedicalTests() {
            fakeApi.getMedicalTests().then(tests => {
                this.TEST_LIST = tests;
            });
        },

        fetchData() {
            fakeApi
                .getMedicalTest({ id: +this.$route.params.testId })
                .then(test => {
                    this.test = test;

                    return fakeApi.getQuestionsByTestId({ id: this.test.id });
                })
                .then(questions => {
                    this.questions = questions;

                    this.loading = false;
                })
                .catch(error => {
                    this.$store.commit('SET_NOTIFICATION_MESSAGE', {
                        message: error.message,
                        type: 'error',
                    });

                    this.$router.push({
                        name: 'main',
                    });
                });
        },
    },
};
</script>
<style lang="stylus">
@import './checkup.styl';
</style>
