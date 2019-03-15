/* eslint-disable no-unused-vars */
import fakeApi from '@/services/fakeApi';
import services from '@/services';
import each from 'lodash/each';

export default {
	SET_GENDER: (store, payload) => {
		store.commit('SET_GENDER', payload);
	},
	SET_BIRTHYEAR: (store, payload) => {
		store.commit('SET_BIRTHYEAR', payload);
	},
	SET_BIRTHMONTH: (store, payload) => {
		store.commit('SET_BIRTHMONTH', payload);
	},
	SET_BIRTHDAY: (store, payload) => {
		store.commit('SET_BIRTHDAY', payload);
	},
	SET_WEIGHT: (store, payload) => {
		store.commit('SET_WEIGHT', payload);
	},
	SET_GROW: (store, payload) => {
		store.commit('SET_GROW', payload);
	},
	get_tests: store => {
		if (store.getters.allTestsCount < 1) {
			fakeApi.getMedicalTests().then(tests => {
				store.commit('STORE_TESTS', tests);
				each(tests, test => {
					services.fetchTestQuestions({ id: test.id });
				});
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
	set_treatments: ({ commit }, payload) => {
		commit('SET_TREATMENTS', payload);
	},
	count_profile_progress: ({ commit }, payload) => {
		commit('COUNT_PROFILE_PROGRESS', payload);
	},
};
