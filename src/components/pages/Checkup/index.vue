<template>
    <v-fade-transition mode="out-in"> <div>Checkup</div> </v-fade-transition>
</template>

<script>
export default {
    components: {},
    data: () => ({}),
    created() {
        // if user data is NOT complete
        if (!true) {
            this.$router.push('checkup');
        } else {
            this.$router.push('pretest');
        }
    },
    beforeRouteEnter(to, from, next) {
        console.log('beforeRouteEnter Checkup');
        next();
    },

    methods: {},
};
</script>
<style lang="stylus"></style>
