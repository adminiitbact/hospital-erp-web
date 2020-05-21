<template>
  <button
    :class="{
      'button w-button': true,
      'small': size === 'small',
      'large': size === 'large',
      'secondary': type === 'secondary',
      'selected': selected,
    }" @click="$emit('click')"
    type="button">
    <slot></slot>
  </button>
</template>
<style scoped>
.button {
  height: 35px;
  margin-right: 5px;
  margin-bottom: 3px;
  border: 1px solid transparent;
  border-radius: 7px;
  background-color: #2c49ac;
  font-size: 13px;
  line-height: 135%;
  text-align: center;
  letter-spacing: 1px;
  text-transform: uppercase;
}

.button:hover {
  background-color: #223985;
}

.button:focus {
  background-color: #223985;
}
.button.small {
  height: 30px;
  padding-top: 5px;
  padding-bottom: 5px;
  font-size: 12px;
  text-decoration: none;
}

.button.large {
  height: 42px;
  padding-top: 12px;
  padding-bottom: 12px;
  font-size: 14px;
}

.button.round {
  border-radius: 20px;
}

.button.cancel {
  border-width: 0px;
  background-color: transparent;
  color: #898989;
}

.button.cancel:hover {
  background-color: #e1e1e1;
  color: #6c6c6c;
}

.button.cancel:focus {
  border-top-color: #898989;
}

.button.cancel.blue {
  color: #0055d6;
}

.button.cancel.blue:hover {
  background-color: #dbe0f1;
}

.button.special {
  border-style: solid;
  border-width: 1px;
  border-color: #2c49ac;
  background-color: transparent;
  color: #2c49ac;
}

.button.special:hover {
  background-color: #b9c3e4;
  color: #2c49ac;
}

.button.special.round {
  background-color: #dbe0f1;
}

.button.special.round:hover {
  border-color: #0055d6;
  background-color: #0055d6;
  color: #fff;
}

.button.special.round:focus {
  background-color: #0055d6;
  color: #fff;
}

.button.icon {
  padding-right: 40px;
  background-image: url('../../../assets/images/Button-Arrow.svg');
  background-position: 95% 50%;
  background-size: 25px;
  background-repeat: no-repeat;
}


.button.secondary {
  border-style: solid;
  border-width: 1px;
  border-color: #2c49ac;
  background-color: transparent;
  color: #2c49ac;
}

.button.secondary:hover {
  background-color: #b9c3e4;
  color: #2c49ac;
}

.button.secondary:focus, .button.secondary.selected {
  border-color: #0055d6;
  background-color: #0055d6;
  color: #fff;
}

</style>
<script>
import Vue from 'vue';
import Component from 'vue-class-component';


const ButtonProps = Vue.extend({
  props: {
    size: {
      required: false,
      default: 'normal',
    },
    type: {
      required: false,
      default: 'primary',
    },
    secondary: {
      type: Boolean,
      default: false,
    },
  },
});


@Component
export default class Button extends ButtonProps {}
</script>
