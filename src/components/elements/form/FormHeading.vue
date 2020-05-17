<template>
  <h1 class="form-heading"><slot></slot></h1>
</template>
<style scoped>
.form-heading {
  margin-top: 10px;
  margin-bottom: 0px;
  color: #6c6c6c;
  font-size: 17px;
  line-height: 32px;
  font-weight: 300;
}

@media screen and (min-width: 1440px) {
  .form-heading {
    margin-top: 20px;
    margin-bottom: 15px;
    font-size: 20px;
    font-weight: 400;
  }
}
</style>
<script>
import Vue from 'vue';
import Component from 'vue-class-component';

@Component
export default class FormHeading extends Vue {}
</script>
