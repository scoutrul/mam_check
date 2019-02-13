<template>
    <v-layout column class="container">
        
            <v-flex class="black">
                <Header1>Анкета заполнена на <span style="color: #00BAFF">72%</span></Header1>
            </v-flex>
        
        
            <v-flex class="black">
                В этом году вам доступна диспансеризация</v-flex>
        
        
            <v-flex class="black">
                <Header4>Непройденные тесты</Header4>
                <v-layout column>
                    <TestItem 
                        name="name"
                        icon="icon"
                        color="color"
                        shortDescription="shortDescription"
                        :questionsNum="11"
                        :completedNum="4"
                        :resetSelf="function non(){ return 'func'}"
                        treatment="treatment"
                        :recommendations="['recommendatio']"
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
        }
    },
};
</script>
<style lang="stylus"></style>
