import axios from 'axios';

const api = axios.create({
	baseURL: 'https://medaboutme.ru/partners/api/json',
});

export default {
	/**
	 * Отправить ответы и получить анкету
	 *
	 * @param answers
	 * @param birthday В формате d.m.Y
	 * @param gender M или F
	 * @param grow
	 * @param weight
	 * @returns {Promise<void>}
	 */
	setMedicalTestAnswers: ({ answers, birthday, gender, grow, weight }) =>
		new Promise((resolve, reject) => {
			api({
				url: '/medtest/answer/add/',
				method: 'POST',
				data: {
					answers,
					birthday,
					gender,
					grow,
					weight,
					testId: 111,
				},
			})
				.then(response => {
					console.log(response);

					if (response.data.result === 'success') {
						return resolve(response.data.data.answer);
					}

					return reject(response.data.message);
				})
				.catch(error => {
					reject(error);
				});
		}),
};
