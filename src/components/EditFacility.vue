<template>
  <div data-w-tab="Update Facility Details" class="w-tab-pane w--tab-active">
    <div class="section-4 profile">
      <div data-duration-in="300" data-duration-out="100" class="tabs w-tabs">
        <div class="tabs-menu-3 w-tab-menu">
          <a
            v-for="(name, index) in areas" :key="index"
            :class="{
              'profile-tab-link w-inline-block w-tab-link': true,
              'w--current': areasShort[index] == currentTab }"
            v-on:click="changeCurrentTab(areasShort[index])"
          >
            <div>{{ name }}</div>
          </a>
        </div>
        <div class="tabs-content-3 w-tab-content">
          <form v-if="currentTab == areasShort[0]"
            v-on:submit.prevent="submitUpdates('asset', 'assets')">
            <div class="div-block-6 profile">
              <div v-for="(assetGroup, index) in assetResources"
                class="w-row" :key="index">
                <div class="w-col">
                  <div class="form-block-3 w-form">
                    <div class="subheading">{{ assetGroup [0] }}</div>
                    <div class="div-block-8">
                      <div v-for="(assetDetail, index) in assetGroup[1]"
                        class="status-form-2-col-div" :key="index">
                        <label class="field-label"
                          >{{ assetDetail[1] }}</label
                        >
                        <input
                          type="number"
                          class="text-field-design w-input"
                          maxlength="256"
                          v-model="asset[assetDetail[0]]"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="w-row">
                <div class="w-col w-col-6">
                  <div class="div-block-57">
                    <input type="reset" value="Cancel"
                      class="signup-button status-form clear-form w-button"/>
                  </div>
                </div>
                <div class="w-col w-col-6">
                  <div class="div-block-57">
                    <input type="submit" value="update"
                      class="signup-button status-form profile-pahe w-button"/>
                  </div>
                </div>
              </div>
            </div>
          </form>
          <form v-else-if="currentTab == areasShort[1]"
            v-on:submit.prevent="submitUpdates('staff', 'medstaff')">
            <div class="div-block-6 profile">
              <div v-for="(staffGroup, index) in staffResources"
                class="w-row" :key="index">
                <div class="w-col">
                  <div class="form-block-3 w-form">
                    <div class="subheading">{{ staffGroup[0] }}</div>
                    <div class="div-block-8">
                      <div v-for="(staffDetail, index) in staffGroup[1]"
                        class="status-form-2-col-div" :key="index">
                        <label class="field-label"
                          >{{ staffDetail[1] }}</label
                        >
                        <input
                          type="number"
                          class="text-field-design w-input"
                          maxlength="256"
                          v-model="staff[staffDetail[0]]"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="w-row">
                <div class="w-col w-col-6">
                  <div class="div-block-57">
                    <input type="reset" value="Cancel"
                      class="signup-button status-form clear-form w-button"/>
                  </div>
                </div>
                <div class="w-col w-col-6">
                  <div class="div-block-57">
                    <input type="submit" value="update"
                      class="signup-button status-form profile-pahe w-button"/>
                  </div>
                </div>
              </div>
            </div>
          </form>
          <form v-else-if="currentTab == areasShort[2]"
            v-on:submit.prevent="submitUpdates('inventory', 'inventory')">
            <div class="div-block-6 profile">
              <div v-for="(group, index) in inventoryResources"
                class="w-row" :key="index">
                <div class="w-col">
                  <div class="form-block-3 w-form">
                    <div class="subheading">{{ group[0] }}</div>
                    <div class="div-block-8">
                      <div v-for="(detail, index) in group[1]"
                        class="status-form-2-col-div" :key="index">
                        <label class="field-label"
                          >{{ detail[1] }}</label
                        >
                        <input
                          type="number"
                          class="text-field-design w-input"
                          maxlength="256"
                          v-model="inventory[detail[0]]"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="w-row">
                <div class="w-col w-col-6">
                  <div class="div-block-57">
                    <input type="reset" value="Cancel"
                      class="signup-button status-form clear-form w-button"/>
                  </div>
                </div>
                <div class="w-col w-col-6">
                  <div class="div-block-57">
                    <input type="submit" value="update"
                      class="signup-button status-form profile-pahe w-button"/>
                  </div>
                </div>
              </div>
            </div>
          </form>
          <form v-else-if="currentTab == areasShort[3]">
            <div class="w-row">
              <div class="w-form">
                <div class="form-section-div">
                  <div class="div-block-41">
                    <div class="subheading _1">
                      1. Food and drinking water facility availability
                    </div>
                    <select
                      name="food_and_drinking_water_availability"
                      data-name="food_and_drinking_water_availability"
                      id="food_and_drinking_water_availability"
                      class="text-field-design dropdown w-select"
                    >
                      <option value="available">Available</option>
                      <option value="unavailable">Not available</option>
                      <option value="inadequate">Inadequate</option>
                    </select>
                  </div>
                </div>
                <div class="form-section-div">
                  <div class="div-block-41">
                    <div class="subheading _1">
                      2. Sanitation and disinfection services availability
                    </div>
                    <select
                      name="sanitation_and_disinfection_services_availability"
                      data-name="sanitation_and_disinfection_services_availability"
                      id="sanitation_and_disinfection_services_availability"
                      class="text-field-design dropdown w-select"
                    >
                      <option value="available">Available</option>
                      <option value="unavailable">Not available</option>
                      <option value="inadequate">Inadequate</option>
                    </select>
                  </div>
                </div>
                <div class="form-section-div">
                  <div class="div-block-41">
                    <div class="subheading _1">
                      3. Health screening protocol availability
                    </div>
                    <select
                      name="health_screening_protocol_availability"
                      data-name="health_screening_protocol_availability"
                      id="health_screening_protocol_availability"
                      class="text-field-design dropdown w-select"
                    >
                      <option value="available">Available</option>
                      <option value="unavailable">Not available</option>
                      <option value="inadequate">Inadequate</option>
                    </select>
                  </div>
                </div>
                <div class="form-section-div">
                  <div class="div-block-41">
                    <div class="subheading _1">4. Ambulance availability</div>
                    <select
                      name="ambulance_availability"
                      data-name="ambulance_availability"
                      id="ambulance_availability"
                      class="text-field-design dropdown w-select"
                    >
                      <option value="available">Available</option>
                      <option value="unavailable">Not available</option>
                      <option value="inadequate">Inadequate</option>
                    </select>
                  </div>
                </div>
                <div class="form-section-div">
                  <div class="div-block-41">
                    <div class="subheading _1">
                      5. Are sufficient number of washrooms / toilets
                      available?
                    </div>
                    <select
                      name="washrooms_availability"
                      data-name="washrooms_availability"
                      id="washrooms_availability"
                      class="text-field-design dropdown w-select"
                      ><option value="available">Available</option>
                      <option value="unavailable">Not available</option>
                      <option value="inadequate">Inadequate</option>
                    </select>
                  </div>
                </div>
                <div class="form-section-div">
                  <div class="div-block-41">
                    <div class="subheading _1">
                      6. Are beds, mattresses, covers available?
                    </div>
                    <select
                      name="beds_mattresses_covers_availability"
                      data-name="beds_mattresses_covers_availability"
                      id="beds_mattresses_covers_availability"
                      class="text-field-design dropdown w-select"
                    >
                      <option value="available">Available</option>
                      <option value="unavailable">Not available</option>
                      <option value="inadequate">Inadequate</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
            <div class="w-row">
              <div class="w-col w-col-6">
                <div class="div-block-57">
                  <input
                    type="reset"
                    id="cancel_compliance_checklist"
                    value="Cancel "
                    data-wait="Please wait..."
                    class="signup-button status-form clear-form w-button"
                  />
                </div>
              </div>
              <div class="w-col w-col-6">
                <div class="div-block-57">
                  <input
                    type="submit"
                    value="update"
                    data-wait="Please wait..."
                    class="signup-button status-form profile-pahe w-button"
                  />
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Component from 'vue-class-component';
import Vue from 'vue';

