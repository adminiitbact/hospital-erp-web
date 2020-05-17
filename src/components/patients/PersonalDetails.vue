<template>
  <form-container>
    <form-heading>{{ pageTitle }}</form-heading>
    <form-sub-section-heading>Basic Details</form-sub-section-heading>
    <b-row>
      <b-col cols="4" v-for="field in [contactNum, firstName, lastName]" :key="field[0]">
        <form-group v-bind:label="field[0]" :type="field[1]" :placeholder="field[2]" v-model="field[3]" :options="field[4]">
        </form-group>
      </b-col>
    </b-row>
    <b-row>
      <form-group v-bind:label="'Label large'" :size="'large'" :type="'number'" v-model="text"></form-group>
    </b-row>
    <form-group v-bind:label="'Label small'" :size="'small'" :type="'number'" :placeholder="'Add data'"></form-group>
    <form-group v-bind:label="'Label'" :type="'text'" :disabled="true"></form-group>
  </form-container>
</template>
<script>
import Vue from 'vue';
import Component from 'vue-class-component';
import FormSubSectionHeading from '../elements/form/FormSubSectionHeading.vue';
import FormGroup from '../elements/form/FormGroup.vue';
import FormHeading from '../elements/form/FormHeading.vue';
import FormContainer from '../elements/form/FormContainer.vue';

import queries from '../../utils/graphql/queries';


const PersonalDetailsProps = Vue.extend({
  props: {
    pageTitle: {
      required: true,
    },
  },
});


@Component({
  components: {
    'form-container': FormContainer,
    'form-sub-section-heading': FormSubSectionHeading,
    'form-group': FormGroup,
    'form-heading': FormHeading,
  },
})
export default class PersonalDetails extends PersonalDetailsProps {
  text = '';

  genderOpts = [];

  contactNum = ['Contact number', 'number', 'Enter Primary Contact No.', ''];

  firstName = ['First name', 'text', 'Enter first name', ''];

  lastName = ['Last name', 'text', 'Enter last name', ''];

  gender = [];

  setFields() {
    this.gender = ['Gender', 'options', '', '', this.genderOpts];
  }

  mounted() {
    queries.getAreaAndGender().then((res) => {
      this.area = res.area;
      this.genderOpts = res.gender;
      this.setFields();
    });
  }
}
</script>
