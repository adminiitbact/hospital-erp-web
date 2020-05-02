<template>
  <div class="w-row ward-card">
    <form v-on:submit.prevent="submitChanges">
      <div class="w-row">
        <div v-for="(patientField, index) in patientForm" class="w-col w-col-12" :key="index">
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
                    :id="val"
                    :value="val"
                    v-model="patientField[4]"
                    class="w-form-formradioinput radio-button-2 w-radio-input"
                  />
                  <span class="checkbox-label-2 w-form-label">{{ val }}</span>
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
    'Yes',
    'No',
  ];

  patientForm = [
    ['Symptoms at time of Admission', 'symptomAtTimeofAddmission', 'radio', this.yesNoOptions],
    ['Date of onset of Symptoms', 'onsetSymptoms', 'text'],
    ['Primary Symptoms', 'primarySymptom', 'checkbox', this.primarySymptoms],
    ['Secondary Symptoms', 'secondarySymptom', 'checkbox', this.secondarySymptoms],
    ['Pre-existing Medical Conditions', 'preExistingConditions', 'checkbox', this.preExsMedConditions],
  ];

  error = '';

  submitChanges() {
    console.log(this.patientForm);
    // this.updatePatientWithModelFields();
    // API.saveWard(this.$store.state.user.facilityId, this.ward).then(
    //   () => {
    //     // const action = this.wardToEditId === 0 ? 'added' : 'updated';
    //     // alert(`Patient details ${action}`); // eslint-disable-line
    //     // this.$emit('edit-done', 1);
    //   },
    //   (error) => {
    //     console.log(error);
    //     // this.error = 'Error: (building name, floor and ward name) should be unique.';
    //   },
    // );
  }

  // removeWard() {
  //   const confirmRes = confirm("Are you sure you want to remove this ward?"); // eslint-disable-line
  //   if (confirmRes) {
  //     API.removeWard(this.$store.state.user.facilityId, this.wardToEditId).then(
  //       (success) => {
  //         if (success.error) {
  //           Utils.standardErrorHandler(success.error);
  //           alert(`Error: ${success.error.errorMsg}`);
  //         } else {
  //           alert('Ward successfully removed');
  //           this.$emit('edit-done', 1);
  //         }
  //       },
  //       () => {
  //         alert(
  //           'Error in removal, please try again. '
  //             + 'If problem persists then contact system administrator.',
  //         );
  //       },
  //     );
  //   }
  // }

  // updatePatientWithModelFields() {
  //   for (let i = 0; i < this.patientForm.length; i += 1) {
  //     // patientForm.push(this.patientForm[i]);
  //     if (this.patientForm[i][1].startsWith('extraFields')) {
  //       this.patient.extraFields[
  //         this.patientForm[i][1].split('.')[1]
  //       ] = this.patientModelFields[i];
  //     } else {
  //       this.patient[this.patientForm[i][1]] = this.patientModelFields[i];
  //     }
  //   }
  // }

  // get patientModelFields() {
  //   const wardModel = [];
  //   if (!this.ward.extraFields) {
  //     this.ward.extraFields = {};
  //   }
  //   for (let i = 0; i < this.patientForm.length; i += 1) {
  //     // patientForm.push(this.patientForm[i]);
  //     if (this.patientForm[i][1].startsWith('extraFields')) {
  //       wardModel.push(
  //         this.ward.extraFields[this.patientForm[i][1].split('.')[1]],
  //       );
  //     } else {
  //       wardModel.push(this.ward[this.patientForm[i][1]]);
  //     }
  //   }
  //   return wardModel;
  // }

  // get ward() {
  //   if (!this.wardToEdit) {
  //     return getDefaultWard();
  //   }
  //   return this.wardToEdit;
  // }
}
</script>
