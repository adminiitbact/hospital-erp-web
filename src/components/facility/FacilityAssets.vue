<template>
  <div>
    <form-heading>Facility Assets</form-heading>
    <form-subheading>Available Beds</form-subheading>
    <form-subsub :heading="'Total Available Beds'">
      <b-row>
        <b-col cols="2" >
          <form-group
          :label="'Total Beds'"
          :type="'number'"
          :size="'small'"
          :value="''"
          :placeholder="'Number'"
          ></form-group>
        </b-col>
        <b-col cols="2" >
          <form-group
          :label="'Non COVID Beds'"
          :type="'number'"
          :size="'small'"
          :value="''"
          :placeholder="'Number'"
          ></form-group>
        </b-col>
      </b-row>
    </form-subsub>
    <form-subsub :heading="'Available Ventilator Beds'">
      <b-row>
        <b-col cols="2" >
          <form-group
          :label="'Total Ventilators'"
          :type="'number'"
          :size="'small'"
          :value="''"
          :placeholder="'Number'"
          ></form-group>
        </b-col>
        <b-col cols="2" >
          <form-group
          :label="'COVID Ventilators'"
          :type="'number'"
          :size="'small'"
          :value="''"
          :placeholder="'Number'"
          ></form-group>
        </b-col>
      </b-row>
    </form-subsub>
    <form-subsub :heading="'Available ICU Beds'">
      <b-row>
        <b-col cols="2" >
          <form-group
          :label="'Total ICU Beds'"
          :type="'number'"
          :size="'small'"
          :value="''"
          :placeholder="'Number'"
          ></form-group>
        </b-col>
        <b-col cols="2" >
          <form-group
          :label="'COVID ICU Beds'"
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
export default class FacilityAssets extends Vue {
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
