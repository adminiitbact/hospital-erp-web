/* eslint-disable global-require */
import Vue from 'vue';
import Vuex from 'vuex';
import getters from './getters';
import actions from './actions';
import mutations from './mutations';

Vue.use(Vuex);

const state = {
  authToken: null,
  facility: {},
  user: {},
  wards: [],
  patients: [],
  referredPatients: [],
};

const store = new Vuex.Store({
  state,
  getters,
  actions,
  mutations,
});

if (module.hot) {
  module.hot.accept([
    './getters',
    './actions',
    './mutations',
  ], () => {
    store.hotUpdate({
      // eslint-disable-next-line global-require
      getters: require('./getters'),
      actions: require('./actions'),
      mutations: require('./mutations'),
    });
  });
}

export default store;
