<template>
    <v-btn depressed light round ripple class="button__simple" to="/start">
        <slot />
    </v-btn>
</template>

<script>
export default {};
</script>

<style lang="stylus">
@import './SimpleButton.styl';
</style>
