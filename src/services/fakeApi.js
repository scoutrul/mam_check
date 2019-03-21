/**
 * Если нужно что-то сделать, но апи ещё не готово
 */
const TESTS_DATA = [
	{
		id: 1,
		name: 'Здоровье сердца',
		shortDescription:
			'Тест на выявление рисков работы сердечно-сосудистой системы',
		description:
			'Сердечно-сосудистые заболевания остаются главной угрозой нашему здоровью. Пройдя этот тест, Вы узнаете, здорово ли Ваше сердце, существует ли риск развития его заболеваний в ближайшие годы и что нужно делать, чтобы этот риск минимизировать.',
		questionsNum: 10,
		shortName: 'heart',
	},
	{
		id: 2,
		name: 'Мозговое кровообращение',
		shortDescription: 'Тест на выявление проблем в мозговом кровообращении',
		description:
			'Нарушение мозгового кровообращения – грозное заболевание, которое часто оставляет человека инвалидом. Но оно не подкрадывается за один день! Ответив на вопросы теста, Вы не только познакомитесь с клиническими проявлениями заболевания, но и узнаете о мерах профилактики его возникновения.',
		questionsNum: 10,
		shortName: 'brain',
	},
	{
		id: 4,
		name: 'Здоровое дыхание',
		shortDescription: 'Тест на выявление проблем в органах дыхания',
		description:
			'Легкие – один из самых ранимых органов современного человека, особенно- горожанина. Пройдя данный тест, Вы узнаете больше о здоровье своих легких: о том, как его сохранить, а если есть проблемы – как их нужно преодолевать. ',
		questionsNum: 10,
		shortName: 'lungs',
	},
	{
		id: 5,
		name: 'Мочеполовая система',
		shortDescription: 'Тест на выявление проблем моче-половой системы',
		description:
			'Проблемах данной системы не принято громко обсуждать с друзьями, знакомыми, и даже к врачам с ними часто идут неохотно и в самом крайнем случае. Но ведь и для этих заболеваний успех лечения определяется ранним его началом! Пройдите этот тест и узнайте – не пора ли Вам обратиться к урологу?',
		questionsNum: 10,
		shortName: 'kidney',
	},
	{
		id: 6,
		name: 'Вредные привычки',
		shortDescription: 'Тест на выявлений проблем с алкоголем',
		description:
			'У нас любят вспоминать, что еще в ХI веке Князь Владимир Святославович изрек: «Веселье Руси есть пити, не можем без этого быти!» Но на самом деле, алкоголь – злейший враг нашего здоровья. А каковы Ваши «взаимоотношения» с алкоголем, и не вредит ли это Вам? Об этом Вы узнаете, пройдя наш тест.',
		questionsNum: 10,
		shortName: 'harmful',
	},
	{
		id: 7,
		name: 'Здоровый образ жизни',
		shortDescription: 'Общий тест на определение состояния вашего здоровья',
		description:
			'О том, что здоровый образ жизни – основа профилактики важнейших опасных заболеваний, знают все. А является ли здоровым Ваш образ жизни и все ли Вы делаете, чтобы продлить свое активное долголетие? Об этом Вы узнаете, ответив на вопросы этого теста.',
		questionsNum: 10,
		shortName: 'healthy',
	},
	{
		id: 3,
		name: 'Что еще важно знать',
		shortDescription: 'Тест на выявление возможных онкологий',
		description:
			'Возможности онкологии в спасении жизни человека за последние два десятилетия выросли колоссально. Но, по-прежнему, благоприятный прогноз возможен только при раннем выявлении онкологических заболеваний. Ответив на несколько простых вопросов, Вы узнаете какие исследования нужно пройти, чтобы своевременно выявить возможное наличие грозной болезни на ранней стадии',
		questionsNum: 10,
		shortName: 'cancer',
	},
];

