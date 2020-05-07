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
            v-on:submit.prevent="submitUpdates('assets')">
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
                          v-model="facility.assets[assetDetail[0]]"
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
            v-on:submit.prevent="submitUpdates('staff')">
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
                          v-model="facility.staff[staffDetail[0]]"
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
            v-on:submit.prevent="submitUpdates('inventory')">
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
                          v-model="facility.inventory[detail[0]]"
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
          <form v-else-if="currentTab == areasShort[3]"
            v-on:submit.prevent="submitUpdates('checklist')">
            <div class="w-row">
              <div class="w-form">
                <div v-for="(group, index) in checklistResources"
                  class="form-section-div" :key="index">
                  <div class="div-block-41">
                    <div class="subheading _1">
                      {{ index + 1 }}. {{ group[1]}}
                    </div>
                    <select
                      class="ward-text-field dropdown w-select"
                      v-model="facility.checklist[group[0]]"
                      required>
                      <option v-for="(option, index) in checklistOptions"
                        :key="index" :value="option[0]">
                        {{ option[1] }}
                      </option>
                    </select>
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
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Component from 'vue-class-component';
import Vue from 'vue';


const EditFacilityProps = Vue.extend({
  props: {
    facility: {
      required: true,
    },
  },
});


@Component()
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

  checklistResources = [
    ['food_and_drinking_water_availability', 'Food and drinking water facility availability'],
    ['sanitation_and_disinfection_services_availability', 'Sanitation and disinfection services availability'],
    ['health_screening_protocol_availability', 'Health screening protocol availability'],
    ['ambulance_availability', 'Ambulance availability'],
    ['washrooms_availability', 'Are sufficient number of washrooms / toilets available?'],
    ['beds_mattresses_covers_availability', 'Are beds, mattresses, covers available?'],
  ];

  checklistOptions = [
    ['available', 'Available'],
    ['unavailable', 'Not available'],
    ['inadequate', 'Inadequate'],
  ];

  changeCurrentTab(currentTab) {
    this.currentTab = currentTab;
  }

  submitUpdates(dataKey) {
    this.dataChanged = true;
    const updateData = {};
    updateData[dataKey] = this.facility[dataKey];
    this.$store.dispatch('updateFacilityDetails', { data: updateData, id: this.facility.id });
  }

  destroyed() {
    this.$store.dispatch('fetchOnlyFacility');
  }
}
</script>
