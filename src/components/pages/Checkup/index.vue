<template>
    <v-layout column>
        <Section>
            <v-flex class="black">Анкета заполнена на 72%</v-flex>
        </Section>
        <Section>
            <v-flex class="black">В этом году вам доступна диспансеризация</v-flex>
        </Section>
        <Section>
            <v-flex class="black">Непройденные тесты</v-flex>
        </Section>
        <Section>
            <v-flex class="black">Пройденные тесты</v-flex>
        </Section>
    </v-layout>
</template>

<script>
import { Section } from '../../blocks';
export default {
    components: {
        Section
    },
    data: () => ({}),
    created() {
    //    this.redirectToPreTest();
    },
    computed: {
        isUserInfoDone(){
            return this.$store.getters.isUserInfoDone;
        }
    },
    methods: {
        redirectToPreTest(){
            // if user data is NOT complete then redirect to pretest page
            if (!this.isUserInfoDone) {
                this.$router.push('pretest');
            }
        }
    },
};
</script>
<style lang="stylus"></style>
