<template>
  <b-col cols="2" align-self="center">
    <sidelogo></sidelogo>
    <sidebar></sidebar>
  </b-col>
</template>
<script>
import Vue from 'vue';
import Component from 'vue-class-component';

import Sidebar from './utilities/Sidebar.vue';
import Sidelogo from './utilities/Sidelogo.vue';

const SideColProps = Vue.extend({});


@Component({
  components: {
    sidelogo: Sidelogo,
    sidebar: Sidebar,
  },
})
export default class SideCol extends SideColProps {}
</script>
