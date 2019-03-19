import { mapGetters, mapState } from 'vuex';
import portalApi from '@/services/portalApi';

export default {
	computed: {
		...mapGetters({
			answersDataForPortalApi: 'answersDataForPortalApi',
		}),
		...mapState(['user']),
	},
	methods: {
		getMedicalForm() {
			if (this.answersDataForPortalApi.length > 0) {
				portalApi
					.setMedicalTestAnswers({
						answers: this.answersDataForPortalApi,
						birthday: `${this.user.birthDay}.${
							this.user.birthMonth
						}.${this.user.birthYear}`,
						gender: this.user.gender,
						grow: this.user.grow,
						weight: this.user.weight,
					})
					.then(result => {
						window.open(
							`https://medaboutme.ru/zdorove/servisy/dispanserizatsiya/download-result/${
								result.id
							}/`,
							'_blank',
						);
					})
					.catch(() => {});
			}
		},
	},
};
