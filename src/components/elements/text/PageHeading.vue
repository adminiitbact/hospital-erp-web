<template>
  <h1 class="page-heading"><slot></slot></h1>
</template>
<style scoped>
.page-heading {
  margin-bottom: 0px;
  font-family: Roboto, sans-serif;
  color: #898989;
  font-size: 16px;
  line-height: 135%;
  font-weight: 400;
}

@media screen and (min-width: 1440px) {
  .page-heading {
    font-size: 24px;
  }
}

</style>
<script>
import Vue from 'vue';
import Component from 'vue-class-component';


@Component
export default class PageHeading extends Vue {}
</script>
