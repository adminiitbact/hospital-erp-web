<template>
  <a :class="{
    'secondary-navigation-button w-button': true,
    'w--current': isActive
    }"
    v-on:click="$emit('click')">
    <slot></slot>
  </a>
</template>

<style scoped>
.secondary-navigation-button {
  padding-right: 20px;
  padding-left: 40px;
  border-radius: 7px 7px 0 0;
  background-image: url('../../../assets/images/Add-Icon.svg');
  background-color: transparent;
  background-position: 5px 50%;
  background-size: 20px;
  background-repeat: no-repeat;
  color: #6c6c6c;
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 0.5px;
  text-transform: uppercase;
}

.secondary-navigation-button:hover {
  background-color: #eaedf7;
}

.secondary-navigation-button.w--current {
  color: #0055d6;
  background-color: #fff;
}

.secondary-navigation-button.w--current:hover {
  background-color: #fff;
}

.secondary-navigation-button.inactive {
  color: #a0a0a0;
}
</style>
<script>
import Vue from 'vue';

const NavTabProps = Vue.extend({
  props: {
    'is-active': {
      type: Boolean,
      required: false,
      default: false,
    },
  },
});

export default class NavigationTab extends NavTabProps {}
</script>
