<template>
    <v-layout column align-center class="container pretest">
        <v-stepper
            v-model="stepper"
            light
            :ripple="false"
            class="stepper__clear stepper__container"
        >
            <SimpleButton
                v-if="stepper > 1"
                class="button__simple--arrow back_button"
                @click.native="goBack"
            >
                <img
                    svg-inline
                    src="@/assets/images/arrow.svg"
                    alt="Вернуться"
                />
            </SimpleButton>
            <v-stepper-items>
                <v-stepper-content step="1">
                    <img
                        svg-inline
                        src="@/assets/images/pre_gender.svg"
                        alt="Укажите Ваш пол"
                    />
                    <div class="title">Укажите ваш пол</div>
                    <v-layout justify-center class="pretest__buttons">
                        <v-flex class="pretest__buttons_item xs12">
                            <SimpleButton @click.native="stepper = 2"
                                >Мужчина</SimpleButton
                            >
                        </v-flex>
                        <v-flex class="pretest__buttons_item xs12">
                            <SimpleButton @click.native="stepper = 2"
                                >Женщина</SimpleButton
                            >
                        </v-flex>
                    </v-layout>
                </v-stepper-content>
                <v-stepper-content step="2">
                    <img
                        svg-inline
                        src="@/assets/images/pre_birthday.svg"
                        alt="Укажите ваш день рождения"
                    />
                    <div class="title">Укажите вашу дату рождения</div>
                    <v-layout justify-center class="pretest__buttons">
                        <v-flex class="pretest__buttons_item xs12">
                            инпут дату
                        </v-flex>
                        <v-flex class="pretest__buttons_item xs12">
                            <SimpleButton @click.native="stepper = 3"
                                >Далее</SimpleButton
                            >
                        </v-flex>
                    </v-layout>
                </v-stepper-content>
                <v-stepper-content step="3">
                    <img
                        svg-inline
                        src="@/assets/images/pre_metric.svg"
                        alt="Укажите ваш рост и вес"
                    />
                    <div class="title">Укажите ваш рост и вес</div>
                    <v-layout justify-center class="pretest__buttons">
                        <v-flex class="pretest__buttons_item xs12">
                            рост
                        </v-flex>
                        <v-flex class="pretest__buttons_item xs12">
                            вес
                        </v-flex>
                        <v-flex class="pretest__buttons_item xs12">
                            <SimpleButton @click.native="goNextPage()"
                                >Перейти к тестам</SimpleButton
                            >
                        </v-flex>
                    </v-layout>
                </v-stepper-content>
            </v-stepper-items>
        </v-stepper>
    </v-layout>
</template>

<script>
import { SimpleButton } from '../../blocks';

export default {
    components: {
        SimpleButton,
    },
    data: () => ({
        stepper: 1,
        steps: [
            {
                label: 'Пол',
                completed: false,
            },
            {
                label: 'Возраст',
                completed: false,
            },
            {
                label: 'Рост, вес',
                completed: false,
            },
        ],
        user: {
            gender: 'male',
            birthDate: '123213',
            height: null,
            weight: null,
        },
    }),
    mounted() {
        //
    },
    methods: {
        goBack() {
            if (this.stepper > 1) {
                this.stepper = this.stepper - 1;
            } else {
                this.stepper = 1;
            }
        },
        goNextPage() {
            // store data .then
            // this.$route.push();
        },
    },
};
</script>
<style lang="stylus">
@import './styles.styl';
    .stepper__clear
        box-shadow none
        padding 0
    .stepper__container
        width: 100%;
        align-items: center;
        display: flex;
        justify-content: center;
    .back_button
        position absolute !important;
        left 0
        top: 200px
</style>
