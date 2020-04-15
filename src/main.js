// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
window.$ = window.jQuery = require('jquery');
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { routes } from './router/index.js';
import Vuex from 'vuex';

Vue.config.productionTip = false;
Vue.use(VueRouter);


// Globally filters
Vue.filter('replaceDoller',function(value){
  return value.replace(/\$/,'');
});

const router = new VueRouter({
  routes,
  mode:'history'
});

import { storage } from "./store/index";

const store = new Vuex.Store(storage);
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
