<template>
  <div
    data-w-tab="Ward Details"
    class="tab-pane-tab-4 w-tab-pane w--tab-active"
  >
    <div v-if="!wardEditing" class="w-row text-align-right">
      <div class="add-ward-button">
        <a class="button-3 ward w-button" v-on:click="editWard(-1, true)">
          + ADD A NEW WARD
        </a>
      </div>
    </div>
    <div v-if="!wardEditing" class="w-row">
      <div v-for="(ward, index) in wards" class="w-col w-col-6" :key="index">
        <div class="ward-card">
          <div class="w-row">
            <h4>BL: {{ ward.buildingName }} | FL: {{ ward.floor }} | Ward: {{ ward.name }}</h4>
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
            <div>Unoccupied Beds: {{ ward.availableBeds }}</div>
            <div>Total Beds: {{ ward.totalBeds }}</div>
          </div>
          <div class="div-block-65">
            <div>
              Unoccupied Ventilators:
              <strong>
                {{ ward.ventilators - ward.ventilatorsOccupied }}
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
                v-on:click="editWard(index, false)">
                EDIT
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <ward-editor v-if="wardEditing"
      :wardToEdit="wardToBeEdited" :wardToEditId="wardToBeEditedId"
      v-on:edit-done="editDone"></ward-editor>
  </div>
</template>
<script>
import Vue from 'vue';
import Component from 'vue-class-component';
import WardEditor from './WardEditor.vue';

const WardDetailsProps = Vue.extend({
  props: {
    wards: {
      required: true,
    },
  },
});

@Component({
  components: {
    'ward-editor': WardEditor,
  },
})
export default class WardDetails extends WardDetailsProps {
  wardEditing = false;

  wardToBeEdited = undefined;

  wardToBeEditedId = 0;

  editWard(index, newEntry) {
    this.wardEditing = true;
    this.wardToBeEdited = this.wards[index];
    this.wardToBeEditedId = (this.wards[index] && !newEntry) ? this.wards[index].id : 0;
  }

  editDone() {
    this.wardEditing = false;
  }
}
</script>
