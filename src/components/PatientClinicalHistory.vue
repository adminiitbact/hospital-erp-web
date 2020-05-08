<template>
  <div class="w-form">
    <form v-on:submit.prevent="submitChanges">
      <div class="w-row">
        <div v-for="(patientField, index) in patientForm" class="w-col w-col-12" :key="index">
          <div class="w-row">
            <div class="w-col w-col-4">
              <div class="new-db-form-div full">
                <label for="First-Name-2" class="field-label patient">{{ patientField[0] }}:</label>
              </div>
            </div>
            <div class="w-col w-col-8">
              <div class="new-db-form-div full">
                <template v-if="patientField[2] == 'text' || patientField[2] == 'number'">
                <input
                  :type="patientField[2]"
                  class="patient-db-field w-input"
                  v-model="patientField[3]"
                  required
                  min="0"
                  maxlength="256"
                />
              </template>
              <template v-else-if="patientField[2] == 'option'">
                <select class="ward-field-design w-input"
                v-model="patientField[4]">
                  <option
                    v-for="(val, index) in patientField[3]"
                    :value="val"
                    :key="index"
                  >{{ val }}</option>
                </select>
              </template>
              <template v-else-if="patientField[2] == 'checkbox'">
                <div v-for="(val, index) in patientField[3]" :key="index">
                  <label class="w-checkbox checkbox-field-2">
                    <input
                      type="checkbox"
                      id="checkbox-8"
                      :value="val[0]"
                      name="checkbox-8"
                      class="w-checkbox-input"
                      v-model="val[1]"
                    />
                    <span class="checkbox-label-2 w-form-label">{{ val[0] }}</span>
                  </label>
                </div>
              </template>
              <template v-else-if="patientField[2] == 'radio'">
                <label
                  class="radio-button-field-2 w-radio"
                  v-for="(val, index) in patientField[3]"
                  :key="index"
                >
                  <input
                    type="radio"
                    :id="val[1]"
                    :value="val[0]"
                    v-model="patientField[4]"
                    class="w-form-formradioinput radio-button-2 w-radio-input"
                  />
                  <span class="checkbox-label-2 w-form-label">{{ val[1] }}</span>
                </label>
              </template>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="w-row" style="margin-top: 20px;">
        <div class="form-fail" v-show="error != ''">
          <div>
            <strong>{{ error }}</strong>
          </div>
        </div>
        <div class="w-col w-col-6">
          <input
            type="button"
            class="signup-button status-form clear-form w-button"
            value="GO BACK"
            v-on:click="$emit('edit-done', 0);"
          />
        </div>
        <div class="w-col w-col-6">
          <input
            type="submit"
            class="signup-button status-form profile-pahe w-button"
            value="Save changes"
          />
        </div>
      </div>
    </form>
  </div>
</template>


<script>
import Vue from 'vue';
import Component from 'vue-class-component';
import API from '../utils/apis';
import Utils from '../utils/utils';

@Component
export default class PatientClinicalHistory extends Vue {
  primarySymptoms = [
    ['Fever'],
    ['Tiredness'],
    ['Difficulty Breathing'],
    ['Dry Cough'],
    ['Chest Pain'],
  ];

  secondarySymptoms = [
    ['Cold'],
    ['Sore Throat'],
    ['Diarrhoea'],
    ['Body Ache'],
  ];

  preExsMedConditions = [
    ['Diabetes'],
    ['Chronic Ling Disease'],
    ['Moderate or Severe Asthama'],
    ['Immunocompromised'],
    ['Hypertension'],
    ['Chronic Liver Disease'],
    ['Kidney Disease'],
    ['Severe Obesity'],
  ];

  yesNoOptions = [
    [true, 'Yes'],
    [false, 'No'],
  ];

  patientForm = [
    ['Symptoms at time of Admission', 'symptomAtTimeofAddmission', 'radio', this.yesNoOptions, false],
    ['Date of onset of Symptoms', 'onsetSymptoms', 'text'],
    ['Primary Symptoms', 'primary_symptoms', 'checkbox', this.primarySymptoms],
    ['Secondary Symptoms', 'secondary_symptoms', 'checkbox', this.secondarySymptoms],
    ['Pre-existing Medical Conditions', 'pre_existing_conditions', 'checkbox', this.preExsMedConditions],
  ];

  error = '';

  submitChanges() {
    const data = Utils.getFormValues(this.patientForm);
    console.log(data);
    API.addPatientClinicalData(data).then(
      (res) => {
        console.log(res);
        alert('Clinical History Added'); // eslint-disable-line
        this.$emit('edit-done', 1);
      },
      (error) => {
        console.log(error);
        // this.error = 'Error: (building name, floor and ward name) should be unique.';
      },
    );
  }
}
</script>
