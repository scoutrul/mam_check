/* eslint-disable no-unused-vars */
import fakeApi from '@/services/fakeApi';

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
	get_tests: async store => {
		if (store.getters.allTestsCount < 1) {
			fakeApi.getMedicalTests().then(tests => {
				store.commit('STORE_TESTS', tests);
			});
		}
	},
	store_current_test: ({ commit }, payload) => {
		commit('STORE_CURRENT_TEST', payload);
	},
	store_test_answer: ({ commit }, payload) => {
		commit('STORE_TEST_ANSWER', payload);
	},
	reset_test_questions: ({ commit }, payload) => {
		commit('RESET_TEST_QUESTIONS', payload);
	},
};
