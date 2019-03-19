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
            const red = '#ef4d4d';
            const green = '#58b379';
            const orange = '#E88E65';
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

            const IMT = this.indexBodyMass;
            if (userAge >= 30) {
                switch (true) {
                    case IMT < 20:
                        this.resultColor = red;
                        this.resultText =
                            'У вас недостаточный вес для вашего роста. Важно стремиться придерживаться здорового диапазона веса. Нахождение в здоровом диапазоне улучшит способность вашего организма бороться с инфекцией или болезнью';

                        break;
                    case IMT > 20 && IMT < 26:
                        this.resultColor = green;
                        this.resultText =
                            'Ваш индекс массы в норме. Значение ИМТ неактуально для тех, кто имеет большую мышечную массу, например, для тяжелоатлетов';
                        break;
                    case IMT > 26 && IMT < 28:
                        this.resultColor = orange;
                        this.resultText =
                            'У вас избыток веса. Это увеличивает риск развития ишемической болезни сердца, а также других заболеваний. Поддержание здорового веса поможет вам контролировать артериальное давление и уровень холестерина';
                        break;
                    case IMT > 28 && IMT < 31:
                        this.resultColor = orange;
                        this.resultText =
                            'У вас избыток веса. Это увеличивает риск развития ишемической болезни сердца, а также других заболеваний. Поддержание здорового веса поможет вам контролировать артериальное давление и уровень холестерина';
                        break;
                    case IMT > 31 && IMT < 36:
                        this.resultColor = orange;
                        this.resultText =
                            'У вас избыток веса. Это увеличивает риск развития ишемической болезни сердца, а также других заболеваний. Поддержание здорового веса поможет вам контролировать артериальное давление и уровень холестерина';
                        break;
                    case IMT > 36 && IMT < 41:
                        this.resultColor = orange;
                        this.resultText =
                            'У вас избыток веса. Это увеличивает риск развития ишемической болезни сердца, а также других заболеваний. Поддержание здорового веса поможет вам контролировать артериальное давление и уровень холестерина';
                        break;
                    case IMT > 41:
                        this.resultColor = orange;
                        this.resultText =
                            'У вас избыток веса. Это увеличивает риск развития ишемической болезни сердца, а также других заболеваний. Поддержание здорового веса поможет вам контролировать артериальное давление и уровень холестерина';
                        break;
                    default:
                        this.resultColor = 'initial';
                }
            } else {
                switch (true) {
                    case IMT < 19.5:
                        this.resultColor = red;
                        this.resultText =
                            'У вас недостаточный вес для вашего роста. Важно стремиться придерживаться здорового диапазона веса. Нахождение в здоровом диапазоне улучшит способность вашего организма бороться с инфекцией или болезнью';
                        break;
                    case IMT > 19.5 && IMT < 23:
                        this.resultColor = green;
                        this.resultText =
                            'Ваш индекс массы в норме. Значение ИМТ неактуально для тех, кто имеет большую мышечную массу, например, для тяжелоатлетов';
                        break;
                    case IMT > 23 && IMT < 27.4:
                        this.resultColor = orange;
                        this.resultText =
                            'У вас избыток веса. Это увеличивает риск развития ишемической болезни сердца, а также других заболеваний. Поддержание здорового веса поможет вам контролировать артериальное давление и уровень холестерина';

                        break;
                    case IMT > 27.5 && IMT < 30:
                        this.resultColor = orange;
                        this.resultText =
                            'У вас избыток веса. Это увеличивает риск развития ишемической болезни сердца, а также других заболеваний. Поддержание здорового веса поможет вам контролировать артериальное давление и уровень холестерина';

                        break;
                    case IMT > 30 && IMT < 35:
                        this.resultColor = orange;
                        this.resultText =
                            'У вас избыток веса. Это увеличивает риск развития ишемической болезни сердца, а также других заболеваний. Поддержание здорового веса поможет вам контролировать артериальное давление и уровень холестерина';

                        break;
                    case IMT > 35 && IMT < 40:
                        this.resultColor = orange;
                        this.resultText =
                            'У вас избыток веса. Это увеличивает риск развития ишемической болезни сердца, а также других заболеваний. Поддержание здорового веса поможет вам контролировать артериальное давление и уровень холестерина';

                        break;
                    case IMT > 40:
                        this.resultColor = orange;
                        this.resultText =
                            'У вас избыток веса. Это увеличивает риск развития ишемической болезни сердца, а также других заболеваний. Поддержание здорового веса поможет вам контролировать артериальное давление и уровень холестерина';

                        break;
                    default:
                        this.resultColor = 'initial';
                }
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
