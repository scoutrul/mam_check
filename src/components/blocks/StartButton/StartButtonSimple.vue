<template>
    <v-btn
        depressed
        flat
        round
        dark
        ripple
        class="button__yellow"
        :to="PAGE_PROFILE"
    >
        <slot></slot>
    </v-btn>
</template>

<script>
import CONST from '@/const.js';

export default {
    data: () => ({
        PAGE_PROFILE: CONST.PAGE_PROFILE,
    }),
};
</script>

<style lang="stylus">
@import './StartButton.styl';
</style>
