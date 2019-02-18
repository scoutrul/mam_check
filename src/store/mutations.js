export default {
	STORE_TESTS: (state, payload) => {
		state.tests = payload;
	},
	STORE_CURRENT_TEST: (state, payload) => {
		const newTestsArr = state.tests.map(item => {
			if (item.id === payload.id) {
				item.questions = payload.questions;
			}
			return item;
		});

		state.tests = newTestsArr;
	},
	STORE_TEST_ANSWER: (state, payload) => {
		const { testId, answerIndex, weight } = payload;
		const newTestsArr = state.tests.map(item => {
			if (item.id === testId) {
				item.questions[answerIndex] = {
					...item.questions[answerIndex],
					weight,
				};
				item.currentStep = payload.currentStep;
			}
			return item;
		});

		state.tests = newTestsArr;
	},
	SET_GENDER: (state, payload) => {
		state.user.gender = payload;
	},
	SET_BIRTHDAY: (state, payload) => {
		state.user.birthday = payload;
	},
	SET_WEIGHT: (state, payload) => {
		state.user.weight = payload;
	},
	SET_HEIGHT: (state, payload) => {
		state.user.height = payload;
	},
	RESET_TEST_QUESTIONS: (state, payload) => {
		const { id } = payload;
		const updatedTest = state.tests.map(item => {
			if (item.id === id) {
				item.currentStep = 1;
			}
			return item;
		});
		state.tests = updatedTest;
	},
	SET_TREATMENTS: (state, payload) => {
		const { id, treatment } = payload;
		const updatedTest = state.tests.map(item => {
			item.treatment = '';
			if (item.id === id) {
				item.treatment = treatment;
			}
			return item;
		});
		state.tests = updatedTest;
	}
};
