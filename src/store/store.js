import Vue from 'vue';
import Vuex from 'vuex';

import user from './moduls/User';
import sessionId from './moduls/Session';
import caseParam from './moduls/Case';

Vue.use(Vuex);

export const store = new Vuex.Store({
  modules: {
    user,
    sessionId,
    caseParam,
  }
});
