<template>
    <Section bg-color="transparent" class="section1">
        <v-layout :class="[isUnder600() && 'isUnder600']">
            <v-flex class="container" xs12>
                <Header1 class="section1__header section1__header--wide"
                    >Оцените свое здоровье прямо сейчас</Header1
                >
            </v-flex>
        </v-layout>
        <v-layout :class="[isUnder600() && 'isUnder600']">
            <v-flex flex xs12 sm7 md5 lg5 class="container section1__content">
                <Header1 class="pad16 section1__header"
                    >Оцените свое здоровье<br />прямо сейчас</Header1
                >
                <RegularMd class="pad16">
                    Пройдите комплексную проверку здоровья и получите список
                    обследований, которые вы сможете пройти в рамках программы
                    всеобщей диспансеризации. Это совершенно бесплатно!
                </RegularMd>
                <div class="pad16"><Button>Начать</Button></div>
            </v-flex>
            <v-flex xs12 sm5 md7 lg7 class="section1__pic"
                ><img
                    svg-inline
                    src="@/assets/images/home_hello.svg"
                    alt="Hello"
            /></v-flex>
        </v-layout>
    </Section>
</template>

<script>
import { Section, Header1, RegularMd, Button } from '../../../blocks';
import { $viewport } from '../../../../mixins';

export default {
    components: {
        Section,
        Header1,
        RegularMd,
        Button,
    },
    mixins: [$viewport],
};
</script>
<style lang="stylus">
@import 'style.styl';
</style>
