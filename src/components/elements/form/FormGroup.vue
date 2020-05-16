<template>
  <div>
    <c-label :value="label"></c-label>
    <c-input></c-input>
  </div>
</template>
<script>
import Vue from 'vue';
import Component from 'vue-class-component';
import Input from './Input.vue';
import Label from './Label.vue';


const FormGroupProps = Vue.extend({
  props: {
    label: {
      required: true,
    },
  },
});


@Component({
  components: {
    'c-input': Input,
    'c-label': Label,
  },
})
export default class FormGroup extends FormGroupProps {

}
</script>
