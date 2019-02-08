<template>
    <Section bg-color="#00BAFF" is-top is-bottom class="section4">
        <v-layout class="white inner">
            <v-flex xs12 lg6 class="listing">
                <div class="block">
                    <div class="img">
                        <img
                            svg-inline
                            src="@/assets/images/home_standart1.svg"
                            alt="Лучшие стандарты"
                        />
                    </div>
                    <div class="text">
                        <div class="text__header">Диспансеризация</div>
                        <p>
                            Российский государственный стандарт обследования
                            населения
                        </p>
                    </div>
                </div>
                <div class="block">
                    <div class="img">
                        <img
                            svg-inline
                            src="@/assets/images/home_standart2.svg"
                            alt="Лучшие стандарты"
                        />
                    </div>
                    <div class="text">
                        <div class="text__header">
                            Российское Кардиологическое Общество
                        </div>
                        <p>
                            Рекомендации по профилактике болезней сердца для
                            жителей России
                        </p>
                    </div>
                </div>
                <div class="block" style="margin-bottom: 0">
                    <div class="img">
                        <img
                            svg-inline
                            src="@/assets/images/home_standart3.svg"
                            alt="Лучшие стандарты"
                        />
                    </div>
                    <div class="text">
                        <div class="text__header">
                            Центр профилактической медицины
                        </div>
                        <p>
                            Российские углубленные стандарты профилактики
                            широкого спектра
                        </p>
                    </div>
                </div>
            </v-flex>
            <v-flex flex xs12 lg6 class="section4_descr">
                <Header1 class="white">На основе лучших стандартов</Header1>
                <RegularMd class="white">
                    Наши тесты и все рекомендации, которые вы получаете,
                    составлены на основе материалов, подготовленных ведущими
                    российскими медицинскими учреждениями
                </RegularMd>
                <Button class="black">Начать</Button>
            </v-flex>
        </v-layout>
        <v-layout align-center justify-center>
            <div class="note white">
                Сервис соответствует Федеральному закону № 152-ФЗ «О
                персональных данных»
            </div>
        </v-layout>
    </Section>
</template>

<script>
import { Section, Header1, RegularMd, Button } from '../../../blocks';

export default {
    components: {
        Section,
        Header1,
        RegularMd,
        Button,
    },
};
</script>
<style lang="stylus">
@import 'style.styl';
</style>
