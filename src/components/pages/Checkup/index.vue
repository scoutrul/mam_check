<template>
    <v-layout column class="container checkup">
            <v-flex class="black">
                <Header1>Анкета заполнена на <span style="color: #00BAFF">72%</span></Header1>
            </v-flex>
            <v-flex class="black">
                <div class="banner">
                <Header2 class="pad16">Комплексное тестирование</Header2>
                <RegularLg class="pad16"
                    >Пройдя проверку, вы получите список персональных
                    рекомендаций по состоянию вашего здоровья. Кроме того, мы
                    заполним анкету для прохождения профосмотра или
                    диспансеризации в вашей поликлинике и вы сэкономите свое
                    время.</RegularLg
                >
                <v-layout class="section2__button" align-center>
                    <SimpleButton>Продолжить заполнение</SimpleButton>
                    <SimpleButton>Начать заново</SimpleButton>
                </v-layout>
            </div>
            </v-flex>
            <v-flex class="checkup__section">
                <Header4>Непройденные тесты</Header4>
                <v-layout column class="testItems_list">
                    <TestItem 
                        name="Здоровое дыхание"
                        icon='<img
                            svg-inline
                            src="@/assets/images/test_icon.svg"
                            alt="icon"/>'
                        shortDescription="Аверьте, нет ли у вас Пр заболеваний или легких"
                        :questionsNum="10"
                        :completedNum="0"
                        :resetSelf="resetTestItem"
                    />
                    <TestItem 
                        name="Здоровое дыхание"
                        icon='<img
                            svg-inline
                            src="@/assets/images/test_icon.svg"
                            alt="icon"/>'
                        shortDescription="Проверьте, нет ли у вас заболеваний легких или бронхов"
                        :questionsNum="10"
                        :completedNum="3"
                        :resetSelf="resetTestItem"
                    />
                    <TestItem 
                        name="Здоровое дыхание"
                        icon='<img
                            svg-inline
                            src="@/assets/images/test_icon.svg"
                            alt="icon"/>'
                        shortDescription="Проверьте, нет ли у вас заболеваний легких или бронхов"
                        :questionsNum="10"
                        :completedNum="7"
                        :resetSelf="resetTestItem"
                    />
                </v-layout>
            </v-flex>
        
            <v-flex class="checkup__section">
                <Header4>Пройденные тесты</Header4>
                <v-layout column class="testItems_list">
                    <TestItem 
                        name="Мозговое кровообращение"
                        color="#FEE245"
                        shortDescription="Не кушайте с пола"
                        :questionsNum="10"
                        :completedNum="10"
                        :resetSelf="resetTestItem"
                        treatment="У Вас повышен риск развития сердечно-сосудитстых заболеваний. Откажитесь от курения - это очень важно для Вас! Проходить пешком 
                                в день в среднем или высоком темпе 30 минут и более или 3 км. 

                                Контролируйте уровень Вашего артериального давления и обязательно периодически проверяйте уровень холестерина в крови."
                        :recommendations="['больше спите', 'лучше питайтесь', 'радуйтесь']"
                    />
                    <TestItem 
                        name="Вредные привычки"
                        color="#58B379"
                        shortDescription="Не кушайте с пола"
                        :questionsNum="10"
                        :completedNum="10"
                        :resetSelf="resetTestItem"
                        treatment="Вы можете выпить рюмку-другую за праздничным столом или на дне рождения у друзей. И все-таки больше того, что Вы употребляете, пить не нужно! Ведите здоровый образ жизни, проходите в день пешком 30 минут и больше или не менее 3 км, ешьте не менее 400 г фруктов и овощей в день, не курите!"
                    />
                </v-layout>
            </v-flex>
        
    </v-layout>
</template>

<script>
import { mapGetters } from 'vuex';
import { Section, Header1 , Header2, Header4, TestItem, RegularLg, SimpleButton } from '../../blocks';

export default {
    components: {
        Section, 
        Header1,
        Header2,
        Header4,
        RegularLg,
        TestItem,
        SimpleButton
    },
    data: () => ({}),
    created() {
    //    this.redirectToPreTest();
    },
    ...mapGetters({
        isUserInfoDone: 'isUserInfoDone',
    }),
    methods: {
        redirectToPreTest(){
            if (!this.isUserInfoDone) {
                this.$router.push('pretest');
            }
        },
        resetTestItem(){
            console.log('resetItem')
        }
    },
};
</script>
<style lang="stylus">
@import './checkup.styl';
</style>
