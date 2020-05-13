<template>
  <div class="w-row">
    <form v-on:submit.prevent="submitChanges">
      <div class="w-row">
        <div v-for="(patientField, index) in patientForm" class="w-col w-col-6" :key="index">
          <div class="div-block-74">
          <label for="First-Name" class="field-label patient">{{ patientField[0] }}:</label>
          <div class="new-db-form-div">
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
                <select class="patient-db-field w-select" v-model="patientField[4]">
                  <option
                    v-for="val in patientField[3]"
                    :value="val.key"
                    :key="val.key"
                  >{{ val.value }}</option>
                </select>
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
import Utils from '../utils/utils';
import queries from '../utils/graphql/queries';
import mutations from '../utils/graphql/mutations';


@Component
export default class PatientDetails extends Vue {
  area = [];

  gender = [];

  patientForm = [];

  patientID;

  error = '';

  submitChanges() {
    const data = Utils.getFormValues(this.patientForm);
    console.log(data);
    mutations.createPatient(data).then((res) => {
      this.patientID = res.id;
    });
  }

  setFields() {
    this.patientForm = [
      ['First Name', 'first_name', 'text', 'f name'],
      ['Last Name', 'last_name', 'text', 'l name'],
      ['Age', 'age', 'number', 2],
      ['Gender', 'gender', 'option', this.gender, this.gender[0][0]],
      ['Address', 'address', 'text', 'baner'],
      ['Area (Locality)', 'locality', 'option', this.area, this.area[0][0]],
      ['District', 'district', 'text', 'pune'],
      ['State', 'state', 'text', 'mh'],
      ['Occupation', 'occupation', 'text', 'se'],
      ['Contact', 'contact_number', 'text', '123'],
      ['District Case Number', 'district_case_id', 'text', '123'],
      ['Hospital Patient ID', 'hospital_patient_id', 'text', '123'],
      ['GOI COVID ID', 'goi_covid_id', 'text', '123'],
    ];
  }

  mounted() {
    queries.getAreaAndGender().then((res) => {
      console.log(res);
      this.area = res.area;
      this.gender = res.gender;
      this.setFields();
    });
  }
}
</script>
