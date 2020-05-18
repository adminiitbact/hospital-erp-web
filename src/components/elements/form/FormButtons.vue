<template>
  <div class="pt-3 form-buttons-border">
    <b-row>
      <b-col offset="3" cols="3">
        <mybutton class="button width-full cancel" @click="$emit('cancel')">
          {{cancel_button_text}}
        </mybutton>
      </b-col>
      <b-col cols="6">
        <mybutton class="button width-full arrow-icon" @click="$emit('save')">
          {{save_button_text}}
        </mybutton>
      </b-col>
    </b-row>
  </div>
</template>
<style scoped>
.form-buttons-border{
  border-top: 1px solid #c4c4c4;
}

.width-full{
  width:100%;
}

.cancel {
  border-width: 0px;
  background-color: transparent;
  color: #898989;
}

.cancel:hover {
  background-color: #e1e1e1;
  color: #6c6c6c;
}

.cancel:focus {
  border-top-color: #898989;
}

.cancel.blue {
  color: #0055d6;
}

.cancel.blue:hover {
  background-color: #dbe0f1;
}

.arrow-icon {
  padding-right: 40px;
  background-image: url('../../../assets/images/Button-Arrow.svg');
  background-position: 95% 50%;
  background-size: 25px;
  background-repeat: no-repeat;
}
</style>
<script>
import Vue from 'vue';
import Component from 'vue-class-component';
import Button from '../buttons/Button.vue';


const FormButtonsProps = Vue.extend({
  props: {
    save_button_text: {
      required: true,
    },
    cancel_button_text: {
      required: true,
    },
  },
});

@Component({
  components: {
    mybutton: Button,
  },
})
export default class FormButtons extends FormButtonsProps {}
</script>
