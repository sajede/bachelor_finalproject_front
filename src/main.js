import Vue from 'vue';
import App from './App.vue';
import VueResource from 'vue-resource';

import VueRouter from 'vue-router';
import { routes } from './routes';

import { store } from './store/store';

Vue.use(VueResource);
Vue.http.options.root = 'http://localhost:8080/contacts/rest/';

Vue.use(VueRouter);
const router = new VueRouter({
  mode: 'history',
  routes
});

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
