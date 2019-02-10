import Vue from 'vue';
import Router from 'vue-router';

import fortyFour from './components/pages/fortyFour.vue';
// import Home from './components/pages/Home';

const Home = () =>
	import(/* webpackChunkName: "Home" */ './components/pages/Home');
const Project = () =>
	import(/* webpackChunkName: "Project" */ './components/pages/Project');
const Record = () =>
	import(/* webpackChunkName: "Record" */ './components/pages/Record');
const Start = () =>
	import(/* webpackChunkName: "Start" */ './components/pages/Start');

Vue.use(Router);
const router = new Router({
	mode: 'history',
	base: process.env.BASE_URL,
	routes: [
		{
			path: '/',
			name: 'home',
			component: Home,
			beforeEnter: (to, from, next) => {
				console.log('before rote enter');
				next();
			},
		},
		{
			path: '/project',
			name: 'project',
			component: Project,
			beforeEnter: (to, from, next) => {
				console.log('before rote enter');
				next();
			},
		},
		{
			path: '/record',
			name: 'record',
			component: Record,
			beforeEnter: (to, from, next) => {
				console.log('before rote enter');
				next();
			},
		},
		{
			path: '/start',
			name: 'start',
			component: Start,
			beforeEnter: (to, from, next) => {
				console.log('before rote enter');
				next();
			},
		},
		{
			path: '/404',
			component: fortyFour,
			beforeEnter: (to, from, next) => {
				console.log('before rote enter');
				next();
			},
		},
		{
			path: '*',
			redirect: '/404',
		},
	],
	scrollBehavior(to, from, savedPosition) {
		if (savedPosition) {
			return savedPosition;
		}
		return { x: 0, y: 0 };
	},
});

export default router;
