<template>
    <v-btn
        depressed
        flat
        light
        round
        ripple
        class="button__simple"
        :disabled="disabled"
    >
        <slot />
    </v-btn>
</template>

<script>
export default {
    props: {
        disabled: {
            type: Boolean,
            default: false,
        },
    },
};
</script>

<style lang="stylus">
@import './SimpleButton.styl';
</style>
