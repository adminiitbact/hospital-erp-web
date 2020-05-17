<template>
  <div>
    <form-group v-bind:label="'Label'" :type="'text'"></form-group>
    <form-group v-bind:label="'Label large'" :size="'large'" :type="'number'" v-model="text"></form-group>
    <form-group v-bind:label="'Label small'" :size="'small'" :type="'number'" :placeholder="'Add data'"></form-group>
    <form-group v-bind:label="'Label'" :type="'text'" :disabled="true"></form-group>
    {{ text }}
  </div>
</template>
<script>
import Vue from 'vue';
import Component from 'vue-class-component';
import FormGroup from '../elements/form/FormGroup.vue';


const AddNewPatientProps = Vue.extend({});

@Component({
  components: {
    'form-group': FormGroup,
  },
})
export default class AddNewPatient extends AddNewPatientProps {
  text = '';
}
</script>
