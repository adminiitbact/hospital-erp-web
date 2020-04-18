<template>
  <div class="section">
    <a href="status-form.html" class="logout-button  w-inline-block">
      <div class="">Home</div>
    </a>
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


@Component
export default class Sidebar extends Vue {
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
