<template>
  <router-link
    :to="to"
    :class="{
      'primary-navigation-button w-button': true,
      'w--current': isActive
    }">
    <slot></slot>
  </router-link>
</template>
<style scoped>
.primary-navigation-button {
  margin-right: 10px;
  margin-bottom: 3px;
  margin-left: 10px;
  padding-right: 20px;
  padding-left: 20px;
  background-color: transparent;
  color: #b9c3e4;
  text-align: left;
  text-decoration: none;
}

.primary-navigation-button.w--current {
  border-radius: 10px;
  background-color: #4f68ba;
  color: #fff;
}

.primary-navigation-button:hover {
  border-radius: 10px;
  background-color: #4f68ba;
  color: #fff;
}
</style>
<script>
import Vue from 'vue';

const NavButProps = Vue.extend({
  props: {
    to: {
      required: true,
    },
    isActive: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
});

export default class NavigationButton extends NavButProps {

}
</script>
