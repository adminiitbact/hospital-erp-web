<template>
  <div>
    <input
      type="text" @change="$emit('change')" @keyup="$emit('keyup')"
      :placeholder="placeholder" :maxlength="maxlength" class="input search w-input"
    >
  </div>
</template>
<style scoped>
.search {
  padding-left: 45px;
  background-image: url('../../assets/images/Search-Blue.svg');
  background-position: 0px 50%;
  background-size: 35px;
  background-repeat: no-repeat;
}
</style>
<script>
import Vue from 'vue';
import Component from 'vue-class-component';

const SearchBarProps = Vue.extend({
  props: {
    placeholder: {
      required: false,
      default: 'Search',
    },
    maxlength: {
      required: false,
      default: '256',
    },
  },
});

@Component
export default class SearchBar extends SearchBarProps {
}
</script>
