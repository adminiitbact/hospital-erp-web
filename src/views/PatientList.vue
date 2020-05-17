<template>
  <div class="columns-4 w-row">
    <div class="w-col w-col-2">
      <sidelogo></sidelogo>
      <sidebar></sidebar>
    </div>
    <div class="column w-col w-col-10">
      <div class="div-block-44 profile-page">
      <div class="hospital-profile-header-div _1">
        <h1 class="heading-2 _3">Patient List</h1>
        <search-component :placeholder="'Search Patient Name'"
        :rows="allPatients" :searchIndex="1"
        v-on:finish="updatePatientListRows($event)"
        ></search-component>
      </div>
      <list :headers="headers" :rows="patientListRows" :key="patientListKey"></list>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from 'vue';
import Component from 'vue-class-component';
import { mapState, mapGetters } from 'vuex';

import Sidebar from '../components/Sidebar.vue';
import Sidelogo from '../components/Sidelogo.vue';
import List from '../components/List.vue';
import SearchComponent from '../components/SearchComponent.vue';

// const config = require('../config');
@Component({
  components: {
    sidebar: Sidebar,
    sidelogo: Sidelogo,
    list: List,
    'search-component': SearchComponent,
  },
  computed: {
    ...mapState(['user']),
    ...mapGetters(['patients', 'facility']),
  },
})
export default class PatientList extends Vue {
  patientListKey=0;

  patientList = [];

  headers = [
    {
      name: 'Patient Id',
      column_width: 2,
      sort: true,
    },
    {
      name: 'Name of patient',
      column_width: 3,
      sort: true,
    },
    {
      name: 'ward',
      column_width: 2,
      sort: true,
    },
    {
      name: 'severity',
      column_width: 2,
      sort: true,
    },
    {
      name: 'Covid-19 Test',
      column_width: 2,
      sort: true,
    },
    {
      name: 'Update',
      column_width: 1,
    },
  ];

  get allPatients() {
    const rows = [];
    this.patients.forEach((patient) => {
      const name = `${patient.first_name} ${patient.last_name}`;
      const ward = `${patient.patient_live_statuses[0].wardByWard.building_name} ${patient.patient_live_statuses[0].wardByWard.ward_name}`;
      const severity = patient.patient_live_statuses[0].severityBySeverity.key;
      const testStatusClass = patient.patient_test_details[0].test_result_status.key;
      rows.push([
        patient.patient_live_statuses[0].hospital_patient_id,
        name,
        ward,
        severity,
        `<span class=${testStatusClass}>${testStatusClass}</span>`,
        `<a href="/add-patient?patient_id=${patient.id}" class="button-2 w-button">update</a>`,
      ]);
    });
    return rows;
  }

  updatePatientListRows(newRows) {
    this.patientList = newRows;
    this.patientListKey += 1;
  }

  get patientListRows() {
    if (this.patientListKey === 0) return this.allPatients;
    return this.patientList;
  }
}
</script>
