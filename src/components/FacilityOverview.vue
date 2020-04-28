<template>
  <div class="tab-pane-facility-profile w-tab-pane w--tab-active">
    <div class="section-6 profile">
      <div class="w-row">
        <div class="column-7 w-col w-col-8">
          <div>
            <div class="div-block-35 profile">
              <div class="stats-heading">Hospital Assets</div>
              <div class="div-block-34">
                <div v-for="(asset, index) in assetsToShow" :key="index">
                  <div class="text-block-3">{{ assetsData[asset[0]] }}</div>
                  <div class="text-block-4">{{ asset[1] }}</div>
                </div>
              </div>
            </div>
            <div class="div-block-35 profile">
              <div class="stats-heading">COVID Beds</div>
              <div class="div-block-34">
                <div
                  v-for="(covidBeds, index) in getBeds('totalBeds')"
                  :key="index">
                  <div class="text-block-3">{{ covidBeds[2] }}</div>
                  <div class="text-block-4">{{ covidBeds[1] }}</div>
                </div>
              </div>
            </div>
            <div class="div-block-35 profile">
              <div class="stats-heading">Available COVID Beds</div>
              <div class="div-block-34">
                <div
                  v-for="(covidBeds, index) in getBeds('availableBeds')"
                  :key="index">
                  <div class="text-block-3">{{ covidBeds[2] }}</div>
                  <div class="text-block-4">{{ covidBeds[1] }}</div>
                </div>
              </div>
            </div>
            <div class="div-block-35 profile">
              <div class="stats-heading">Medical Staff</div>
              <div class="div-block-34">
                <div class="div-block-34">
                <div v-for="(medStaff, index) in medicalStaffToShow" :key="index">
                  <div class="text-block-3">{{ medicalStaffData[medStaff[0]] }}</div>
                  <div class="text-block-4">{{ medStaff[1] }}</div>
                </div>
              </div>
              </div>
            </div>
            <div class="div-block-35 profile">
              <div class="stats-heading">Inventory</div>
              <div class="div-block-34">
                <div v-for="(inventory, index) in inventoryToShow" :key="index">
                  <div class="text-block-3">{{ inventoryData[inventory[0]] }}</div>
                  <div class="text-block-4">{{ inventory[1] }}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="column-8 w-col w-col-4">
          <div class="div-block-60">
            <div>
              <div class="stats-heading incharge">Facility Contact Details</div>
              <div class="div-block-59">
                <div class="div-block-58">
                  <div
                    class="details profile bold name"
                  >{{ facility.name }}</div>
                </div>
                <div class="div-block-58">
                  <div
                    class="details profile"
                  >{{ facility.telephone }}</div>
                </div>
                <div class="div-block-58">
                  <div class="details profile">
                    {{ facility.email }}
                  </div>
                </div>
              </div>
            </div>
            <div v-for="(contactDetails, index) in contactDetailsToShow" :key="index">
              <div class="stats-heading incharge">{{ contactDetails[1] }}</div>
              <div class="div-block-59">
                <div class="div-block-58">
                  <div
                    class="details profile bold name"
                  >{{ contactDetailsData[contactDetails[0] + '_name'] }}</div>
                </div>
                <div class="div-block-58">
                  <div
                    class="details profile"
                  >{{ contactDetailsData[contactDetails[0] + '_mobile'] }}</div>
                </div>
                <div class="div-block-58">
                  <div class="details profile">
                    {{ contactDetailsData[contactDetails[0] + '_email'] }}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from 'vue';
import Component from 'vue-class-component';

const config = require('../config');
const utils = require('../utils/utils');


const FacilityOverviewProps = Vue.extend({
  props: {
    facility: {
      required: true,
    },
    wards: {
      required: true,
    },
  },
});

@Component
export default class FacilityOverview extends FacilityOverviewProps {
  assetsToShow = [
    ['total_beds', 'Total Beds'],
    ['total_covid_beds', 'Total Covid Beds'],
    ['total_icu_beds', 'Total ICU Beds'],
    ['covid_icu_beds', 'COVID ICU Beds'],
    ['total_ventilators', 'Total Ventilators'],
    ['ventilators_allocated_covid', 'COVID Ventilators'],
  ]

  medicalStaffToShow = [
    ['total_doctors', 'Total Doctors'],
    ['ayush_doctors', 'Ayush Doctors'],
    ['chest_physicians', 'Chest Physicians'],
    ['anesthesiologists', 'Anesthesiologists'],
    ['nurses', 'Nurses'],
  ]

  inventoryToShow = [
    ['ppe_kits', 'PPE Kits'],
    ['n_95_masks', 'N-95 Masks'],
    ['tpe_masks', 'TPE Masks'],
    ['other_masks', 'Other Masks'],
    ['gloves', 'Gloves'],
    ['hydroxychloroquine', 'Hydroxychloroquine'],
  ]

  contactDetailsToShow = [
    ['primary_contact_person', 'Contact Person'],
    ['ambulance_incharge', 'Ambulance Charge'],
    ['cleaning_incharge', 'Disinfection Incharge'],
    ['health_checkup_incharge', 'Health Checkup Incharge'],
  ]

  get assetsData() {
    if (this.facility.facilityAsset) {
      this.facility.facilityAsset.data.total_covid_beds = 0;
      this.getBeds('totalBeds').forEach((cb) => {
        this.facility.facilityAsset.data.total_covid_beds += cb[2];
      });
      return this.facility.facilityAsset.data;
    }
    return {};
  }

  get medicalStaffData() {
    if (this.facility.facilityMedstaff) {
      return this.facility.facilityMedstaff.data;
    }
    return {};
  }

  get inventoryData() {
    if (this.facility.facilityInventory) {
      return this.facility.facilityInventory.data;
    }
    return {};
  }

  get contactDetailsData() {
    if (this.facility.facilityContact) {
      return this.facility.facilityContact.data;
    }
    return {};
  }

  getBeds(marker) {
    const total = [];
    const totalHelper = [];
    for (let j = 0; j < config.testStatusList.length; j += 1) {
      const testStatus = config.testStatusList[j];
      for (let i = 0; i < config.severityList.length; i += 1) {
        const severity = config.severityList[i];
        const hashedVal = utils.hashedSeverityTestStatus(
          severity, testStatus,
        );
        total.push(
          [hashedVal,
            `${utils.capitalizeOnlyFirst(severity)}, \
            ${utils.capitalizeOnlyFirst(testStatus)}`],
        );
        totalHelper[hashedVal] = 0;
      }
    }
    for (let i = 0; i < this.wards.length; i += 1) {
      const ward = this.wards[i];
      totalHelper[
        utils.hashedSeverityTestStatus(ward.severity, ward.covidStatus)
      ] += ward[marker];
    }
    for (let i = 0; i < total.length; i += 1) {
      total[i].push(totalHelper[total[i][0]]);
    }
    return total;
  }
}
</script>
