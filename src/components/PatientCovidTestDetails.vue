
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
                <select class="patient-db-field w-select"
                v-model="patientField[4]">
                  <option
                    v-for="(val, index) in patientField[3]"
                    :value="val.key"
                    :key="index"
                  >{{ val.value }}</option>
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
import Utils from '../utils/utils';
import queries from '../utils/graphql/queries';

@Component
export default class PatientCovidDetails extends Vue {
  yesNoOptions = [
    [true, 'Yes'],
    [false, 'No'],
  ];

  // eslint-disable-next-line camelcase
  collection_center;

  // eslint-disable-next-line camelcase
  sent_to;

  // eslint-disable-next-line camelcase
  lab_confirming;

  result;

  patientForm = [];

  error = '';

  submitChanges() {
    const data = Utils.getFormValues(this.patientForm);
    this.$root.$emit('test-details', data);
  }

  mounted() {
    queries.getTestDetailFields().then((res) => {
      this.collection_center = res.collection_center;
      this.sent_to = res.lab;
      this.lab_confirming = res.lab;
      this.result = res.test_result_status;
      this.setFields();
    });
  }

  setFields() {
    this.patientForm = [
      ['Has Sample been Collected?', 'sample_collected', 'radio', this.yesNoOptions, false],
      ['Date of Sample Collection', 'collection_date', 'text'],
      ['Sample Collection Center', 'collection_center', 'option', this.collection_center, this.collection_center[0].key],
      ['Sample Tested at', 'sent_to', 'option', this.sent_to, this.sent_to[0].key],
      ['Is Sample Result Available?', 'result_available', 'radio', this.yesNoOptions, false],
      ['Name of Lab that confirmed the result', 'lab_confirming', 'option', this.lab_confirming, this.lab_confirming[0].key],
      ['Result of the Sample', 'result', 'option', this.result, this.result[0].key],
    ];
  }
}
</script>
