<template>
  <div class="tab-pane-facility-profile w-tab-pane w--tab-active">
    <multibuttons :buttons="mbuttons"></multibuttons>
    <sbar :id="sbar" :name="sbar"></sbar>
    <tag :color="'red'" :text="'Moderate'"></tag>
    <tag :color="'green'" :text="'Moderate'"></tag>
    <tag :color="'black'" :text="'Moderate'"></tag>
  </div>
</template>

<script>
import Vue from 'vue';
import Component from 'vue-class-component';
import MultipleButtons from '../elements/buttons/MultipleButtons.vue';
import SearchBar from '../elements/SearchBar.vue';
import Tag from '../elements/Tag.vue';


const PatientOverviewProps = Vue.extend({
  props: {
  },
});

@Component({
  components: {
    multibuttons: MultipleButtons,
    sbar: SearchBar,
    tag: Tag,
  },
})
export default class PatientOverview extends PatientOverviewProps {
  mbuttons = [{ label: 'button1', click: () => console.log('button1') }, { label: 'butto2', click: () => console.log('button2') }, { label: 'button3', click: () => console.log('button3') }];
}
</script>
