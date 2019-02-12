<template>
    <v-layout column>
        <Section1 />
        <Section2 />
        <Section3 />
        <Section4 />
        <Section5 />
    </v-layout>
</template>

<script>
import Section1 from './section1';
import Section2 from './section2';
import Section3 from './section3';
import Section4 from './section4';
import Section5 from './section5';

export default {
    components: {
        Section1,
        Section2,
        Section3,
        Section4,
        Section5,
    },
};
</script>
<style lang="stylus">
@import 'style.styl';
</style>
