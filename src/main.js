import Vue from 'vue';
import VueApollo from 'vue-apollo';
import { BootstrapVue } from 'bootstrap-vue';
import App from './App.vue';
import router from './router';
import store from './store';
import apolloClient from './hasuraConfig';

import './assets/css/custom.scss';

Vue.config.productionTip = false;
Vue.use(VueApollo);
Vue.use(BootstrapVue);

const apolloProvider = new VueApollo({
  defaultClient: apolloClient,
});

new Vue({
  router,
  store,
  apolloProvider,
  render: (h) => h(App),
}).$mount('#app');
