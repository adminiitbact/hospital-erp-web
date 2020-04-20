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
            <h4>{{ ward.name }}</h4>
          </div>
          <div class="div-block-65">
            <div class="text-block-12">
              Patients status: {{ ward.severity }}
            </div>
            <div>{{ ward.covidStatus }}</div>
          </div>
          <div class="div-block-65">
            <div>Available beds: {{ ward.availableBeds }}</div>
            <div>Total beds: {{ ward.totalBeds }}</div>
          </div>
          <div class="div-block-65">
            <div>
              Available ventilators:
              <strong>
                {{ ward.ventilators - ward.ventilatorsOccupied }}
              </strong>
            </div>
            <div>
              Total ventilators: <strong>{{ ward.ventilators }}</strong>
            </div>
          </div>
          <div class="w-row text-align-right" style="margin-top:10px;">
            <a class="button-3 ward w-button"
              v-on:click="editWard(index)">
              EDIT
            </a>
          </div>
        </div>
      </div>
    </div>
    <ward-editor v-if="wardEditing" :wardToEdit="wardToBeEdited"
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

  editWard(index) {
    this.wardEditing = true;
    this.wardToBeEdited = this.wards[index];
  }

  editDone() {
    this.wardEditing = false;
  }
}
</script>
