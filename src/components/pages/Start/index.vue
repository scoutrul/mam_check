<template>
    <v-layout column align-center class="container pretest">
        <img
            svg-inline
            src="@/assets/images/pre_gender.svg"
            alt="Укажите Ваш пол"
        />
        <div class="title">Укажите Ваш пол</div>
        <v-layout wrap justify-center>
            <v-flex> <SimpleButton>Мужчина</SimpleButton> </v-flex>
            <v-flex> <SimpleButton>Женщина</SimpleButton> </v-flex>
        </v-layout>
    </v-layout>
</template>

<script>
import { SimpleButton } from '../../blocks';

export default {
    components: {
        SimpleButton,
    },
    data: () => ({
        user: {
            gender: 'male',
            birthDate: '123213',
            height: null,
            weight: null,
        },
        currentStep: 0,
    }),
    mounted() {
        this.getStep();
    },
    methods: {
        getStep() {
            if (!this.user.gender) {
                this.currentStep = 1;
            } else if (this.user.gender && !this.user.birthDate) {
                this.currentStep = 2;
            } else if (
                this.user.gender &&
                this.user.birthDate &&
                !(this.user.width && this.user.heihgt)
            ) {
                this.currentStep = 3;
            }
        },
    },
};
</script>
<style lang="stylus">
.pretest
    margin-top: 120px
    img, svg
        max-width: 100%;
    .title
        line-height: 32px;
        font-size: 20px;
        margin: 70px;
        font-weight: bold;
</style>
