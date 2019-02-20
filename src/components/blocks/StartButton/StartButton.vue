<template>
    <v-btn
        v-if="$store.state.route.name === 'home'"
        depressed
        flat
        round
        dark
        ripple
        class="button__yellow"
        :to="PAGE_PROFILE"
    >
        <span v-if="!isUserInfoDone">Начать</span>
        <span v-else>Продолжить</span>
    </v-btn>
</template>

<script>
import CONST from '@/const.js';

export default {
    data: () => ({
        PAGE_PROFILE: CONST.PAGE_PROFILE,
    }),
    computed: {
        isHomePage() {
            return this.$route.name === 'home';
        },
        isUserInfoDone() {
            return this.$store.state.user.isUserInfoDone;
        },
    },
};
</script>

<style lang="stylus">
@import './StartButton.styl';
</style>
