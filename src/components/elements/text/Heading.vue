<template>
  <h1 class="heading blue">
    <slot></slot>
  </h1>
</template>

<style scoped>
.heading.blue {
  color: #2c49ac;
  font-size: 28px;
  font-weight: 600;
  letter-spacing: -0.25px;
}
</style>
<script>
import Vue from 'vue';

export default class Heading extends Vue {}
</script>
