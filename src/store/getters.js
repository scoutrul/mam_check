export default {
	isUserInfoDone: state => state.user.isUserInfoDone,
	allTestsCount: state => state.tests.length,
	dispAvailable: state => (state.user.birthYear - 1920) % 3 === 0,

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
		if (typeof state.tests === 'undefined' || state.tests.length === 0) {
			return [];
		}

		const answersData = [];

		state.tests.forEach(test => {
			if (
				typeof test.questions !== 'undefined' &&
				test.questions.length > 0
			) {
				test.questions.forEach(question => {
					if (typeof question.examinationQuestionId !== 'undefined') {
						switch (question.type) {
							case 'variant':
								if (typeof question.weight !== 'undefined') {
									let tAnswer;

									question.answers.forEach(answer => {
										if (answer.weight === question.weight) {
											tAnswer = answer;
										}
									});

									if (
										tAnswer &&
										typeof tAnswer.examinationVariantId !==
											'undefined'
									) {
										answersData.push({
											questionId:
												question.examinationQuestionId,
											variants: [
												tAnswer.examinationVariantId,
											],
										});
									}
								}

								break;
							case 'string':
								answersData.push({
									questionId: question.examinationQuestionId,
									string: 'test',
								});

								break;

							case 'list':
								answersData.push({
									questionId: question.examinationQuestionId,
									answer: {
										diseases: [
											'Рак желудка',
											'Рак кишечника',
										],
									},
								});

								break;

							default:
								break;
						}
					}
				});
			}
		});

		return answersData;
	},
};
