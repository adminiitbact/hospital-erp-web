import Vue from 'vue';
import VueRouter from 'vue-router';
import Login from '../views/Login.vue';
import Utils from '../utils/utils';


Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'login',
    component: Login,
  },
  {
    path: '/status-form',
    name: 'status-form',
    component: () => import('../views/StatusForm.vue'),
  },
  {
    path: '/index.html', redirect: { name: 'login' },
  },
  {
    path: '/patient-list',
    name: 'patient-list',
    component: () => import('../views/PatientList.vue'),
  },
  {
    path: '/referred-patient-list',
    name: 'referred-patient-list',
    component: () => import('../views/ReferredPatientList.vue'),
  },
  {
    path: '/profile-form',
    name: 'profile-form',
    component: () => import('../views/FacilityProfileForm.vue'),
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
  if (to.name !== 'login' && from.name !== 'login') {
    Utils.refreshFirebaseAuthToken();
  }
  next();
});

export default router;
