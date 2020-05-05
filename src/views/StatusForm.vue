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
              <!-- <span>{{ facility.area }} - {{ jurisdictionMap[facility.jurisdiction] }}</span> -->
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
            <a v-for="(tab, index) in tabs" :key="index"
              :class="{
                'tab-menu w-inline-block w-tab-link': true,
                'w--current': tabsShort[index] == currentTab,
              }"
              v-on:click="changeCurrentTab(tabsShort[index])"
            >
              <div>{{ tab }}</div>
            </a>
          </div>
          <div class="tabs-content-2 w-tab-content">
            <facility-overview v-if="currentTab == tabsShort[0]"
              :facility="facility" :wards="wards">
            </facility-overview>
            <edit-facility v-else-if="currentTab == tabsShort[1]"
              :facility="facility">
            </edit-facility>
            <ward-details v-else-if="currentTab == tabsShort[2]"
              :wards="wards">
            </ward-details>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from 'vue';
import Component from 'vue-class-component';
import { mapState, mapGetters } from 'vuex';

import Sidebar from '../components/Sidebar.vue';
import Sidelogo from '../components/Sidelogo.vue';
import FacilityOverview from '../components/FacilityOverview.vue';
import EditFacility from '../components/EditFacility.vue';
import WardDetails from '../components/WardDetails.vue';

// const config = require('../config');

@Component({
  components: {
    sidebar: Sidebar,
    sidelogo: Sidelogo,
    'facility-overview': FacilityOverview,
    'edit-facility': EditFacility,
    'ward-details': WardDetails,
  },
  computed: {
    ...mapState([
      'user',
    ]),
    ...mapGetters([
      'facility',
      'wards',
    ]),
  },
})
export default class StatusForm extends Vue {
  tabs = ['Facility Overview', 'Edit Facility Details', 'Ward Details'];

  tabsShort = ['overview', 'edit', 'wards'];

  currentTab = 'overview'

  // jurisdictionMap = config.jurisdictionMap;

  mounted() {
    if (!this.$store.authToken) {
      this.$store.dispatch('setAuthToken');
    }
  }

  changeCurrentTab(currentTab) {
    this.currentTab = currentTab;
  }
}
</script>
