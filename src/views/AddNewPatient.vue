/* eslint-disable */

<template>
  <div class="columns-4 w-row">
    <div class="w-col w-col-2">
      <sidelogo></sidelogo>
      <sidebar></sidebar>
    </div>

    <div class="column w-col w-col-10">
      <div class="div-block-44">
        <div class="hospital-profile-header-div _1">
          <h1 class="heading-2 _1">Patient Details (A)</h1>

          <removepatient v-if="showModal" @close="showModal = false">
          </removepatient>
          <a @click="showModal = true" class="button-3 ward remove w-button">- Remove Patient</a>
        </div>

        <div class="div-block-76">
        <patward></patward>
        <!-- <patcovidtest></patcovidtest> -->
        <!-- <patclinicalhist></patclinicalhist> -->
        <!-- <patdetails></patdetails> -->
        </div>
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
import RemovePatient from '../components/RemovePatient.vue';
import PatientDetails from '../components/PatientDetails.vue';
import PatientClinicalHistory from '../components/PatientClinicalHistory.vue';
import PatientCovidTestDetails from '../components/PatientCovidTestDetails.vue';
import PatientWardAllocation from '../components/PatientWardAllocation.vue';

@Component({
  components: {
    sidebar: Sidebar,
    sidelogo: Sidelogo,
    removepatient: RemovePatient,
    patdetails: PatientDetails,
    patclinicalhist: PatientClinicalHistory,
    patcovidtest: PatientCovidTestDetails,
    patward: PatientWardAllocation,
  },

  computed: {
    ...mapState(['user']),
    ...mapGetters(['referredPatients', 'facility']),
  },
})
export default class AddPatient extends Vue {
  showModal = false;
}
</script>
