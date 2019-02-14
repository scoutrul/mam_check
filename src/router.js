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
const Pretest = () =>
	import(/* webpackChunkName: "Pretest" */ './components/pages/PreTest');
const Checkup = () =>
	import(/* webpackChunkName: "Checkup" */ './components/pages/Checkup');
const Test = () =>
	import(/* webpackChunkName: "Test" */ './components/pages/Test');

Vue.use(Router);

const router = new Router({
	saveScrollPosition: true,
	history: true,
	mode: 'history',
	base: process.env.BASE_URL,
	routes: [
		{
			path: '/',
			name: 'home',
			component: Home,
		},
		{
			path: '/project',
			name: 'project',
			component: Project,
		},
		{
			path: '/record',
			name: 'record',
			component: Record,
		},
		{
			path: '/pretest',
			name: 'pretest',
			component: Pretest,
		},
		{
			path: '/checkup',
			name: 'checkup',
			component: Checkup,
		},
		{
			path: '/test/:testId',
			name: 'test',
			component: Test,
		},
		{
			path: '/404',
			component: fortyFour,
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
