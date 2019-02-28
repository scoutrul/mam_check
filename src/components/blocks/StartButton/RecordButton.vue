<template>
    <v-btn
        depressed
        flat
        round
        dark
        ripple
        class="button__yellow"
        :to="PAGE_RECORD"
    >
        <span><slot></slot></span>
    </v-btn>
</template>

<script>
import CONST from '@/const.js';

export default {
    data: () => ({
        PAGE_RECORD: CONST.PAGE_RECORD,
    }),
    computed: {},
};
</script>

<style lang="stylus">
@import './StartButton.styl';
</style>
