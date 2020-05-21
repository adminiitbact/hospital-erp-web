<template>
  <form-container>
    <form @submit.prevent="submitForm">
      <form-heading>{{ pageTitle }}</form-heading>
      <form-question>
        <b-row class="m-0" align-v="center">
          <b-col cols="4">
            <form-question-heading>Any symptoms at the time of admission?</form-question-heading>
          </b-col>
          <b-col cols="4">
            <b-row class="m-0">
              <c-button v-for="(opt, index) in yesOrNo"
                :type="'secondary'" :size="'small'" @click="changeSymptoms(opt[1])"
                :selected="symptomsExist === opt[1]"
                :key="index">{{ opt[0] }}</c-button>
            </b-row>
          </b-col>
          <b-col cols="4" v-if="symptomsExist">
            <form-group :label="'Date of onset'" :type="'date'" :size="'small'">
            </form-group>
          </b-col>
        </b-row>
      </form-question>
      <template v-if="symptomsExist">
        <form-sub-section-heading>Symptom details</form-sub-section-heading>
        <b-row class="mb-3">
          <b-col>
            <multi-select :options="primarySymptomsList"></multi-select>
          </b-col>
        </b-row>
      </template>
      <form-buttons
        v-show="symptomsExist !== null"
        :cancel_button_text="'Cancel'"
        :save_button_text="'Save and Proceed'"
      ></form-buttons>
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
import FormButtons from '../elements/form/FormButtons.vue';
import FormQuestion from '../elements/form/FormQuestion.vue';
import FormQuestionHeading from '../elements/form/FormQuestionHeading.vue';
import Button from '../elements/buttons/Button.vue';
import MultiSelect from '../elements/buttons/MultipleSelectButtons.vue';


const SymptomsProps = Vue.extend({
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
    'form-buttons': FormButtons,
    'form-question': FormQuestion,
    'form-question-heading': FormQuestionHeading,
    'c-button': Button,
    'multi-select': MultiSelect,
  },
})
export default class Symptoms extends SymptomsProps {
  yesOrNo = [
    ['Yes', true],
    ['No', false],
  ]

  primarySymptomsList = [
    'Fever', 'Tiredness', 'Difficulty Breathing',
  ]

  symptomsExist = null;

  submitForm() {
    this.saveAndProceed();
  }

  saveAndProceed() {
    const patientData = {
    };
    this.$emit('save', patientData);
  }

  changeSymptoms(val) {
    this.symptomsExist = val;
  }
}
</script>
