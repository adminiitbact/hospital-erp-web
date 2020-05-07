<template>
  <div class="w-row ward-card">
    <div class="w-col">
      <h4 style="text-align:center; margin-bottom: 10px;">
        {{ wardToEdit.id ? 'Update' : 'Add' }} Ward Information
      </h4>
    </div>
    <div class="w-col">
      <a v-if="wardToEdit.id"
        href="#"
        class="button-3 w-button"
        style="float: right; margin-right: 10px;"
        v-on:click="removeWard">
        - REMOVE WARD
      </a>
    </div>
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
                v-model="wardField[3]" required
                min="0"
                maxlength="256"
              />
            </template>
            <template v-else-if="wardField[2] == 'option'" >
              <select class="ward-field-design w-input"
                v-model="wardField[4]">
                <option
                  v-for="(val, index) in wardField[3]"
                  :value="val" :key="index">
                  {{ val }}
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
// import API from '../utils/apis';
import _ from 'underscore';
import { mapState } from 'vuex';
import Utils from '../utils/utils';


const WardEditorProps = Vue.extend({
  props: {
    wardToEdit: {
      required: false,
      default() { return {}; },
    },
  },
});

@Component({
  computed: {
    ...mapState(['facility']),
  },
})
export default class WardEditor extends WardEditorProps {
  wardForm = [
    ['Building Name/Number', 'building_name', 'text'],
    ['Floor', 'floor', 'option', ['LG', 'G', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10'], 'LG'],
    ['Ward Name/Number', 'ward_name', 'text'],
    ['Total beds', 'total_beds', 'number'],
    ['Gender', 'gender', 'option', ['MALE', 'FEMALE', 'UNISEX'], 'MALE'],
    ['Is it COVID Ward?', 'covid_ward', 'option', ['Yes', 'No'], 'Yes'],
    ['Patient COVID status', 'covid_status', 'option', ['CONFIRMED', 'SUSPECTED'], 'CONFIRMED'],
    ['Patient severity', 'severity', 'option', ['MILD', 'MODERATE', 'SEVERE'], 'MILD'],
    ['Total ventilators', 'ventilators', 'number'],
    ['Is distance between beds more than 6 feet?', 'extra_fields.minDistanceBetBeds', 'option', ['Yes', 'No'], 'Yes'],
    ['Number of independent single room beds with attached washroom', 'extra_fields.independentBeds', 'number'],
    ['Number of oxygen cylinders available', 'extra_fields.oxygenCylinder', 'number'],
    ['Number of beds with wall oxygen supplies available', 'extra_fields.wallOxygenSuppliedBeds', 'number'],
    ['Number of beds with Central Oxygen system', 'extra_fields.centralOxygenSuppliedBeds', 'number'],
    ['Number of pulse oximeters available', 'extra_fields.pulseOximeters', 'number'],
    ['Number of infusion pumps available', 'extra_fields.infusionPumps', 'number'],
  ];

  error = '';

  submitChanges() {
    let createData = Utils.getFormValues(this.wardForm);
    const extraFieldsKeys = _.filter(_.keys(createData), (item) => item.includes('extra_fields'));
    const extraFields = _.pick(createData, ...extraFieldsKeys);
    createData = _.omit(createData, ...extraFieldsKeys);

    createData.extra_fields = {};
    for (let i = 0; i < extraFieldsKeys.length; i += 1) {
      createData.extra_fields[extraFieldsKeys[i].split('.')[1]] = extraFields[extraFieldsKeys[i]];
    }
    createData.facility = this.facility.id;
    this.$store.dispatch('createWard', createData);


    // this.ward.wardId = this.wardToEditId;
    // this.updateWardWithModelFields();
    // API.saveWard(this.$store.state.user.facilityId, this.ward).then(
    //   () => {
    //     const action = this.wardToEditId === 0 ? 'added' : 'updated';
    //     alert(`Ward details ${action}`); // eslint-disable-line
    //     this.$emit('edit-done', 1);
    //   }, () => {
    //     // console.log(error);
    //     this.error = 'Error: (building name, floor and ward name) should be unique.';
    //   },
    // );
  }

  // removeWard() {
  //   // const confirmRes = confirm('Are you sure you want to remove this ward?'); // eslint-disable-line
  //   // if (confirmRes) {
  //   //   API.removeWard(this.$store.state.user.facilityId, this.wardToEditId).then(
  //   //     (success) => {
  //   //       if (success.error) {
  //   //         Utils.standardErrorHandler(success.error);
  //   //         alert(`Error: ${success.error.errorMsg}`);
  //   //       } else {
  //   //         alert('Ward successfully removed');
  //   //         this.$emit('edit-done', 1);
  //   //       }
  //   //     }, () => {
  //   //       alert(
  //   //         'Error in removal, please try again. '
  //   //         + 'If problem persists then contact system administrator.',
  //   //       );
  //   //     },
  //   //   );
  //   // }
  // }
}
</script>
