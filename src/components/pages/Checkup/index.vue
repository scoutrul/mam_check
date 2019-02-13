<template>
        <Section>
            <v-flex class="black">checkup</v-flex>
            
        </Section>
</template>

<script>
import { Section } from '../../blocks';
export default {
    components: {
        Section
    },
    data: () => ({}),
    created() {
       this.redirectToPreTest();
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
