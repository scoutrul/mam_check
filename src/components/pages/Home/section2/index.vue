<template>
    <Section is-top bg-color="#d9f5ff">
        <v-layout column class="section2">
            <Header1 class="pad16">С чего начать?</Header1>
            <RegularLg class="pad16 max960">
                Мы подготовили комплекс тестов, которые помогут вам понять свое
                самочувствие, оценить состояние здоровья и узнать, какие
                обследования вам нужно пройти.
            </RegularLg>
            <div class="banner">
                <Header2 class="pad16">Комплексное тестирование</Header2>
                <RegularLg class="pad16"
                    >Пройдя проверку, вы получите список персональных
                    рекомендаций по состоянию вашего здоровья. Кроме того, мы
                    заполним анкету для прохождения профосмотра или
                    диспансеризации в вашей поликлинике и вы сэкономите свое
                    время.</RegularLg
                >
                <v-layout class="section2__button" align-center>
                    <StartButton class="black" />
                    <div class="note">Можно продолжить в любое время</div>
                </v-layout>
            </div>
        </v-layout>
    </Section>
</template>

<script>
import {
    Section,
    Header1,
    Header2,
    RegularLg,
    StartButton,
} from '../../../blocks';

export default {
    components: {
        Section,
        Header1,
        Header2,
        RegularLg,
        StartButton,
    },
};
</script>
<style lang="stylus">
@import 'style.styl';
</style>
