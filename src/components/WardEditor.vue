<template>
  <div class="w-row ward-card">
    <h4 style="text-align:center; margin-bottom: 10px;">Ward Information</h4>
    <form v-on:submit.prevent="submitChanges">
      <div class="w-row">
      <div
        v-for="(wardField, index) in wardForm"
        class="w-col w-col-6"
        :key="index">
        <div class="form-block-3 w-form">
          <div class="subheading" style="border: 0px;">
            <label class="field-label">
              <strong>{{ wardField[0] }}</strong>
            </label>
            <template
              v-if="wardField[2] == 'text' || wardField[2] == 'number'">
              <input
                :type="wardField[2]" class="ward-text-field w-input"
                v-model="wardModelFields[index]" required
              />
            </template>
            <template v-else-if="wardField[2] == 'option'" >
              <select class="ward-field-design w-input"
                v-model="wardModelFields[index]">
                <option
                  v-for="(val, index) in wardField[3]"
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
        <div class="w-col w-col-6">
          <input
            type="button" class="signup-button status-form clear-form w-button"
            value="GO BACK" v-on:click="$emit('edit-done');">
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


function getOptionValueList(options) {
  const optionValueList = [];
  for (let i = 0; i < options.length; i += 1) {
    optionValueList.push([options[i], options[i]]);
  }
  return optionValueList;
}

const yesNoOptions = [
  ['true', 'Yes'],
  ['false', 'No'],
];


const WardEditorProps = Vue.extend({
  props: {
    ward: {
      required: false,
      default: () => ({
        name: '',
        wardId: 0,
      }),
    },
  },
});

@Component
export default class WardEditor extends WardEditorProps {
  wardForm = [
    ['Ward Name/Number', 'name', 'text'],
    ['Building Name/Number', 'buildingName', 'text'],
    ['Floor', 'floor', 'text'],
    ['Total beds', 'totalBeds', 'number'],
    ['Gender', 'gender', 'option', getOptionValueList(['MALE', 'FEMALE', 'UNISEX'])],
    ['Is it COVID Ward?', 'covidWard', 'option', yesNoOptions],
    [
      'Patient COVID status',
      'covidStatus',
      'option',
      getOptionValueList(['CONFIRMED', 'SUSPECTED']),
    ],
    ['Patient severity', 'severity', 'option', getOptionValueList(['MILD', 'MODERATE', 'SEVERE'])],
    ['Total ventilators', 'ventilators', 'number'],
    ['Ventilators occupied', 'ventilatorsOccupied', 'number'],
    [
      'Is distance between beds more than 6 feet?',
      'extraFields.minDistanceBetBeds', 'option', yesNoOptions,
    ],
    [
      'Number of independent single room beds with attached washroom',
      'extraFields.independentBeds', 'number',
    ],
    ['Number of oxygen cylinders available', 'extraFields.oxygenCylinder', 'number'],
    [
      'Number of beds with wall oxygen supplies available',
      'extraFields.wallOxygenSuppliedBeds', 'number',
    ],
    [
      'Number of beds with Central Oxygen system',
      'extraFields.centralOxygenSuppliedBeds', 'number',
    ],
    ['Number of pulse oximeters available', 'extraFields.pulseOximeters', 'number'],
    ['Number of infusion pumps available', 'extraFields.infusionPumps', 'number'],
  ];

  submitChanges() {
    this.ward.wardId = this.ward.id;
    this.updateWardWithModelFields();
    console.log(this.ward);
    API.saveWard(this.$store.state.user.facilityId, this.ward).then(
      () => {
        const action = this.ward.id === 0 ? 'added' : 'updated';
        alert(`Ward details ${action}`);
        this.$store.dispatch('fetchWards');
      }, (error) => {
        alert(`Error: ${error.message}`);
      },
    );
    this.$emit('edit-done');
  }

  updateWardWithModelFields() {
    for (let i = 0; i < this.wardForm.length; i += 1) {
      // wardForm.push(this.wardForm[i]);
      if (this.wardForm[i][1].startsWith('extraFields')) {
        this.ward.extraFields[this.wardForm[i][1].split('.')[1]] = this.wardModelFields[i];
      } else {
        this.ward[this.wardForm[i][1]] = this.wardModelFields[i];
      }
    }
  }

  get wardModelFields() {
    const wardModel = [];
    if (!this.ward.extraFields) {
      this.ward.extraFields = {};
    }
    for (let i = 0; i < this.wardForm.length; i += 1) {
      // wardForm.push(this.wardForm[i]);
      if (this.wardForm[i][1].startsWith('extraFields')) {
        wardModel.push(this.ward.extraFields[this.wardForm[i][1].split('.')[1]]);
      } else {
        wardModel.push(this.ward[this.wardForm[i][1]]);
      }
    }
    return wardModel;
  }
}
</script>
