<template>
    <v-btn depressed flat round dark ripple class="button__yellow">
        <router-link to="/start"> <slot /> </router-link>
    </v-btn>
</template>

<script>
export default {};
</script>

<style lang="stylus">
@import './StartButton.styl';
</style>
