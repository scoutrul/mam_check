export default {
	STORE_TESTS: (state, payload) => {
		state.tests = payload;
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
