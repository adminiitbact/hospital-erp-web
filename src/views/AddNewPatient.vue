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
<div class="div-block-76"></div>
<div class="div-block-36 _1">
<b-card no-body class="mb-1 accordion__item js-accordion-item active">
            <b-card-header header-tag="header" class="p-1 faq-2 w-dropdown-toggle" role="tab" v-b-toggle.accordion-1>
           <img src="images/iconfinder_SEO-15_2588776.png" alt="" class="accordion_item-image">
                    <div class="toggle-text">Personal Details</div>
                    <div class="faq-icon-2"></div>
            </b-card-header>
            <b-collapse id="accordion-1" accordion="my-accordion" role="tabpanel">
              <b-card-body>
                  <patdetails></patdetails>
              </b-card-body>
            </b-collapse>
          </b-card>

          <b-card no-body class="mb-1 accordion__item js-accordion-item active">
            <b-card-header header-tag="header" class="p-1 faq-2 w-dropdown-toggle" role="tab" v-b-toggle.accordion-2>
            <img src="images/iconfinder_lungs_5997835.png" alt="" class="accordion_item-image">
            <div class="toggle-text">Clinical History At Admission</div>
            <div class="faq-icon-2"></div>
            </b-card-header>
            <b-collapse id="accordion-2" accordion="my-accordion" role="tabpanel">
              <b-card-body>
                <patclinicalhist></patclinicalhist>
              </b-card-body>
            </b-collapse>
          </b-card>

          <b-card no-body class="mb-1 accordion__item js-accordion-item active">
            <b-card-header header-tag="header" class="p-1 faq-2 w-dropdown-toggle" role="tab" v-b-toggle.accordion-3>
            <img src="images/iconfinder_Corona_covid19_virus_disease_5973093.png" alt="" class="accordion_item-image">
            <div class="toggle-text">COVID 19 Test Details</div>
            <div class="faq-icon-2"></div>
            </b-card-header>
            <b-collapse id="accordion-3" accordion="my-accordion" role="tabpanel">
              <b-card-body>
                <patcovidtest></patcovidtest>
              </b-card-body>
            </b-collapse>
          </b-card>

           <b-card no-body class="mb-1 accordion__item js-accordion-item active">
            <b-card-header header-tag="header" class="p-1 faq-2 w-dropdown-toggle" role="tab" v-b-toggle.accordion-4>
            <img src="images/iconfinder_SEO-15_2588776.png" alt="" class="accordion_item-image">
            <div class="toggle-text">Allocate Ward</div>
            <div class="faq-icon-2"></div>
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

<script type="module" src="../assets/webflow.js"></script>
<script>
import Vue from 'vue';
import Component from 'vue-class-component';
import { mapState, mapGetters } from 'vuex';
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import Sidebar from '../components/utilities/Sidebar.vue';
import Sidelogo from '../components/utilities/Sidelogo.vue';
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
