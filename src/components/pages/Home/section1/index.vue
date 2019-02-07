<template>
    <Section bg-color="transparent" class="section1">
        <v-layout class="isUnder600">
            <v-flex flex sm6 xs12>
                <Header1 class="pad16"
                    >Оцените свое здоровье прямо сейчас</Header1
                >
                <RegularMd class="pad16">
                    Пройдите комплексную проверку здоровья и получите список
                    обследований, которые вы сможете пройти в рамках программы
                    всеобщей диспансеризации. Это совершенно бесплатно!
                </RegularMd>
                <div class="pad16"><Button>Начать</Button></div>
            </v-flex>

            <v-flex sm6 class="section1_pic"
                ><img
                    svg-inline
                    src="@/assets/images/home_hello.svg"
                    alt="Hello"
            /></v-flex>
        </v-layout>
    </Section>
</template>

<script>
import {
    Section,
    Header1,
    Header2,
    RegularMd,
    RegularLg,
    Button,
} from '../../../blocks';

export default {
    components: {
        Section,
        Header1,
        Header2,
        RegularMd,
        RegularLg,
        Button,
    },
};
</script>
<style lang="stylus">
@import 'style.styl';
</style>
