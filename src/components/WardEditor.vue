<template>
  <div class="w-row ward-card">
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
              v-if="wardField[2] == 'text' || wardField[2] == 'integer'">
              <input
                :type="wardField[2]" class="ward-text-field w-input"
                v-model="ward[wardField[1]]" required
              />
            </template>
            <template v-else-if="wardField[2] == 'option'" >
              <select class="ward-field-design w-input"
                v-model="ward[wardField[1]]">
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
    ['Name', 'name', 'text'],
    ['Gender', 'gender', 'option', ['MALE', 'FEMALE', 'UNISEX']],
    ['Number of ICU beds', 'icuBeds', 'integer'],
    ['Number of ICU beds occupied', 'icuBedsOccupied', 'integer'],
    [
      'Patient COVID status',
      'patientType',
      'option',
      ['CONFIRMED', 'SUSPECTED'],
    ],
    ['Patient severity', 'severity', 'option', ['MILD', 'MODERATE', 'SEVERE']],
    ['Total beds', 'totalBeds', 'integer'],
    ['Total ventilators available', 'ventilators', 'integer'],
    ['Ventilators occupied', 'ventilatorsOccupied', 'integer'],
  ];

  submitChanges() {
    this.ward.wardId = this.ward.id;
    API.saveWard(this.$store.state.user.facilityId, this.ward).then(
      () => {
        this.$store.dispatch('fetchWards');
      }, (error) => {
        alert(`Error: ${error.message}`);
      },
    );
    this.$emit('edit-done');
  }
}
</script>
