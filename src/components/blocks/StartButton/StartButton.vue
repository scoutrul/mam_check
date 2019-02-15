<template>
    <v-btn
        v-if="$store.state.route.name !== 'test'"
        depressed
        flat
        round
        dark
        ripple
        class="button__yellow"
        to="/checkup"
    >
        <span v-if="!isUserInfoDone">Начать</span>
        <span v-else>Продолжить</span>
    </v-btn>
</template>

<script>
import { mapState } from 'vuex';

export default {
    computed: {
        isHomePage() {
            return this.$route.name === 'home';
        },
        ...mapState({
            isUserInfoDone: state => state.user.isUserInfoDone,
        }),
    },
};
</script>

<style lang="stylus">
@import './StartButton.styl';
</style>
