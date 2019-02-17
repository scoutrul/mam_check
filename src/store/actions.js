/* eslint-disable no-unused-vars */

export default {
	SET_GENDER: (store, payload) => {
		store.commit('SET_GENDER', payload);
	},
	SET_BIRTHDAY: (store, payload) => {
		store.commit('SET_BIRTHDAY', payload);
	},
	SET_WEIGHT: (store, payload) => {
		store.commit('SET_WEIGHT', payload);
	},
	SET_HEIGHT: (store, payload) => {
		store.commit('SET_HEIGHT', payload);
	},
	store_tests: async ({ commit }, payload) => {
		commit('STORE_TESTS', payload);
	},
	store_current_test: async ({ commit }, payload) => {
		commit('STORE_CURRENT_TEST', payload);
	},
};
