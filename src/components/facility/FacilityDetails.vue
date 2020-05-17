<template>
  <b-row class="p-3 h-100">
    <b-col cols="2" >
      <b-row class="m-2">
        <h6 class="page-heading">Update Facility</h6>
      </b-row>
      <b-row class="m-2"
        v-for="tab in tabs"
        :key="tab['component']">
        <tabMenuButton
          :text="tab['text']"
          v-on:click="changeTab(tab['component'])"
          :iconImagePath="tab['iconImagePath']"
          :isActive="currentTab == tab['component']"
        ></tabMenuButton>
      </b-row>
    </b-col>
    <b-col cols="10">
      <div class="form-container-icons .w-tab-content d-flex flex-column h-100">
        <div class="form-wrapper flex-grow-1">
        <component v-bind:is="currentTab"></component>
        </div>
      </div>
    </b-col>
  </b-row>
</template>
<style scoped>
.form-wrapper {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  overflow: scroll;
  padding-right: 20px;
  padding-bottom: 15px;
  padding-left: 40px;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -webkit-flex-direction: column;
  -ms-flex-direction: column;
  flex-direction: column;
  -webkit-box-pack: justify;
  -webkit-justify-content: space-between;
  -ms-flex-pack: justify;
  justify-content: space-between;
}

.w-tab-content {
    position: relative;
    display: block;
    overflow: hidden;
}
.form-container-icons {
    padding-top: 10px;
    padding-right: 10px;
    -webkit-box-flex: 1;
    -webkit-flex: 1;
    -ms-flex: 1;
    flex: 1;
    border-radius: 15px;
    background-color: #fff;
    box-shadow: 0 0 5px 1px #d3d3d3;
}
.main-white-div {
    position: absolute;
    left: 0%;
    top: 45px;
    right: 0%;
    bottom: 0%;
    border-radius: 20px;
    background-color: #fff;
    box-shadow: 0 0 5px 1px hsla(0, 0%, 52%, 0.25);
}

.icon-button {
  height: 100px;
  padding-top: 55px;
  background-color: transparent;
  background-image: url('../../assets/images/Icon-Button-`.svg');
  background-position: 50% 10px;
  background-size: 35px;
  background-repeat: no-repeat;
  color: #6c6c6c;
  text-align: center;
}

.div-block-11 {
  position: absolute;
  width: 160px;
  padding-top: 5px;
  padding-left: 5px;
}
.page-heading {
    position: relative;
    font-family: Roboto, sans-serif;
    color: #898989;
    font-size: 16px;
    line-height: 135%;
    font-weight: 400;
}
</style>

<script>
import Vue from 'vue';
import Component from 'vue-class-component';
import TabMenuButton from '../elements/buttons/TabMenuButton.vue';
import FacilityAssets from './FacilityAssets.vue';
import StaffDetails from './StaffDetails.vue';
import Checklist from './Checklist.vue';
import KeyContacts from './KeyContacts.vue';
import FacilityProfile from './FacilityProfile.vue';

@Component({
  components: {
    tabMenuButton: TabMenuButton,
    'facility-assets': FacilityAssets,
    'staff-details': StaffDetails,
    checklist: Checklist,
    'key-contacts': KeyContacts,
    'facility-profile': FacilityProfile,
  },
})
export default class FacilityDetails extends Vue {
  tabs = [
    { text: 'Facility Assets', component: 'facility-assets', iconImagePath: './../../../assets/images/Ward-Bed.svg' },
    { text: 'Staff Details', component: 'staff-details', iconImagePath: './../../../assets/images/024-doctor-1.png' },
    { text: 'Checklist', component: 'checklist', iconImagePath: './../../../assets/images/013-checklist.png' },
    { text: 'Key Contacts', component: 'key-contacts', iconImagePath: './../../../assets/images/busy.svg' },
    { text: 'Facility Profile', component: 'facility-profile', iconImagePath: './../../../assets/images/015-hospital-1.png' },
  ];

  currentTab = 'facility-assets';

  changeTab(tab) {
    this.currentTab = tab;
  }
}
</script>
