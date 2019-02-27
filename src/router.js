import Vue from 'vue';
import Router from 'vue-router';

import CONST from '@/const.js';

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
const Profile = () =>
	import(/* webpackChunkName: "Profile" */ './components/pages/Profile');
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
			path: CONST.PAGE_RECORD,
			name: 'record',
			component: Record,
		},
		{
			path: CONST.PRE_TEST,
			name: 'pretest',
			component: Pretest,
		},
		{
			path: CONST.PAGE_PROFILE,
			name: 'profile',
			component: Profile,
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
