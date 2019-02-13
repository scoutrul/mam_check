<template>
    <v-flex>
        {{props}}
    </v-flex>
</template>

<script>
export default {
    props: {
        name: String,
        icon: String,
        color: String,
        shortDescription: String, 
        questionsNum: Number,
        completedNum: Number,
        resetSelf: Function,
        treatment: String,
        recommendations: Array,
    },
    data: function () {
        return {
            props: {
                name: this.name, 
                icon: this.icon, 
                color: this.color, 
                shortDescription: this.shortDescription, 
                questionsNum: this.questionsNum, 
                completedNum: this.completedNum, 
                resetSelf: this.resetSelf(), 
                treatment: this.treatment, 
                recommendations: this.recommendations, 
            }
        }
    } 
};
</script>

<style lang="stylus">
@import './item.styl';
</style>
