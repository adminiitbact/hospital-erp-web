<template>
  <div>
    <label class="field-label">{{ label }}</label>
    <input
      :type="type"
      :class="{
        'input w-input': true,
        small: size == 'small',
        large: size == 'large',
        disabled: disabled,
      }"
      :placeholder="placeholder"
      v-bind:value="value"
      v-on:input="$emit('input', $event.target.value)"
      :disabled="disabled"
      v-if="['text', 'number'].includes(type)"
    />
    <select class="select-field w-select" v-if="type == 'options'">
    </select>
  </div>
</template>
<style scoped>
.input.small {
  height: 30px;
  font-size: 12px;
}

.input.large {
  height: 42px;
  padding-top: 12px;
  padding-bottom: 12px;
  font-size: 14px;
}

.input.disabled {
  background-color: #f5f5f5;
  cursor: not-allowed;
}

.field-label {
  font-family: Lato, sans-serif;
  line-height: 130%;
  font-weight: 700;
}
</style>
<script>
import Vue from 'vue';
import Component from 'vue-class-component';

const FormGroupProps = Vue.extend({
  props: {
    label: {
      required: true,
    },
    type: {
      required: true,
    },
    size: {
      required: false,
      default: 'normal',
      type: String,
    },
    value: {
      required: false,
    },
    placeholder: {
      required: false,
      type: String,
    },
    disabled: {
      required: false,
      type: Boolean,
      default: false,
    },
  },
});

@Component({
  components: {
  },
})
export default class FormGroup extends FormGroupProps {}
</script>
