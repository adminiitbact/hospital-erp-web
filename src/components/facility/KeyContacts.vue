<template>
  <div>
    <form-heading>Key Facility Contacts</form-heading>
    <form-subheading>Admin Contact Details</form-subheading>
    <b-row>
      <b-col cols="6">
        <form-subsub :heading="'Primary Contact Details'">
          <b-row>
            <b-col cols="6">
              <form-group
                :label="'Name'"
                :type="'text'"
                :value="''"
                :placeholder="'First Name'"
              ></form-group>
            </b-col>
            <b-col cols="6">
              <form-group
                :label="'Mobile'"
                :type="'number'"
                :value="''"
                :placeholder="'+91'"
              ></form-group>
            </b-col>
          </b-row>
        </form-subsub>
      </b-col>
      <b-col cols="6">
      <form-subsub :heading="'Application Incharge Details'">
          <b-row>
            <b-col cols="6">
              <form-group
                :label="'Name'"
                :type="'text'"
                :value="''"
                :placeholder="'First Name'"
              ></form-group>
            </b-col>
            <b-col cols="6">
              <form-group
                :label="'Mobile'"
                :type="'number'"
                :value="''"
                :placeholder="'+91'"
              ></form-group>
            </b-col>
          </b-row>
        </form-subsub>
      </b-col>
    </b-row>
    <form-subheading>Other Facility Incharge Details</form-subheading>
    <b-row>
      <b-col cols="6">
        <form-subsub :heading="'Ambulance Incharge Details'">
          <b-row>
            <b-col cols="6">
              <form-group
                :label="'Name'"
                :type="'text'"
                :value="''"
                :placeholder="'First Name'"
              ></form-group>
            </b-col>
            <b-col cols="6">
              <form-group
                :label="'Mobile'"
                :type="'number'"
                :value="''"
                :placeholder="'+91'"
              ></form-group>
            </b-col>
          </b-row>
        </form-subsub>
      </b-col>
      <b-col cols="6">
      <form-subsub :heading="'Health Checkup Incharge'">
          <b-row>
            <b-col cols="6">
              <form-group
                :label="'Name'"
                :type="'text'"
                :value="''"
                :placeholder="'First Name'"
              ></form-group>
            </b-col>
            <b-col cols="6">
              <form-group
                :label="'Mobile'"
                :type="'number'"
                :value="''"
                :placeholder="'+91'"
              ></form-group>
            </b-col>
          </b-row>
        </form-subsub>
      </b-col>
    </b-row>
    <b-row>
      <b-col cols="6">
        <form-subsub :heading="'Premise Disinfection & Cleaning Incharge'">
          <b-row>
            <b-col cols="6">
              <form-group
                :label="'Name'"
                :type="'text'"
                :value="''"
                :placeholder="'First Name'"
              ></form-group>
            </b-col>
            <b-col cols="6">
              <form-group
                :label="'Mobile'"
                :type="'number'"
                :value="''"
                :placeholder="'+91'"
              ></form-group>
            </b-col>
          </b-row>
        </form-subsub>
      </b-col>
    </b-row>
    <form-buttons
      :cancel_button_text="'Cancel'"
      v-on:cancel="cancel()"
      :save_button_text="'Save & Next'"
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
export default class KeyContacts extends Vue {
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
