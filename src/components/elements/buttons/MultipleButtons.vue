<template>
  <div class="multi-button-wrapper">
    <a
      v-on:click="button.click"
      v-for="(button, index) in buttons" :key="index"
      :class="{
              'multiple-buttons w-button': true,
            }">
      {{button.label}}
     </a>
  </div>
</template>
<style scoped>

.multiple-buttons {
  height: 36px;
  border-style: solid;
  border-width: 1px;
  border-color: transparent #d3d3d3 transparent transparent;
  border-radius: 0px;
  background-color: transparent;
  color: #6c6c6c;
  font-size: 13px;
  text-align: center;
  letter-spacing: 1px;
  text-transform: uppercase;
}

.multiple-buttons:hover {
  border-right-color: transparent;
  background-color: #f9f9f9;
}

.multiple-buttons:focus {
  border-right-color: transparent;
  background-color: #0055d6;
  color: #fff;
}

.multiple-buttons.secondary {
  border-style: solid;
  border-width: 1px;
  border-color: #2c49ac;
  background-color: transparent;
  color: #2c49ac;
}

.multiple-buttons.secondary:hover {
  background-color: #b9c3e4;
  color: #2c49ac;
}

.multiple-buttons.tertiary {
  border-color: #a0a0a0;
  background-color: transparent;
  color: #a0a0a0;
}

.multiple-buttons.tertiary:hover {
  background-color: #a0a0a0;
  color: #fff;
}

.multiple-buttons.small {
  height: 30px;
  padding-top: 5px;
  padding-bottom: 5px;
  font-size: 12px;
  text-decoration: none;
}

.multiple-buttons.large {
  height: 42px;
  padding-top: 12px;
  padding-bottom: 12px;
  font-size: 14px;
}

.multiple-buttons.round {
  border-radius: 20px;
}

.multiple-buttons.cancel {
  border-width: 0px;
  background-color: transparent;
  color: #a0a0a0;
}

.multiple-buttons.cancel:hover {
  background-color: #e1e1e1;
  color: #6c6c6c;
}

.multiple-buttons.cancel:focus {
  border-top-color: #a0a0a0;
}

.multiple-buttons.cancel.blue {
  color: #0055d6;
}

.multiple-buttons.cancel.blue:hover {
  background-color: #dbe0f1;
}

.multiple-buttons.icon-inactive {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  width: 100px;
  height: 100px;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-box-align: end;
  -webkit-align-items: flex-end;
  -ms-flex-align: end;
  align-items: flex-end;
  background-color: transparent;
  /* background-image: url('../images/Icon-Button-`.svg'); */
  background-position: 50% 10px;
  background-size: 35px;
  background-repeat: no-repeat;
  color: #a0a0a0;
  font-weight: 500;
  text-align: center;
  letter-spacing: 0px;
  text-transform: none;
}

.multiple-buttons.icon-inactive:hover {
  border-radius: 10px;
  background-color: #f9f9fa;
}

.multiple-buttons.icon-active {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  width: 100px;
  height: 100px;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-box-align: end;
  -webkit-align-items: flex-end;
  -ms-flex-align: end;
  align-items: flex-end;
  background-color: transparent;
  /* background-image: url('../images/Icon-Button-Blue.svg'); */
  background-position: 50% 10px;
  background-size: 35px;
  background-repeat: no-repeat;
  color: #2c49ac;
  font-weight: 600;
  text-align: center;
  letter-spacing: 0px;
  text-transform: none;
}

.multiple-buttons.icon-active:hover {
  border-radius: 10px;
  background-color: #eaedf7;
}

.multiple-buttons.special {
  border-style: solid;
  border-width: 1px;
  border-color: #2c49ac;
  background-color: transparent;
  color: #2c49ac;
}

.multiple-buttons.special:hover {
  background-color: #b9c3e4;
  color: #2c49ac;
}

.multiple-buttons.special.round {
  background-color: #dbe0f1;
}

.multiple-buttons.special.round:hover {
  border-color: #0055d6;
  background-color: #0055d6;
  color: #fff;
}

.multiple-buttons.special.round:focus {
  background-color: #0055d6;
  color: #fff;
}

.multi-button-wrapper {
  display: inline-block;
  overflow: hidden;
  border-radius: 10px;
  box-shadow: inset 0 0 0 1px #c4c4c4;
}
</style>
<script>
import Vue from 'vue';
import Component from 'vue-class-component';

const MultipleButtonsProps = Vue.extend({
  props: {
    buttons: {
      type: Array,
      required: true,
    },
  },
});

@Component
export default class MultipleButtons extends MultipleButtonsProps {
}
</script>
