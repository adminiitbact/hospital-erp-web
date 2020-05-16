<template>
  <label class="field-label">{{ value }}</label>
</template>
<style scoped>
.field-label {
  font-family: Lato, sans-serif;
  line-height: 130%;
  font-weight: 700;
}
</style>
<script>
import Vue from 'vue';
import Component from 'vue-class-component';

const LabelProps = Vue.extend({
  props: {
    value: {
      type: String,
      required: true,
    },
  },
});

@Component
export default class Label extends LabelProps {}
</script>
