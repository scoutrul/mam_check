<template>
    <v-layout column>
        <Section bg-color="transparent" class="section1">
            <v-layout class="isUnder600">
                <v-flex flex sm6 xs12>
                    <Header1 class="pad16"
                        >Оцените свое здоровье прямо сейчас</Header1
                    >
                    <RegularMd class="pad16">
                        Пройдите комплексную проверку здоровья и получите список
                        обследований, которые вы сможете пройти в рамках
                        программы всеобщей диспансеризации. Это совершенно
                        бесплатно!
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

        <Section is-top bg-color="#d9f5ff" style="margin-bottom: 80px">
            <v-layout column class="section2">
                <Header1 class="pad16">С чего начать?</Header1>
                <RegularLg class="pad16 max960">
                    Мы подготовили комплекс тестов, которые помогут вам понять
                    свое самочувствие, оценить состояние здоровья и узнать,
                    какие обследования вам нужно пройти
                </RegularLg>
                <div class="banner">
                    <Header2 class="pad16">Комплексное тестирование</Header2>
                    <RegularLg class="pad16"
                        >Пройдя проверку, вы получите список персональных
                        рекомендаций по состоянию вашего здоровья. Кроме того,
                        мы заполним анкету для прохождения профосмотра или
                        диспансеризации в вашей поликлинике и вы сэкономите свое
                        время</RegularLg
                    >
                    <v-layout class="pad16" align-center>
                        <Button class="black">Начать</Button>
                        <div class="note">Можно продолжить в любое время</div>
                    </v-layout>
                </div>
            </v-layout>
        </Section>

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

        <Section bg-color="#00BAFF" is-top is-bottom class="section4">
            <v-layout style="padding-top: 120px" class="white inner">
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
                    <div class="block">
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
                    <Header1 class="pad16 white"
                        >На основе лучших стандартов</Header1
                    >
                    <RegularMd class="pad16 white" style="margin: 16px 0">
                        Наши тесты и все рекомендации, которые вы получаете,
                        составлены на основе материалов, подготовленных ведущими
                        российскими медицинскими учреждениями
                    </RegularMd>
                    <Button class="black">Начать</Button>
                </v-flex>
            </v-layout>
            <v-layout class="pad16" align-center justify-center>
                <div class="note white">
                    Сервис соответствует Федеральному закону № 152-ФЗ «О
                    персональных данных»
                </div>
            </v-layout>
        </Section>

        <Section class="section5">
            <v-layout>
                <v-flex flex sm6 xs12>
                    <Header1 class="pad16">Запишитесь в клинику</Header1>
                    <RegularMd class="pad16">
                        После прохождения теста вы сможете записаться на прием в
                        вашу поликлинику для дальнейшего обследования по
                        программе профосмотров или диспансеризации. Это входит в
                        программу ОМС, поэтому для вас – совершенно бесплатно
                    </RegularMd>
                    <v-layout align-center class="special flex">
                        <v-flex class="icon">
                            <img
                                svg-inline
                                src="@/assets/images/home_rupor.svg"
                                alt="Памятка"
                            />
                        </v-flex>
                        <v-flex class="text">
                            Помните, что вам положен один оплачиваемый выходной
                            для прохождения диспансеризации
                        </v-flex>
                    </v-layout>
                    <div class="pad16"><Button>Начать</Button></div>
                </v-flex>
                <v-flex sm6 class="section5_pic">
                    <img
                        svg-inline
                        src="@/assets/images/home_zapis.svg"
                        alt="Запишитесь в клинику"
                    />
                </v-flex>
            </v-layout>
        </Section>
    </v-layout>
</template>

<script>
import {
    Section,
    Header1,
    Header2,
    RegularMd,
    RegularLg,
    Button,
} from '../../blocks';

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
