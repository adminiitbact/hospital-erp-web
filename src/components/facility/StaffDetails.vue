<template>
  <div>
    <form-heading>Facility Staff Details</form-heading>
    <form-subheading>Doctors</form-subheading>
    <form-subsub :heading="'Total Doctors'">
      <b-row>
        <b-col cols="2" >
          <form-group
          :label="'Total Doctors'"
          :type="'number'"
          :size="'small'"
          :value="''"
          :placeholder="'Number'"
          ></form-group>
        </b-col>
        <b-col cols="2" >
          <form-group
          :label="'Ayush Doctors'"
          :type="'number'"
          :size="'small'"
          :value="''"
          :placeholder="'Number'"
          ></form-group>
        </b-col>
      </b-row>
    </form-subsub>
    <form-subsub :heading="'Speciality Doctors'">
      <b-row>
        <b-col cols="2" >
          <form-group
          :label="'Chest Physicians'"
          :type="'number'"
          :size="'small'"
          :value="''"
          :placeholder="'Number'"
          ></form-group>
        </b-col>
        <b-col cols="2" >
          <form-group
          :label="'Pulmonary'"
          :type="'number'"
          :size="'small'"
          :value="''"
          :placeholder="'Number'"
          ></form-group>
        </b-col>
        <b-col cols="2" >
          <form-group
          :label="'Nurses'"
          :type="'number'"
          :size="'small'"
          :value="''"
          :placeholder="'Number'"
          ></form-group>
        </b-col>
        <b-col cols="2" >
          <form-group
          :label="'Anesthesiologists'"
          :type="'number'"
          :size="'small'"
          :value="''"
          :placeholder="'Number'"
          ></form-group>
        </b-col>
      </b-row>
    </form-subsub>
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
export default class StaffDetails extends Vue {
   message='';
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
