<template>
  <div
    data-w-tab="Ward Details"
    class="tab-pane-tab-4 w-tab-pane w--tab-active"
  >
    <div v-if="!wardEditing" class="w-row text-align-right">
      <div class="add-ward-button">
        <a class="button-3 ward w-button" v-on:click="editWard(-1)">
          + ADD A NEW WARD
        </a>
      </div>
    </div>
    <div v-if="!wardEditing" class="w-row">
      <div v-for="(ward, index) in wards" class="w-col w-col-6" :key="index">
        <div class="ward-card">
          <div class="w-row">
            <h4>BL: {{ ward.building_name }} | FL: {{ ward.floor }} | Ward: {{ ward.ward_name }}</h4>
          </div>
          <div class="div-block-65">
            <div :class="{
              'text-block-12': true,
              'mild-text': ward.severity === 'MILD',
              'moderate-text': ward.severity === 'MODERATE',
              'severe-text': ward.severity === 'SEVERE'
            }">
              {{ ward.severity }}
            </div>
            <div>{{ ward.covidStatus }}</div>
          </div>
          <div class="div-block-65">
            <div>Unoccupied Beds: {{ ward.available_beds }}</div>
            <div>Total Beds: {{ ward.total_beds }}</div>
          </div>
          <div class="div-block-65">
            <div>
              Unoccupied Ventilators:
              <strong>
                {{ ward.ventilators_occupied }}
              </strong>
            </div>
            <div>
              Total Ventilators: <strong>{{ ward.ventilators }}</strong>
            </div>
          </div>
          <div class="w-row text-align-right" style="margin-top:10px;">
            <div class="div-block-65">
              <a class="button-gray ward w-button"
                v-on:click="editWard(index, true)">
                DUPLICATE
              </a>
              <a class="button-3 ward w-button"
                v-on:click="editWard(index)">
                EDIT
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <ward-editor v-if="wardEditing"
      v-on:edit-done="editDone"></ward-editor>
  </div>
</template>
<script>
import Vue from 'vue';
import Component from 'vue-class-component';
import { mapState } from 'vuex';
import WardEditor from './WardEditor.vue';


@Component({
  components: {
    'ward-editor': WardEditor,
  },
  computed: {
    ...mapState(['facility', 'wards']),
  },
})
export default class WardDetails extends Vue {
  wardEditing = false;

  editWard(index, duplicate = false) {
    if (index === -1) {
      this.$store.commit('setWard', undefined);
    } else {
      this.wards[index].duplicate = duplicate;
      this.$store.commit('setWard', this.wards[index]);
    }
    this.wardEditing = true;
  }

  editDone() {
    this.wardEditing = false;
  }
}
</script>
