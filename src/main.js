import Vue from 'vue';
import { sync } from 'vuex-router-sync';

import store from './store';
import App from './App.vue';
import router from './router';

import './plugins/vuetify';

const unsync = sync(store, router);

new Vue({
	store,
	router,
	...App,
}).$mount('#app');

Vue.config.productionTip = false;

unsync();

router.beforeEach((to, from, next) => {
	console.log('# beforeEach');
	console.log('# from', from);
	console.log('# to', to);
	next();
});
