<template>
  <div>
    <form-heading>Facility Profile</form-heading>
    <form-subheading>General Information</form-subheading>
    <form-subsub :heading="'General Information'">
      <b-row>
        <b-col cols="4">
          <form-group
            :label="'Institution Type'"
            :type="'options'"

            :value="''"
            :options="institutionTypeOptions"
          ></form-group>
        </b-col>
        <b-col cols="4">
          <form-group
            :label="'Your Area'"
            :type="'text'"

            :value="''"
            :placeholder="'Area'"
          ></form-group>
        </b-col>
        <b-col cols="4">
          <form-group
            :label="'Jurisdiction'"
            :type="'options'"

            :value="''"
            :options="jurisdictionOptions"
          ></form-group>
        </b-col>
      </b-row>
      <b-row>
        <b-col cols="8">
          <form-group
            :label="'Name of your Facility'"
            :type="'text'"

            :value="''"
            :placeholder="'Name of Facility'"
          ></form-group>
        </b-col>
        <b-col cols="4">
          <form-group
            :label="'Are you a Government Facility?'"
            :type="'options'"

            :value="''"
            :options="yesNoOptions"
          ></form-group>
        </b-col>
      </b-row>
      <b-row>
        <b-col cols="4">
          <form-group
            :label="'Organisation\'s Telephone'"
            :type="'number'"

            :value="''"
            :placeholder="'Telephone'"
          ></form-group>
        </b-col>
        <b-col cols="4">
          <form-group
            :label="'Secondary Telephone (Optional)'"
            :type="'number'"

            :value="''"
            :placeholder="'Telephone'"
          ></form-group>
        </b-col>
        <b-col cols="4">
          <form-group
            :label="'Organisation\'s Email'"
            :type="'email'"

            :value="''"
            :placeholder="'Email'"
          ></form-group>
        </b-col>
      </b-row>
      <b-row>
        <b-col cols="4">
          <form-group
            :label="'Separate entry/exit to the facility'"
            :type="'options'"
            :value="''"
            :options="yesNoOptions"
          ></form-group>
        </b-col>
        <b-col cols="4">
          <form-group
            :label="'Is Fever Clinic Available?'"
            :type="'options'"

            :value="''"
            :options="yesNoOptions"
          ></form-group>
        </b-col>
      </b-row>
    </form-subsub>
    <form-buttons
      :cancel_button_text="'Cancel'"
      v-on:cancel="cancel()"
      :save_button_text="'Save & Close'"
      v-on:save="save()"
    ></form-buttons>
  </div>
</template>
<style scoped>
</style>

<script>
import Vue from 'vue';
import Component from 'vue-class-component';
import FormHeading from '../elements/form/FormHeading.vue';
import FormSubSectionHeading from '../elements/form/FormSubSectionHeading.vue';
import FormSubSubSection from '../elements/form/FormSubSubSection.vue';
import FormGroup from '../elements/form/FormGroup.vue';
import FormButtons from '../elements/form/FormButtons.vue';

@Component({
  components: {
    'form-heading': FormHeading,
    'form-subheading': FormSubSectionHeading,
    'form-subsub': FormSubSubSection,
    'form-group': FormGroup,
    'form-buttons': FormButtons,
  },
})
export default class FacilityProfile extends Vue {
  institutionTypeOptions=[
    { key: '', value: 'Select one...' },
    { key: 'Hospital', value: 'Hospital' },
    { key: 'Medical College Hospital', value: 'Medical College Hospital' },
    { key: 'Hostel - Educational', value: 'Hostel - Educational' },
    { key: 'Hostel - Other', value: 'Hostel - Other' },
    { key: 'Hotel', value: 'Hotel' },
    { key: 'Lodge', value: 'Lodge' },
    { key: 'Community Hall', value: 'Community Hall' },
    { key: 'Marriage Hall', value: 'Marriage Hall' },
    { key: 'School', value: 'School' },
    { key: 'Temporary Structure / Tent', value: 'Temporary Structure / Tent' },
    { key: 'Sports Complex / Stadium', value: 'Sports Complex / Stadium' },
    { key: 'Other', value: 'Other' },
  ];

  jurisdictionOptions=[
    { key: '', value: 'Select One...' },
    { key: 'PMC', value: 'PMC' },
    { key: 'PCMC', value: 'PCMC' },
    { key: 'CS', value: 'Civil Surgeon' },
    { key: 'DHO', value: 'DHO' },
  ];

  yesNoOptions=[
    { key: '', value: 'Select One...' },
    { key: 'true', value: 'Yes' },
    { key: 'false', value: 'No' },
  ];

  message = '';
  // TODO change this cancel and save function to interact with api.
  // Also fetch data and show in above form.

  cancel() {
    this.message = '';
    console.log('cancel');
  }

  save() {
    this.message = '';
    console.log('save');
  }
}
</script>
