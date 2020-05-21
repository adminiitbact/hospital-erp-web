<template>
  <div class="form-question p-4">
    <slot></slot>
  </div>
</template>
<style scoped>
.form-question {
  margin-top: 10px;
  margin-bottom: 10px;
  align-items: center;
  border-style: solid;
  border-width: 1px;
  border-color: #b9c3e4;
  border-radius: 10px;
  background-color: #f8f9fc;
  width: 100%;
}
</style>
<script>
import Vue from 'vue';
import Component from 'vue-class-component';

@Component
export default class FormQuestion extends Vue {}
</script>
