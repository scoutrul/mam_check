import Vue from 'vue';
import Vuex from 'vuex';

import actions from './actions';
import mutations from './mutations';
import getters from './getters';

Vue.use(Vuex);

const state = {
	tests: null,
	user: {
		gender: null,
		birthDate: null,
		height: null,
		weight: null,
	},
};

export default new Vuex.Store({
	state,
	getters,
	mutations,
	actions,

	created() {
		// this.fetchTests();
	},

	computed: {
		fetchTests() {
			this.$store.dispatch('GET_TESTS');
		},

		testsList() {
			return this.$store.getters.TESTS;
		},
	},
});
