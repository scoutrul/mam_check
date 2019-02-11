<template>
    <v-layout column align-center class="container pretest">
        <v-stepper v-model="stepper" class="stepper__clear">
            <v-stepper-items>
                <v-stepper-content step="1">
                    <div class="backButton">
                        <img
                            svg-inline
                            src="@/assets/images/arrow.svg"
                            alt="Вернуться"
                        />
                    </div>
                    <img
                        svg-inline
                        src="@/assets/images/pre_gender.svg"
                        alt="Укажите Ваш пол"
                    />
                    <div class="title">Укажите Ваш пол</div>
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
                    <v-card
                        color="grey lighten-1"
                        class="mb-5"
                        height="200px"
                    ></v-card>
                    <v-card-actions>
                        <v-spacer>222222222</v-spacer>
                        <v-btn flat @click.native="stepper = 1">Back</v-btn>
                        <v-btn color="primary" @click.native="stepper = 3"
                            >Continue</v-btn
                        >
                    </v-card-actions>
                </v-stepper-content>
                <v-stepper-content step="3">
                    <v-card
                        color="grey lighten-1"
                        class="mb-5"
                        height="200px"
                    ></v-card>
                    <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn flat @click.native="stepper = 2">Back</v-btn>
                        <v-btn color="primary" @click.native="stepper = 1"
                            >Continue</v-btn
                        >
                    </v-card-actions>
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
        currentStep: 1,
    }),
    mounted() {
        // this.getStep();
    },
    methods: {
        nextStep(n) {
            if (n === this.stepper) {
                this.stepper = 1;
            } else {
                this.stepper = n + 1;
            }
        },
        getStep() {
            if (!this.user.gender) {
                this.currentStep = 1;
            } else if (this.user.gender && !this.user.birthDate) {
                this.currentStep = 2;
            } else if (
                this.user.gender &&
                this.user.birthDate &&
                !(this.user.width && this.user.height)
            ) {
                this.currentStep = 3;
            }
        },
    },
};
</script>
<style lang="stylus">
@import './styles.styl';
    .stepper__clear
        box-shadow none
        padding 0
    .backButton
        position absolute
        top 0
        left 0
</style>
