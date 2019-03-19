<template>
    <v-flex class="profile__section">
        <div class="separate-banner">
            <v-layout row wrap xs12>
                <v-flex xs12 md8 class="separate-banner__left">
                    <Header2 class="pad16"
                        >В этом году вам доступна всеобщая диспансеризация
                    </Header2>
                    <RegularLg class="pad16"
                        >Для прохождения диспансеризации вам нужно записаться к
                        поликлинику, к которой вы прикреплены. Для этого вы
                        можете воспользоваться нашим сервисом
                    </RegularLg>
                    <v-btn
                        depressed
                        flat
                        round
                        dark
                        ripple
                        class="button__yellow"
                    >
                        <span>Записаться к врачу</span>
                    </v-btn>
                </v-flex>
                <v-flex xs12 md4 class="separate-banner__right">
                    <Header2 class="pad16">Анкета</Header2>
                    <RegularLg class="pad16"
                        >Ваша анкета диспансеризации уже заполнена. Распечатайте
                        ее и возьмите с собой в поликлинику, чтобы сделать
                        процесс прохождения быстрее и комфортнее
                    </RegularLg>
                    <SimpleButton @click.native="getMedicalForm">
                        <span>Скачать анкету</span>
                    </SimpleButton>
                </v-flex>
            </v-layout>
        </div>
    </v-flex>
</template>

<script>
import { SimpleButton } from '../index';
import { $pdfAnketa } from '@/mixins';

export default {
    name: 'Banner02',
    components: {
        SimpleButton,
    },
    mixins: [$pdfAnketa],
};
</script>

<style scoped></style>
