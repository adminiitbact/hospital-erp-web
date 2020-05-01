<template>
  <div class="section">
    <router-link v-for="routeInfo in routeDetails"
      :key="routeInfo[0]"
      :to="{ 'name': routeInfo[0] }"
      :class = "{
        'logout-button w-inline-block': true,
        'w--current': routeInfo[0] == currentRouteName
      }"
      >
      <div>{{ routeInfo[1] }}</div>
    </router-link>
    <a href="patient-overview.html" class="logout-button  w-inline-block">
      <div class="">Add New Patient +</div>
    </a>
    <a href="profile-form" class="logout-button  w-inline-block">
      <div class="">Edit Profile</div>
    </a>
    <a v-on:click="logout" class="logout-button w-inline-block">
      <div>Logout</div>
    </a>
  </div>
</template>

<script>
import Vue from 'vue';
import Component from 'vue-class-component';
import auth from '../firebaseConfig';


const SidebarProps = Vue.extend({
  props: {
    currentPage: {
      required: false,
      default: 'home',
    },
  },
});


@Component
export default class Sidebar extends SidebarProps {
  routeDetails = [
    ['status-form', 'Home'],
    ['referred-patient-list', 'Referred Patients'],
    ['patient-list', 'Patients List'],
  ]

  logout() {
    const vm = this; // eslint-disable-line
    auth.signOut().then(() => {
      // Sign-out successful.
      window.localStorage.removeItem('authToken');
      this.$router.push({ name: 'login' });
    }).catch((error) => {
      alert(`Error in Sign-out.${error}`); // eslint-disable-line
    });
  }

  get currentRouteName() {
    return this.$route.name;
  }
}
</script>
