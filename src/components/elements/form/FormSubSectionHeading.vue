<template>
  <div class="form-sub-section-heading-div">
    <h1 class="form-sub-section-heading"><slot></slot></h1>
  </div>
</template>
<style scoped>
.form-sub-section-heading {
  margin-top: 0px;
  margin-bottom: 0px;
  /* margin-left: -21px; */
  /* padding-left: 23px; */
  /* background-image: url('../images/Green-Check.svg'); */
  /* background-position: 0% 50%; */
  /* background-size: 15px; */
  /* background-repeat: no-repeat; */
  color: #0055d6;
  font-size: 13px;
  line-height: 140%;
  font-weight: 600;
  letter-spacing: 0.2px;
  text-transform: capitalize;
}

.form-sub-section-heading-div {
  margin-top: 5px;
  margin-bottom: 10px;
  padding-top: 3px;
  padding-bottom: 3px;
  border-bottom: 1px solid #d3d3d3;
}

@media screen and (min-width: 1440px) {
  .form-sub-section-heading {
    font-size: 14px;
  }
  .form-sub-section-heading-div {
    margin-top: 10px;
    margin-bottom: 15px;
    padding-top: 5px;
    padding-bottom: 5px;
  }
}
</style>
<script>
import Vue from 'vue';
import Component from 'vue-class-component';

@Component
export default class FormSubSectionHeading extends Vue {}
</script>
