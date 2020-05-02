<template>
  <div class="w-row ward-card">
    <form v-on:submit.prevent="submitChanges">
      <div class="w-row">
        <div v-for="(patientField, index) in patientForm" class="w-col w-col-6" :key="index">
          <div class="form-block-3 w-form">
            <div class="subheading" style="border: 0px;">
              <label class="field-label">
                <strong>{{ patientField[0] }}</strong>
              </label>
              <template v-if="patientField[2] == 'text' || patientField[2] == 'number'">
                <input
                  :type="patientField[2]"
                  class="ward-text-field w-input"
                  v-model="patientField[4]"
                  required
                  min="0"
                  maxlength="256"
                />
              </template>
              <template v-else-if="patientField[2] == 'option'">
                <select class="ward-field-design w-input" v-model="patientField[4]">
                  <option
                    v-for="(val, index) in patientField[3]"
                    :value="val"
                    :key="index"
                  >{{ val }}</option>
                </select>
              </template>
              <template v-else-if="patientField[2] == 'radio'">
                <label
                  class="radio-button-field-2 w-radio"
                  v-for="(val, index) in patientField[3]"
                  :key="index"
                >
                  <input
                    type="radio"
                    id="one"
                    :value="val[0]"
                    v-model="patientField[4]"
                    class="w-form-formradioinput radio-button-2 w-radio-input"
                  />
                  <span class="checkbox-label-2 w-form-label">{{ val[0] }}</span>
                </label>
              </template>
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
// import API from '../utils/apis';
// import Utils from '../utils/utils';

@Component
export default class PatientWardAllocation extends Vue {
  error = '';

  patientForm = [
    [
      'Severity',
      'severity',
      'option',
      ['Asymptomatic', 'Mild or Very Mild', 'Moderate', 'Severe'],
    ],
    [
      'COVID 19 Status',
      'status',
      'option',
      ['Test Pending', 'Result Awaited', 'Positive', 'Negative'],
    ],
    ['On Oxygen Support', 'oxygen', 'radio', [['Yes'], ['No']]],
    ['On Ventilator', 'ventilator', 'radio', [['Yes'], ['No']]],
  ];
}
</script>
