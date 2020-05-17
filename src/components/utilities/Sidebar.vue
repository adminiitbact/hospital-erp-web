<template>
  <div class="section">
    <nav-but v-for="routeInfo in routeDetails"
      :key="routeInfo[0]"
      :to="{ 'name': routeInfo[0] }"
      :is-active="routeInfo[0] == currentRouteName"
      >
      <div>{{ routeInfo[1] }}</div>
    </nav-but>
    <a v-on:click="logout" class="logout-button w-inline-block">
      <div>Logout</div>
    </a>
  </div>
</template>

<script>
import Vue from 'vue';
import Component from 'vue-class-component';
import auth from '../../firebaseConfig';
import NavigationButton from '../elements/buttons/NavigationButton.vue';


const SidebarProps = Vue.extend({
  props: {
    currentPage: {
      required: false,
      default: 'home',
    },
  },
});


@Component({
  components: {
    'nav-but': NavigationButton,
  },
})
export default class Sidebar extends SidebarProps {
  routeDetails = [
    ['status-form', 'Home'],
    ['referred-patient-list', 'Referred Patients'],
    ['patient-list', 'Patients List'],
    ['add-patient', 'Add New Patient +'],
    ['profile-form', 'Edit Profile'],
    ['patient-details', 'Patient details'],
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
