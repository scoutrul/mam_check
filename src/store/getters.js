export default {
	isUserInfoDone: state => state.user.isUserInfoDone,
	allTestsCount: state => state.tests.length,
	dispAvailable: state => {
		return (state.user.birthYear - 1920) %3 === 0
	}
};
