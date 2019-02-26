<template>
    <div class="medform">
        <v-layout class="inner" column>
            <header class="medform__header">
                <v-spacer></v-spacer>
                <v-flex xs10 sm8 md7
                    ><div class="title">Анкета диспансеризации</div></v-flex
                >
                <v-flex sm2 md5 class="hideBtn">
                    <SimpleButton>Распечатать анкету</SimpleButton>
                </v-flex>
                <v-layout flex justify-end xs1 sm4 md1 style="min-width: 48px"
                    ><SimpleButton
                        class="button__simple--arrow close_button"
                        @click.native="closeSelf"
                    >
                        <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M17.7549 4.7549C18.1656 4.33879 18.8366 4.33659 19.25 4.75V4.75C19.6634 5.16342 19.6612 5.83437 19.2451 6.24507L13.4142 12L19.2451 17.7549C19.6612 18.1656 19.6634 18.8366 19.25 19.25V19.25C18.8366 19.6634 18.1656 19.6612 17.7549 19.2451L12 13.4142L6.24507 19.2451C5.83437 19.6612 5.16342 19.6634 4.75 19.25V19.25C4.33659 18.8366 4.33879 18.1656 4.7549 17.7549L10.5858 12L4.7549 6.24507C4.33878 5.83437 4.33658 5.16342 4.75 4.75V4.75C5.16342 4.33658 5.83437 4.33878 6.24507 4.7549L12 10.5858L17.7549 4.7549Z"
                                fill="#1E1E1E"
                            />
                        </svg> </SimpleButton
                ></v-layout>
            </header>
            <label>Распечатайте анкету и возьмите с собой в поликлинику</label>
        </v-layout>
    </div>
</template>

<script>
import { SimpleButton } from '@/components/blocks';

export default {
    components: {
        SimpleButton,
    },
    props: {
        closeSelf: {
            type: Function,
            default: null,
        },
    },
};
</script>
<style lang="stylus">
@import './style.styl';
</style>
