<template>
    <v-layout column class="container">
        
            <v-flex class="black">
                <Header1>Анкета заполнена на <span style="color: #00BAFF">72%</span></Header1>
            </v-flex>
        
        
            <v-flex class="black">
                В этом году вам доступна диспансеризация</v-flex>
        
        
            <v-flex>
                <Header4>Непройденные тесты</Header4>
                <v-layout column class="testItems_list">
                    <TestItem 
                        name="Здоровое дыхание"
                        icon='<img
                            svg-inline
                            src="@/assets/images/test_icon.svg"
                            alt="icon"/>'
                        color="yellow"
                        shortDescription="Проверьте, нет ли у вас заболеваний легких или бронхов"
                        :questionsNum="10"
                        :completedNum="5"
                        :resetSelf="resetTestItem"
                    />
                    <TestItem 
                        name="Мозговое кровообращение"
                        shortDescription="Проверьте, нет ли у вас заболеваний легких или бронхов"
                        :questionsNum="10"
                        :resetSelf="resetTestItem"
                    />
                    <TestItem 
                        name="Мозговое кровообращение"
                        color="red"
                        shortDescription="Проверьте, нет ли у вас заболеваний легких или бронхов"
                        :questionsNum="10"
                        :completedNum="10"
                        :resetSelf="resetTestItem"
                        treatment="У Вас повышен риск развития сердечно-сосудитстых заболеваний. Откажитесь от курения - это очень важно для Вас! Проходить пешком 
                                в день в среднем или высоком темпе 30 минут и более или 3 км. 

                                Контролируйте уровень Вашего артериального давления и обязательно периодически проверяйте уровень холестерина в крови."
                        :recommendations="['больше спите', 'лучше питайтесь', 'радуйтесь']"
                    />
                </v-layout>
            </v-flex>
        
        
            <v-flex class="black">
                <Header4>Пройденные тесты</Header4>
            </v-flex>
        
    </v-layout>
</template>

<script>
import { mapGetters } from 'vuex';
import { Section, Header1 , Header4, TestItem } from '../../blocks';

export default {
    components: {
        Section, 
        Header1,
        Header4,
        TestItem
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
.testItems_list
    margin-top 16px
</style>
