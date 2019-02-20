<template>
    <v-layout class="profile-info">
        <v-flex class="profile-info-text xs12 md6">
            <div class="profile-info-title">Индекс массы тела — 22.6</div>
            <div>
                Ваш индекс массы в норме. Значение ИМТ неактуально для тех, кто
                имеет большую мышечную массу, например, для тяжелоатлетов
            </div>
        </v-flex>
        <v-flex class="profile-info-inputs xs12 md5 ">
            <div class="profile-info-inputs-item">
                <v-text-field
                    ref="weightInput"
                    hide-details
                    label="Вес"
                    class="pretest__input"
                    placeholder="кг"
                    mask="###"
                    return-masked-value
                ></v-text-field>
            </div>

            <div class="profile-info-inputs-item">
                <v-text-field
                    ref="weightInput"
                    hide-details
                    label="Рост"
                    class="pretest__input"
                    placeholder="см"
                    mask="###"
                    return-masked-value
                ></v-text-field>
            </div>

            <div class="profile-info-inputs-item">
                <v-text-field
                    ref="weightInput"
                    hide-details
                    label="Год рождения"
                    class="pretest__input"
                    placeholder="гггг"
                    mask="###№"
                    return-masked-value
                ></v-text-field>
            </div>
        </v-flex>
        <v-flex class="xs12"> <SimpleButton>Изменить</SimpleButton> </v-flex>
    </v-layout>
</template>

<script>
import { SimpleButton } from '@/components/blocks';
export default {
    components: {
        SimpleButton,
    },
};
</script>
<style lang="stylus">
@import './style.styl';
</style>
