<template>
  <div class="h-100">
    <div class="h-100 row">
      <sidecol></sidecol>
      <div class="col-10 content-header p-0">
        <div class="d-flex flex-column h-100">
          <div class="row m-0 p-0 pl-2 pr-2">
            <b-col cols="3">
              <c-title>{{ title }}</c-title>
            </b-col>
            <b-col offset="3" cols="6" align-self="end">
              <b-row align-self="end">
                <nav-tab
                  v-for="(tab, index) in navtabs"
                  :key="index"
                  v-on:click="changeTab(index)"
                  :is-active="currentTab == index">
                  {{ tab[0] }}
                </nav-tab>
              </b-row>
            </b-col>
          </div>
          <div class="row content flex-grow-1 m-0 pl-2 pr-2">
            <b-col>
              <component v-bind:is="navtabs[currentTab][1]"></component>
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

import SideCol from './SideCol.vue';
import Title from './elements/text/Title.vue';
import NavigationTab from './elements/tabs/NavigationTab.vue';


const BasicFrameProps = Vue.extend({
  props: {
    title: {
      required: true,
      type: String,
    },
    navtabs: {
      required: true,
      type: Array,
    },
  },
});


@Component({
  components: {
    sidecol: SideCol,
    'c-title': Title,
    'nav-tab': NavigationTab,
  },
})
export default class BasicFrame extends BasicFrameProps {
  currentTab = 0;

  changeTab(tab) {
    this.currentTab = tab;
  }
}
</script>
