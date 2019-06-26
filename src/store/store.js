import Vue from 'vue';
import Vuex from 'vuex';

import Orders from "./moduls/Orders";

Vue.use(Vuex);

export const store = new Vuex.Store({
  modules: {
    Orders
  }
});
