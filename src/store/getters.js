export default {
	isUserInfoDone: state => state.user.isUserInfoDone,
	allTestsCount: state => state.tests.length,

	medicalFormComplete: (state, getters) => true, // TODO Убрать
	// return getters.allTestsCount === getters.completedTestsCount;

	completedTestsCount: state => {
		if (typeof state.tests === 'undefined' || state.tests.length === 0) {
			return 0;
		}

		let count = 0;

		state.tests.forEach(test => {
			if (
				typeof test.questions !== 'undefined' &&
				test.questions.length > 0
			) {
				let completed = true;

				test.questions.forEach(question => {
					if (typeof question.weight === 'undefined') {
						completed = false;
					}
				});

				if (completed) {
					count += 1;
				}
			}
		});

		return count;
	},

	answersDataForPortalApi: (state, getters) => {
		if (
			!getters.medicalFormComplete ||
			(typeof state.tests === 'undefined' || state.tests.length === 0)
		) {
			return [];
		}

		const answersData = [];

		state.tests.forEach(test => {
			if (
				typeof test.questions !== 'undefined' &&
				test.questions.length > 0
			) {
				test.questions.forEach(question => {
					if (
						typeof question.weight !== 'undefined' &&
						typeof question.examinationQuestionId !== 'undefined'
					) {
						let tAnswer;

						question.answers.forEach(answer => {
							if (answer.weight === question.weight) {
								tAnswer = answer;
							}
						});

						if (
							tAnswer &&
							typeof tAnswer.examinationVariantId !== 'undefined'
						) {
							answersData.push({
								questionId: question.examinationQuestionId,
								variants: [tAnswer.examinationVariantId],
							});
						}
					}
				});
			}
		});

		return answersData;
	},
};
