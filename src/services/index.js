import fakeApi from '@/services/fakeApi';
import store from '../store';

export default {
	fetchMedicalTests() {
		fakeApi.getMedicalTests().then(tests => {
			store.dispatch('get_tests', tests);
		});
	},
	fetchTestQuestions({ id }) {
		fakeApi.getQuestionsByTestId({ id }).then(item => {
			const testItem = { id, questions: item };

			store.dispatch('store_current_test', testItem);
		});
	},
};
