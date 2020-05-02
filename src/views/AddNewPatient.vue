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

          <removepatient v-if="showModal" @close="showModal = false"></removepatient>
          <a @click="showModal = true" class="button-3 ward remove w-button">- Remove Patient</a>
        </div>

        <div role="tablist">
          <b-card no-body class="mb-1">
            <b-card-header header-tag="header" class="p-1" role="tab">
              <b-button block href="#" v-b-toggle.accordion-1 variant="info">Patient Details</b-button>
            </b-card-header>
            <b-collapse id="accordion-1" accordion="my-accordion" role="tabpanel">
              <b-card-body>
                  <patdetails></patdetails>
              </b-card-body>
            </b-collapse>
          </b-card>

          <b-card no-body class="mb-1">
            <b-card-header header-tag="header" class="p-1" role="tab">
              <b-button block href="#" v-b-toggle.accordion-2 variant="info">Clinical History at Admission</b-button>
            </b-card-header>
            <b-collapse id="accordion-2" accordion="my-accordion" role="tabpanel">
              <b-card-body>
                <patclinicalhist></patclinicalhist>
              </b-card-body>
            </b-collapse>
          </b-card>

          <b-card no-body class="mb-1">
            <b-card-header header-tag="header" class="p-1" role="tab">
              <b-button block href="#" v-b-toggle.accordion-3 variant="info">COVID-19 Test Details</b-button>
            </b-card-header>
            <b-collapse id="accordion-3" accordion="my-accordion" role="tabpanel">
              <b-card-body>
                <patcovidtest></patcovidtest>
              </b-card-body>
            </b-collapse>
          </b-card>

           <b-card no-body class="mb-1">
            <b-card-header header-tag="header" class="p-1" role="tab">
              <b-button block href="#" v-b-toggle.accordion-4 variant="info">Allocate Ward</b-button>
            </b-card-header>
            <b-collapse id="accordion-4" accordion="my-accordion" role="tabpanel">
              <b-card-body>
                <patward></patward>
              </b-card-body>
            </b-collapse>
          </b-card>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import Vue from 'vue';
import Component from 'vue-class-component';
import { mapState, mapGetters } from 'vuex';
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import Sidebar from '../components/Sidebar.vue';
import Sidelogo from '../components/Sidelogo.vue';
import RemovePatient from '../components/RemovePatient.vue';
import PatientDetails from '../components/PatientDetails.vue';
import PatientClinicalHistory from '../components/PatientClinicalHistory.vue';
import PatientCovidTestDetails from '../components/PatientCovidTestDetails.vue';
import PatientWardAllocation from '../components/PatientWardAllocation.vue';

Vue.use(BootstrapVue);
Vue.use(IconsPlugin);

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
