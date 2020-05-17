<template>
  <basic-frame :title="title" :navtabs="tabs"></basic-frame>
</template>
<style scoped>

</style>
<script>
import Vue from 'vue';
import Component from 'vue-class-component';

import BasicFrame from '../components/BasicFrame.vue';
import PatientOverview from '../components/patients/PatientOverview.vue';
import AddNewPatient from '../components/patients/AddNewPatient.vue';
import FacilityDetails from '../components/facility/FacilityDetails.vue';


@Component({
  components: {
    'basic-frame': BasicFrame,
    overview: PatientOverview,
    'add-new-patient': AddNewPatient,
    'facility-details': FacilityDetails,
  },
})
export default class PatientDetails extends Vue {
  title = 'Patient Details';

  tabs = [
    ['Overview', PatientOverview],
    ['Add New Patient', AddNewPatient],
    ['Facility Details', FacilityDetails],
  ];
}
</script>
