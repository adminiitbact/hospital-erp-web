
<template>
  <div class="w-row ward-card">
    <form v-on:submit.prevent="submitChanges()">
      <div class="w-row">
        <div v-for="(patientField, index) in patientForm" :key="index">
          <div class="form-block-3 w-form">
            <div class="subheading w-row" style="border: 0px;">
              <div class="w-col w-col-4">
                <label class="field-label">
                  <strong>{{ patientField[0] }}</strong>
                </label>
              </div>
              <div class="w-col w-col-8">
                <template v-if="patientField[2] == 'text' || patientField[2] == 'number'">
                  <input
                    :type="patientField[2]"
                    class="ward-text-field w-input"
                    v-model="patientField[3]"
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
                      <span class="checkbox-label-2 w-form-label">{{ val[1] }}</span>
                    </label>
                  </div>
                  <select class="ward-field-design w-input" v-model="patientField[4]">
                    <option
                      v-for="(val, index) in patientField[3]"
                      :value="val[0]"
                      :key="index"
                    >{{ val[1] }}</option>
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
                      :id="val[1]"
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
export default class PatientCovidDetails extends Vue {
  resultData = [
    'Positive',
    'Negative',
    'Result Pending',
  ];

  yesNoOptions = [
    [true, 'Yes'],
    [false, 'No'],
  ];

  collectionCenter = [
    'NIV Pune',
    'AG Diagnostic',
    'Suburban Labs',
    'Thyrocare Labs',
    'Home Sample',
    'Metropolis Lab',
  ];

  testedAt = [
    'NIV Pune',
    'AG Diagnostic',
    'Suburban Labs',
    'Thyrocare Labs',
    'Home Sample',
    'Metropolis Lab',
  ];

  confirmedAt = [
    'NIV Pune',
    'AG Diagnostic',
    'Suburban Labs',
    'Thyrocare Labs',
    'Home Sample',
    'Metropolis Lab',
  ];

  patientForm = [
    ['Has Sample been Collected?', 'sampleCollected', 'radio', this.yesNoOptions, false],
    ['Date of Sample Collection', 'collectionDate', 'text'],
    ['Sample Collection Center', 'collectionCenter', 'option', this.collectionCenter, this.collectionCenter[0]],
    ['Sample Tested at', 'testedAt', 'option', this.testedAt, this.testedAt[0]],
    ['Is Sample Result Available?', 'resultAvailable', 'radio', this.yesNoOptions, false],
    ['Name of Lab that confirmed the result', 'lab', 'option', this.confirmedAt, this.confirmedAt[0]],
    ['Result of the Sample', 'result', 'option', this.resultData, this.resultData[0]],
  ];

  error = '';

  submitChanges() {
    const data = Utils.getFormValues(this.patientForm);
    console.log(data);
    API.addPatientCovidTestResult(data).then(
      (res) => {
        console.log(res);
        // const action = this.wardToEditId === 0 ? 'added' : 'updated';
        // alert(`Patient details ${action}`); // eslint-disable-line
        // this.$emit('edit-done', 1);
      }, (error) => {
        console.log(error);
        // this.error = 'Error: (building name, floor and ward name) should be unique.';
      },
    );
  }
}
</script>
