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
};
