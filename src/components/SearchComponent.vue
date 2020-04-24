<template>
  <div class="div-block-53">
    <div class="search w-form">
      <input
        type="text"
        v-model="searchValue"
        class="search-input w-input"
        autofocus="true"
        maxlength="256"
        :placeholder="placeholder"
        v-on:keyup="search"
      />
      <a  v-on:click="search" class="button-2 search w-button" >Search</a>
      <a href="#" v-on:click="clear()" class="button-3 w-button">CLEAR</a>
    </div>
  </div>
</template>

<script>
import Vue from 'vue';
import Component from 'vue-class-component';

const SearchComponentProps = Vue.extend({
  event: 'finish',
  props: {
    placeholder: {
      required: false,
      default: 'Search',
    },
    rows: {
      required: true,
    },
    searchIndex: {
      required: true,
    },
  },
});

@Component
export default class SearchComponent extends SearchComponentProps {
  searchValue = '';

  clear() {
    this.searchValue = '';
    this.$emit('finish', this.rows);
  }

  search() {
    const searchKey = this.searchValue;
    console.log(searchKey);
    const newRows = [];
    this.rows.forEach((row) => {
      if (row[this.searchIndex].toString().toLowerCase().includes(searchKey.toLowerCase())) {
        newRows.push(row);
      }
    }); // forEach
    this.$emit('finish', newRows);
  }
}
</script>
