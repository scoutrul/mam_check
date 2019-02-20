import Vue from 'vue';
import Vuex from 'vuex';

import actions from './actions';
import mutations from './mutations';
import getters from './getters';

Vue.use(Vuex);

const state = {
	user: {
		isUserInfoDone: false,
		gender: '',
		birthYear: '',
		height: '',
		weight: '',
	},
	tests: [],
};

export default new Vuex.Store({
	state,
	getters,
	mutations,
	actions,
});
