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
                            <SimpleButton
                                :class="user.gender === 'male' && 'isActive'"
                                @click.native="setGender('M')"
                                >Мужчина</SimpleButton
                            >
                        </v-flex>
                        <v-flex class="pretest__buttons_item xs12">
                            <SimpleButton
                                :class="user.gender === 'female' && 'isActive'"
                                @click.native="setGender('F')"
                                >Женщина</SimpleButton
                            >
                        </v-flex>
                    </v-layout>
                </v-stepper-content>
                <v-stepper-content step="2">
                    <img
                        svg-inline
                        src="@/assets/images/pre_birthday.svg"
                        alt="Укажите ваш год рождения"
                    />
                    <div class="title">Укажите вашу дату рождения</div>
                    <v-layout justify-center class="pretest__buttons">
                        <v-flex
                            class="pretest__buttons_item xs12"
                            @click="$refs.handleBirthDayInput.focus()"
                        >
                            <v-text-field
                                ref="handleBirthDayInput"
                                hide-details
                                class="pretest__input"
                                :value="user.birthDay"
                                placeholder="дд"
                                mask="##"
                                return-masked-value
                                @input="handleBirthDay"
                            ></v-text-field>
                        </v-flex>

                        <v-flex
                            class="pretest__buttons_item xs12"
                            @click="$refs.handleBirthMonthInput.focus()"
                        >
                            <v-text-field
                                ref="handleBirthMonthInput"
                                hide-details
                                class="pretest__input"
                                :value="user.birthMonth"
                                placeholder="мм"
                                mask="##"
                                return-masked-value
                                @input="handleBirthMonth"
                            ></v-text-field>
                        </v-flex>
                        <v-flex
                            class="pretest__buttons_item xs12"
                            @click="$refs.birthYearInput.focus()"
                        >
                            <v-text-field
                                ref="birthYearInput"
                                hide-details
                                class="pretest__input"
                                :value="user.birthYear"
                                placeholder="гггг"
                                mask="####"
                                return-masked-value
                                @input="handleBirthYear"
                            ></v-text-field>
                        </v-flex>
                        <v-flex class="pretest__buttons_item xs12">
                            <SimpleButton
                                :disabled="!validateBirthYear"
                                :class="[
                                    'button__simple--next',
                                    !validateBirthYear &&
                                        'button__simple--disabled',
                                ]"
                                @click.native="stepper = 3"
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
                        <v-flex
                            class="pretest__buttons_item xs12"
                            @click="$refs.heightInput.focus()"
                        >
                            <v-text-field
                                ref="heightInput"
                                hide-details
                                label="см"
                                class="pretest__input"
                                :value="user.grow"
                                placeholder="рост"
                                mask="###"
                                return-masked-value
                                @input="handleGrow"
                            ></v-text-field>
                        </v-flex>
                        <v-flex
                            class="pretest__buttons_item xs12"
                            @click="$refs.weightInput.focus()"
                        >
                            <v-text-field
                                ref="weightInput"
                                hide-details
                                label="кг"
                                class="pretest__input"
                                :value="user.weight"
                                placeholder="вес"
                                mask="###"
                                return-masked-value
                                @input="handleWeight"
                            ></v-text-field>
                        </v-flex>
                        <v-flex class="pretest__buttons_item xs12">
                            <SimpleButton
                                :disabled="!(user.weight && user.grow)"
                                :class="[
                                    'button__simple--next',
                                    !(user.weight && user.grow) &&
                                        'button__simple--disabled',
                                ]"
                                @click.native="goNextQuestionPage()"
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
import CONST from '@/const.js';
import { mapState } from 'vuex';
import { SimpleButton } from '../../blocks';

export default {
    components: {
        SimpleButton,
    },
    data: () => ({
        stepper: 1,
    }),
    computed: {
        ...mapState(['user']),
        validateBirthYear() {
            return (
                this.user.birthYear.length === 4 &&
                this.user.birthYear < 2019 &&
                this.user.birthYear > 1920 &&
                this.user.birthMonth <= 12 &&
                this.user.birthDay <= 31
            );
        },
    },

    methods: {
        setGender(val) {
            this.stepper += 1;
            this.$store.dispatch('SET_GENDER', val);
        },
        handleBirthYear(value) {
            this.$store.dispatch('SET_BIRTHYEAR', value);
        },
        handleBirthMonth(value) {
            this.$store.dispatch('SET_BIRTHMONTH', value);
        },
        handleBirthDay(value) {
            this.$store.dispatch('SET_BIRTHDAY', value);
        },
        handleGrow(value) {
            this.$store.dispatch('SET_GROW', value);
        },
        handleWeight(value) {
            this.$store.dispatch('SET_WEIGHT', value);
        },
        goBack() {
            if (this.stepper > 1) {
                this.stepper = this.stepper - 1;
            } else {
                this.stepper = 1;
            }
        },
        goNextQuestionPage() {
            this.$store.state.user.isUserInfoDone = true;
            this.$router.push(CONST.PAGE_PROFILE);
        },
    },
};
</script>
<style lang="stylus">
@import 'styles.styl';
</style>
