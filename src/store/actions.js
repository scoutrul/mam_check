/* eslint-disable no-unused-vars */

export default {
	FETCH_TESTS_DATA: async ({ commit }) => {
		commit('FETCH_TESTS_DATA');
	},
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
	STORE_TESTS: ({ commit }, payload) => {
		commit('STORE_TESTS', payload);
	},
};
