<template>
  <form-container>
    <form-heading>{{ pageTitle }}</form-heading>
    <form @submit.prevent="check">
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
      <b-row class="mt-3 mb-2" v-show="checkAvailability">
        <b-col cols="6">
          <c-button type="submit">Check for availability</c-button>
        </b-col>
      </b-row>
      <template v-if="!checkAvailability">
        <b-row class="mb-2" v-for="(row, index) in extraFormStructure" :key="index">
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
        <b-row class="mb-2" v-for="(row, index) in caseFormStructure" :key="index">
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
  },
})
export default class PersonalDetails extends PersonalDetailsProps {
  genderOpts = [];

  areaOpts = [];

  contactNum = ['Contact number', 'number', 'Enter Primary Contact No.', '123'];

  firstName = ['First name', 'text', 'Enter first name', 'f name'];

  lastName = ['Last name', 'text', 'Enter last name', 'l name'];

  gender = [];

  ageYears = ['Age', 'number', 'Enter age in years', '25'];

  ageMonths = ['Age in months', 'number', 'Enter age in months', '3']

  occupation = ['Occupation', 'text', 'Enter occupation', ''];

  address = ['Address', 'text', 'Enter patient address', ''];

  area = []

  district = ['District', 'text', 'Enter district', 'Pune'];

  state = ['State', 'text', 'Enter state', 'Maharashtra'];

  // eslint-disable-next-line camelcase
  district_case_id = ['District Case Number', 'text', 'Enter district case ID', ''];

  // eslint-disable-next-line camelcase
  hospital_case_id = ['Hospital Patient ID', 'text', 'Enter hospital case ID', ''];

  // eslint-disable-next-line camelcase
  goi_covid_id = ['GOI COVID ID', 'text', 'Enter GOI COVID ID', ''];

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
        [4, this.hospital_case_id],
        [4, this.district_case_id],
        [4, this.goi_covid_id],
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

  check() {
    console.log(this.contactNum[3]);
    queries.checkPatientExists({
      contact_number: this.contactNum[3], gender: this.gender[3], ageMinus: this.ageYears[3] - 5, agePlus: this.ageYears[3] + 5,
    }).then((res) => {
      console.log(res);
      // TODO: check list length and proceed
    // this.checkAvailability = !this.checkAvailability;
    });
  }
}
</script>
