import axios from 'axios';
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
						axios({
							url: `https://medaboutme.ru/zdorove/servisy/dispanserizatsiya/download-result/${result.id}/`,
							method: 'GET',
							responseType: 'blob', // important
						}).then((response) => {
							const url = window.URL.createObjectURL(new Blob([response.data]));
							const link = document.createElement('a');
							link.href = url;
							link.setAttribute('download', 'file.pdf'); //or any other extension
							document.body.appendChild(link);
							link.click();
						});
						
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
