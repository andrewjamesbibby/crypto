
/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

window.Vue = require('vue');

import VueRouter from 'vue-router';
window.Vue.use(VueRouter);

import VueGoogleCharts from 'vue-google-charts';
Vue.use(VueGoogleCharts);

Vue.use(require('vue-moment'));

import store from './store';



/**
 * The following block of code may be used to automatically register your
 * Vue components. It will recursively scan this directory for the Vue
 * components and automatically register them with their "basename".
 *
 * Eg. ./components/ExampleComponent.vue -> <example-component></example-component>
 */

// const files = require.context('./', true, /\.vue$/i)
// files.keys().map(key => Vue.component(key.split('/').pop().split('.')[0], files(key).default))

// Vue.component('example-component', require('./components/ExampleComponent.vue').default);
// Vue.component('home', require('./components/home.vue').default);
// Vue.component('page2', require('./components/page2.vue').default);


import Base from './components/app.vue'

import routes from './routes';

const router = new VueRouter({ routes });

const app = new Vue({
    store,
    router,
    render: h => h(Base),
}).$mount('#app');

