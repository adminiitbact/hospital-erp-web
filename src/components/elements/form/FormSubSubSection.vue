<template>
  <div class="mb-3">
    <b-row>
      <b-col cols="12">
      <div class="form-question-heading grey">
        <strong>{{heading}}</strong>
      </div>
      </b-col>
    </b-row>
    <slot></slot>
  </div>
</template>
<style scoped>

.form-question-heading {
  margin-right: 5px;
  color: #2c49ac;
  font-size: 12px;
  line-height: 145%;
  font-weight: 600;
}

.form-question-heading.small {
  margin-right: 0px;
  margin-bottom: 5px;
  color: #6c6c6c;
  font-size: 11px;
  font-weight: 400;
  text-align: right;
}

.form-question-heading.small.rhs {
  font-size: 14px;
  text-align: left;
}

.form-question-heading.grey {
  margin-bottom: 7px;
  color: #b54c00;
}


@media screen and (min-width: 1440px) {
  .form-question-heading {
    font-size: 14px;
  }
  .form-question-heading.small {
    font-size: 13px;
  }
  .form-question-heading.grey {
    color: #b54c00;
  }
}

</style>
<script>
import Vue from 'vue';
import Component from 'vue-class-component';

const FormSubSubSectionProps = Vue.extend({
  props: {
    heading: {
      required: true,
    },
  },
});
@Component
export default class FormSubSubSection extends FormSubSubSectionProps {}
</script>
