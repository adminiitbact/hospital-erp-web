<template>
  <div class="w-row ward-card">
    <div class="w-col">
      <h4 style="text-align:center; margin-bottom: 10px;">
        {{ ward !== undefined ? 'Update' : 'Add' }} Ward Information
      </h4>
    </div>
    <div class="w-col">
      <a v-if="ward !== undefined"
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
            <template v-else-if="wardField[2] == 'radio'">
                <label
                  class="radio-button-field-2 w-radio"
                  v-for="(val, index) in wardField[3]"
                  :key="index"
                >
                  <input
                    type="radio"
                    :id="val[1]"
                    :value="val[0]"
                    v-model="wardField[4]"
                    class="w-form-formradioinput radio-button-2 w-radio-input"
                  />
                  <span class="checkbox-label-2 w-form-label">{{ val[1] }}</span>
                </label>
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
import { mapState, mapGetters } from 'vuex';
import Utils from '../utils/utils';


@Component({
  computed: {
    ...mapState(['facility', 'ward']),
    ...mapGetters(['ward']),
  },
})
export default class WardEditor extends Vue {
  yesNoOptions = [
    [true, 'Yes'],
    [false, 'No'],
  ];

  wardForm = [
    ['Building Name/Number', 'building_name', 'text'],
    ['Floor', 'floor', 'option', ['LG', 'G', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10'], 'LG'],
    ['Ward Name/Number', 'ward_name', 'text'],
    ['Total beds', 'total_beds', 'number'],
    ['Available beds', 'available_beds', 'number'],
    ['Gender', 'gender', 'option', ['MALE', 'FEMALE', 'UNISEX'], 'MALE'],
    ['Is it COVID Ward?', 'covid_ward', 'radio', this.yesNoOptions, false],
    ['Patient COVID status', 'covid_status', 'option', ['CONFIRMED', 'SUSPECTED'], 'CONFIRMED'],
    ['Patient severity', 'severity', 'option', ['MILD', 'MODERATE', 'SEVERE'], 'MILD'],
    ['Total ventilators', 'ventilators', 'number'],
    ['Available ventilators', 'available_ventilators', 'number'],
    ['Is distance between beds more than 6 feet?', 'extra_fields.minDistanceBetBeds', 'radio', this.yesNoOptions, false],
    ['Number of independent single room beds with attached washroom', 'extra_fields.independentBeds', 'number'],
    ['Number of oxygen cylinders available', 'extra_fields.oxygenCylinder', 'number'],
    ['Number of beds with wall oxygen supplies available', 'extra_fields.wallOxygenSuppliedBeds', 'number'],
    ['Number of beds with Central Oxygen system', 'extra_fields.centralOxygenSuppliedBeds', 'number'],
    ['Number of pulse oximeters available', 'extra_fields.pulseOximeters', 'number'],
    ['Number of infusion pumps available', 'extra_fields.infusionPumps', 'number'],
  ];

  error = '';

  mounted() {
    this.$store.watch((state) => state.ward, (value) => {
      if (value) {
        if (value.id) {
          this.$emit('edit-done');
        } else if (value.deleted) {
          this.$emit('edit-done');
        }
      }
    });

    if (this.ward.id) {
      for (let i = 0; i < this.wardForm.length; i += 1) {
        if (this.wardForm[i][2] !== 'option') {
          if (this.wardForm[i][1].includes('extra_fields')) {
            this.wardForm[i].push(this.ward.extra_fields[this.wardForm[i][1].split('.')[1]]);
          } else {
            this.wardForm[i].push(this.ward[this.wardForm[i][1]]);
          }
        } else if (this.wardForm[i][1].includes('extra_fields')) {
          this.wardForm[i][4] = this.ward.extra_fields[this.wardForm[i][1].split('.')[1]];
        } else {
          this.wardForm[i][4] = this.ward[this.wardForm[i][1]];
        }
      }
    }
  }

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

    if (!this.ward.id) {
      this.$store.dispatch('createWard', createData);
    } else {
      createData.id = this.ward.id;
      this.$store.dispatch('updateWard', createData);
    }
  }

  removeWard() {
    const confirmRes = confirm('Are you sure you want to remove this ward?'); // eslint-disable-line
    if (confirmRes) {
      this.$store.dispatch('removeWard', this.ward.id);
    }
  }
}
</script>
