import Vue from 'vue';
import Vuex from 'vuex';

import actions from './actions';
import mutations from './mutations';
import getters from './getters';

Vue.use(Vuex);

const state = {
	user: {
		isUserInfoDone: true,
		gender: 'male',
		birthday: '29.03.1995',
		height: '175',
		weight: '75',
	},
	tests: [],
};

export default new Vuex.Store({
	state,
	getters,
	mutations,
	actions,
});
