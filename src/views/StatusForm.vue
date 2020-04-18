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
              <span>{{ facility.area }} - {{ facility.jurisdiction }}</span>
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
              :facility="facility">
            </facility-overview>
            <edit-facility v-else-if="currentTab == tabsShort[1]"></edit-facility>
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

import Sidebar from '../components/Sidebar.vue';
import Sidelogo from '../components/Sidelogo.vue';
import API from '../utils/apis';
import FacilityOverview from '../components/FacilityOverview.vue';
import EditFacility from '../components/EditFacility.vue';
import WardDetails from '../components/WardDetails.vue';


@Component({
  components: {
    sidebar: Sidebar,
    sidelogo: Sidelogo,
    'facility-overview': FacilityOverview,
    'edit-facility': EditFacility,
    'ward-details': WardDetails,
  },
})
export default class StatusForm extends Vue {
  user = {};

  facility = {};

  wards = [];

  tabs = ['Facility Overview', 'Edit Facility Details', 'Ward Details'];

  tabsShort = ['overview', 'edit', 'wards'];

  currentTab = 'overview'

  mounted() {
    this.fetchUser();
  }

  fetchUser() {
    API.fetchUser().then((success) => {
      this.user = success.data.profile;
      this.fetchFacility();
    }, (error) => {
      console.log(error);
    });
  }

  fetchFacility() {
    API.fetchFacilityData(this.user.facilityId).then(
      (success) => {
        this.facility = success.data;
        this.fetchWards();
      }, (error) => {
        console.log(error);
      },
    );
  }

  fetchWards() {
    API.fetchWards(this.user.facilityId, 'NEGATIVE', 'MILD').then(
      (success) => {
        this.wards = success.data.list;
      }, (error) => {
        // eslint-disable-next-line no-alert
        alert(
          `Error in fetching ward information: ${error.responseJSON.status}`,
        );
        console.log(error);
      },
    );
  }

  changeCurrentTab(currentTab) {
    this.currentTab = currentTab;
  }
}
</script>