export default {
	getMedicalTests: () =>
		new Promise((resolve, reject) => {
			setTimeout(() => {
				const test = TESTS_DATA;

				if (test) {
					return resolve(test);
				}
				return reject(new Error('ОШИБКА'));
			}, 500);
		}),
	getMedicalTest: ({ id }) =>
		new Promise((resolve, reject) => {
			setTimeout(() => {
				const test = TESTS_DATA.find(item => item.id === id);

				if (test) {
					return resolve(test);
				}
				return reject(new Error('Тест не найден'));
			}, 500);
		}),

	getQuestionsByTestId: ({ id }) =>
		new Promise((resolve, reject) => {
			setTimeout(() => {
				const questions = [
					{
						// name: 'Коронарная недостаточность',
						testId: 1,
						items: [
							{
								id: 1,
								name:
									'Говорил ли Вам когда-либо врач, что у Вас повышенное артериальное давление (140/90 мм рт.ст. и выше)?',
								type: 'variant',
								examinationQuestionId: 1071,
								answers: [
									{
										id: 1,
										type: 'variant',
										title: 'Да',
										weight: 6,
										examinationVariantId: 2857,
									},
									{
										id: 2,
										type: 'variant',
										title: 'Нет',
										weight: 0,
										examinationVariantId: 2858,
									},
								],
							},
							{
								id: 2,
								name:
									'Принимаете ли Вы препараты для снижения артериального давления?',
								type: 'variant',
								examinationQuestionId: 1072,
								answers: [
									{
										id: 1,
										type: 'variant',
										title: 'Да',
										weight: -6,
										examinationVariantId: 2859,
									},
									{
										id: 2,
										type: 'variant',
										title: 'Нет',
										weight: 0,
										examinationVariantId: 2860,
									},
								],
							},
							{
								id: 3,
								name: 'Курите ли Вы?',
								type: 'variant',
								examinationQuestionId: 1102,
								answers: [
									{
										id: 1,
										type: 'variant',
										title: 'Да',
										weight: 2,
										examinationVariantId: 2918,
									},
									{
										id: 2,
										type: 'variant',
										title: 'Нет',
										weight: 0,
										examinationVariantId: 2919,
									},
								],
							},
							{
								id: 4,
								name:
									'Был ли инфаркт миокарда  у Ваших родителей: у матери до 65 лет, у отца до 55 лет?',
								type: 'variant',
								examinationQuestionId: 1087,
								answers: [
									{
										id: 1,
										type: 'variant',
										title: 'Да',
										weight: 1,
										examinationVariantId: 2887,
									},
									{
										id: 2,
										type: 'variant',
										title: 'Нет',
										weight: 0,
										examinationVariantId: 2888,
									},
								],
							},
							{
								id: 5,
								name:
									'Ходите ли Вы пешком в среднем и высоком темпе за день 30 минут и более?',
								type: 'variant',
								answers: [
									{
										id: 1,
										type: 'variant',
										title: 'Да',
										weight: 0,
									},
									{
										id: 2,
										type: 'variant',
										title: 'Нет',
										weight: 4,
									},
								],
							},
							{
								id: 6,
								name:
									'Говорил ли Вам врач, что у Вас повышен холестерин в крови?',
								type: 'variant',
								examinationQuestionId: 1083,
								answers: [
									{
										id: 1,
										type: 'variant',
										title: 'Да',
										weight: 6,
										examinationVariantId: 2879,
									},
									{
										id: 2,
										type: 'variant',
										title: 'Нет',
										weight: 0,
										examinationVariantId: 2880,
									},
								],
							},
							{
								id: 7,
								name:
									'Принимаете ли Вы лекарства для снижения уровня холестерина?',
								type: 'variant',
								examinationQuestionId: 1084,
								answers: [
									{
										id: 1,
										type: 'variant',
										title: 'Да',
										weight: -6,
										examinationVariantId: 2881,
									},
									{
										id: 2,
										type: 'variant',
										title: 'Нет',
										weight: 0,
										examinationVariantId: 2882,
									},
								],
							},
							{
								id: 8,
								name:
									'Возникают ли у Вас боль, ощущение тяжести, сдавления или жжения за грудиной или в левой половине грудной клетки во время подъма по лестнице, ходьбы быстрым шагом или при выходе на холод?',
								type: 'variant',
								examinationQuestionId: 1089,
								answers: [
									{
										id: 1,
										type: 'variant',
										title: 'Да',
										weight: 20,
										examinationVariantId: 2891,
									},
									{
										id: 2,
										type: 'variant',
										title: 'Нет',
										weight: 0,
										examinationVariantId: 2892,
									},
								],
							},
							{
								id: 9,
								name:
									'Исчезает ли эта боль или эти ощущения в течение примерно 10 минут, если Вы останавливаетесь?',
								type: 'variant',
								examinationQuestionId: 1090,
								answers: [
									{
										id: 1,
										type: 'variant',
										title: 'Да',
										weight: 20,
										examinationVariantId: 2893,
									},
									{
										id: 2,
										type: 'variant',
										title: 'Нет',
										weight: 0,
										examinationVariantId: 2895,
									},
								],
							},
							{
								id: 10,
								name:
									'Говорил ли Вам когда-либо врач, что у Вас имеется стенокардия?',
								type: 'variant',
								examinationQuestionId: 1073,
								answers: [
									{
										id: 1,
										type: 'variant',
										title: 'Да',
										weight: 60,
										examinationVariantId: 2861,
									},
									{
										id: 2,
										type: 'variant',
										title: 'Нет',
										weight: 0,
										examinationVariantId: 2862,
									},
								],
							},
							{
								id: 11,
								name:
									'Говорил ли Вам когда-либо врач, что Вы перенесли инфаркт миокарда?',
								type: 'variant',
								examinationQuestionId: 1085,
								answers: [
									{
										id: 1,
										type: 'variant',
										title: 'Да',
										weight: 1000,
										examinationVariantId: 2883,
									},
									{
										id: 2,
										type: 'variant',
										title: 'Нет',
										weight: 0,
										examinationVariantId: 2884,
									},
								],
							},
						],
					},
					{
						// name: 'Мозговое кровообращение',
						testId: 2,
						items: [
							{
								id: 1,
								name:
									'Были ли сосудистые катастрофы (инфаркт миокарда или инсульт) у Ваших родителей: у матери до 65 лет, а у отца до 55 лет?',
								type: 'variant',
								examinationQuestionId: 1087,
								answers: [
									{
										id: 1,
										type: 'variant',
										title: 'Да',
										weight: 1,
										examinationVariantId: 2887,
									},
									{
										id: 2,
										type: 'variant',
										title: 'Нет',
										weight: 0,
										examinationVariantId: 2888,
									},
								],
							},
							{
								id: 2,
								name: 'Курите ли Вы?',
								type: 'variant',
								answers: [
									{
										id: 1,
										type: 'variant',
										title: 'Да',
										weight: 2,
									},
									{
										id: 2,
										type: 'variant',
										title: 'Нет',
										weight: 0,
									},
								],
							},
							{
								id: 3,
								name:
									'Связана ли Ваша жизнь с частыми стрессами и волнениями?',
								type: 'variant',
								answers: [
									{
										id: 1,
										type: 'variant',
										title: 'Да',
										weight: 4,
									},
									{
										id: 2,
										type: 'variant',
										title: 'Нет',
										weight: 0,
									},
								],
							},
							{
								id: 4,
								name:
									'Выявлялось ли у Вас повышение артериального давления до 140/90 мм рт.ст. и более?',
								type: 'variant',
								examinationQuestionId: 1071,
								answers: [
									{
										id: 1,
										type: 'variant',
										title: 'Да',
										weight: 6,
										examinationVariantId: 2857,
									},
									{
										id: 2,
										type: 'variant',
										title: 'Нет',
										weight: 0,
										examinationVariantId: 2858,
									},
								],
							},
							{
								id: 5,
								name:
									'Отмечались ли случаи, когда у Вас внезапно возникала кратковременная слабость, нарушение движения в одной руке или ноге либо одновременно в руке и ноге?',
								type: 'variant',
								examinationQuestionId: 1091,
								answers: [
									{
										id: 1,
										type: 'variant',
										title: 'Да',
										weight: 20,
										examinationVariantId: 2896,
									},
									{
										id: 2,
										type: 'variant',
										title: 'Нет',
										weight: 0,
										examinationVariantId: 2897,
									},
								],
							},
							{
								id: 6,
								name:
									'Возникала ли у Вас  внезапное беспричинное кратковременное онемение и потеря чувствительности в одной руке, ноге или половине лица?',
								type: 'variant',
								examinationQuestionId: 1092,
								answers: [
									{
										id: 1,
										type: 'variant',
										title: 'Да',
										weight: 20,
										examinationVariantId: 2898,
									},
									{
										id: 2,
										type: 'variant',
										title: 'Нет',
										weight: 0,
										examinationVariantId: 2899,
									},
								],
							},
							{
								id: 7,
								name:
									'Случалась ли у Вас внезапная кратковременная потеря зрения на один глаз или выпадение поля зрения?',
								type: 'variant',
								examinationQuestionId: 1093,
								answers: [
									{
										id: 1,
										type: 'variant',
										title: 'Да',
										weight: 20,
										examinationVariantId: 2900,
									},
									{
										id: 2,
										type: 'variant',
										title: 'Нет',
										weight: 0,
										examinationVariantId: 2901,
									},
								],
							},
							{
								id: 8,
								name:
									'Бывали ли у Вас внезапные головокружение или неустойчивость при ходьбе, в связи с чем Вы не могли идти, садились, ложились, обращались за посторонней помощью или вызывали "Скорую помощь"?',
								type: 'variant',
								examinationQuestionId: 1074,
								answers: [
									{
										id: 1,
										type: 'variant',
										title: 'Да',
										weight: 20,
										examinationVariantId: 2863,
									},
									{
										id: 2,
										type: 'variant',
										title: 'Нет',
										weight: 0,
										examinationVariantId: 2864,
									},
								],
							},
							{
								id: 9,
								name:
									'Говорил ли Вам когда либо врач, что у Вас есть хроническая цереброваскулярная недостаточность?',
								type: 'variant',
								answers: [
									{
										id: 1,
										type: 'variant',
										title: 'Да',
										weight: 100,
									},
									{
										id: 2,
										type: 'variant',
										title: 'Нет',
										weight: 0,
									},
								],
							},
							{
								id: 10,
								name:
									'Ставился ли Вам ранее диагноз: острое нарушение мозгового кровообращения (инсульт)?',
								type: 'variant',
								examinationQuestionId: 1086,
								answers: [
									{
										id: 1,
										type: 'variant',
										title: 'Да',
										weight: 1000,
										examinationVariantId: 2885,
									},
									{
										id: 2,
										type: 'variant',
										title: 'Нет',
										weight: 0,
										examinationVariantId: 2886,
									},
								],
							},
						],
					},
					{
						// name: 'Онкологические риски',
						testId: 3,
						items: [
							{
								id: 1,
								name: 'Беспокоит ли Вас длительный кашель?',
								type: 'variant',
								answers: [
									{
										id: 1,
										type: 'variant',
										title: 'Да',
										weight: 1,
									},
									{
										id: 2,
										type: 'variant',
										title: 'Нет',
										weight: 0,
									},
								],
							},
							{
								id: 2,
								name:
									'Отмечались ли у Вас эпизоды кровохарканья?',
								type: 'variant',
								examinationQuestionId: 1096,
								answers: [
									{
										id: 1,
										type: 'variant',
										title: 'Да',
										weight: 1,
										examinationVariantId: 2906,
									},
									{
										id: 2,
										type: 'variant',
										title: 'Нет',
										weight: 0,
										examinationVariantId: 2907,
									},
								],
							},
							{
								id: 3,
								name:
									'Беспокоят ли Вас боли в области желудка?',
								type: 'variant',
								examinationQuestionId: 1097,
								answers: [
									{
										id: 1,
										type: 'variant',
										title: 'Да',
										weight: 10,
										examinationVariantId: 2908,
									},
									{
										id: 2,
										type: 'variant',
										title: 'Нет',
										weight: 0,
										examinationVariantId: 2909,
									},
								],
							},
							{
								id: 4,
								name:
									'Беспокоит ли Вас немотивированное отсутствие аппетита?',
								type: 'variant',
								examinationQuestionId: 1097,
								answers: [
									{
										id: 1,
										type: 'variant',
										title: 'Да',
										weight: 10,
										examinationVariantId: 2908,
									},
									{
										id: 2,
										type: 'variant',
										title: 'Нет',
										weight: 0,
										examinationVariantId: 2909,
									},
								],
							},
							{
								id: 5,
								name:
									'Отмечаете ли Вы быстрое снижение веса без видимой причины?',
								type: 'variant',
								examinationQuestionId: 1099,
								answers: [
									{
										id: 1,
										type: 'variant',
										title: 'Да',
										weight: 10,
										examinationVariantId: 2912,
									},
									{
										id: 2,
										type: 'variant',
										title: 'Нет',
										weight: 0,
										examinationVariantId: 2913,
									},
								],
							},
							{
								id: 6,
								name:
									'Бывал ли у Вас черный дегтеобразный дурно пахнущий жидкий стул?',
								type: 'variant',
								examinationQuestionId: 1098,
								answers: [
									{
										id: 1,
										type: 'variant',
										title: 'Да',
										weight: 10,
										examinationVariantId: 2910,
									},
									{
										id: 2,
										type: 'variant',
										title: 'Нет',
										weight: 0,
										examinationVariantId: 2911,
									},
								],
							},
							{
								id: 7,
								name:
									'Беспокоит ли Вас боль в области заднего прохода?',
								type: 'variant',
								examinationQuestionId: 1100,
								answers: [
									{
										id: 1,
										type: 'variant',
										title: 'Да',
										weight: 100,
										examinationVariantId: 2914,
									},
									{
										id: 2,
										type: 'variant',
										title: 'Нет',
										weight: 0,
										examinationVariantId: 2915,
									},
								],
							},
							{
								id: 8,
								name: 'Замечали ли Вы у себя кровь в стуле?',
								type: 'variant',
								examinationQuestionId: 1101,
								answers: [
									{
										id: 1,
										type: 'variant',
										title: 'Да',
										weight: 100,
										examinationVariantId: 2916,
									},
									{
										id: 2,
										type: 'variant',
										title: 'Нет',
										weight: 0,
										examinationVariantId: 2917,
									},
								],
							},
							{
								id: 9,
								name:
									'Беспокоит ли Вас затрудненное мочеиспускание или ощущение неполного опорожнения мочевого пузыря?',
								type: 'variant',
								answers: [
									{
										id: 1,
										type: 'variant',
										title: 'Да',
										weight: 1000,
									},
									{
										id: 2,
										type: 'variant',
										title: 'Нет',
										weight: 0,
									},
								],
							},
							{
								id: 10,
								name:
									'Отмечали ли хотя бы один эпизод появление крови в моче?',
								type: 'variant',
								answers: [
									{
										id: 1,
										type: 'variant',
										title: 'Да',
										weight: 1000,
									},
									{
										id: 2,
										type: 'variant',
										title: 'Нет',
										weight: 0,
									},
								],
							},
							{
								id: 11,
								name:
									'Выявлялись ли онкологические заболевания хотя бы у одного из Ваших близких родственников (родители, дети, братья, сестры) в молодом или среднем возрасте, у двух и более близких родственников в любом возрасте или в нескольких поколениях?',
								examinationQuestionId: 1088,
								type: 'variant',
								answers: [
									{
										id: 1,
										type: 'variant',
										title: 'Да',
										weight: 10000,
										examinationVariantId: 2889,
									},
									{
										id: 2,
										type: 'variant',
										title: 'Нет',
										weight: 0,
										examinationVariantId: 2890,
									},
								],
							},
							{
								id: 12,
								name:
									'Ставился ли Вам ранее диагноз онкологического заболевания?',
								type: 'variant',
								examinationQuestionId: 1081,
								answers: [
									{
										id: 1,
										type: 'variant',
										title: 'Да',
										weight: 100000,
										examinationVariantId: 2877,
									},
									{
										id: 2,
										type: 'variant',
										title: 'Нет',
										weight: 0,
										examinationVariantId: 2878,
									},
								],
							},
							{
								id: 13,
								name: 'Если да, то какое?',
								type: 'list',
								examinationQuestionId: 1082,
								answers: [
									{
										id: 1,
										title: 'Рак желудка',
									},
									{
										id: 2,
										title: 'Рак кишечника',
									},
									{
										id: 3,
										title: 'Рак предстательной железы',
										gender: 'male',
									},
									{
										id: 4,
										title: 'Рак молочной железы',
										gender: 'female',
									},
									{
										id: 5,
										title: 'Рак матки',
										gender: 'female',
									},
									{
										id: 6,
										title: 'Полипы желудка',
									},
									{
										id: 7,
										title: 'Полипы кишеника',
									},
									{
										id: 8,
										title: 'Аденоматоз кишечника',
									},
									{
										id: 9,
										title:
											'Рак ректосигмоидного соедидального соединения, прямой кишки, анального прохода (ануса) и анального канала',
									},
									{
										id: 10,
										title: 'Другой тип рака',
									},
								],
							},
						],
					},
					{
						// name: 'Здоровье лёгких',
						testId: 4,
						items: [
							{
								id: 1,
								name: 'Беспокоит ли Вас кашель?',
								type: 'variant',
								answers: [
									{
										id: 1,
										type: 'variant',
										title: 'Да',
										weight: 10,
									},
									{
										id: 2,
										type: 'variant',
										title: 'Нет',
										weight: 0,
									},
								],
							},
							{
								id: 2,
								name:
									'Сопровождается ли кашель отхождение мокроты?',
								type: 'variant',
								answers: [
									{
										id: 1,
										type: 'variant',
										title: 'Да',
										weight: 10,
									},
									{
										id: 2,
										type: 'variant',
										title: 'Нет',
										weight: 0,
									},
								],
							},
							{
								id: 3,
								name:
									'Если кашель с мокротой, продолжается ли он в течение минимум последних двух лет более трех месяцев в году?',
								type: 'variant',
								examinationQuestionId: 1094,
								answers: [
									{
										id: 1,
										type: 'variant',
										title: 'Да',
										weight: 50,
										examinationVariantId: 2902,
									},
									{
										id: 2,
										type: 'variant',
										title: 'Нет',
										weight: 0,
										examinationVariantId: 2903,
									},
								],
							},
							{
								id: 4,
								name:
									'Беспокоит ли Вас одышка при физической нагрузке или при выходе на холод?',
								type: 'variant',
								answers: [
									{
										id: 1,
										type: 'variant',
										title: 'Да',
										weight: 10,
									},
									{
										id: 2,
										type: 'variant',
										title: 'Нет',
										weight: 0,
									},
								],
							},
							{
								id: 5,
								name:
									'Отмечаете ли Вы периодически свистящие хрипы в груди при дыхании или затрудненный выдох по свистом?',
								type: 'variant',
								examinationQuestionId: 1095,
								answers: [
									{
										id: 1,
										type: 'variant',
										title: 'Да',
										weight: 50,
										examinationVariantId: 2904,
									},
									{
										id: 2,
										type: 'variant',
										title: 'Нет',
										weight: 0,
										examinationVariantId: 2904,
									},
								],
							},
							{
								id: 6,
								name: 'Курите ли Вы?',
								type: 'variant',
								answers: [
									{
										id: 1,
										type: 'variant',
										title: 'Да',
										weight: 4,
									},
									{
										id: 2,
										type: 'variant',
										title: 'Нет',
										weight: 0,
									},
								],
							},
							{
								id: 7,
								name:
									'Если "Да", то сколько сигарет в день в среднем Вы выкуриваете?',
								type: 'variant',
								examinationQuestionId: 1103,
								answers: [
									{
										id: 1,
										type: 'variant',
										title: 'Меньше 10',
										weight: 2,
									},
									{
										id: 2,
										type: 'variant',
										title: 'Больше 10',
										weight: 0,
									},
								],
							},
							{
								id: 8,
								name:
									'Окружающие Вас люди курят и Вы вынуждены часто вдыхать табачный дым?',
								type: 'variant',
								answers: [
									{
										id: 1,
										type: 'variant',
										title: 'Да',
										weight: 2,
									},
									{
										id: 2,
										type: 'variant',
										title: 'Нет',
										weight: 0,
									},
								],
							},
							{
								id: 9,
								name:
									'Вам приходится или приходилось ранее в течение длительного времени вдыхать пары раздражающих химических веществ?',
								type: 'variant',
								answers: [
									{
										id: 1,
										type: 'variant',
										title: 'Да',
										weight: 1,
									},
									{
										id: 2,
										type: 'variant',
										title: 'Нет',
										weight: 0,
									},
								],
							},
							{
								id: 10,
								name:
									'Говорили ли Вам врачи, что у Вас имеет место хронический бронхит или бронхиальная астма?',
								type: 'variant',
								examinationQuestionId: 1075,
								answers: [
									{
										id: 1,
										type: 'variant',
										title: 'Да',
										weight: 200,
										examinationVariantId: 2865,
									},
									{
										id: 2,
										type: 'variant',
										title: 'Нет',
										weight: 0,
										examinationVariantId: 2866,
									},
								],
							},
							{
								id: 11,
								name:
									'Ставился ли Вам раньше диагноз туберкулеза?',
								type: 'variant',
								examinationQuestionId: 1076,
								answers: [
									{
										id: 1,
										type: 'variant',
										title: 'Да',
										weight: 400,
										examinationVariantId: 2867,
									},
									{
										id: 2,
										type: 'variant',
										title: 'Нет',
										weight: 0,
										examinationVariantId: 2868,
									},
								],
							},
						],
					},
					{
						// name: 'Здоровье мочеполовой системы',
						testId: 5,
						items: [
							{
								id: 1,
								name:
									'Говорил ли Вам раньше врач, что у Вас есть проблемы с почками?',
								type: 'variant',
								examinationQuestionId: 1080,
								answers: [
									{
										id: 1,
										type: 'variant',
										title: 'Да',
										weight: 1,
										examinationVariantId: 2875,
									},
									{
										id: 2,
										type: 'variant',
										title: 'Нет',
										weight: 0,
										examinationVariantId: 2876,
									},
								],
							},
							{
								id: 2,
								name:
									'Замечали ли Вы у себя на лице отеки по утрам, особенно - под глазами?',
								type: 'variant',
								answers: [
									{
										id: 1,
										type: 'variant',
										title: 'Да',
										weight: 1,
									},
									{
										id: 2,
										type: 'variant',
										title: 'Нет',
										weight: 0,
									},
								],
							},
							{
								id: 3,
								name:
									'Выявляли ли у Вас повышение диастолического (нижнего) артериального давления до 90 мм рт.ст. и выше, которое не сопровождается головной болью, тошнотой и другими неприятными симптомами?',
								type: 'variant',
								examinationQuestionId: 1071,
								answers: [
									{
										id: 1,
										type: 'variant',
										title: 'Да',
										weight: 1,
										examinationVariantId: 2857,
									},
									{
										id: 2,
										type: 'variant',
										title: 'Нет',
										weight: 0,
										examinationVariantId: 2858,
									},
								],
							},
							{
								id: 4,
								name:
									'Бывает ли у Вас чувство рези при мочеиспускании?',
								type: 'variant',
								answers: [
									{
										id: 1,
										type: 'variant',
										title: 'Да',
										weight: 10,
									},
									{
										id: 2,
										type: 'variant',
										title: 'Нет',
										weight: 0,
									},
								],
							},
							{
								id: 5,
								name:
									'Бывают ли у Вас частые позывы к мочеиспусканию (по несколько раз за час) или даже недержание мочи?',
								type: 'variant',
								answers: [
									{
										id: 1,
										type: 'variant',
										title: 'Да',
										weight: 10,
									},
									{
										id: 2,
										type: 'variant',
										title: 'Нет',
										weight: 0,
									},
								],
							},
							{
								id: 6,
								name:
									'Отмечали ли Вы ранее изменения внешнего вида мочи: изменение ее цвета, появление хлопьев, осадка и др.?',
								type: 'variant',
								answers: [
									{
										id: 1,
										type: 'variant',
										title: 'Да',
										weight: 10,
									},
									{
										id: 2,
										type: 'variant',
										title: 'Нет',
										weight: 0,
									},
								],
							},
							{
								id: 7,
								name:
									'Бывают ли у Вас какие-либо затруднения при мочеиспускании: приходится напрягаться, чтобы помочиться, струя мочи слишком слабая, может прерываться?',
								type: 'variant',
								answers: [
									{
										id: 1,
										type: 'variant',
										title: 'Да',
										weight: 100,
									},
									{
										id: 2,
										type: 'variant',
										title: 'Нет',
										weight: 0,
									},
								],
							},
							{
								id: 8,
								name:
									'Остается ли после мочиспскания желание помочиться еще или Вы снова идете в туалет раньше, чем через 2 часа?',
								type: 'variant',
								answers: [
									{
										id: 1,
										type: 'variant',
										title: 'Да',
										weight: 100,
									},
									{
										id: 2,
										type: 'variant',
										title: 'Нет',
										weight: 0,
									},
								],
							},
							{
								id: 9,
								name:
									'Встаете ли Вы по ночам, чтобы помочиться?',
								type: 'variant',
								answers: [
									{
										id: 1,
										type: 'variant',
										title: 'Да',
										weight: 100,
									},
									{
										id: 2,
										type: 'variant',
										title: 'Нет',
										weight: 0,
									},
								],
							},
						],
					},
					{
						// name: 'Алкоголь и наркотики',
						testId: 6,
						items: [
							{
								id: 1,
								name: 'Как часто Вы выпиваете алкоголь?',
								type: 'variant',
								examinationQuestionId: 1108,
								answers: [
									{
										id: 1,
										type: 'variant',
										title: 'Я не пью алкоголь совсем!',
										weight: 0,
										examinationVariantId: 2928,
									},
									{
										id: 2,
										type: 'variant',
										title: 'Не чаще, чем 1 раз в месяц',
										weight: 1,
										examinationVariantId: 2929,
									},
									{
										id: 3,
										type: 'variant',
										title: '2-4 раза в месяц',
										weight: 2,
										examinationVariantId: 2930,
									},
									{
										id: 4,
										type: 'variant',
										title: '2-3 раза в неделю',
										weight: 3,
										examinationVariantId: 2931,
									},
									{
										id: 5,
										type: 'variant',
										title: '4 раза в неделю и чаще',
										weight: 4,
										examinationVariantId: 2932,
									},
								],
							},
							{
								id: 2,
								name:
									'Сколько алкоголя Вы выпиваете обычно за один раз?',
								type: 'variant',
								examinationQuestionId: 1109,
								answers: [
									{
										id: 1,
										type: 'variant',
										title:
											'Я не пью алкоголь совсем или - в крайнем случае - не более рюмки водки или коньяка, бокала вина или бутылки пива',
										weight: 0,
										examinationVariantId: 2933,
									},
									{
										id: 2,
										type: 'variant',
										title:
											'Примерно 100 г водки или коньяка, полбутылки вина или 2 бутылки пива ',
										weight: 1,
										examinationVariantId: 2934,
									},
									{
										id: 3,
										type: 'variant',
										title:
											'Примерно стакан водки или коньяка, бутылку вина или 3-4 бутылки пива ',
										weight: 2,
										examinationVariantId: 2935,
									},
									{
										id: 4,
										type: 'variant',
										title:
											'Примерно полбутылки водки или коньяка, 1 л вина или 5 бутылок пива',
										weight: 3,
										examinationVariantId: 2936,
									},
									{
										id: 5,
										type: 'variant',
										title:
											'Более полбутылки водки или коньяка, 1 л вина или 5 бутылок пива',
										weight: 4,
										examinationVariantId: 2937,
									},
								],
							},
							{
								id: 3,
								name:
									'Как часто Вы выпиваете за один раз стакан и более водки или коньяка, бутылку и более вина или 4 и более бутылок пива?',
								type: 'variant',
								examinationQuestionId: 1110,
								answers: [
									{
										id: 1,
										type: 'variant',
										title: 'Я никогда так много не пью!',
										weight: 0,
										examinationVariantId: 2938,
									},
									{
										id: 2,
										type: 'variant',
										title:
											'Такое случае редко - не чаще 1 раза в месяц',
										weight: 1,
										examinationVariantId: 2939,
									},
									{
										id: 3,
										type: 'variant',
										title:
											'Такое случается, но не чаще, чем 1 раз в неделю',
										weight: 2,
										examinationVariantId: 2940,
									},
									{
										id: 4,
										type: 'variant',
										title: 'Это бывает 2-3 раза в неделю',
										weight: 3,
										examinationVariantId: 2941,
									},
									{
										id: 5,
										type: 'variant',
										title:
											'Это происходит ежедневно или почти ежедневно',
										weight: 4,
										examinationVariantId: 2942,
									},
								],
							},
							{
								id: 4,
								name:
									'Случалось ли Вам употреблять наркотики или психотропные средства без назначения врача за последний год?',
								type: 'variant',
								examinationQuestionId: 1107,
								answers: [
									{
										id: 1,
										type: 'variant',
										title: 'Нет',
										weight: 0,
										examinationVariantId: 2927,
									},
									{
										id: 2,
										type: 'variant',
										title: 'Да',
										weight: 20,
										examinationVariantId: 2926,
									},
								],
							},
						],
					},
					{
						// name: 'Здоровый образ жизни',
						testId: 7,
						items: [
							{
								id: 1,
								name:
									'Тратите ли Вы ежедневно на ходьбу в умеренном или быстром темпе, включая дорогу на работу и обратно, 30 минут и более?',
								type: 'variant',
								examinationQuestionId: 1104,
								answers: [
									{
										id: 1,
										type: 'variant',
										title: 'Да',
										weight: 0,
										examinationVariantId: 2921,
									},
									{
										id: 2,
										type: 'variant',
										title: 'Нет',
										weight: 1,
										examinationVariantId: 2920,
									},
								],
							},
							{
								id: 2,
								name:
									'Проходите ли Вы пешком ежедневно 3 км и более?',
								type: 'variant',
								answers: [
									{
										id: 1,
										type: 'variant',
										title: 'Да',
										weight: 0,
									},
									{
										id: 2,
										type: 'variant',
										title: 'Нет',
										weight: 1,
									},
								],
							},
							{
								id: 3,
								name:
									'Занимаетесь ли Вы регулярно (не менее 2-3 раз в неделю) фитнесом или другим подвижным видом спорта?',
								type: 'variant',
								answers: [
									{
										id: 1,
										type: 'variant',
										title: 'Да',
										weight: 0,
									},
									{
										id: 2,
										type: 'variant',
										title: 'Нет',
										weight: 1,
									},
								],
							},
							{
								id: 4,
								name:
									'Выпиваете ли Вы не менее 1,5 л воды и других напитков в день?',
								type: 'variant',
								answers: [
									{
										id: 1,
										type: 'variant',
										title: 'Да',
										weight: 0,
									},
									{
										id: 2,
										type: 'variant',
										title: 'Нет',
										weight: 10,
									},
								],
							},
							{
								id: 5,
								name:
									'Съедаете ли Вы ежедневно не менее 400 граммов (4-5 порций) фруктов и овощей, не считая картофеля?',
								type: 'variant',
								examinationQuestionId: 1105,
								answers: [
									{
										id: 1,
										type: 'variant',
										title: 'Да',
										weight: 0,
										examinationVariantId: 2922,
									},
									{
										id: 2,
										type: 'variant',
										title: 'Нет',
										weight: 10,
										examinationVariantId: 2923,
									},
								],
							},
							{
								id: 6,
								name:
									'Едите ли Вы различные рыбные блюда вместо мясных не реже 3 раз в неделю?',
								type: 'variant',
								answers: [
									{
										id: 1,
										type: 'variant',
										title: 'Да',
										weight: 0,
									},
									{
										id: 2,
										type: 'variant',
										title: 'Нет',
										weight: 10,
									},
								],
							},
							{
								id: 7,
								name:
									'Есть ли у Вас привычка подсаливать уже приготовленную пищу, даже не попробовав ее на вкус?',
								type: 'variant',
								examinationQuestionId: 1106,
								answers: [
									{
										id: 1,
										type: 'variant',
										title: 'Да',
										weight: 10,
										examinationVariantId: 2924,
									},
									{
										id: 2,
										type: 'variant',
										title: 'Нет',
										weight: 0,
										examinationVariantId: 2925,
									},
								],
							},
							{
								id: 8,
								name:
									'Употребляете ли Вы шесть и более кусков (чайных ложек) сахара, варенья, меда или других сладостей в день?',
								type: 'variant',
								answers: [
									{
										id: 1,
										type: 'variant',
										title: 'Да',
										weight: 10,
									},
									{
										id: 2,
										type: 'variant',
										title: 'Нет',
										weight: 0,
									},
								],
							},
							{
								id: 9,
								name:
									'Выкуриваете ли Вы хотя бы по одной сигарете в день?',
								type: 'variant',
								answers: [
									{
										id: 1,
										type: 'variant',
										title: 'Да',
										weight: 100,
									},
									{
										id: 2,
										type: 'variant',
										title: 'Нет',
										weight: 0,
									},
								],
							},
							{
								id: 10,
								name:
									'Отмечается ли у Вас повышение артериального давления до 140/90 мм рт.ст. и выше?',
								type: 'variant',
								examinationQuestionId: 1071,
								answers: [
									{
										id: 1,
										type: 'variant',
										title: 'Да',
										weight: 1000,
										examinationVariantId: 2857,
									},
									{
										id: 2,
										type: 'variant',
										title: 'Нет',
										weight: 0,
										examinationVariantId: 2858,
									},
								],
							},
							{
								id: 11,
								name:
									'Принимаете ли Вы препараты для снижения артериального давления?',
								type: 'variant',
								answers: [
									{
										id: 1,
										type: 'variant',
										title: 'Да',
										weight: -1000,
									},
									{
										id: 2,
										type: 'variant',
										title: 'Нет',
										weight: 0,
									},
								],
							},
							{
								id: 12,
								name:
									'Выявляли ли у Вас раньше сахарный диабет или повышенный уровень сахара в крови?',
								type: 'variant',
								examinationQuestionId: 1077,
								answers: [
									{
										id: 1,
										type: 'variant',
										title: 'Да',
										weight: 1000,
										examinationVariantId: 2869,
									},
									{
										id: 2,
										type: 'variant',
										title: 'Нет',
										weight: 0,
										examinationVariantId: 2870,
									},
								],
							},
							{
								id: 13,
								name:
									'Принимаете ли Вы препараты для снижения сахара?',
								type: 'variant',
								examinationQuestionId: 1078,
								answers: [
									{
										id: 1,
										type: 'variant',
										title: 'Да',
										weight: -1000,
										examinationVariantId: 2871,
									},
									{
										id: 2,
										type: 'variant',
										title: 'Нет',
										weight: 0,
										examinationVariantId: 2872,
									},
								],
							},
							{
								id: 14,
								name:
									'Говорил ли Вам врач, что у Вас повышен холестерин в крови?',
								type: 'variant',
								examinationQuestionId: 1083,
								answers: [
									{
										id: 1,
										type: 'variant',
										title: 'Да',
										weight: 1000,
										examinationVariantId: 2879,
									},
									{
										id: 2,
										type: 'variant',
										title: 'Нет',
										weight: 0,
										examinationVariantId: 2880,
									},
								],
							},
							{
								id: 15,
								name:
									'Принимаете ли Вы лекарства для снижения уровня холестериан?',
								type: 'variant',
								examinationQuestionId: 1084,
								answers: [
									{
										id: 1,
										type: 'variant',
										title: 'Да',
										weight: -1000,
										examinationVariantId: 2881,
									},
									{
										id: 2,
										type: 'variant',
										title: 'Нет',
										weight: 0,
										examinationVariantId: 2882,
									},
								],
							},
							{
								id: 16,
								name:
									'Выявлялись ли у Вас в прошлом заболевания желудка  (гастрит, язвенную болезнь)?',
								type: 'variant',
								examinationQuestionId: 1079,
								answers: [
									{
										id: 1,
										type: 'variant',
										title: 'Да',
										weight: 5000,
										examinationVariantId: 2873,
									},
									{
										id: 2,
										type: 'variant',
										title: 'Нет',
										weight: 0,
										examinationVariantId: 2874,
									},
								],
							},
						],
					},
				];

				const question = questions.find(item => item.testId === id);

				if (question) {
					return resolve(question.items);
				}
				return reject(new Error('Вопросы к тесту не найдены'));
			});
		}),

	getTreatmentByResult: ({ testId, answerSum }) =>
		
		new Promise((resolve, reject) => {
			setTimeout(() => {
				const treatments = [
					// Мозговое кровообращение
					{
						testId: 2,
						status: 'fine',
						sum: {
							type: 'enum',
							values: [0],
						},
						decode:
							'У Вас нет клиничеких признаков церебро-васкулярной недостаточности. Однако, не забывайте вести здоровый образ жизни, проходить пешком не менее получаса или 3 километров в день и правильно питаться - съедать ежедневно не менее 400 г фруктов и овощей. Если Вам больше 30 лет, периодически контролируйте артериальное давление, а если больше 40 лет - то и уровень холестерина крови.',
					},
					{
						testId: 2,
						status: 'normal',
						sum: {
							type: 'enum',
							values: [1],
						},
						decode:
							'У Вас нет клинических данных за наличие церебро-васкулярной недостаточности. Продолжайте вести здоровый образ жизни, много двигаться, проходя пешком не менее получаса или 3 км в день, съедать за день не менее 400 г фруктов и овощей. Избегайте вредных привычек и контролируйте уровень артериального давления. Если Вам больше 40 лет - обязательно периодически проверяйте уровень холестерина в крови. Это очень важно для Вас - с учетом семейного анамнеза.',
					},
					{
						testId: 2,
						status: 'normal',
						sum: {
							type: 'enum',
							values: [2, 3],
						},
						decode:
							'У Вас нет клинических данных за наличие церебро-васкулярной недостаточности в настоящее время, но повышен риск развития нарушения мозгового кровообращения! Очень важно для Вас отказаться от курения!  Кроме того, обязательно контролируйте уровень артериального давления. Если Вам больше 40 лет - обязательно периодически проверяйте уровень холестерина в крови. ',
					},
					{
						testId: 2,
						status: 'normal',
						sum: {
							type: 'enum',
							values: [4, 5],
						},
						decode:
							'У Вас нет клинических данных за наличие церебро-васкулярной недостаточности в настоящее время, но повышен риск развития нарушения мозгового кровообращения! Вам обязательно нужно заняться релаксацией, аутотренингом, а при необходимости - обратиться к психотерапевту или врачу-неврологу для назначения успокаивающей терапии. Контролируйте уровень артериального давления. Если Вам больше 40 лет - обязательно периодически проверяйте уровень холестерина в крови. ',
					},
					{
						testId: 2,
						status: 'normal',
						sum: {
							type: 'interval',
							values: [6, 13],
						},
						decode:
							'У Вас нет клинических данных за наличие церебро-васкулярной недостаточности в настоящее время, но достаточно высок риск развития нарушения мозгового кровообращения. Вам нужно вести здоровый образ жизни: не курить, контролировать уровень артериального давления, соблюдать режим труда и отдыха, а также спать не менее 7-9 часов в сутки. Если Вам больше 40 лет - обязательно периодически проверяйте уровень холестерина в крови. Обратитесь к врачу для профилактического обследования.',
					},
					{
						testId: 2,
						status: 'bad',
						sum: {
							type: 'interval',
							values: [20, 33],
						},
						decode:
							'Есть основания подозревать у Вас наличие церебро-васкулярной недостаточности, что является риском развития острого нарушения мозгового кровообращения. Для уточнения диагноза советуем Вам обратиться на прием к врачу-неврологу, оценить уровень артериального давления, содержанияе холестерина в крови, а также пройти ультразвуковое исследование брахиоцефальных артерий.  По результатам обследования врач даст Вам рекомендации по дальнейшим действиям. ',
					},
					{
						testId: 2,
						status: 'bad',
						sum: {
							type: 'interval',
							values: [40, 73],
						},
						decode:
							'Есть серьезные основания подозревать у Вас наличие церебро-васкулярной недостаточности, что является риском развития острого нарушения мозгового кровообращения. Для уточнения диагноза настоятельно советуем Вам как можно скорее обратиться на прием к врачу-неврологу, оценить уровень артериального давления, содержанияе холестерина в крови, а также пройти ультразвуковое исследование брахиоцефальных артерий.  По результатам обследования врач даст Вам рекомендации по дальнейшим действиям. ',
					},
					{
						testId: 2,
						status: 'bad',
						sum: {
							type: 'enum',
							values: [100, 101],
						},
						decode:
							'Есть серьезные основания подозревать у Вас наличие церебро-васкулярной недостаточности, что является риском развития острого нарушения мозгового кровообращения. Для уточнения диагноза настоятельно советуем Вам как можно скорее обратиться на прием к врачу-неврологу, оценить уровень артериального давления, содержанияе холестерина в крови, а также пройти ультразвуковое исследование брахиоцефальных артерий.  По результатам обследования врач даст Вам рекомендации по дальнейшим действиям. ',
					},
					{
						testId: 2,
						status: 'bad',
						sum: {
							type: 'interval',
							values: [102, 113],
						},
						decode:
							'У Вас есть хроническая церебро-васкулярная недостаточность. Главная задача - не допустить развития острого нарушения мозгового кровообращения. Вам необходимо наблюдаться у врача-невролога, соблюдать его предписания, включая режим труда и отдыха, а также медикаментозные назначения. Кроме того, постоянно следите за уровнем артериального давления и регулярно контролируйте уровень холестерина в крови.',
					},
					{
						testId: 2,
						status: 'bad',
						sum: {
							type: 'interval',
							values: [120, 193],
						},
						decode:
							'У Вас есть хроническая церебро-васкулярная недостаточность и существует риск ее прогрессирования. Главная задача - не допустить развития острого нарушения мозгового кровообращения. Вам необходимо наблюдаться у врача-невролога, соблюдать его предписания, включая режим труда и отдыха, а также медикаментозные назначения. Кроме того, постоянно следите за уровнем артериального давления и регулярно контролируйте уровень холестерина в крови.  ',
					},
					{
						testId: 2,
						status: 'bad',
						sum: {
							type: 'enum',
							values: [1000, 1001],
						},
						decode:
							'Вы перенесли острое нарушение мозгового кровообращения (инсульт) в прошлом. Теперь Ваша задача - не допустить его повторения. Вам необходимо наблюдаться у врача-невролога, соблюдать предписанный Вам режим труда и отдыха, программу реабилитации, аккуратно принимать назначенные препараты, постоянно следить за уровнем артериального давления и регулярно контролировать уровень холестерина в крови.',
					},
					{
						testId: 2,
						status: 'bad',
						sum: {
							type: 'interval',
							values: [1002, 1013],
						},
						decode:
							'Вы перенесли острое нарушение мозгового кровообращения (инсульт) в прошлом и существует риск его повторения. Ваша задача - не допустить этого. Вам необходимо наблюдаться у врача-невролога, соблюдать предписанный Вам режим труда и отдыха, программу реабилитации, аккуратно принимать назначенные препараты, постоянно следить за уровнем артериального давления и регулярно контролировать уровень холестерина в крови.',
					},
					{
						testId: 2,
						status: 'bad',
						sum: {
							type: 'interval',
							values: [1020, 1093],
						},
						decode:
							'Вы перенесли острое нарушение мозгового кровообращения (инсульт) в прошлом и существует высокий риск его повторения! Чтобы не допустить этого, Вам необходимо незамедлительно обратиться к врачу-неврологу для прохождения срочного обследования. Не откладывайте Ваш визит к врачу! ',
					},
					{
						testId: 2,
						status: 'bad',
						sum: {
							type: 'interval',
							values: [1100, 1113],
						},
						decode:
							'Вы перенесли острое нарушение мозгового кровообращения (инсульт) в прошлом и существует риск его повторения. Ваша задача - не допустить этого. Вам необходимо наблюдаться у врача-невролога, соблюдать предписанный Вам режим труда и отдыха, программу реабилитации, аккуратно принимать назначенные препараты, постоянно следить за уровнем артериального давления и регулярно контролировать уровень холестерина в крови.  ',
					},
					{
						testId: 2,
						status: 'bad',
						sum: {
							type: 'interval',
							values: [1120, 1193],
						},
						decode:
							'Вы перенесли острое нарушение мозгового кровообращения (инсульт) в прошлом и существует высокий риск его повторения! Чтобы не допустить этого, Вам необходимо незамедлительно обратиться к врачу-неврологу для прохождения срочного обследования. Не откладывайте Ваш визит к врачу! ',
					},

					// Алкоголь и наркотики
					{
						testId: 6,
						status: 'fine',
						sum: {
							type: 'enum',
							values: [0],
						},
						decode:
							'Поздравляем! Вы абсолютный трезвенник и трезвость - норма Вашей жизни. Возможно, Вы и позволяете себе рюмку водки или коньяка или бокал вина, но только на Новый год.  Ведите и дальше здоровый образ жизни!',
					},
					{
						testId: 6,
						status: 'normal',
						sum: {
							type: 'enum',
							values: [1, 2],
						},
						decode:
							'Вы можете выпить рюмку-другую за праздничным столом или на дне рождения у друзей. И все-таки больше того, что Вы употребляете, пить не нужно! Ведите здоровый образ жизни, проходите в день пешком 30 минут и больше или не менее 3 км, ешьте не менее 400 г фруктов и овощей в день, не курите!',
					},
					{
						testId: 6,
						status: 'normal',
						sum: {
							type: 'enum',
							values: [3, 4],
						},
						decode:
							'Говорить об алкогольной зависимости, конечно, пока рано. Но настоятельно советуем Вам пересмотреть свое отношение к алкоголю и сократить его употребление! Ведите здоровый образ жизни, проходите в день пешком 30 минут и больше или не менее 3 км, ешьте не менее 400 г фруктов и овощей в день, не курите!',
					},
					{
						testId: 6,
						status: 'bad',
						sum: {
							type: 'interval',
							values: [5, 9],
						},
						decode:
							'Как ни грустно это сообщать, но Вы слишком много пьете алкоголя.  Его потребление не только разрушает Ваше здоровье, но и может представлять опасность для Вас и Вашего окружения. Зачем Вы это делаете!? В мире так много интересного! Если же Вы не в состоянии справиться с данной проблемой сами, советуем обратиться за помощью к врачу-наркологу! ',
					},
					{
						testId: 6,
						status: 'bad',
						sum: {
							type: 'interval',
							values: [10, 12],
						},
						decode:
							'Количество алкоголя, которое Вы употребляете, опасно для Вашего здоровья. При этом Вы не только разрушаете свое здоровье, но и представляете опасность для Ваших близких. Пока не произошло беды - обратитесь за помощью к врачу-наркологу, и  он поможет Вам!',
					},
					{
						testId: 6,
						status: 'bad',
						sum: {
							type: 'interval',
							values: [20, 24],
						},
						decode:
							'Настоятельно советуем Вам обратиться на консультацию к врачу-наркологу. И чем быстрее Вы это сделаете, тем будет лучше для Вас и Вашей семьи!',
					},
					{
						testId: 6,
						status: 'bad',
						sum: {
							type: 'interval',
							values: [25, 32],
						},
						decode:
							'Настоятельно советуем Вам обратиться на консультацию к врачу-наркологу, тем более, что и количество употребляемого Вами алкоголя превышает уровень, безопасный для здоровья. И чем быстрее Вы это сделаете, тем будет лучше для Вас и Вашей семьи!',
					},

					// моче-половая система м
					{
						testId: 5,
						status: 'fine',
						sum: {
							type: 'enum',
							values: [0],
						},
						decode:
							'У Вас нет очевидных клинических признаков заболеваний моче-половой системы. Однако, даже здоровому человеку нужно проходить профилактические осмотры, включая общий анализ мочи.',
					},
					{
						testId: 5,
						status: 'bad',
						sum: {
							type: 'interval',
							values: [1, 3],
						},
						decode:
							'Возможно, у Вас есть проблемы с почками. Для уточнения диагноза Вам следует обратиться на прием в Вашу поллинику к врачу-терапевту, сдать анализ мочи и пройти ультразвуковое исследование почек.',
					},
					{
						testId: 5,
						status: 'bad',
						sum: {
							type: 'enum',
							values: [10, 20, 30],
						},
						decode:
							'Есть основания подозревать заболевание мочевого пузыря или мочеиспускательного канала. Советуем Вам обязательно сдеть анализ мочи и обратитья на прием в Вашу поликлинику.',
					},
					{
						testId: 5,
						status: 'bad',
						sum: {
							type: 'enum',
							values: [11, 12, 13, 21, 22, 23, 31, 32, 33],
						},
						decode:
							'Вполне вероятно, что у Вас есть проблемы с почками, мочевым пузырем и мочеиспускательным каналом. Вам следует сдать анализ мочи и обратиться в Вашу поликлинику. Может также потребоваться проведение ультразвукового исследования почек и другое обследование.',
					},
					{
						testId: 5,
						status: 'bad',
						sum: {
							type: 'enum',
							values: [100, 200, 300],
						},
						decode:
							'Есть основания подозревать наличие патологии предстательной железы. Чтобы подтвердить или опровергунть данное предположение, Вам следует обратиться на прием к врачу-урологу. Не откладывайте этот визит!',
					},
					{
						testId: 5,
						status: 'bad',
						sum: {
							type: 'enum',
							values: [
								101,
								102,
								103,
								201,
								202,
								203,
								301,
								302,
								303,
							],
						},
						decode:
							'Имеющаяся клиническая картина дает основание предполагать наличие заболевания почек и предстательной железы. Вам следует как можно быстрее сдать анализ мочи и обратиться на прием к врачу-урологу. В дальнейшем может потребоваться проведение ультразвкового исследования моче-половой системы и другое обследование.',
					},
					{
						testId: 5,
						status: 'bad',
						sum: {
							type: 'enum',
							values: [
								110,
								120,
								130,
								210,
								220,
								230,
								310,
								320,
								330,
							],
						},
						decode:
							'При наличии указанной симптоматики возможна патология предстательной железы, мочевого пузыря и мочеиспускательного канала. Необходимо сдать анализ мочи и обратиться на прием к врачу-урологу. И не откладывайте этот визит!',
					},
					{
						testId: 5,
						status: 'bad',
						sum: {
							type: 'enum',
							values: [
								111,
								112,
								113,
								121,
								122,
								123,
								131,
								132,
								133,
								211,
								212,
								213,
								221,
								222,
								223,
								231,
								232,
								233,
								311,
								312,
								313,
								321,
								322,
								323,
								331,
								332,
								333,
							],
						},
						decode:
							'Начилие данной симптоматики может свидетельствоать о распрстраненной патологии моче-половой системы, включая поражение почек, мочевого пузыря, мочевыносящего канала и предстательной железы. Поэтому Вам необходимо незамедлительно сдать анализ мочи и обратиться на прием к врачу-урологу. Он назначит ультразвуковое исследование моче-половой системы и другое необходимое обследование. По его результатам будет назначено лечение. Не откладывайте визит к врачу!',
					},
					// Коронарное что-то там
					{
						testId: 1,
						status: 'fine',
						sum: {
							type: 'enum',
							values: [0],
						},
						decode:
							'Данных за наличие у Вас сердечно-сосудистых заболеваний не получено. Продолжайте вести здоровый образ жизни и не забывайте проходить пешком в среднем или быстром темпе 30 и более минут или 3 км в день. Периодически контролируйте артериальное давление и уровень холестерина крови.',
					},
					{
						testId: 1,
						status: 'normal',
						sum: {
							type: 'enum',
							values: [1],
						},
						decode:
							'Продолжайте вести здоровый образ жизни, много двигаться, проходить пешком в день в среднем или высоком темпе 30 минут и более или 3 км. Избегайте вредных привычек, контролируйте уровень артериального давления и содержание холестерина в крови . Это очень важно для Вас - с учетом семейного анамнеза.',
					},
					{
						testId: 1,
						status: 'normal',
						sum: {
							type: 'enum',
							values: [2, 3],
						},
						decode:
							'У Вас повышен риск развития сердечно-сосудитстых заболеваний. Откажитесь от курения - это очень важно для Вас! Проходить пешком в день в среднем или высоком темпе 30 минут и более или 3 км. Контролируйте уровень Вашего артериального давления и обязательно периодически проверяйте уровень холестерина в крови. ',
					},
					{
						testId: 1,
						status: 'normal',
						sum: {
							type: 'enum',
							values: [4, 5],
						},
						decode:
							'У Вас повышен риск развития сердечно-сосудистых заболеваний. Вам обязательно нужно больше двигаться: в день нужно проходить пешком не менее 30 минут или 3 км. Контролируйте уровень Вашего артериального давления и обязательно периодически проверяйте уровень холестерина в крови. ',
					},
					{
						testId: 1,
						status: 'normal',
						sum: {
							type: 'enum',
							values: [
								6,
								7,
								8,
								9,
								10,
								11,
								12,
								13,
								14,
								15,
								16,
								17,
								18,
								19,
							],
						},
						decode:
							'У Вас достаточно высок риск развития сердечно-сосудистых заболеваний. Вам нужно вести здоровый образ жизни: не курить, проходить в день пешком не менее 30 минут или 3 км, контролировать уровень артериального давления и холестерина в крови. Если уровень давления 140/90 мм рт.ст. и выше, а холестерина 5,0 ммоль/л и выше - обратитесь к врачу для обследования и подбора терапии.',
					},
					{
						testId: 1,
						status: 'bad',
						sum: {
							type: 'interval',
							values: [20, 39],
						},
						decode:
							'Есть основания подозревать у Вас наличие стенокардии (грудной жабы), требуется уточнение диагноза. Советуем Вам обратиться на консультацию к врачу-кардиологу для прохождения обследования: проба с физической нагрузкой, контроль уровня холестерина в крови и другие диагностические исследования. По результатам обследования врач даст Вам рекомендации по дальнейшим действиям. ',
					},
					{
						testId: 1,
						status: 'bad',
						sum: {
							type: 'interval',
							values: [40, 59],
						},
						decode:
							'Есть очень веские основания подозревать у Вас наличие стенокардии (грудной жабы), требуется уточнение диагноза. Настоятельно советуем Вам незамедлительно обратиться на консультацию к врачу-кардиологу для прохождения обследования: проба с физической нагрузкой, контроль уровня холестерина в крови. По результатам обследования врач даст Вам рекомендации по дальнейшим действиям. ',
					},
					{
						testId: 1,
						status: 'bad',
						sum: {
							type: 'interval',
							values: [60, 119],
						},
						decode:
							'У Вас имеет место хроническая коронарная недостаточность - стенокардия (грудная жаба). Вам необходимо постоянное наблюдение врача-кардиолога с целью предотвращения прогрессирования заболевания и развития инфаркта миокарда. Если нет противопоказания, рекомендуется проведение коронарографии для решения вопроса об оперативном лечении заболевания.',
					},
					{
						testId: 1,
						status: 'bad',
						sum: {
							type: 'enum',
							values: [1000, 1001],
						},
						decode:
							'Вы перенесли инфаркт миокарда в прошлом. Теперь Ваша задача - не допустить его повторения. Вам необходимо наблюдаться у врача-кардиолога, соблюдать предписанный Вам режим труда и отдыха, аккуратно принимать назначенные  препараты, постоянно следить за уровнем артериального давления и регулярно контролировать уровень холестерина в крови.',
					},
					{
						testId: 1,
						status: 'bad',
						sum: {
							type: 'interval',
							values: [1002, 1119],
						},
						decode:
							'Вы перенесли инфаркт миокарда в прошлом и существует риск его повторения. Ваша задача - не допустить этого. Вам необходимо наблюдаться у врача-кардиолога, соблюдать предписанный Вам режим труда и отдыха, аккуратно принимать назначенные препараты, постоянно следить за уровнем артериального давления и регулярно контролировать уровень холестерина в крови.',
					},
					// Онкологии, мужчины
					{
						testId: 3,
						status: 'fine',
						sum: {
							type: 'enum',
							values: [0],
						},
						decode:
							'У Вас нет явных клинических признаков онкологических заболеваний. Но помните о пользе активного движения, правильного питания и здорового образа жизни. Не следует забывать и о регулярных диспансерных осмотрах. ',
					},
					{
						testId: 3,
						status: 'normal',
						sum: {
							type: 'enum',
							values: [1, 2],
						},
						decode:
							'Рекомендуется: консультация врача-терапевта, общий анализ крови, рентгенологическое обследование органов грудной клетки. Возможно понадобятся: компьютерная томография органов грудной клетки, бронхоскопия и другое обследование.',
					},
					{
						testId: 3,
						status: 'normal',
						sum: {
							type: 'enum',
							values: [10, 20, 30, 40],
						},
						decode:
							'Рекомендуется: консультация врача-гастроэнтеролога,  общий анализ крови, анализ кала на скрытую кровь, фиброгастроскопия, ультразвуковое исследование органов брюшной полости. Возможно понадобится и другое обследование.',
					},
					{
						testId: 3,
						status: 'normal',
						sum: {
							type: 'enum',
							values: [100, 200],
						},
						decode:
							'Рекомендуется: консультация врача-проктолога, общий анализ крови, ректоскопия. Возможно понадобится анализ кала на скрытую кровь, фиброколоноскопия и другое обследование.',
					},
					{
						testId: 3,
						status: 'normal',
						sum: {
							type: 'enum',
							values: [1000, 2000],
						},
						decode:
							'Рекомендуется: консультация врача-уролога, общие анализы крови и мочи, анализ крови на PSA, ультразвуковое исследование простаты и мочевого пузыря. Возможно понадобится цистоскопия и другое обследование.',
					},
					{
						testId: 3,
						status: 'normal',
						sum: {
							type: 'enum',
							values: [11, 12, 21, 22, 31, 32, 41, 42],
						},
						decode:
							'Рекомендуется: консультации врачей - терапевта и гастроэнтерорлога, общий анализ крови, анализ кала на скрытую кровь, рентгенологическое обследование органов грудной клетки, фиброгастроскопия, ультразвуковое исследование органов брюшной полости. Возможно понадобятся: компьютерная томография органов грудной клетки, бронхоскопия и другое обследование. ',
					},
					{
						testId: 3,
						status: 'normal',
						sum: {
							type: 'enum',
							values: [101, 102, 201, 202],
						},
						decode:
							'Рекомендуется: консультаци врачей - терапевта и проктолога, общий анализ крови, рентгенологическое обследование органов грудной клетки, ректоскопия. Возможно понадобятся: анализ кала на скрытую кровь, компьютерная томография органов грудной клетки, бронхоскопия,  фиброколоноскопия и другое обследование.',
					},
					{
						testId: 3,
						status: 'normal',
						sum: {
							type: 'enum',
							values: [1001, 1002, 2001, 2002],
						},
						decode:
							'Рекомендуется: консультация врачей - терапевта и уролога, общие анализы крови и мочи, анализ крови на PSA, рентгенологическое обследование органов грудной клетки, ультразвуковое исследование простаты и мочевого пузыря. Возможно понадобятся: компьютерная томография органов грудной клетки, бронхоскопия, цистоскопия и другое обследование. ',
					},
					{
						testId: 3,
						status: 'normal',
						sum: {
							type: 'enum',
							values: [110, 120, 130, 140, 210, 220, 230, 240],
						},
						decode:
							'Рекомендуется: консультация врачей - гастроэнтеролога и проктолога, общий анализ крови, фиброгастроскопия, ультразвуковое исследование органов брюшной полости и ректоскопия. Возможно понадобится анализ кала на скрытую кровь, фиброколоноскопия и другое обследование. ',
					},
					{
						testId: 3,
						status: 'normal',
						sum: {
							type: 'enum',
							values: [
								1010,
								1020,
								1030,
								1040,
								2010,
								2020,
								2030,
								2040,
							],
						},
						decode:
							'Рекомендуется: консультация врачей - гастроэнтеролога и уролога, общие анализы крови и мочи, анализ крови на PSA,  анализ кала на скрытую кровь, фиброгастроскопия, ультразвуковое исследование органов брюшной полости, простаты и мочевого пузыря. Возможно понадобится цистоскопия и другое обследование.',
					},
					{
						testId: 3,
						status: 'normal',
						sum: {
							type: 'enum',
							values: [1100, 1200, 2100, 2200],
						},
						decode:
							'Рекомендуется: консультация врачей - проктолога и уролога, общие анализы крови и мочи, анализ крови на PSA, ультразвуковое исследование простаты и мочевого пузыря, ректоскопия. Возможно понадобится анализ кала на скрытую кровь, фиброколоноскопия и другое обследование. Возможно понадобится цистоскопия и другое обследование.',
					},
					{
						testId: 3,
						status: 'normal',
						sum: {
							type: 'enum',
							values: [
								111,
								112,
								121,
								122,
								131,
								132,
								141,
								142,
								211,
								212,
								221,
								222,
								231,
								232,
								241,
								242,
							],
						},
						decode:
							'Рекомендуется: консультация врачей терапевта, гастроэнтеролга и проктолога, общий анализ крови, анализ кала на скрытую кровь, рентгенологическое обследование органов грудной клетки, фиброгастроскопия, ректоскопия и ультразвуковое исследование органов брюшной полости. Возможно понадобятся: анализ кала на скрытую кровь, компьютерная томография органов грудной клетки, бронхоскопия, фиброколоноскопия и другое обследование. ',
					},
					{
						testId: 3,
						status: 'normal',
						sum: {
							type: 'enum',
							values: [
								1011,
								1012,
								1021,
								1022,
								1031,
								1032,
								1041,
								1042,
								2011,
								2012,
								2021,
								2022,
								2031,
								2032,
								2041,
								2042,
							],
						},
						decode:
							'Рекомендуется: консультация врачей терапевта, гастроэнтеролга и уролога, общие анализы крови и мочи, анализ крови на PSA, анализ кала на скрытую кровь, рентгенологическое обследование органов грудной клетки, фиброгастроскопия, ультразвуковое исследование органов брюшной полости, простаты и мочевого пузыря. Возможно понадобятся: компьютерная томография органов грудной клетки, бронхоскопия, цистоскопия и другое обследование.',
					},
					{
						testId: 3,
						status: 'normal',
						sum: {
							type: 'enum',
							values: [
								1101,
								1102,
								1201,
								1202,
								2101,
								2102,
								2201,
								2202,
							],
						},
						decode:
							'Рекомендуется: консультаци врачей - терапевта, проктолога и уролога, общие анализы крови и мочи, анализ крови на PSA, рентгенологическое обследование органов грудной клетки, ультразвуковое исследование простаты и мочевого пузыря, ректоскопия. Возможно понадобятся: анализ кала на скрытую кровь, компьютерная томография органов грудной клетки, бронхоскопия, фиброколоноскопия, цистоскопия и другое обследование. ',
					},
					{
						testId: 3,
						status: 'normal',
						sum: {
							type: 'enum',
							values: [
								1110,
								1120,
								1130,
								1140,
								1210,
								1220,
								1230,
								1240,
								2110,
								2120,
								2130,
								2140,
								2210,
								2220,
								2230,
								2240,
							],
						},
						decode:
							'Рекомендуется: консультация врачей - гастроэнтеролога, проктолога и уролога, общие анализы крови и мочи, анализ крови на PSA, фиброгастроскопия, ультразвуковое исследование органов брюшной полости, простаты и мочевого пузыря, ректоскопия. Возможно понадобится анализ кала на скрытую кровь, фиброколоноскопия, цистоскопия и другое обследование. ',
					},
					{
						testId: 3,
						status: 'normal',
						sum: {
							type: 'enum',
							values: [
								1111,
								1112,
								1121,
								1122,
								1131,
								1132,
								1141,
								1142,
								1211,
								1212,
								1221,
								1222,
								1231,
								1232,
								1241,
								1242,
								2111,
								2112,
								2121,
								2122,
								2211,
								2222,
								2131,
								2132,
								2141,
								2142,
								2211,
								2212,
								2221,
								2222,
								2231,
								2232,
								2241,
								2242,
							],
						},
						decode:
							'Рекомендуется: консультация врачей терапевта, гастроэнтеролга, проктолога и уролога, общие анализы крови и мочи, анализ крови на PSA, рентгенологическое обследование органов грудной клетки, фиброгастроскопия, ректоскопия, ультразвуковое исследование органов брюшной полости, простаты и мочевого пузыря. Возможно понадобятся: анализ кала на скрытую кровь, компьютерная томография органов грудной клетки, бронхоскопия, фиброколоноскопия, цистоскопия и другое обследование. ',
					},
					{
						testId: 3,
						status: 'normal',
						sum: {
							type: 'enum',
							values: [10000],
						},
						decode:
							'У Вас нет явных клинических признаков онкологических заболеваний. Но помните о пользе активного движения, правильного питания и здорового образа жизни. Не следует забывать и о регулярных диспансерных осмотрах. Это особенно важно с учетом Вашей неследственности.',
					},
					{
						testId: 3,
						status: 'normal',
						sum: {
							type: 'enum',
							values: [10001, 10002],
						},
						decode:
							'Рекомендуется: консультация врача-терапевта, общий анализ крови, рентгенологическое обследование органов грудной клетки. Возможно понадобятся: компьютерная томография органов грудной клетки, бронхоскопия и другое обследование. Это особенно важно с учетом Вашей неследственности.',
					},
					{
						testId: 3,
						status: 'normal',
						sum: {
							type: 'enum',
							values: [10010, 10020, 10030, 10040],
						},
						decode:
							'Рекомендуется: консультация врача-гастроэнтеролога,  общий анализ крови, анализ кала на скрытую кровь, фиброгастроскопия, ультразвуковое исследование органов брюшной полости. Возможно понадобится и другое обследование. Это особенно важно с учетом Вашей неследственности.',
					},
					{
						testId: 3,
						status: 'normal',
						sum: {
							type: 'enum',
							values: [10100, 10200],
						},
						decode:
							'Рекомендуется: консультация врача-проктолога, общий анализ крови, ректоскопия. Возможно понадобится анализ кала на скрытую кровь, фиброколоноскопия и другое обследование. Это особенно важно с учетом Вашей неследственности.',
					},
					{
						testId: 3,
						status: 'normal',
						sum: {
							type: 'enum',
							values: [11000, 12000],
						},
						decode:
							'Рекомендуется: консультация врача-уролога, общие анализы крови и мочи, анализ крови на PSA, ультразвуковое исследование простаты и мочевого пузыря. Возможно понадобится цистоскопия и другое обследование. Это особенно важно с учетом Вашей неследственности.',
					},
					{
						testId: 3,
						status: 'normal',
						sum: {
							type: 'enum',
							values: [
								10011,
								10012,
								10021,
								10022,
								10031,
								10032,
								10041,
								10042,
							],
						},
						decode:
							'Рекомендуется: консультации врачей - терапевта и гастроэнтерорлога, общий анализ крови, анализ кала на скрытую кровь, рентгенологическое обследование органов грудной клетки, фиброгастроскопия, ультразвуковое исследование органов брюшной полости. Возможно понадобятся: компьютерная томография органов грудной клетки, бронхоскопия и другое обследование. Это особенно важно с учетом Вашей неследственности.',
					},
					{
						testId: 3,
						status: 'normal',
						sum: {
							type: 'enum',
							values: [10101, 10102, 10201, 10202],
						},
						decode:
							'Рекомендуется: консультаци врачей - терапевта и проктолога, общий анализ крови, рентгенологическое обследование органов грудной клетки, ректоскопия. Возможно понадобятся: анализ кала на скрытую кровь, компьютерная томография органов грудной клетки, бронхоскопия,  фиброколоноскопия и другое обследование. Это особенно важно с учетом Вашей неследственности.',
					},
					{
						testId: 3,
						status: 'normal',
						sum: {
							type: 'enum',
							values: [11001, 11002, 12001, 12002],
						},
						decode:
							'Рекомендуется: консультация врачей - терапевта и уролога, общие анализы крови и мочи, анализ крови на PSA, рентгенологическое обследование органов грудной клетки, ультразвуковое исследование простаты и мочевого пузыря. Возможно понадобятся: компьютерная томография органов грудной клетки, бронхоскопия, цистоскопия и другое обследование. Это особенно важно с учетом Вашей неследственности.',
					},
					{
						testId: 3,
						status: 'normal',
						sum: {
							type: 'enum',
							values: [
								10110,
								10120,
								10130,
								10140,
								10210,
								10220,
								10230,
								10240,
							],
						},
						decode:
							'Вы перенесли инфаркт миокарда в прошлом и существует риск его повторения. Ваша задача - не допустить этого. Вам необходимо наблюдаться у врача-кардиолога, соблюдать предписанный Вам режим труда и отдыха, аккуратно принимать назначенные препараты, постоянно следить за уровнем артериального давления и регулярно контролировать уровень холестерина в крови.',
					},
					{
						testId: 3,
						status: 'normal',
						sum: {
							type: 'enum',
							values: [
								11010,
								11020,
								11030,
								11040,
								12010,
								12020,
								12030,
								12040,
							],
						},
						decode:
							'Рекомендуется: консультация врачей - гастроэнтеролога и уролога, общие анализы крови и мочи, анализ крови на PSA,  анализ кала на скрытую кровь, фиброгастроскопия, ультразвуковое исследование органов брюшной полости, простаты и мочевого пузыря. Возможно понадобится цистоскопия и другое обследование. Это особенно важно с учетом Вашей неследственности.',
					},
					{
						testId: 3,
						status: 'normal',
						sum: {
							type: 'enum',
							values: [11100, 11200, 12100, 12200],
						},
						decode:
							'Рекомендуется: консультация врачей - проктолога и уролога, общие анализы крови и мочи, анализ крови на PSA, ультразвуковое исследование простаты и мочевого пузыря, ректоскопия. Возможно понадобится анализ кала на скрытую кровь, фиброколоноскопия, цистоскопия и другое обследование. Это особенно важно с учетом Вашей неследственности.',
					},
					{
						testId: 3,
						status: 'normal',
						sum: {
							type: 'enum',
							values: [
								10111,
								10112,
								10121,
								10122,
								10131,
								10132,
								10141,
								10142,
								10211,
								10212,
								10221,
								10222,
								10231,
								10232,
								10241,
								10242,
							],
						},
						decode:
							'Рекомендуется: консультация врачей терапевта, гастроэнтеролга и проктолога, общий анализ крови, анализ кала на скрытую кровь, рентгенологическое обследование органов грудной клетки, фиброгастроскопия, ректоскопия и ультразвуковое исследование органов брюшной полости. Возможно понадобятся: анализ кала на скрытую кровь, компьютерная томография органов грудной клетки, бронхоскопия, фиброколоноскопия и другое обследование. Это особенно важно с учетом Вашей неследственности.',
					},
					{
						testId: 3,
						status: 'normal',
						sum: {
							type: 'enum',
							values: [
								11011,
								11012,
								11021,
								11022,
								11031,
								11032,
								11041,
								11042,
								12011,
								12012,
								12021,
								12022,
								12031,
								12032,
								12041,
								12042,
							],
						},
						decode:
							'Рекомендуется: консультация врачей терапевта, гастроэнтеролга и уролога, общие анализы крови и мочи, анализ крови на PSA, анализ кала на скрытую кровь, рентгенологическое обследование органов грудной клетки, фиброгастроскопия, ультразвуковое исследование органов брюшной полости, простаты и мочевого пузыря. Возможно понадобятся: компьютерная томография органов грудной клетки, бронхоскопия, цистоскопия и другое обследование. Это особенно важно с учетом Вашей неследственности.',
					},
					{
						testId: 3,
						status: 'normal',
						sum: {
							type: 'enum',
							values: [
								11101,
								11102,
								11201,
								11202,
								12101,
								12102,
								12201,
								12202,
							],
						},
						decode:
							'Вы перенесли инфаркт миокарда в прошлом и существует риск его повторения. Ваша задача - не допустить этого. Вам необходимо наблюдаться у врача-кардиолога, соблюдать предписанный Вам режим труда и отдыха, аккуратно принимать назначенные препараты, постоянно следить за уровнем артериального давления и регулярно контролировать уровень холестерина в крови.',
					},
					{
						testId: 3,
						status: 'normal',
						sum: {
							type: 'enum',
							values: [
								11110,
								11120,
								11130,
								11140,
								11210,
								11220,
								11230,
								11240,
								12110,
								12120,
								12130,
								12140,
								12210,
								12220,
								12230,
								12240,
							],
						},
						decode:
							'Рекомендуется: консультация врачей - гастроэнтеролога, проктолога и уролога, общие анализы крови и мочи, анализ крови на PSA, фиброгастроскопия, ультразвуковое исследование органов брюшной полости, простаты и мочевого пузыря, ректоскопия. Возможно понадобится анализ кала на скрытую кровь, фиброколоноскопия, цистоскопия и другое обследование. Это особенно важно с учетом Вашей неследственности. Это особенно важно с учетом Вашей неследственности.',
					},
					{
						testId: 3,
						status: 'normal',
						sum: {
							type: 'enum',
							values: [
								11111,
								11112,
								11121,
								11122,
								11131,
								11132,
								11141,
								11142,
								11211,
								11212,
								11221,
								11222,
								11231,
								11232,
								11241,
								11242,
								12111,
								12112,
								12121,
								12122,
								12211,
								12222,
								12131,
								12132,
								12141,
								12142,
								12211,
								12212,
								12221,
								12222,
								12231,
								12232,
								12241,
								12242,
							],
						},
						decode:
							'Рекомендуется: консультация врачей терапевта, гастроэнтеролга, проктолога и уролога, общие анализы крови и мочи, анализ крови на PSA, рентгенологическое обследование органов грудной клетки, фиброгастроскопия, ректоскопия, ультразвуковое исследование органов брюшной полости, простаты и мочевого пузыря. Возможно понадобятся: анализ кала на скрытую кровь, компьютерная томография органов грудной клетки, бронхоскопия, фиброколоноскопия, цистоскопия и другое обследование. Это особенно важно с учетом Вашей неследственности.',
					},
					{
						testId: 3,
						status: 'bad',
						sum: {
							type: 'interval',
							values: [100000, 112242],
						},
						decode:
							'Если Вам ранее уже ставился диагноз онкологического заболвания, Вам необходимо находться под постоянным диспансерным наблюдением врача-онколога, выполнять все его рекомендации по приему лекарственных препаратов и регулярно проходить предписанное обследование.',
					},
					// Лёгкие
					{
						testId: 4,
						status: 'fine',
						sum: {
							type: 'enum',
							values: [0],
						},
						decode:
							'Данных за наличие у Вас хронического заболевания дыхательных путей не получено. Ведите здоровый образ жизни, занимайтесь физическими упражнениями, больше бывайте на свежем воздухе и ни в коем случае не курите!',
					},
					{
						testId: 4,
						status: 'normal',
						sum: {
							type: 'enum',
							values: [1],
						},
						decode:
							'У Вас нет клинических признаков хронического заболевания дыхательных путей, но вдыхание паров раздражающих веществ - фактор риска его возникновения. Постарайтесть устранить этот фактор, больше времени проводите в лесу и на свежем воздухе.',
					},
					{
						testId: 4,
						status: 'normal',
						sum: {
							type: 'enum',
							values: [2],
						},
						decode:
							'У Вас нет клинических признаков хронического заболевания дыхательных путей, но вдыхание табачного дыма - "пассивное курение" - фактор риска его возникновения. Предложите Вашим друзьям и коллегам по работе отказаться от этой пагубной привычки. А сами старайтесь больше времени проводить на свежем воздухе.',
					},
					{
						testId: 4,
						status: 'normal',
						sum: {
							type: 'enum',
							values: [3],
						},
						decode:
							'У Вас нет клинических признаков хронического заболевания дыхательных путей, но вдыхание паров раздражающих веществ и табачного дыма - "пассивное курение" - факторы риска его возникновения. Предложите Вашим друзьям и коллегам по работе отказаться от этой пагубной привычки и старайтесь больше времени проводить на свежем воздухе.',
					},
					{
						testId: 4,
						status: 'normal',
						sum: {
							type: 'enum',
							values: [4, 5, 6, 7],
						},
						decode:
							'Пока у Вас нет клинических признаков хронического заболевания дыхательных путей, но курение - важнейший фактор риска его возникновения. Откажитесь от курения, больше времени проводите на свежем воздухе и сохраните этим свое здоровье!',
					},
					{
						testId: 4,
						status: 'bad',
						sum: {
							type: 'enum',
							values: [10, 11, 12, 13],
						},
						decode:
							'Есть клинические основания подозревать наличие хронического заболевания дыхательных путей. Посетите Вашу поликлинику и пройдите обследование. Ведите здоровый образ жизни и ни в коем случае не курите! Больше времени проводите на свежем воздухе и помните, что "пассивное курение" тоже наносит вред организму.',
					},
					{
						testId: 4,
						status: 'bad',
						sum: {
							type: 'enum',
							values: [14, 15, 16, 17],
						},
						decode:
							'Есть основания подозревать наличие хронического заболевания дыхательных путей. Поэтому обязательно откажатесь от курения! Посетите Вашу поликлинику и пройдите обследование. Ведите здоровый образ жизни и больше времени проводите на свежем воздухе. ',
					},
					{
						testId: 4,
						status: 'bad',
						sum: {
							type: 'enum',
							values: [20, 21, 22, 23, 30, 31, 32, 33],
						},
						decode:
							'Есть серьезные основания подозревать наличие хронического заболевания дыхательных путей. Обязательно посетите Вашу поликлинику и пройдите обследование, в том числе - органов дыхательной системы (рентгенологическое исследование грудной клетки и др.) Ведите здоровый образ жизни, больше времени проводите на свежем воздухе и помните, что "пассивное курение" тоже наносит вред организму.',
					},
					{
						testId: 4,
						status: 'bad',
						sum: {
							type: 'enum',
							values: [24, 25, 26, 27, 34, 35, 36, 37],
						},
						decode:
							'Есть серьезные основания подозревать наличие хронического заболевания дыхательных путей. Поэтому обязательно откажатесь от курения! Обязательно посетите ЛОР-врача, врача-терапевта и пройдите обследование дыхательной системы (рентгенологическое исследование грудной клетки и др.) Ведите здоровый образ жизни и больше времени проводите на свежем воздухе. ',
					},
					{
						testId: 4,
						status: 'bad',
						sum: {
							type: 'interval',
							values: [50, 137],
						},
						decode:
							'Судя по описанной Вами клинической картине, у Вас вполне может быть хроническое заболевание дыхательной системы. Однако окончательный диагноз может установить только врач. Советуем обязательно обратиться на прием к врачу-терапевту, пройти обследование, включая рентгенографию органов грудной клетки, и в дальнейшем строго выполнять рекомендации врача. Ваше зоровье - в Ваших руках и зависит от Вас!',
					},
					{
						testId: 4,
						status: 'bad',
						sum: {
							type: 'interval',
							values: [200, 337],
						},
						decode:
							'Наличие хронического бронхита или бронхтальной астмы требует постоянного приема различных лекарственных препаратов, использования ингаляторов и др. Но всю терапию должен подобрать Вам лечащий врач на основании результатов проведенного обследования, а Ваша задача - аккуратно выполнять его рекомендации.  Необходимо вести здоровый образ жизни, больше времени проводите на свежем воздухе, но при этом хорошо одеваться и не простывать.  И, конечно, ни в коем случае нельзя курить!',
					},
					{
						testId: 4,
						status: 'bad',
						sum: {
							type: 'enum',
							values: [400],
						},
						decode:
							'Даже если Вас ничего не беспокоит в настоящее время, перенесенный в прошлом туберкулез требует наблюдения у врача. Регулярно проходите профилактические осмотры, периодически делайте общи анализ крови и не реже, чем 1 раз в три года проводите рентгенологическое исследование органов грудной клетки.',
					},
					{
						testId: 4,
						status: 'bad',
						sum: {
							type: 'enum',
							values: [401],
						},
						decode:
							'Вдыхание паров раздражающих веществ - фактор риска развития хронических заболеваний дыхательных путей. С учетом перенесенного ранее туберкулеза, это особенно вредно для Вас.  Постарайтесть устранить этот вредный фактор и больше времени проводите в лесу и на свежем воздухе.',
					},
					{
						testId: 4,
						status: 'bad',
						sum: {
							type: 'enum',
							values: [402],
						},
						decode:
							'Вдыхание табачного дыма - "пассивное курение" - фактор риска развития хронических заболеваний дыхательных путей. С учетом перенесенного Вами ранее туберкулеза, это особенно вредно для Вас. Предложите Вашим друзьям и коллегам по работе отказаться от этой пагубной привычки. Старайтесь больше времени проводить на свежем воздухе.',
					},
					{
						testId: 4,
						status: 'bad',
						sum: {
							type: 'enum',
							values: [403],
						},
						decode:
							'Вдыхание паров раздражающих веществ и табачного дыма - "пассивное курение" - факторы риска развития хронических заболеваний дыхательных путей. С учетом перенесенного ранее туберкулеза, это особенно вредно для Вас. Предложите Вашим друзьям и коллегам по работе отказаться от этой пагубной привычки. Старайтесь больше времени проводить на свежем воздухе.',
					},
					{
						testId: 4,
						status: 'bad',
						sum: {
							type: 'interval',
							values: [404, 407],
						},
						decode:
							'Курение - важнейший фактор риска возникновения заболеваний дыхательной системы. С учетом перенесенного ранее туберкулеза, это особенно вредно для Вас. Откажитесь от курения и больше времени проводите на свежем воздухе. И, конечно, не забывайте проходить регулярную диспансеризацию и профилактические осмотры, включающие рентгенологическое исследование легких и общий анализ крови.',
					},
					{
						testId: 4,
						status: 'bad',
						sum: {
							type: 'enum',
							values: [
								411,
								412,
								413,
								421,
								422,
								423,
								431,
								432,
								433,
							],
						},
						decode:
							'Есть серьезные основания подозревать наличие хронического заболевания дыхательных путей, особенно - с учетом перенесенного ранее туберкулеза. Обязательно посетите Вашу поликлинику и пройдите обследование (рентгенологическое исследование грудной клетки и др.) Ведите здоровый образ жизни, больше времени проводите на свежем воздухе и помните, что "пассивное курение" тоже наносит вред организму!',
					},
					{
						testId: 4,
						status: 'bad',
						sum: {
							type: 'enum',
							values: [
								414,
								415,
								416,
								417,
								424,
								425,
								426,
								427,
								434,
								435,
								436,
								437,
							],
						},
						decode:
							'Есть серьезные основания подозревать наличие хронического заболевания дыхательных путей, особенно - с учетом перенесенного ранее туберкулеза. Обязательно посетите Вашу поликлинику и пройдите обследование (рентгенологическое исследование грудной клетки и др.) Ведите здоровый образ жизни, больше времени проводите на свежем воздухе и обязательно откажитесь от курения!',
					},
					{
						testId: 4,
						status: 'bad',
						sum: {
							type: 'interval',
							values: [450, 597],
						},
						decode:
							'Судя по описанной Вами клинической картине, особенно, с учетом перенесенного туберкулеза, у Вас вполне может быть хроническое заболевание дыхательной системы. Однако окончательный диагноз может установить только врач. Советуем обязательно посетить Вашу полклинику, обратиться на прием к врачу-терапевту, пройти обследование, включая рентгенологическое исследование грудной клетки, и в дальнейшем строго выполнять рекомендации врача. Ваше здоровье - в Ваших руках и зависит от Вас!',
					},
					{
						testId: 4,
						status: 'bad',
						sum: {
							type: 'interval',
							values: [600, 737],
						},
						decode:
							'Наличие хронического бронхита или бронхтальной астмы требует постоянного приема различных лекарственных препаратов, использования ингаляторов и др. Особено это важно с учетом перенесенного ранее туберкулеза. Но всю терапию должен подобрать Вам лечащий врач на основании обследования, а Ваша задача - аккуратно выполнять его рекомендации.  Необходимо вести здоровый образ жизни, больше времени проводите на свежем воздухе, но при этом хорошо одеваться и простывать.  И, конечно, ни в коем случае нельзя курить!',
					},
					// Образ жизни
					{
						testId: 7,
						status: 'fine',
						sum: {
							type: 'enum',
							values: [0],
						},
						decode:
							'Вы ведете здоровый образ жизни, много двигаетесь, правильно питаетесь, не злоупотребляете сахаром. Если Вы будете вести такой образ жизни и дальше, у Вас есть все шансы прожить до глубокой старости!',
					},
					{
						testId: 7,
						status: 'fine',
						sum: {
							type: 'enum',
							values: [1, 2],
						},
						decode:
							'Вы ведете здоровый образ жизни, достаточно двигаетесь, правильно питаетесь, не злоупотребляете сахаром. Если Вы будете вести такой образ жизни и дальше, у Вас есть все шансы прожить до глубокой старости!',
					},
					{
						testId: 7,
						status: 'normal',
						sum: {
							type: 'enum',
							values: [3],
						},
						decode:
							'Вы правильно питаетесь, но мало двигаетесь и Ваша физическая активнотсь недостаточна. А ведь движение - это жизнь! Вам необходимо заняться фитнесом или другими физическими упражнениями. Или начните хотя бы с обычной ходьбы. На ходьбу нужно тратить не менее 30 минут в день или проходить за день не менее 3 км.',
					},
					{
						testId: 7,
						status: 'normal',
						sum: {
							type: 'enum',
							values: [
								10,
								11,
								12,
								20,
								21,
								22,
								30,
								31,
								32,
								40,
								41,
								42,
								50,
								51,
								52,
							],
						},
						decode:
							'Двигаетесь Вы достаточно, но Ваше питание и пищевые привычки не являются здоровыми и рациональными, и это создает риск для Вашего здоровья. Помните, что 1,5 л воды, 400 г фруктов и овощей ежедневно и рыбные блюда вместо мяса 3 раза в неделю необходимы Вашему здоровью, а вот лишние сахар и соль вредят ему. Советуем Вам начать занятия в "Школе здоровья"!',
					},
					{
						testId: 7,
						status: 'normal',
						sum: {
							type: 'enum',
							values: [13, 23, 33, 43, 53],
						},
						decode:
							'Ваше питание и пищевые привычки не являются здоровыми и рациональными, они создают риск для Вашего здоровья. К тому же у Вас недостаточная физическая активность. Все вместе это является серьезным риском развития целого ряда хронических заболеваний. Помните, что 1,5 л воды, 400 г фруктов и овощей ежедневно, рыбные блюда вместо мяса 3 раза в неделю, а также, как минимум 30 минут ежедневной ходьбы необходимы Вам, а вот лишние соль и сахар вредят. Настоятельно рекомендуем консультацию врача-диетолога и занятия в "Школе здоровья"!',
					},
					{
						testId: 7,
						status: 'normal',
						sum: {
							type: 'interval',
							values: [100, 102],
						},
						decode:
							'Вы достаточно двигаетесь, правильно питаетесь, не злоупотребляете сахаром. Но Вы курите, и это - вредная привычка пагубно влияющая на Ваше здоровье. Откажитесь от нее и Вы продлите свою жизнь!',
					},
					{
						testId: 7,
						status: 'normal',
						sum: {
							type: 'enum',
							values: [103],
						},
						decode:
							'Вы правильно питаетесь, но малая подвижность и курение являются важными факторами, которые способствуют развитию опасных заболеваний сердечно-сосудистой и дыхательной систем, которые могут сократить Вашу жизнь. Откажитесь от курения и займитесь физическими упражнениями, а для начала - хотя бы ходьбой не менее 30 минут или 3 км в день.',
					},
					{
						testId: 7,
						status: 'normal',
						sum: {
							type: 'enum',
							values: [
								110,
								111,
								112,
								120,
								121,
								122,
								130,
								131,
								132,
								140,
								141,
								142,
								150,
								151,
								152,
							],
						},
						decode:
							'Двигаетесь Вы достаточно, но Ваше питание и пищевые привычки не являются здоровыми и рациональными. К тому же - Вы курите, что создает дополнительный риск для Вашего здоровья. Помните, что 1,5 л воды, 400 г фруктов и овощей ежедневно и рыбные блюда вместо мяса 3 раза в неделю необходимы Вашему здоровью, а вот лишние сахар и соль вредят ему. Откажитесь от курения и начните занятия в "Школе здоровья"!',
					},
					{
						testId: 7,
						status: 'normal',
						sum: {
							type: 'enum',
							values: [113, 123, 133, 143, 153],
						},
						decode:
							'Ваше питание и пищевые привычки не являются здоровыми и рациональными, они создают риск для Вашего здоровья. К тому же у Вас недостаточная физическая активность. Но самое главное - Вы курите! Все вместе это является серьезным риском развития целого ряда хронических заболеваний. Помните, что 1,5 л воды, 400 г фруктов и овощей ежедневно, рыбные блюда вместо мяса 3 раза в неделю, а также, как минимум 30 минут ежедневной ходьбы необходимы Вам, а вот лишние соль и сахар вредят.Вам необходима консультация врача-диетолога или занятия в "Школе здоровья". И откажитесь от курения!',
					},
					{
						testId: 7,
						status: 'bad',
						sum: {
							type: 'enum',
							values: [
								1000,
								1001,
								1002,
								2000,
								2001,
								2002,
								3000,
								3001,
								3002,
							],
						},
						decode:
							'Наличие некомпенсированных артериальной гипертонии, сахарного диабета и повышенного уровня холестерина - важнейшие факторы риска развития и прогрессирования атеросклероза. Вам необходимо обратиться на прием в Вашу поликлинику для прохождения обследования и подбора соотвествующей терапии.',
					},
					{
						testId: 7,
						status: 'bad',
						sum: {
							type: 'enum',
							values: [1003, 2003, 3003],
						},
						decode:
							'Наличие некомпенсированных артериальной гипертонии, сахарного диабета и повышенного уровня холестерина - важнейшие факторы риска развития и прогрессирования атеросклероза. Вам необходимо обратиться в Вашу поликлинику на прием к врачу для прохождения обследования и подбора соотвествующей терапии. И обязательно займитесь физическими упражнениями: 30 минут или 3 км ежедневной ходьбы Вам просто необходимы!',
					},
					{
						testId: 7,
						status: 'bad',
						sum: {
							type: 'enum',
							values: [
								1010,
								1011,
								1012,
								1013,
								1014,
								1015,
								1016,
								1017,
								1018,
								1019,
								1020,
								1021,
								1022,
								1023,
								1024,
								1025,
								1026,
								1027,
								1028,
								1029,
								1030,
								1031,
								1032,
								1033,
								1034,
								1035,
								1036,
								1037,
								1038,
								1039,
								1040,
								1041,
								1042,
								1043,
								1044,
								1045,
								1046,
								1047,
								1048,
								1049,
								1050,
								1051,
								1052,
								1053,
								2010,
								2011,
								2012,
								2013,
								2014,
								2015,
								2016,
								2017,
								2018,
								2019,
								2020,
								2021,
								2022,
								2023,
								2024,
								2025,
								2026,
								2027,
								2028,
								2029,
								2030,
								2031,
								2032,
								2033,
								2034,
								2035,
								2036,
								2037,
								2038,
								2039,
								2040,
								2041,
								2042,
								2043,
								2044,
								2045,
								2046,
								2047,
								2048,
								2049,
								2050,
								2051,
								2052,
								2053,
								3010,
								3011,
								3012,
								3013,
								3014,
								3015,
								3016,
								3017,
								3018,
								3019,
								3020,
								3021,
								3022,
								3023,
								3024,
								3025,
								3026,
								3027,
								3028,
								3029,
								3030,
								3031,
								3032,
								3033,
								3034,
								3035,
								3036,
								3037,
								3038,
								3039,
								3040,
								3041,
								3042,
								3043,
								3044,
								3045,
								3046,
								3047,
								3048,
								3049,
								3050,
								3051,
								3052,
								3053,
							],
						},
						decode:
							'Наличие некомпенсированных артериальной гипертонии, сахарного диабета и повышенного уровня холестерина - важнейшие факторы риска развития и прогрессирования атеросклероза. При этом Ваше питание и пищевые привычки не являются здоровыми и рациональными. Вам необходимо обратиться в Вашу поликлинику на прием к врачу для прохождения обследования и подбора соотвествующей терапии, диеты и режима физической активности. ',
					},
					{
						testId: 7,
						status: 'bad',
						sum: {
							type: 'enum',
							values: [
								1110,
								1111,
								1112,
								1113,
								1114,
								1115,
								1116,
								1117,
								1118,
								1119,
								1120,
								1121,
								1122,
								1123,
								1124,
								1125,
								1126,
								1127,
								1128,
								1129,
								1130,
								1131,
								1132,
								1133,
								1134,
								1135,
								1136,
								1137,
								1138,
								1139,
								1140,
								1141,
								1142,
								1143,
								1144,
								1145,
								1146,
								1147,
								1148,
								1149,
								1150,
								1151,
								1152,
								1153,
								2110,
								2111,
								2112,
								2113,
								2114,
								2115,
								2116,
								2117,
								2118,
								2119,
								2120,
								2121,
								2122,
								2123,
								2124,
								2125,
								2126,
								2127,
								2128,
								2129,
								2130,
								2131,
								2132,
								2133,
								2134,
								2135,
								2136,
								2137,
								2138,
								2139,
								2140,
								2141,
								2142,
								2143,
								2144,
								2145,
								2146,
								2147,
								2148,
								2149,
								2150,
								2151,
								2152,
								2153,
								3110,
								3111,
								3112,
								3113,
								3114,
								3115,
								3116,
								3117,
								3118,
								3119,
								3120,
								3121,
								3122,
								3123,
								3124,
								3125,
								3126,
								3127,
								3128,
								3129,
								3130,
								3131,
								3132,
								3133,
								3134,
								3135,
								3136,
								3137,
								3138,
								3139,
								3140,
								3141,
								3142,
								3143,
								3144,
								3145,
								3146,
								3147,
								3148,
								3149,
								3150,
								3151,
								3152,
								3153,
							],
						},
						decode:
							'Наличие некомпенсированных артериальной гипертонии, сахарного диабета и повышенного уровня холестерина - важнейшие факторы риска развития и прогрессирования атеросклероза. При этом Ваше питание и пищевые привычки не являются здоровыми и рациональными. К тому же - Вы курите! Вам необходимо обратиться на прием к врачу для прохождения обследования и подбора соотвествующей терапии, диеты и режима физической активности. И откажитесь от курения! ',
					},
					{
						testId: 7,
						status: 'bad',
						sum: {
							type: 'enum',
							values: [
								5000,
								5001,
								5002,
								5003,
								5004,
								5005,
								5006,
								5007,
								5008,
								5009,
								5010,
								5011,
								5012,
								5013,
								5014,
								5015,
								5016,
								5017,
								5018,
								5019,
								5020,
								5021,
								5022,
								5023,
								5024,
								5025,
								5026,
								5027,
								5028,
								5029,
								5030,
								5031,
								5032,
								5033,
								5034,
								5035,
								5036,
								5037,
								5038,
								5039,
								5040,
								5041,
								5042,
								5043,
								5044,
								5045,
								5046,
								5047,
								5048,
								5049,
								5050,
								5051,
								5052,
								5053,
							],
						},
						decode:
							'Наличие заболеваний жедудочно-кишечного тракта требует строгого соблюдения диеты, регулярного приема медикаментозной терапии и наблюдения у врача-гатроэнтеролога. Возможно, потребуется обследование с применением методов инструментальной и лабораторной диагностики. Выполняйте все назначения врача и качество Вашей жизни не будет страдать!',
					},
					{
						testId: 7,
						status: 'bad',
						sum: {
							type: 'enum',
							values: [
								5100,
								5101,
								5102,
								5103,
								5104,
								5105,
								5106,
								5107,
								5108,
								5109,
								5110,
								5111,
								5112,
								5113,
								5114,
								5115,
								5116,
								5117,
								5118,
								5119,
								5120,
								5121,
								5122,
								5123,
								5124,
								5125,
								5126,
								5127,
								5128,
								5129,
								5130,
								5131,
								5132,
								5133,
								5134,
								5135,
								5136,
								5137,
								5138,
								5139,
								5140,
								5141,
								5142,
								5143,
								5144,
								5145,
								5146,
								5147,
								5148,
								5149,
								5150,
								5151,
								5152,
								5153,
							],
						},
						decode:
							'Наличие заболеваний жедудочно-кишечного тракта требует строгого соблюдения диеты, регулярного приема медикаментозной терапии и наблюдения у врача-гатроэнтеролога. Возможно, потребуется обследование с применением методов инструментальной и лабораторной диагностики.  И откажитесь от курения! Выполняйте все назначения врача и качество Вашей жизни не будет страдать!',
					},
					{
						testId: 7,
						status: 'bad',
						sum: {
							type: 'enum',
							values: [
								6000,
								6001,
								6002,
								6003,
								6004,
								6005,
								6006,
								6007,
								6008,
								6009,
								6010,
								6011,
								6012,
								6013,
								6014,
								6015,
								6016,
								6017,
								6018,
								6019,
								6020,
								6021,
								6022,
								6023,
								6024,
								6025,
								6026,
								6027,
								6028,
								6029,
								6030,
								6031,
								6032,
								6033,
								6034,
								6035,
								6036,
								6037,
								6038,
								6039,
								6040,
								6041,
								6042,
								6043,
								6044,
								6045,
								6046,
								6047,
								6048,
								6049,
								6050,
								6051,
								6052,
								6053,
								7000,
								7001,
								7002,
								7003,
								7004,
								7005,
								7006,
								7007,
								7008,
								7009,
								7010,
								7011,
								7012,
								7013,
								7014,
								7015,
								7016,
								7017,
								7018,
								7019,
								7020,
								7021,
								7022,
								7023,
								7024,
								7025,
								7026,
								7027,
								7028,
								7029,
								7030,
								7031,
								7032,
								7033,
								7034,
								7035,
								7036,
								7037,
								7038,
								7039,
								7040,
								7041,
								7042,
								7043,
								7044,
								7045,
								7046,
								7047,
								7048,
								7049,
								7050,
								7051,
								7052,
								7053,
								8000,
								8001,
								8002,
								8003,
								8004,
								8005,
								8006,
								8007,
								8008,
								8009,
								8010,
								8011,
								8012,
								8013,
								8014,
								8015,
								8016,
								8017,
								8018,
								8019,
								8020,
								8021,
								8022,
								8023,
								8024,
								8025,
								8026,
								8027,
								8028,
								8029,
								8030,
								8031,
								8032,
								8033,
								8034,
								8035,
								8036,
								8037,
								8038,
								8039,
								8040,
								8041,
								8042,
								8043,
								8044,
								8045,
								8046,
								8047,
								8048,
								8049,
								8050,
								8051,
								8052,
								8053,
							],
						},
						decode:
							'Наличие патологии желудочно-кишечного тракта, которая сопровождается артериальной гипертонией, нарушением углеводного и липидного обменов - это серьезная проблема, требующая постоянного наблюлдения у врача-гастроэнтеролога в содружестве с эндокринологом и кардиологом. Но если Вы будете соблюдать диету, аккуратно принимать предписанную Вам терапию, регулярно проходить инструментальное и лабораторное обследование, качество Вашей жизни не будет страдать!',
					},
					{
						testId: 7,
						status: 'bad',
						sum: {
							type: 'enum',
							values: [
								6100,
								6101,
								6102,
								6103,
								6104,
								6105,
								6106,
								6107,
								6108,
								6109,
								6110,
								6111,
								6112,
								6113,
								6114,
								6115,
								6116,
								6117,
								6118,
								6119,
								6120,
								6121,
								6122,
								6123,
								6124,
								6125,
								6126,
								6127,
								6128,
								6129,
								6130,
								6131,
								6132,
								6133,
								6134,
								6135,
								6136,
								6137,
								6138,
								6139,
								6140,
								6141,
								6142,
								6143,
								6144,
								6145,
								6146,
								6147,
								6148,
								6149,
								6150,
								6151,
								6152,
								6153,
								7100,
								7101,
								7102,
								7103,
								7104,
								7105,
								7106,
								7107,
								7108,
								7109,
								7110,
								7111,
								7112,
								7113,
								7114,
								7115,
								7116,
								7117,
								7118,
								7119,
								7120,
								7121,
								7122,
								7123,
								7124,
								7125,
								7126,
								7127,
								7128,
								7129,
								7130,
								7131,
								7132,
								7133,
								7134,
								7135,
								7136,
								7137,
								7138,
								7139,
								7140,
								7141,
								7142,
								7143,
								7144,
								7145,
								7146,
								7147,
								7148,
								7149,
								7150,
								7151,
								7152,
								7153,
								8100,
								8101,
								8102,
								8103,
								8104,
								8105,
								8106,
								8107,
								8108,
								8109,
								8110,
								8111,
								8112,
								8113,
								8114,
								8115,
								8116,
								8117,
								8118,
								8119,
								8120,
								8121,
								8122,
								8123,
								8124,
								8125,
								8126,
								8127,
								8128,
								8129,
								8130,
								8131,
								8132,
								8133,
								8134,
								8135,
								8136,
								8137,
								8138,
								8139,
								8140,
								8141,
								8142,
								8143,
								8144,
								8145,
								8146,
								8147,
								8148,
								8149,
								8150,
								8151,
								8152,
								8153,
							],
						},
						decode:
							'Наличие патологии желудочно-кишечного тракта, которая сопровождается артериальной гипертонией, нарушением углеводного и липидного обменов - это серьезная проблема, требующая постоянного наблюлдения у врача-гастроэнтеролога в содружестве с эндокринологом и кардиологом. К тому же - Вы курите! Но если Вы будете соблюдать диету, аккуратно принимать предписанную Вам терапию, регулярно проходить инструментальное и лабораторное обследование, качество Вашей жизни не будет страдать! И откажитесь от курения!',
					},
				];

				let neededTreatment = false;

				treatments.forEach(treatment => {
					if (treatment.testId === testId) {
						if (treatment.sum.type === 'enum') {
							treatment.sum.values.forEach(value => {
								if (value === answerSum) {
									neededTreatment = treatment;
								}
							});
						} else if (treatment.sum.type === 'interval') {
							if (
								answerSum >= treatment.sum.values[0] &&
								answerSum <= treatment.sum.values[1]
							) {
								console.log('interval');
								neededTreatment = treatment;
							}
						}
					}
				});

				const recommendations = [
					'лучше питайтесь',
					'хорошо спите',
					'гуляйте',
					'пройдите диспансеризацию',
					'проконсультирутесь со специалистом',
					'радуйтесь',
				];
				const recommendationsRandomItem = () => {
					const random = Math.floor(
						Math.random() * recommendations.length,
					);
					return recommendations[random];
				};

				// const colors = ['#FEE245', '#EF4D4D', '#58B379'];
				// const randomColor = () =>
				// 	colors[Math.floor(Math.random() * colors.length)];

				const result = {
					treatment: neededTreatment,
					recommendations: [
						recommendationsRandomItem(),
						recommendationsRandomItem(),
						recommendationsRandomItem(),
					],
					color: null,
				};

				if (neededTreatment.status === 'fine') {
					result.color = '#58B379';
				} else if (neededTreatment.status === 'normal') {
					result.color = '#FEE245';
				} else if (neededTreatment.status === 'bad') {
					result.color = '#EF4D4D';
				}

				resolve(result);
			}, 500);
		}),
};
