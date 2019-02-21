<template>
    <v-layout class="profile-info">
        <v-flex class="profile-info-text xs12 sm6 md6">
            <div class="profile-info-title">Индекс массы тела — 22.6</div>
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
                ></v-text-field>
            </div>
        </v-flex>
        <v-flex class="profile-info-button xs12 sm2 md2">
            <SimpleButton>Изменить</SimpleButton>
        </v-flex>
    </v-layout>
</template>

<script>
import { SimpleButton } from '@/components/blocks';
import { mapState } from 'vuex';

export default {
    components: {
        SimpleButton,
    },
    computed: {
        ...mapState(['user']),
        validateBirthYear() {
            return (
                this.user.birthYear.length === 4 &&
                this.user.birthYear < 2019 &&
                this.user.birthYear > 1920
            );
        },
    },
    methods: {
        handleBirthYear(value) {
            this.$store.dispatch('SET_BIRTHYEAR', value);
        },
        handleHeight(value) {
            this.$store.dispatch('SET_HEIGHT', value);
        },
        handleWeight(value) {
            this.user.weight = value;
            this.$store.dispatch('SET_WEIGHT', value);
        },
    },
};
</script>
<style lang="stylus">
@import './style.styl';
</style>
