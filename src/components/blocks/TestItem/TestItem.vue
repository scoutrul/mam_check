<template>
    <v-layout
        v-ripple
        column
        :class="['testItem', itIsCompleted && 'itIsCompleted']"
        :style="itIsCompleted && `border-color: ${color}`"
        @click="!itIsCompleted && startSelf({ id })"
    >
        <v-layout class="testItem__header">
            <v-flex class="testItem__icon">
                <TestIcon
                    :name="shortName"
                    :color="itIsCompleted ? color : '#122123'"
                />
            </v-flex>
            <v-layout class="testItem__header_inner">
                <v-flex class="testItem__name">{{ name }}</v-flex>
                <v-flex class="testItem__info">
                    <template v-if="completedNum < 1">
                        {{ shortDescription }}
                    </template>
                    <v-flex v-else-if="isInProgress" class="testItem__progress"
                        >Выполнено {{ completedNum - 1 }} / {{ questionsNum }}
                        <div class="testItem__progressBar">
                            <div
                                class="testItem__progressBar_completed"
                                :style="
                                    `transform: translateX(-${countProgress}%)`
                                "
                            ></div>
                        </div>
                    </v-flex>

                    <template v-else>
                        <v-flex class="testItem__short">
                            <template v-if="itIsCompleted">
                                <i
                                    style="cursor: pointer"
                                    @click="resetSelf({ id })"
                                >
                                    <svg
                                        width="23"
                                        height="24"
                                        viewBox="0 0 23 24"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M22.1094 10.9714C22.0668 10.4071 21.5557 9.98406 21.0224 10.0271C20.4667 10.0567 20.0265 10.5742 20.0915 11.1518C20.3051 13.2251 19.8101 15.387 18.5331 17.2348C16.1152 20.7416 11.4501 21.9567 7.54161 20.1171C2.37948 17.6833 0.528755 11.1649 3.70497 6.52084C6.27424 2.74454 11.3619 1.63029 15.3886 3.89949L14.5814 5.33722C14.2913 5.8539 14.6989 6.51493 15.277 6.49859L20.2827 6.38385C20.8609 6.36751 21.2014 5.76097 20.9133 5.26063L18.5057 0.747663C18.2077 0.211529 17.4695 0.192834 17.1795 0.709519L16.3723 2.14725C11.5271 -0.63754 5.53568 0.539482 2.25266 5.00037C-1.82096 10.5494 0.136169 18.4786 6.18308 21.7368C11.2065 24.4176 17.4599 22.8271 20.4564 18.0764C21.8426 15.8741 22.3415 13.3851 22.1094 10.9714Z"
                                            fill="#ABB8C7"
                                        />
                                    </svg>
                                </i>
                            </template>
                        </v-flex>
                    </template>
                </v-flex>
            </v-layout>
        </v-layout>
        <v-layout
            v-if="treatment && itIsCompleted"
            column
            class="testItem__treatment"
        >
            <v-flex class="testItem__treatment_info">{{ treatment }}</v-flex>
            <v-flex
                v-if="recommendations.length && false"
                class="testItem__recommendations"
            >
                <div class="testItem__recommendations_label">
                    Рекомендуемые обследования
                </div>
                <div
                    v-for="(item, index) in recommendations"
                    :key="index"
                    class="testItem__recommendations_item"
                >
                    {{ item }}
                </div>
            </v-flex>
        </v-layout>
    </v-layout>
</template>

<script>
import TestIcon from '@/components/blocks/TestIcon';

export default {
    components: {
        TestIcon,
    },
    props: {
        id: {
            type: Number,
            default: 0,
        },
        name: {
            type: String,
            default: '',
        },
        shortName: {
            type: String,
            default: 'icon',
        },
        color: {
            type: String,
            default: '#122123',
        },
        shortDescription: {
            type: String,
            default: '',
        },
        questionsNum: {
            type: Number,
            default: 0,
        },
        completedNum: {
            type: Number,
            default: 0,
        },
        recommendations: {
            type: Array,
            default: () => [],
        },
        treatment: {
            type: String,
            default: '',
        },
        startSelf: {
            type: Function,
            default: () => {},
        },
        resetSelf: {
            type: Function,
            default: () => {},
        },
    },
    data() {
        return {
            props: {
                id: this.id,
                name: this.name || '',
                shortName: this.shortName,
                color: this.color,
                shortDescription: this.shortDescription,
                questionsNum: this.questionsNum,
                completedNum: this.completedNum + 1,
                treatment: this.treatment,
                recommendations: this.recommendations,
                startSelf: this.startSelf,
                resetSelf: this.resetSelf,
            },
        };
    },
    computed: {
        isInProgress() {
            return (
                this.completedNum >= 1 && this.completedNum < this.questionsNum
            );
        },
        itIsCompleted() {
            return (
                this.completedNum > 0 && this.completedNum >= this.questionsNum
            );
        },
        countProgress() {
            return (
                100 -
                (100 / (this.questionsNum / this.completedNum) -
                    100 / this.questionsNum)
            );
        },
    },
};
</script>

<style lang="stylus">
@import './item.styl';
</style>
