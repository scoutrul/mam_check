import Vue from 'vue';
import PortalVue from 'portal-vue';
import { sync } from 'vuex-router-sync';

import store from './store';
import App from './App.vue';
import router from './router';

import './plugins/vuetify';

import services from './services';
import CONST from '@/const.js';

sync(store, router);
Vue.use(PortalVue);

new Vue({
	store,
	router,
	...App,
}).$mount('#app');

Vue.config.productionTip = false;

router.beforeEach((to, from, next) => {
	if (to.path === CONST.PAGE_PROFILE) {
		if (store.state.user.isUserInfoDone === false) {
			next(CONST.PRE_TEST);
		}
		services.fetchMedicalTests();
	}
	next();
});

// unsync();
