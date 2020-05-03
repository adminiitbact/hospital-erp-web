<template>
<form v-on:submit.prevent="submitChanges">
                        <div class="columns-8 w-row">
                          <div class="w-col w-col-6">
                            <div class="div-block-74">
                              <label for="First-Name" class="field-label patient">FIrst Name:</label>
                              <div class="new-db-form-div">
                                <input
                                  type="text"
                                  class="patient-db-field w-input"
                                  maxlength="256"
                                  name="First-Name-6"
                                  data-name="First Name 6"
                                  placeholder="First Name"
                                  id="First-Name"
                                />
                              </div>
                            </div>
                            <div class="div-block-74">
                              <label for="First-Name" class="field-label patient">Age:</label>
                              <div class="new-db-form-div">
                                <input
                                  type="text"
                                  class="patient-db-field w-input"
                                  maxlength="256"
                                  name="Age"
                                  data-name="Age"
                                  placeholder="Age"
                                  id="Age"
                                />
                              </div>
                            </div>
                            <div class="div-block-74">
                              <label for="First-Name" class="field-label patient">Address:</label>
                              <div class="new-db-form-div">
                                <input
                                  type="text"
                                  class="patient-db-field w-input"
                                  maxlength="256"
                                  name="Address"
                                  data-name="Address"
                                  placeholder="Address"
                                  id="Address"
                                />
                              </div>
                            </div>
                            <div class="div-block-74">
                              <label for="First-Name" class="field-label patient">District:</label>
                              <div class="new-db-form-div">
                                <input
                                  type="text"
                                  class="patient-db-field w-input"
                                  maxlength="256"
                                  name="Occupation-2"
                                  data-name="Occupation 2"
                                  placeholder="Pune"
                                  id="Occupation-2"
                                />
                              </div>
                            </div>
                            <div class="div-block-74">
                              <label for="First-Name" class="field-label patient">Occupation:</label>
                              <div class="new-db-form-div">
                                <input
                                  type="text"
                                  class="patient-db-field w-input"
                                  maxlength="256"
                                  name="Occupation"
                                  data-name="Occupation"
                                  placeholder="Occupation"
                                  id="Occupation"
                                />
                              </div>
                            </div>
                          </div>
                          <div class="w-col w-col-6">
                            <div class="div-block-74">
                              <label for="First-Name" class="field-label patient">Last Name:</label>
                              <div class="new-db-form-div">
                                <input
                                  type="text"
                                  class="patient-db-field w-input"
                                  maxlength="256"
                                  name="Last-Name"
                                  data-name="Last Name"
                                  placeholder="Last Name"
                                  id="Last-Name"
                                />
                              </div>
                            </div>
                            <div class="div-block-74">
                              <label for="First-Name" class="field-label patient">Gender:</label>
                              <div class="new-db-form-div">
                                <select
                                  id="field-5"
                                  name="field-6"
                                  class="patient-db-field w-select"
                                >
                                  <option value>Select one...</option>
                                  <option value="Male">Male</option>
                                  <option value="Female">Female</option>
                                  <option value="Others">Others</option>
                                </select>
                              </div>
                            </div>
                            <div class="div-block-74">
                              <label for="First-Name" class="field-label patient">Area (Locality):</label>
                              <div class="new-db-form-div">
                                <select
                                  id="field-6"
                                  name="field-6"
                                  class="patient-db-field w-select"
                                >
                                  <option value>Select one...</option>
                                  <option value="Locality from DB">Locality from DB</option>
                                </select>
                              </div>
                            </div>
                            <div class="div-block-74">
                              <label for="First-Name" class="field-label patient">State:</label>
                              <div class="new-db-form-div">
                                <input
                                  type="text"
                                  class="patient-db-field w-input"
                                  maxlength="256"
                                  name="Occupation-3"
                                  data-name="Occupation 3"
                                  placeholder="Maharashtra"
                                  id="Occupation-3"
                                />
                              </div>
                            </div>
                            <div class="div-block-74">
                              <label for="First-Name" class="field-label patient">Contact:</label>
                              <div class="new-db-form-div">
                                <input
                                  type="tel"
                                  class="patient-db-field w-input"
                                  maxlength="256"
                                  name="Contact"
                                  data-name="Contact"
                                  placeholder="+91"
                                  id="Mobile-No"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="div-block-75"></div>
                        <div class="columns-9 w-row">
                          <div class="w-col w-col-6">
                            <div class="div-block-74">
                              <label
                                for="First-Name"
                                class="field-label patient"
                              >District Case Number:</label>
                              <div class="new-db-form-div">
                                <input
                                  type="text"
                                  class="patient-db-field w-input"
                                  maxlength="256"
                                  name="First-Name-6"
                                  data-name="First Name 6"
                                  placeholder="First Name"
                                  id="First-Name"
                                />
                              </div>
                            </div>
                            <div class="div-block-74">
                              <label for="First-Name" class="field-label patient">GOI COVID ID:</label>
                              <div class="new-db-form-div">
                                <input
                                  type="text"
                                  class="patient-db-field w-input"
                                  maxlength="256"
                                  name="Age-2"
                                  data-name="Age 2"
                                  placeholder="Age"
                                  id="Age-2"
                                />
                              </div>
                            </div>
                          </div>
                          <div class="w-col w-col-6">
                            <div class="div-block-74">
                              <label
                                for="First-Name"
                                class="field-label patient"
                              >Hospital Patient ID:</label>
                              <div class="new-db-form-div">
                                <input
                                  type="text"
                                  class="patient-db-field w-input"
                                  maxlength="256"
                                  name="Last-Name-3"
                                  data-name="Last Name 3"
                                  placeholder="Last Name"
                                  id="Last-Name-3"
                                />
                              </div>
                            </div>
                            <div class="div-block-74">
                              <label for="First-Name" class="field-label patient">COVID Unique ID:</label>
                              <div class="new-db-form-div">
                                <input
                                  type="text"
                                  class="patient-db-field w-input"
                                  maxlength="256"
                                  name="Occupation-3"
                                  data-name="Occupation 3"
                                  placeholder="Maharashtra"
                                  id="Occupation-3"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="patient-form-submit-page-1">
                          <a
                            href="#"
                            class="signup-button status-form _2 cancel w-button"
                          >CLear form</a>
                          <a href="#" class="signup-button status-form _2 _1 w-button">Next</a>
                        </div>
                      </form>
  <div class="w-row ward-card">
    
    <form v-on:submit.prevent="submitChanges">
      <div class="w-row">
      <div
        v-for="(patientField, index) in patientForm"
        class="w-col w-col-6"
        :key="index">
        <div class="form-block-3 w-form">
          <div class="subheading" style="border: 0px;">
            <label class="field-label">
              <strong>{{ patientField[0] }}</strong>
            </label>
            <template
              v-if="patientField[2] == 'text' || patientField[2] == 'number'">
              <input
                :type="patientField[2]" class="ward-text-field w-input"
                v-model="patientModelFields[index]" required
                min="0"
                maxlength="256"
              />
            </template>
            <template v-else-if="patientField[2] == 'option'" >
              <select class="ward-field-design w-input"
                v-model="patientModelFields[index]">
                <option
                  v-for="(val, index) in patientField[3]"
                  :value="val[0]" :key="index">
                  {{ val[1] }}
                </option>
              </select>
            </template>            
          </div>
        </div>
      </div>
      </div>
      <div class="w-row" style="margin-top: 20px;">
        <div class="form-fail" v-show="error != ''">
          <div><strong>{{ error }}</strong></div>
        </div>
        <div class="w-col w-col-6">
          <input
            type="button" class="signup-button status-form clear-form w-button"
            value="GO BACK" v-on:click="$emit('edit-done', 0);">
        </div>
        <div class="w-col w-col-6">
          <input
            type="submit" class="signup-button status-form profile-pahe w-button"
            value="Save changes"
          >
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


