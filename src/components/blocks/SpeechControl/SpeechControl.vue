<template>
    <v-btn fab class="speech-control" :class="classes">
        <svg
            width="12"
            height="20"
            viewBox="0 0 12 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M5.99963 15.2858C7.91979 15.2858 9.48189 13.7236 9.48189 11.8037V3.98258C9.48189 2.06241 7.91979 0.500488 5.99963 0.500488C4.07948 0.500488 2.51758 2.06241 2.51758 3.98258V11.8039C2.51758 13.7238 4.07948 15.2858 5.99963 15.2858Z"
            />
            <path
                d="M11.5968 9.72217H10.9035C10.6808 9.72217 10.5 9.90291 10.5 10.1256V11.5435C10.5 14.0247 8.48123 16.0435 5.9999 16.0435C3.51857 16.0435 1.50018 14.0247 1.50018 11.5435V10.1256C1.50018 9.90291 1.31944 9.72217 1.09674 9.72217H0.403436C0.180739 9.72217 0 9.90291 0 10.1256V11.5435C0 14.5102 2.30624 17.1245 5.24991 17.4954V18.5H2.15354C1.93084 18.5 1.75011 18.6808 1.75011 18.9035V19.5966C1.75011 19.8193 1.93084 20 2.15354 20H9.84666C10.0694 20 10.2501 19.8193 10.2501 19.5966V18.9035C10.2501 18.6808 10.0694 18.5 9.84666 18.5H6.75009V17.4954C9.69396 17.1247 12 14.5102 12 11.5435V10.1256C12.0002 9.90271 11.8195 9.72217 11.5968 9.72217Z"
            />
        </svg>
    </v-btn>
</template>

<script>
export default {
    name: 'SpeechControl',

    props: {
        speaking: {
            type: Boolean,
            required: true,
        },
        recording: {
            type: Boolean,
            required: true,
        },
    },

    data: () => ({}),

    computed: {
        classes() {
            return {
                'speech-control--speaking': this.speaking,
                'speech-control--recorded': this.recording,
            };
        },
    },

    methods: {},
};
</script>

<style lang="stylus">
@import './SpeechControl.styl';
</style>
