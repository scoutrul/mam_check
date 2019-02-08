<template>
    <Section class="section5">
        <v-layout>
            <v-flex flex sm6 xs12>
                <Header1 class="pad16">Запишитесь в клинику</Header1>
                <RegularMd class="pad16 section5__regular">
                    После прохождения теста вы сможете записаться на прием в
                    вашу поликлинику для дальнейшего обследования по программе
                    профосмотров или диспансеризации. Это входит в программу
                    ОМС, поэтому для вас – совершенно бесплатно
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
                        Помните, что вам положен один оплачиваемый выходной для
                        прохождения диспансеризации
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