function getOptionValueList(options) {
  const optionValueList = [];
  for (let i = 0; i < options.length; i += 1) {
    optionValueList.push([options[i], options[i]]);
  }
  return optionValueList;
}

function getDefaultWard() {
  return ({
    name: '',
    id: 0,
    buildingName: '',
    floor: '',
    totalBeds: 0,
    gender: '',
    covidWard: 'true',
    covidStatus: '',
    severity: '',
    ventilators: 0,
    ventilatorsOccupied: 0,
    extraFields: {},
  });
}


const WardEditorProps = Vue.extend({
  props: {
    wardToEdit: {
      required: false,
    },
    wardToEditId: {
      required: true,
      type: Number,
    },
  },
});

@Component
export default class PatientDetails extends WardEditorProps {
  patientForm = [
    ['First Name', 'firstName', 'text'],
    ['Last Name', 'lastName', 'text'],
    ['Age', 'age', 'number'],
    ['Gender', 'gender', 'option', getOptionValueList(['MALE', 'FEMALE', 'UNISEX'])],
    ['Address', 'address', 'text'],
    ['Area (Locality)','locality','option',''],
    ['District', 'district', 'text'],
    ['State', 'state', 'text'],
    ['Occupation', 'occupation', 'text'],
    ['Contact', 'contactNumber', 'text'],
    ['District Case Number', 'districtCaseId', 'text'],
    ['Hospital Patient ID', 'hostpitalPatientId', 'text'],
    ['GOI COVID ID', 'goiCovidId', 'text'],
    ['COVID Uniue ID', 'covidUID', 'text'],
  ]  

