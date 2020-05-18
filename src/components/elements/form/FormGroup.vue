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
      required
    />
    <select class="input form-dropdown w-select" v-if="type == 'options'"
      :placeholder="placeholder"
      v-bind:value="value"
      v-on:input="$emit('input', $event.target.value)"
      required>
      <option v-for="option in options" :key="option.key" :value="option.key">
        {{ option.value }}
      </option>
    </select>
  </div>
</template>
<style scoped>
.input {
  height: 30px;
  margin-bottom: 0px;
  padding-right: 10px;
  padding-left: 10px;
  border-style: solid;
  border-width: 1px;
  border-color: #d3d3d3;
  border-radius: 5px;
  color: #3b3f4c;
  font-size: 12px;
}

.input:hover {
  border-color: #0055d6;
}

.input:focus {
  border-color: #0055d6;
}

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

.input.form-dropdown {
  margin-right: 10px;
  margin-bottom: 5px;
  padding: 4px 10px 6px;
}

.input.form-dropdown:focus {
  color: #0055d6;
}

.input.form-dropdown.w--open {
  cursor: pointer;
}

.select-field {
  height: 38px;
  border-radius: 7px;
  background-color: #fff;
}

.select-field:hover {
  border-style: solid;
  border-width: 1px;
  border-color: #0055d6;
}

.select-field:focus {
  border-style: solid;
  border-width: 1px;
  border-color: #0055d6;
}
@media screen and (min-width: 1440px) {
  .input {
    height: 37px;
    padding-right: 12px;
    padding-left: 12px;
    border-radius: 7px;
    font-size: 14px;
  }
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
    options: {
      required: false,
    },
  },
});

@Component({
  components: {
  },
})
export default class FormGroup extends FormGroupProps {}
</script>
