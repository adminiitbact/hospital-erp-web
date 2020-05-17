<template>
  <h2 class="title-text">
    <slot></slot>
  </h2>
</template>

<style scoped>
.title-text {
  margin-top: 0px;
  margin-bottom: 0px;
  color: #2c49ac;
  font-size: 18px;
  line-height: 38px;
  font-weight: 600;
}
</style>
<script>
import Vue from 'vue';


export default class Title extends Vue {}
</script>
