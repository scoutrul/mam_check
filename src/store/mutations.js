import round from 'lodash/round';

export default {
	STORE_TESTS: (state, payload) => {
		state.tests = payload;
	},
	STORE_CURRENT_TEST: (state, payload) => {
		state.tests = state.tests.map(item => {
			if (item.id === payload.id) {
				item.questions = payload.questions;
			}
			return item;
		});
	},
	STORE_TEST_ANSWER: (state, payload) => {
		const { testId, answerIndex, weight, currentStep } = payload;
		state.tests = state.tests.map(item => {
			if (item.id === testId) {
				item.questions[answerIndex] = {
					...item.questions[answerIndex],
					weight,
				};
				item.currentStep = currentStep;
			}
			return item;
		});
	},
	SET_GENDER: (state, payload) => {
		state.user.gender = payload;
	},
	SET_BIRTHYEAR: (state, payload) => {
		state.user.birthYear = payload;
	},
	SET_BIRTHMONTH: (state, payload) => {
		state.user.birthMonth = payload;
	},
	SET_BIRTHDAY: (state, payload) => {
		state.user.birthDay = payload;
	},
	SET_WEIGHT: (state, payload) => {
		state.user.weight = payload;
	},
	SET_GROW: (state, payload) => {
		state.user.grow = payload;
	},
	RESET_TEST_QUESTIONS: (state, payload) => {
		const { id } = payload;
		state.tests = state.tests.map(item => {
			if (item.id === id) {
				item.currentStep = 1;
			}
			return item;
		});
	},
	SET_TREATMENTS: (state, payload) => {
		const { recommendations, treatment, id, color } = payload;

		state.tests = state.tests.map(item => {
			if (item.id === id) {
				item.treatment = treatment;
				item.recommendations = recommendations;
				item.color = color;
			}
			return item;
		});
	},
	COUNT_PROFILE_PROGRESS: (state, payload) => {
		const { questionsCount, completedQuestionsCount } = payload;

		const profileProgress = round(
			completedQuestionsCount * (100 / questionsCount),
			0,
		);
		state.user = {
			...state.user,
			questionsCount,
			completedQuestionsCount,
			profileProgress,
		};
	},
};