  error = '';

  submitChanges() {
    this.ward.wardId = this.wardToEditId;
    this.updatePatientWithModelFields();
    API.saveWard(this.$store.state.user.facilityId, this.ward).then(
      () => {
        const action = this.wardToEditId === 0 ? 'added' : 'updated';
        alert(`Patient details ${action}`); // eslint-disable-line
        this.$emit('edit-done', 1);
      }, () => {
         console.log(error);
        // this.error = 'Error: (building name, floor and ward name) should be unique.';
      },
    );
  }

  removeWard() {
    const confirmRes = confirm('Are you sure you want to remove this ward?'); // eslint-disable-line
    if (confirmRes) {
      API.removeWard(this.$store.state.user.facilityId, this.wardToEditId).then(
        (success) => {
          if (success.error) {
            Utils.standardErrorHandler(success.error);
            alert(`Error: ${success.error.errorMsg}`);
          } else {
            alert('Ward successfully removed');
            this.$emit('edit-done', 1);
          }
        }, () => {
          alert(
            'Error in removal, please try again. '
            + 'If problem persists then contact system administrator.',
          );
        },
      );
    }
  }

  updatePatientWithModelFields() {
    for (let i = 0; i < this.patientForm.length; i += 1) {
      // patientForm.push(this.patientForm[i]);
      if (this.patientForm[i][1].startsWith('extraFields')) {
        this.patient.extraFields[this.patientForm[i][1].split('.')[1]] = this.patientModelFields[i];
      } else {
        this.patient[this.patientForm[i][1]] = this.patientModelFields[i];
      }
    }
  }

  get patientModelFields() {
    const wardModel = [];
    if (!this.ward.extraFields) {
      this.ward.extraFields = {};
    }
    for (let i = 0; i < this.patientForm.length; i += 1) {
      // patientForm.push(this.patientForm[i]);
      if (this.patientForm[i][1].startsWith('extraFields')) {
        wardModel.push(this.ward.extraFields[this.patientForm[i][1].split('.')[1]]);
      } else {
        wardModel.push(this.ward[this.patientForm[i][1]]);
      }
    }
    return wardModel;
  }

  get ward() {
    if (!this.wardToEdit) {
      return getDefaultWard();
    }
    return this.wardToEdit;
  }
}
</script>
