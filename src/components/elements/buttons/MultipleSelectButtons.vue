<template>
  <div>
    <div class="form-label-heading-div d-flex">
      <h1 class="form-label-heading">{{ label }}</h1>
    </div>
    <div class="p-3 gray-border">
      <button v-for="opt in options"
        class="chip-button w-button"
        :key="opt">{{ opt }}
      </button>
    </div>
  </div>
</template>
<style scoped>
.form-label-heading {
  margin-top: 0px;
  margin-bottom: 0px;
  margin-left: 10px;
  padding-right: 5px;
  padding-left: 5px;
  color: #6c6c6c;
  font-size: 13px;
  line-height: 140%;
  font-weight: 500;
  background-color: #fff;
}
.form-label-heading-div {
  margin-bottom: -10px;
}

.chip-button {
  height: 35px;
  margin-top: 3px;
  margin-right: 5px;
  margin-bottom: 5px;
  border-style: solid;
  border-width: 1px;
  border-color: #d3d3d3;
  border-radius: 20px;
  background-color: transparent;
  color: #6c6c6c;
  font-size: 13px;
  line-height: 135%;
  font-weight: 500;
  letter-spacing: 0.1px;
  cursor: pointer;
}

.chip-button:hover {
  border-style: solid;
  border-color: transparent;
  background-color: #2c49ac;
  color: #fff;
}

.chip-button:focus {
  border-color: #2c49ac;
  background-color: #2c49ac;
  color: #fff;
}

.chip-button.select-state {
  border-style: none;
  background-color: #2c49ac;
  color: #fff;
}

.chip-button.secondary {
  border-color: #2c49ac;
  background-color: #eaedf7;
  color: #2c49ac;
}

.chip-button.secondary:hover {
  background-color: #2c49ac;
  color: #fff;
}

.chip-button.secondary:focus {
  background-color: #2c49ac;
  color: #fff;
}
</style>
<script>
import Vue from 'vue';
import Component from 'vue-class-component';


const MultiSelectProps = Vue.extend({
  props: {
    options: {
      required: true,
    },
  },
});

@Component
export default class MultiSelect extends MultiSelectProps {}
</script>
