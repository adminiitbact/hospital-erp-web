<template>
  <div class="section">
    <router-link :to="{ 'name': 'status-form' }" class="logout-button w-inline-block w--current">
      <div class="">Home</div>
    </router-link>
    <a href="patient-overview.html" class="logout-button  w-inline-block">
      <div class="">Add New Patient +</div>
    </a>
    <a
      href="list-of-referred-patients.html"
      class="logout-button  w-inline-block"
    >
      <div class="">referred patients</div>
    </a>
    <a href="list-of-patients.html" class="logout-button  w-inline-block">
      <div class="">Patients LIST</div>
    </a>
    <a href="profile-form.html" class="logout-button  w-inline-block">
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
  logout() {
    const vm = this; // eslint-disable-line
    auth.signOut().then(() => {
      // Sign-out successful.
      window.localStorage.removeItem('authToken');
      window.location.href = '/';
    }).catch((error) => {
      alert(`Error in Sign-out.${error}`); // eslint-disable-line
    });
  }
}
</script>
