<template>
  <div>
    <form-heading>Checklist of available facilities</form-heading>
    <form-subheading>Availability Details</form-subheading>
      <b-row class="my-3">
        <b-col cols="6" class="pt-3" >
          1. Food and drinking water facility availability
        </b-col>
        <b-col cols="2" >
          <form-group
          :label="''"
          :size="'small'"
          :type="'options'"
          :value="''"
          v-on:input="print($event)"
          :options="options"
          ></form-group>
        </b-col>
        <b-col cols="2" class="text-right pt-3 pr-0" >
          <span class="font-size-12">Requirements?</span>
        </b-col>
        <b-col cols="2" >
          <form-group
          :label="''"
          :type="'number'"
          :size="'small'"
          :value="''"
          :placeholder="'Number'"
          ></form-group>
        </b-col>
      </b-row>
      <b-row class="my-3">
        <b-col cols="6" class="pt-3" >
          2. Sanitation and disinfection services availability
        </b-col>
        <b-col cols="2" >
          <form-group
          :label="''"
          :size="'small'"
          :type="'options'"
          :value="''"
          v-on:input="print($event)"
          :options="options"
          ></form-group>
        </b-col>
        <b-col cols="2" class="text-right pt-3 pr-0" >
          <span class="font-size-12">Requirements?</span>
        </b-col>
        <b-col cols="2" >
          <form-group
          :label="''"
          :type="'number'"
          :size="'small'"
          :value="''"
          :placeholder="'Number'"
          ></form-group>
        </b-col>
      </b-row>
      <b-row class="my-3">
        <b-col cols="6" class="pt-3" >
          3. Health screening protocol availability
        </b-col>
        <b-col cols="2" >
          <form-group
          :label="''"
          :size="'small'"
          :type="'options'"
          :value="''"
          v-on:input="print($event)"
          :options="options"
          ></form-group>
        </b-col>
        <b-col cols="2" class="text-right pt-3 pr-0" >
          <span class="font-size-12">Requirements?</span>
        </b-col>
        <b-col cols="2" >
          <form-group
          :label="''"
          :type="'number'"
          :size="'small'"
          :value="''"
          :placeholder="'Number'"
          ></form-group>
        </b-col>
      </b-row>
      <b-row class="my-3">
        <b-col cols="6" class="pt-3" >
          4. Ambulance availability
        </b-col>
        <b-col cols="2" >
          <form-group
          :label="''"
          :size="'small'"
          :type="'options'"
          :value="''"
          v-on:input="print($event)"
          :options="options"
          ></form-group>
        </b-col>
        <b-col cols="2" class="text-right pt-3 pr-0" >
          <span class="font-size-12">Requirements?</span>
        </b-col>
        <b-col cols="2" >
          <form-group
          :label="''"
          :type="'number'"
          :size="'small'"
          :value="''"
          :placeholder="'Number'"
          ></form-group>
        </b-col>
      </b-row>
      <b-row class="my-3">
        <b-col cols="6" class="pt-3" >
          5. Are sufficient number of washrooms / toilets available?
        </b-col>
        <b-col cols="2" >
          <form-group
          :label="''"
          :size="'small'"
          :type="'options'"
          :value="''"
          v-on:input="print($event)"
          :options="options"
          ></form-group>
        </b-col>
        <b-col cols="2" class="text-right pt-3 pr-0" >
          <span class="font-size-12">Requirements?</span>
        </b-col>
        <b-col cols="2" >
          <form-group
          :label="''"
          :type="'number'"
          :size="'small'"
          :value="''"
          :placeholder="'Number'"
          ></form-group>
        </b-col>
      </b-row>
            <b-row class="my-3">
        <b-col cols="6" class="pt-3" >
          6. Are beds, mattresses, covers available?
        </b-col>
        <b-col cols="2" >
          <form-group
          :label="''"
          :size="'small'"
          :type="'options'"
          :value="''"
          v-on:input="print($event)"
          :options="options"
          ></form-group>
        </b-col>
        <b-col cols="2" class="text-right pt-3 pr-0" >
          <span class="font-size-12">Requirements?</span>
        </b-col>
        <b-col cols="2" >
          <form-group
          :label="''"
          :type="'number'"
          :size="'small'"
          :value="''"
          :placeholder="'Number'"
          ></form-group>
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
.font-size-12 {
  font-size: 12px;
}
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
export default class Checklist extends Vue {
  options=[
    {
      key: '',
      value: 'Select One',
    },
    {
      key: 'available',
      value: 'Available',
    },
    {
      key: 'unavailable',
      value: 'Unavailable',
    },
    {
      key: 'inadequate',
      value: 'Inadequate',
    },
  ]

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

  print(value) {
    this.message = '';
    console.log(`print function:${value}`);
  }
}
</script>
