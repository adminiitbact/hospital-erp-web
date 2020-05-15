<template>
    <a
    :class="{
      'plain-tag w-button':true,
      'green':color=='green',
      'red':color=='red',
    }"
    >●&nbsp;{{text}}</a>
</template>
<style scoped>
.plain-tag {
    background-color: transparent;
    color: #6c6c6c;
    font-size: 12px;
    line-height: 130%;
    font-weight: 600;
    border-radius: 15px;
}

.plain-tag.red {
  color: #e95e4f;
  /* border-color: #ffa375;
  background-color: #ffcfcc; */
}

.plain-tag.green {
  color: #29a655;
}

</style>
<script>
import Vue from 'vue';
import Component from 'vue-class-component';

const TagProps = Vue.extend({
  props: {
    placeholder: {
      required: false,
      default: 'Search',
    },
    text: {
      required: true,
    },
    color: {
      required: false,
    },
  },
});

@Component
export default class Tag extends TagProps {
}
</script>
