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
      <form-container>
        <component v-bind:is="currentTab"></component>
      </form-container>
    </b-col>
  </b-row>
</template>
<style scoped>
.w-tab-content {
    position: relative;
    display: block;
    overflow: hidden;
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
import FormContainer from '../elements/form/FormContainer.vue';

@Component({
  components: {
    tabMenuButton: TabMenuButton,
    'facility-assets': FacilityAssets,
    'staff-details': StaffDetails,
    checklist: Checklist,
    'key-contacts': KeyContacts,
    'facility-profile': FacilityProfile,
    'form-container': FormContainer,
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