const API = require('../utils/apis.js');


const EditFacilityProps = Vue.extend({
  props: {
    facility: {
      required: true,
    },
  },
});


@Component
export default class EditFacility extends EditFacilityProps {
  areas = ['A. Facility Assets', 'B. Staff Details', 'C. Inventory', 'D. Checklist'];

  areasShort = ['assets', 'staff', 'inventory', 'checklist'];

  currentTab = 'assets';

  dataChanged = false;

  assetResources = [
    ['A1. Beds', [
      ['total_beds', 'Total Beds'],
      ['total_icu_beds', 'Total ICU Beds'],
      ['covid_icu_beds', 'COVID ICU Beds'],
      ['non_covid_occupancy', 'Total Non COVID Occupancy'],
    ]],
    ['A2. Ventilators', [
      ['total_ventilators', 'Total Ventilators'],
      ['ventilators_allocated_covid', 'Ventilators allocated for COVID'],
    ]],
  ];

  staffResources = [
    ['B1. Doctors', [
      ['total_doctors', 'Total Doctors'],
      ['ayush_doctors', 'Ayush Doctors'],
      ['chest_physicians', 'Chest Physicians'],
      ['pulmonary', 'Pulmonary'],
    ]],
    ['', [
      ['anesthesiologists', 'Anesthesiologists'],
      ['nurses', 'Nurses'],
    ]],
  ];

  inventoryResources = [
    ['C1. Masks', [
      ['n_95_masks', 'N-95 Masks'],
      ['surgical_masks', 'Surgical Masks'],
      ['tpe_masks', 'TPE Masks'],
      ['other_masks', 'Other Masks'],
    ]],
    ['C2. Protective Equipments', [
      ['face_shield', 'Face Shield'],
      ['hazmat_suits', 'Hazmat Suits'],
      ['ppe_kits', 'PPE Kits'],
      ['gloves', 'Gloves'],
    ]],
    ['C3. Medicines', [
      ['hydroxychloroquine', 'Hydroxychloroquine'],
    ]],
  ];

  changeCurrentTab(currentTab) {
    this.currentTab = currentTab;
  }

  get asset() {
    if (this.facility.facilityAsset) {
      return JSON.parse(JSON.stringify(this.facility.facilityAsset.data));
    }
    return {};
  }

  get staff() {
    if (this.facility.facilityMedstaff) {
      return JSON.parse(JSON.stringify(this.facility.facilityMedstaff.data));
    }
    return {};
  }

  get inventory() {
    if (this.facility.facilityInventory) {
      return JSON.parse(JSON.stringify(this.facility.facilityInventory.data));
    }
    return {};
  }

  submitUpdates(dataKey, urlKey) {
    this.dataChanged = true;
    API.updateFacilityDetails(this.facility.facilityId, urlKey, this[dataKey]).then(
      () => {
      }, (error) => {
        alert(`Error in update: ${error.message}`);
      },
    );
  }

  destroyed() {
    this.$store.dispatch('fetchOnlyFacility');
  }
}
</script>
