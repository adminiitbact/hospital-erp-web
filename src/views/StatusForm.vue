<template>
  <basic-frame :title="title" :navtabs="tabs"></basic-frame>
</template>

<script>
import Vue from 'vue';
import Component from 'vue-class-component';
import { mapState, mapGetters } from 'vuex';

import FacilityOverview from '../components/FacilityOverview.vue';
import EditFacility from '../components/EditFacility.vue';
import WardDetails from '../components/WardDetails.vue';
import BasicFrame from '../components/BasicFrame.vue';
import FacilityDetails from '../components/facility/FacilityDetails.vue';


@Component({
  components: {
    'basic-frame': BasicFrame,
  },
  computed: {
    ...mapState([
      'user',
    ]),
    ...mapGetters([
      'facility',
      'wards',
    ]),
  },
})
export default class StatusForm extends Vue {
  title = 'Facility details';

  tabs = [
    ['Overview', FacilityOverview],
    ['Edit Facility Details', EditFacility],
    ['Ward Details', WardDetails],
    ['Facility Details', FacilityDetails],
  ]
  // jurisdictionMap = config.jurisdictionMap;

  mounted() {
    if (!this.$store.authToken) {
      this.$store.dispatch('setAuthToken');
    }
  }
}
</script>
