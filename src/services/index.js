import fakeApi from '@/services/fakeApi';
import store from '../store';
import SpeechService from './speech.service';

export { SpeechService };
export default {
	async fetchMedicalTests() {
		await fakeApi.getMedicalTests().then(tests => {
			store.dispatch('get_tests', tests);
		});
	},
	async fetchTestQuestions({ id }) {
		await fakeApi.getQuestionsByTestId({ id }).then(item => {
			const testItem = { id, questions: item };

			store.dispatch('store_current_test', testItem);
		});
	},
};
