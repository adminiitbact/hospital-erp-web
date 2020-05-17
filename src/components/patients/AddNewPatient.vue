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
      <form-container>
        <form-heading>{{ currentTab + 1 }}. {{ tabs[currentTab][0] }}</form-heading>
        <form-sub-section-heading>Basic Details</form-sub-section-heading>
        <form-group v-bind:label="'Label'" :type="'text'"></form-group>
        <form-group v-bind:label="'Label large'" :size="'large'" :type="'number'" v-model="text"></form-group>
        <form-group v-bind:label="'Label small'" :size="'small'" :type="'number'" :placeholder="'Add data'"></form-group>
        <form-group v-bind:label="'Label'" :type="'text'" :disabled="true"></form-group>
      </form-container>
    </b-col>
    {{ text }}
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


const AddNewPatientProps = Vue.extend({});

@Component({
  components: {
    'form-group': FormGroup,
    'page-heading': PageHeading,
    'form-container': FormContainer,
    'form-heading': FormHeading,
    'form-sub-section-heading': FormSubSectionHeading,
    tabMenuButton: TabMenuButton,
  },
})
export default class AddNewPatient extends AddNewPatientProps {
  text = '';

  tabs = [
    ['Personal Details', null],
    ['Symptoms', null],
  ];

  currentTab = 0;
}
</script>
