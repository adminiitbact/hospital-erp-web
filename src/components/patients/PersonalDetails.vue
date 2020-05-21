<template>
  <form-container>
    <form-heading>{{ pageTitle }}</form-heading>
    <form @submit.prevent="submitForm">
      <form-sub-section-heading>Basic Details</form-sub-section-heading>
      <b-row class="mb-2" v-for="(row, index) in basicFormStructure" :key="index">
        <b-col v-for="fieldDet in row" :cols="fieldDet[0]" :key="fieldDet[1][0]">
          <form-group
            v-bind:label="fieldDet[1][0]"
            :type="fieldDet[1][1]"
            :placeholder="fieldDet[1][2]"
            v-model="fieldDet[1][3]"
            :options="fieldDet[1][4]">
          </form-group>
        </b-col>
      </b-row>
      <form-buttons
        :cancel_button_text="'Cancel'"
        :save_button_text="'Check availability'"
        v-if="checkAvailability"
      ></form-buttons>
      <template v-else>
        <b-row class="mb-2" v-for="(row, index) in extraFormStructure" :key="index + 10">
          <b-col v-for="fieldDet in row" :cols="fieldDet[0]" :key="fieldDet[1][0]">
            <form-group
              v-bind:label="fieldDet[1][0]"
              :type="fieldDet[1][1]"
              :placeholder="fieldDet[1][2]"
              v-model="fieldDet[1][3]"
              :options="fieldDet[1][4]">
            </form-group>
          </b-col>
        </b-row>
        <form-sub-section-heading class="mt-4">Case Details</form-sub-section-heading>
        <b-row class="mb-2" v-for="(row, index) in caseFormStructure" :key="index + 20">
          <b-col v-for="fieldDet in row" :cols="fieldDet[0]" :key="fieldDet[1][0]">
            <form-group
              v-bind:label="fieldDet[1][0]"
              :type="fieldDet[1][1]"
              :placeholder="fieldDet[1][2]"
              v-model="fieldDet[1][3]"
              :options="fieldDet[1][4]">
            </form-group>
          </b-col>
        </b-row>
        <form-buttons
          :cancel_button_text="'Cancel'"
          :save_button_text="'Save and Proceed'"
        ></form-buttons>
      </template>
    </form>
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
import Button from '../elements/buttons/Button.vue';
import FormButtons from '../elements/form/FormButtons.vue';


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
    'c-button': Button,
    'form-buttons': FormButtons,
  },
})
export default class PersonalDetails extends PersonalDetailsProps {
  genderOpts = [];

  areaOpts = [];

  contactNum = ['Contact number', 'number', 'Enter Primary Contact No.', ''];

  firstName = ['First name', 'text', 'Enter first name', ''];

  lastName = ['Last name', 'text', 'Enter last name', ''];

  gender = [];

  ageYears = ['Age', 'number', 'Enter age in years', ''];

  ageMonths = ['Age in months', 'number', 'Enter age in months', '']

  occupation = ['Occupation', 'text', 'Enter occupation', ''];

  address = ['Address', 'text', 'Enter patient address', ''];

  area = []

  district = ['District', 'text', 'Enter district', 'Pune'];

  state = ['State', 'text', 'Enter state', 'Maharashtra'];

  districtCaseId = ['District Case Number', 'text', 'Enter district case ID', ''];

  hospitalCaseId = ['Hospital Patient ID', 'text', 'Enter hospital case ID', ''];

  goiCovidId = ['GOI COVID ID', 'text', 'Enter GOI COVID ID', ''];

  checkAvailability = true;

  get basicFormStructure() {
    return [
      [
        [4, this.contactNum],
        [4, this.firstName],
        [4, this.lastName],
      ],
      [
        [4, this.gender],
        [4, this.ageYears],
        [4, this.ageMonths],
      ],
    ];
  }

  get extraFormStructure() {
    return [
      [
        [4, this.occupation],
        [8, this.address],
      ],
      [
        [4, this.area],
        [4, this.district],
        [4, this.state],
      ],
    ];
  }

  get caseFormStructure() {
    return [
      [
        [4, this.hospitalCaseId],
        [4, this.districtCaseId],
        [4, this.goiCovidId],
      ],
    ];
  }

  setFields() {
    this.gender = ['Gender', 'options', '', this.genderOpts[0].key, this.genderOpts];
    this.area = ['Locality', 'options', '', this.areaOpts[0].key, this.areaOpts];
  }


  mounted() {
    queries.getAreaAndGender().then((res) => {
      this.areaOpts = res.area;
      this.genderOpts = res.gender;
      this.setFields();
    });
  }

  submitForm(e) {
    if (this.checkAvailability) {
      this.check(e);
    } else {
      this.saveAndProceed();
    }
  }

  saveAndProceed() {
    const patientData = {
      first_name: this.firstName[3],
      last_name: this.lastName[3],
      age: this.ageYears[3],
      gender: this.gender[3],
      locality: this.area[3],
      district: this.district[3],
      state: this.state[3],
      occupation: this.occupation[3],
      contact_number: this.contactNum[3],
      district_case_id: this.districtCaseId[3],
      hospital_case_id: this.hospitalCaseId[3],
      goi_covid_id: this.goiCovidId[3],
    };
    this.$emit('save', patientData);
  }

  check() {
    // TODO: check for duplicate only in the same facility.
    queries.checkPatientExists({
      contact_number: this.contactNum[3],
      gender: this.gender[3],
      ageMinus: this.ageYears[3] - 5,
      agePlus: this.ageYears[3] + 5,
    }).then((res) => {
      if (res.length === 0) {
        this.checkAvailability = false;
      } else {
        // TODO: Display error message that patient exists in the database.
      }
    });
  }
}
</script>
