import Vue from 'vue';
import Vuex from 'vuex';

import actions from './actions';
import mutations from './mutations';
import getters from './getters';

Vue.use(Vuex);

const state = {
	user: {
		isUserInfoDone: true, // сделать в режим разработки
		gender: 'male', // сделать в режим разработки
		birthYear: '',
		birthMonth: '',
		birthDay: '',
		grow: '',
		weight: '',
		profileProgress: 0,
	},
	tests: [],
};

export default new Vuex.Store({
	state,
	getters,
	mutations,
	actions,
});
