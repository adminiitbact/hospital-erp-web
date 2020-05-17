<template>
  <div class="h-100">
    <div class="h-100 row">
      <b-col cols="2" align-self="center">
        <sidelogo></sidelogo>
        <sidebar></sidebar>
      </b-col>
      <div class="col-10 content-header p-0">
        <div class="d-flex flex-column h-100">
          <div class="row m-0 p-0 pl-2 pr-2">
            <b-col cols="3">
              <c-title>Patient Details</c-title>
            </b-col>
            <b-col offset="3" cols="6" align-self="end">
              <b-row align-self="end">
                <nav-tab
                  v-for="tab in tabs"
                  :key="tab[1]"
                  v-on:click="changeTab(tab[1])"
                  :is-active="currentTab == tab[1]">
                  {{ tab[0] }}
                </nav-tab>
              </b-row>
            </b-col>
          </div>
          <div class="row content flex-grow-1 m-0 pl-2 pr-2">
            <b-col>
              <component v-bind:is="currentTab"></component>
            </b-col>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>

</style>
<script>
import Vue from 'vue';
import Component from 'vue-class-component';
import { mapState, mapGetters } from 'vuex';

import Sidebar from '../components/Sidebar.vue';
import Sidelogo from '../components/Sidelogo.vue';
import Title from '../components/elements/text/Title.vue';
import NavigationTab from '../components/elements/tabs/NavigationTab.vue';
import PatientOverview from '../components/patients/PatientOverview.vue';
import AddNewPatient from '../components/patients/AddNewPatient.vue';


@Component({
  components: {
    sidebar: Sidebar,
    sidelogo: Sidelogo,
    'c-title': Title,
    'nav-tab': NavigationTab,
    overview: PatientOverview,
    'add-new-patient': AddNewPatient,
  },
  computed: {
    ...mapState(['user']),
    ...mapGetters(['facility']),
  },
})
export default class PatientDetails extends Vue {
  tabs = [
    ['Overview', 'overview'],
    ['Add New Patient', 'add-new-patient'],
  ];

  currentTab = 'overview';

  changeTab(tab) {
    this.currentTab = tab;
  }
}
</script>
