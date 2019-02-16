import Vue from 'vue';
import PortalVue from 'portal-vue';
import { sync } from 'vuex-router-sync';

import store from './store';
import App from './App.vue';
import router from './router';

import './plugins/vuetify';

sync(store, router);
Vue.use(PortalVue);

new Vue({
	store,
	router,
	...App,
}).$mount('#app');

Vue.config.productionTip = false;

router.beforeEach((to, from, next) => {
	console.log('# from', from);
	console.log('# to', to);
	if (to.name === 'checkup') {
		if (store.state.user.isUserInfoDone === false) {
			next('pretest');
		}
	}
	next();
});

// unsync();
