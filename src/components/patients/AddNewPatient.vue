<template>
  <b-row class="p-3 h-100">
    <b-col cols="2">
      <b-row class="ml-2 mb-5">
        <page-heading>New Patient Registration</page-heading>
      </b-row>
      <b-row class="m-2"
        v-for="(tab, index) in tabs"
        :key="tab[0]">
        <tabMenuButton
          :text="tab[0]"
          v-on:click="changeTab(index)"
          :number="index + 1"
          :isActive="currentTab == index"
        ></tabMenuButton>
      </b-row>
    </b-col>
    <b-col cols="7">
      <keep-alive>
        <component v-bind:is="tabs[currentTab][1]" :page-title="pageTitle"
          v-on:save="saveAndProceed"></component>
      </keep-alive>
    </b-col>
  </b-row>
</template>
<script>
import Vue from 'vue';
import Component from 'vue-class-component';
import FormGroup from '../elements/form/FormGroup.vue';
import PageHeading from '../elements/text/PageHeading.vue';
import TabMenuButton from '../elements/buttons/TabMenuButton.vue';
import FormContainer from '../elements/form/FormContainer.vue';
import FormHeading from '../elements/form/FormHeading.vue';
import FormSubSectionHeading from '../elements/form/FormSubSectionHeading.vue';
import PersonalDetails from './PersonalDetails.vue';
import Symptoms from './Symptoms.vue';


const AddNewPatientProps = Vue.extend({});

@Component({
  components: {
    'form-group': FormGroup,
    'page-heading': PageHeading,
    'form-container': FormContainer,
    'form-heading': FormHeading,
    'form-sub-section-heading': FormSubSectionHeading,
    tabMenuButton: TabMenuButton,
    'personal-details': PersonalDetails,
    symptoms: Symptoms,
  },
})
export default class AddNewPatient extends AddNewPatientProps {
  tabs = [
    ['Personal Details', 'personal-details'],
    ['Symptoms', 'symptoms'],
    ['COVID-19 Test Details', null],
    ['Comorbidity', null],
    ['Allocate Ward', null],
  ];

  doneTabs = 10;

  patientData = {};

  currentTab = 0;

  get pageTitle() {
    return `${this.currentTab + 1}. ${this.tabs[this.currentTab][0]}`;
  }

  saveAndProceed(updateData) {
    Object.assign(this.patientData, updateData);
    this.nextTab();
  }

  nextTab() {
    if (this.currentTab >= this.tabs.length - 1) {
      // TODO: submitPatientData
      console.log(this.patientData);
    } else {
      this.currentTab += 1;
      this.doneTabs = this.currentTab;
    }
  }

  changeTab(index) {
    if (index <= this.doneTabs) {
      this.currentTab = index;
    }
  }
}
</script>
