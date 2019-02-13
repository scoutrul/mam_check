export default {
	SET_TESTS: (state, payload) => {
		state.tests = payload;
	},
	ADD_TEST: (state, payload) => {
		state.tests.push(payload);
	},
	SET_GENDER: (state, payload) => {
		state.user.push(payload);
	},
	SAVE_PRETEST: (state, payload) => {
		state.user = { ...state.user, ...payload };
	},
};
