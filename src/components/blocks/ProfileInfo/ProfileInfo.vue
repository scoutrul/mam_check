<template>
    <v-layout class="profile-info">
        <v-flex class="profile-info-text xs12 sm6 md6">
            <div class="profile-info-title">
                Индекс массы тела — {{ indexBodyMass || 'не рассчитано' }}
            </div>
            <div class="profile-info-recommendation">
                Ваш индекс массы в норме. Значение ИМТ неактуально для тех, кто
                имеет большую мышечную массу, например, для тяжелоатлетов
            </div>
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
                    :value="user.weight"
                    @input="handleWeight"
                    :disabled="!isEditingAllowed"
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
                    :value="user.height"
                    @input="handleHeight"
                    :disabled="!isEditingAllowed"
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
                    :value="user.birthYear"
                    @input="handleBirthYear"
                    :disabled="!isEditingAllowed"
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
        year: 0,
        weight: 0,
        height: 0,
        isEditingAllowed: false,
    }),
    mounted() {
        this.updateState();
    },

    computed: {
        ...mapState(['user']),
        validateBirthYear() {
            return (
                this.year.length === 4 && this.year < 2019 && this.year > 1920
            );
        },
        indexBodyMass() {
            return round(
                this.$store.state.user.weight /
                    (((this.$store.state.user.height / 100) *
                        this.$store.state.user.height) /
                        100),
                2,
            );
        },
        hasChanged() {
            const cond =
                (this.validateBirthYear &&
                    this.$store.state.user.birthYear !== this.year) ||
                this.$store.state.user.weight !== this.weight ||
                this.$store.state.user.height !== this.height;
            return cond;
        },
    },
    methods: {
        handleBirthYear(value) {
            this.year = value;
        },
        handleWeight(value) {
            this.weight = value;
        },
        handleHeight(value) {
            this.height = value;
        },
        storeInputsData() {
            this.$store.dispatch('SET_BIRTHYEAR', this.year);
            this.$store.dispatch('SET_HEIGHT', this.height);
            this.$store.dispatch('SET_WEIGHT', this.weight);
            this.updateState();
            this.isEditingAllowed = false;
        },
        allowEdit() {
            this.isEditingAllowed = true;
        },
        updateState() {
            this.$store.state.user.birthYear = this.year;
            this.$store.state.user.weight = this.weight;
            this.$store.state.user.height = this.height;
        },
    },
};
</script>
<style lang="stylus">
@import './style.styl';
</style>
