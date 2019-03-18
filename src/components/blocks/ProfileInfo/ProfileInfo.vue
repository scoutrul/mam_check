<template>
    <v-layout class="profile-info">
        <v-flex class="profile-info-text xs12 sm6 md6">
            <div class="profile-info-title">
                <span :style="{ color: resultColor }">
                    Индекс массы тела — {{ indexBodyMass || 'не рассчитано' }}
                </span>
            </div>
            <div class="profile-info-recommendation">{{ resultText }}</div>
        </v-flex>
        <v-flex class="profile-info-inputs xs12 sm4 md4 ">
            <div class="profile-info-inputs-item">
                <v-text-field
                    ref="weightInput"
                    hide-details
                    label="Вес"
                    class="profile-info-inputs-item__input"
                    placeholder="кг"
                    mask="###"
                    return-masked-value
                    :value="u_weight"
                    :disabled="!isEditingAllowed"
                    @input="handleWeight"
                ></v-text-field>
            </div>

            <div class="profile-info-inputs-item">
                <v-text-field
                    ref="heightInput"
                    hide-details
                    label="Рост"
                    class="profile-info-inputs-item__input"
                    placeholder="см"
                    mask="###"
                    return-masked-value
                    :value="u_height"
                    :disabled="!isEditingAllowed"
                    @input="handleHeight"
                ></v-text-field>
            </div>

            <div class="profile-info-inputs-item">
                <v-text-field
                    ref="birthYearInput"
                    hide-details
                    label="Год рождения"
                    class="profile-info-inputs-item__input"
                    placeholder="гггг"
                    mask="####"
                    return-masked-value
                    :value="u_year"
                    :disabled="!isEditingAllowed"
                    @input="handleBirthYear"
                ></v-text-field>
            </div>
        </v-flex>
        <v-flex class="profile-info-button xs12 sm2 md2">
            <SimpleButton
                :disabled="isEditingAllowed && !hasChanged"
                @click.native="
                    !isEditingAllowed ? allowEdit() : storeInputsData()
                "
                >{{
                    isEditingAllowed && hasChanged ? 'Сохранить' : 'Изменить'
                }}</SimpleButton
            >
        </v-flex>
    </v-layout>
</template>

<script>
import { SimpleButton } from '@/components/blocks';
import { mapState } from 'vuex';
import round from 'lodash/round';

export default {
    components: {
        SimpleButton,
    },
    data: () => ({
        indexBodyMass: 0,
        u_year: '',
        u_weight: '',
        u_height: '',
        isEditingAllowed: false,
        resultColor: 'initial',
        results: {
            1: '1',
            2: '2',
            3: '3',
            4: '4',
            6: '6',
            7: '7',
        },
        resultText:
            'Ваш индекс массы в норме. Значение ИМТ неактуально для тех, кто имеет большую мышечную массу, например, для тяжелоатлетов',
    }),
    created() {
        this.u_year = this.$store.state.user.birthYear;
        this.u_weight = this.$store.state.user.weight;
        this.u_height = this.$store.state.user.grow;
        this.getItmResult();
        this.getIndexBodyMass();
    },
    updated() {
        this.getItmResult();
        this.getIndexBodyMass();
    },
    computed: {
        ...mapState(['user']),
        validateBirthYear() {
            return (
                this.u_year.length === 4 &&
                this.u_year < 2019 &&
                this.u_year > 1920
            );
        },
        hasChanged() {
            return (
                (this.validateBirthYear &&
                    this.$store.state.user.birthYear !== this.u_year) ||
                this.$store.state.user.weight !== this.u_weight ||
                this.$store.state.user.grow !== this.u_height
            );
        },
    },
    methods: {
        getIndexBodyMass() {
            this.indexBodyMass = round(
                this.$store.state.user.weight /
                    (((this.$store.state.user.grow / 100) *
                        this.$store.state.user.grow) /
                        100),
                1,
            );
        },
        getItmResult() {
            const {
                birthYear = 2000,
                birthMonth = 10,
                birthDay = 10,
            } = this.$store.state.user;
            const userAge =
                (new Date() -
                    new Date(`${birthMonth}-${birthDay}-${birthYear}`)) /
                1000 /
                60 /
                60 /
                24 /
                365.25;
            if (userAge < 30) {
                console.log(this.indexBodyMass, ' < 30');
            } else {
                console.log(this.indexBodyMass, ' > 30');
            }
        },
        handleBirthYear(value) {
            this.u_year = value;
        },
        handleWeight(value) {
            this.u_weight = value;
        },
        handleHeight(value) {
            this.u_height = value;
        },
        storeInputsData() {
            this.$store.dispatch('SET_BIRTHYEAR', this.u_year);
            this.$store.dispatch('SET_GROW', this.u_height);
            this.$store.dispatch('SET_WEIGHT', this.u_weight);
            this.isEditingAllowed = false;
            this.updateState();
            this.getItmResult();
        },
        allowEdit() {
            this.isEditingAllowed = true;
        },
        updateState() {
            this.$store.state.user.birthYear = this.u_year;
            this.$store.state.user.weight = this.u_weight;
            this.$store.state.user.grow = this.u_height;
        },
    },
};
</script>
<style lang="stylus">
@import './style.styl';
</style>
