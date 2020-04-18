<template>
  <div class="columns-4 w-row">
    <div class="w-col w-col-2">
      <sidelogo></sidelogo>
      <sidebar></sidebar>
    </div>
    <div class="column w-col w-col-10">
      <div class="div-block-44 profile-page">
        <div class="div-block-36 _2 profile-page">
          <div class="hospital-profile-header-div inline">
            <h1 class="heading-2 profile">
              {{ facility.name }}
            </h1>
            <div class="text-block-6 profile">
              <span id="area">{{ facility.address }}</span>-<span
                id="jurisdiction"
              ></span>
            </div>
          </div>
          <a href="profile-form.html" class="button w-button">Edit Profile</a>
        </div>
        <div
          data-duration-in="400"
          data-duration-out="150"
          data-easing="ease-in"
          class="w-tabs"
        >
          <div class="tabs-menu-2 w-tab-menu">
            <a
              data-w-tab="Facility Profile"
              class="tab-menu w-inline-block w-tab-link"
            >
              <div>FACILITY OVERVIEW</div>
            </a>
            <a
              data-w-tab="Update Facility Details"
              class="tab-menu w-inline-block w-tab-link"
            >
              <div>Edit FACILITY DETAILS</div>
            </a>
            <a
              data-w-tab="Ward Details"
              class="tab-menu w-inline-block w-tab-link w--current"
            >
              <div>Ward details</div>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from 'vue';
import Component from 'vue-class-component';

import Sidebar from '../components/Sidebar.vue';
import Sidelogo from '../components/Sidelogo.vue';

@Component({
  components: {
    sidebar: Sidebar,
    sidelogo: Sidelogo,
  },
})
export default class StatusForm extends Vue {
  mounted() {

  }


}
</script>
