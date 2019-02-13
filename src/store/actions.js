/* eslint-disable no-unused-vars */

export default {
	FETCH_TESTS_DATA: async ({ commit }) => {
		commit('FETCH_TESTS_DATA');
	},
	SET_GENDER: async (store, payload) => {
		store.commit('SET_GENDER', payload);
	},
	storePreTest: ({ commit }, payload) => {
		commit('SAVE_PRETEST', payload);
	},
};
