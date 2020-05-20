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
                  <select class="patient-db-field w-select" v-model="patientField[4]">
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
      <div class="div-block-45 new">
        <div class="div-block-64">
          <div class="ward-facility-column-header w-row">
            <div class="w-col w-col-3">
              <a href="#" class="link-block-3 _1 w-inline-block">
                <div class="legends">Ward</div>
              </a>
            </div>
            <div class="w-col w-col-3">
              <a href="#" class="link-block-3 w-inline-block">
                <div class="legends">severity</div>
              </a>
            </div>
            <div class="w-col w-col-3">
              <a href="#" class="link-block-3 w-inline-block">
                <div class="legends">covid ward type</div>
              </a>
            </div>
            <div class="w-col w-col-2">
              <a href="#" class="link-block-3 w-inline-block">
                <div class="legends">available beds</div>
              </a>
            </div>
            <div class="w-col w-col-1">
              <a href="#" class="link-block-3 _1 w-inline-block">
                <div class="legends">ACtion</div>
              </a>
            </div>
          </div>
          <div v-for="(ward, index) in wards" class="div-block-42 ward" :key="index">
            <div class="columns-7 w-row">
              <div class="w-col w-col-3">
                <div class="pd-list"> {{index + 1}} </div>
              </div>
              <div class="w-col w-col-3">
                <div class="pd-list"> {{ward.severity}} </div>
              </div>
              <div class="w-col w-col-3">
                <div class="pd-list">Moderate</div>
              </div>
              <div class="w-col w-col-2">
                <div class="pd-list"> {{ward.available_beds}} </div>
              </div>
              <div class="w-col w-col-1">
                <a v-on:click="selectWard(ward)" class="button-2 w-button">select</a>
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
import { mapState } from 'vuex';
import Utils from '../utils/utils';
import queries from '../utils/graphql/queries';


@Component({
  computed: {
    ...mapState(['wards']),
  },
})
export default class PatientWardAllocation extends Vue {
  error = '';

  yesNoOptions = [
    [true, 'Yes'],
    [false, 'No'],
  ];

  gender;

  severity;

  patientForm = [];

  selectedWard;


  submitChanges() {
    const data = Utils.getFormValues(this.patientForm);
    data.ward = this.selectedWard;
    this.$root.$emit('allocate-ward', data);
  }


  mounted() {
    queries.getWardCreateDetails().then((res) => {
      this.severity = res.severity;
      this.gender = res.gender;
      this.setFields();
    });
  }


  selectWard(ward) {
    this.selectedWard = ward;
  }


  setFields() {
    this.patientForm = [
      ['Severity', 'severity', 'option', this.severity, this.severity[0].key],
      ['COVID 19 Status', 'status', 'option', [{ key: 'Test Pending', value: 'Test Pending' }, { key: 'Result Awaited', value: 'Result Awaited' }, { key: 'Positive', value: 'Positive' }, { key: 'Negative', value: 'Negative' }], 'Negative'],
      ['On Oxygen Support', 'oxygen', 'radio', this.yesNoOptions, false],
      ['On Ventilator', 'ventilator', 'radio', this.yesNoOptions, false],
    ];
  }
}
</script>
