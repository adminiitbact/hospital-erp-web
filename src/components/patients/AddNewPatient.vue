<template>
  <form-group v-bind:label="'Alpher'"></form-group>
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

}
</script>
