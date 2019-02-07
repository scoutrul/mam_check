<template>
    <Section
        class="section3"
        style="text-align: center; margin-bottom: -120px; z-index: 2;"
    >
        <Header1 class="pad16">Что дальше?</Header1>
        <RegularLg class="pad16 max760">
            После прохождения тестов вы получите полное заключение с
            рекомендациями и узнаете совершенно бесплатно:
        </RegularLg>
        <v-layout justify-space-between class="pad16 listing">
            <div class="black block">
                <div class="icon">
                    <img
                        svg-inline
                        src="@/assets/images/home_health.svg"
                        alt="Какие у вас есть хронические заболевания или риски их развития"
                    />
                </div>
                <p>
                    Какие у вас есть хронические заболевания или риски их
                    развития
                </p>
            </div>
            <div class="black block">
                <div class="icon">
                    <img
                        svg-inline
                        src="@/assets/images/home_doctor.svg"
                        alt="Каких специалистов нужно посетить"
                    />
                </div>
                <p>Каких специалистов нужно посетить</p>
            </div>
            <div class="black block">
                <div class="icon">
                    <img
                        svg-inline
                        src="@/assets/images/home_flask.svg"
                        alt="Какие требуется сдать анализы"
                    />
                </div>
                <p>Какие требуется сдать анализы</p>
            </div>
            <div class="black block">
                <div class="icon">
                    <img
                        svg-inline
                        src="@/assets/images/home_stethoscope.svg"
                        alt="Какую необходимо пройти инструментальную диагностику"
                    />
                </div>
                <p>Какую необходимо пройти инструментальную диагностику</p>
            </div>
        </v-layout>
    </Section>
</template>

<script>
import { Section, Header1, RegularLg } from '../../../blocks';

export default {
    components: {
        Section,
        Header1,
        RegularLg,
    },
};
</script>
<style lang="stylus">
@import 'style.styl';
</style>
