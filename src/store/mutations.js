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
		const { testId, answerIndex, weight } = payload;
		state.tests = state.tests.map(item => {
			if (item.id === testId) {
				item.questions[answerIndex] = {
					...item.questions[answerIndex],
					weight,
				};
				item.currentStep = payload.currentStep;
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
	SET_WEIGHT: (state, payload) => {
		state.user.weight = payload;
	},
	SET_HEIGHT: (state, payload) => {
		state.user.height = payload;
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
		// TODO
		const { questionsCount, completedQuestionsCount } = payload;
		
		const kef = (questionsCount / 100);
		const profileProgress = completedQuestionsCount * kef;
		state.user = {
			...state.user,
			profileProgress: round(profileProgress, 2),
		};
	},
};
