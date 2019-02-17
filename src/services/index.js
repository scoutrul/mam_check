import fakeApi from '@/services/fakeApi';
import store from '../store';

export default {
	fetchMedicalTests() {
		fakeApi.getMedicalTests().then(tests => {
			store.dispatch('store_tests', tests);
		});
	},
	fetchTestQuestions({ id }) {
		fakeApi.getQuestionsByTestId({ id }).then(item => {
			store.dispatch('store_current_test', item);
		});
	},
};
