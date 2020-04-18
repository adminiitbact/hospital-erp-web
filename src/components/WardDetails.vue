<template>
  <div
    data-w-tab="Ward Details"
    class="tab-pane-tab-4 w-tab-pane w--tab-active"
  >
    <div class="w-row text-align-right">
      <div class="add-ward-button">
        <a class="button-3 ward w-button">
          + ADD A NEW WARD
        </a>
      </div>
    </div>
    <div class="w-row">
      <div v-for="(ward, index) in wards" class="w-col w-col-6" :key="index">
        <div class="div-block-67">
          <div class="w-row">
            <h4>{{ ward.name }}</h4>
          </div>
          <div class="div-block-65">
            <div class="text-block-12">
              Patients status: {{ ward.severity }}
            </div>
            <div>{{ ward.covidStatus }}</div>
          </div>
          <div class="div-block-65">
            <div>Available beds: {{ ward.availableBeds }}</div>
            <div>Total beds: {{ ward.totalBeds }}</div>
          </div>
          <div class="div-block-65">
            <div>
              ICU Beds: <strong>{{ ward.icuBeds }}</strong>
            </div>
            <div>
              Ventilators: <strong>{{ ward.ventilators }}</strong>
            </div>
          </div>
          <div class="w-row text-align-right" style="margin-top:10px;">
            <a class="button-3 ward w-button">
              EDIT
            </a>
          </div>
        </div>
      </div>
    </div>
    <div class="div-block-67 w-row">
      <div class="w-col w-col-6">
        <form>
          <div class="form-block-3 w-form">
            <div class="subheading">
              <label class="field-label">
                <strong>Name</strong>
              </label>
              <input
                type="text"
                class="text-field-design w-input"
                v-model="name"
                required
              />
            </div>
          </div>
          <div class="form-block-3 w-form">
            <div class="subheading">
              <label class="field-label">
                <strong>Gender</strong>
              </label>
              <select
                class="text-field-design w-input"
              >
                <option value="available">Male</option>
                <option value="unavailable">Female</option>
                <option value="inadequate">Unisex</option>
              </select>
            </div>
          </div>
          <div class="form-block-3 w-form">
            <div class="subheading">
              <label class="field-label">
                <strong>Is this a COVID Ward?</strong>
              </label>
              <select
                class="text-field-design w-input"
              >
                <option value="Yes">Yes</option>
                <option value="No">No</option>
              </select>
            </div>
          </div>
        </form>
      </div>
      <div class="w-col w-col-6"></div>
    </div>
  </div>
</template>
<script>
import Vue from 'vue';
import Component from 'vue-class-component';

const WardDetailsProps = Vue.extend({
  props: {
    wards: {
      required: true,
    },
  },
});

@Component
export default class WardDetails extends WardDetailsProps {}
</script>
