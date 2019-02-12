<template>
    <v-btn
        v-show="isHomePage"
        depressed
        flat
        round
        dark
        ripple
        class="button__yellow"
        to="/checkup"
    >
        <slot />
    </v-btn>
</template>

<script>
export default {
    computed: {
        isHomePage() {
            return this.$route.name === 'home';
        },
    },
};
</script>

<style lang="stylus">
@import './StartButton.styl';
</style>
