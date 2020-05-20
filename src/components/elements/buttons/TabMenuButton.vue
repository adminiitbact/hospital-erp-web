<template>
  <a
    v-on:click="$emit('click')"
    :class="{
      'form-tab-links w-inline-block w-tab-link':true,
      'w--current':isActive,
      'icons': iconImagePath,
    }"
    role="tab" aria-controls="w-tabs-0-data-w-pane-0" aria-selected="false">
    <img :src="iconImagePath" alt="" class="icons-45px" v-if="iconImagePath">
    <div class="form-number-link" v-if="number">{{ number }}.</div>
    <div>{{ text }}</div>
  </a>
</template>
<style scoped>
.form-tab-links {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  padding: 15px 15px 15px 20px;
  -webkit-box-align: start;
  -webkit-align-items: flex-start;
  -ms-flex-align: start;
  align-items: flex-start;
  background-color: transparent;
  box-shadow: inset 1px 0 0 0 #d3d3d3;
  font-family: Roboto, sans-serif;
  color: #898989;
  font-size: 13px;
  font-weight: 300;
}

.form-tab-links:hover {
  background-color: #f9f9f9;
  box-shadow: inset 1px 0 0 0 #2c49ac;
  color: #3f3f3f;
  font-weight: 400;
}

.form-tab-links:visited {
  box-shadow: inset 4px 0 0 0 #2c49ac;
}

.form-tab-links.w--current {
  background-color: #f9f9f9;
  box-shadow: inset 5px 0 0 0 #2c49ac;
  color: #6c6c6c;
  font-weight: 700;
}

.form-tab-links.icons {
  padding-top: 12px;
  padding-bottom: 12px;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -webkit-flex-direction: column;
  -ms-flex-direction: column;
  flex-direction: column;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
  color: #6c6c6c;
  font-weight: 400;
  text-align: center;
}

.form-number-link {
  padding-right: 7px;
}

.icons-45px {
  width: 35px;
  margin-bottom: 10px;
}

@media screen and (min-width: 1440px) {

  .icons-45px {
    width: 50px;
  }

  .form-tab-links {
    padding-top: 20px;
    padding-bottom: 20px;
    color: #6c6c6c;
    font-weight: 400;
  }
  .form-tab-links.icons {
    padding-top: 20px;
    padding-bottom: 15px;
    font-size: 16px;
  }
}
</style>
<script>
import Vue from 'vue';

const TabMenuButProps = Vue.extend({
  props: {
    text: {
      required: true,
    },
    iconImagePath: {
      required: false,
    },
    isActive: {
      type: Boolean,
      required: false,
      default: false,
    },
    number: {
      required: false,
    },
  },
});

export default class TabMenuButton extends TabMenuButProps {

}
</script>
