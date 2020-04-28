<style>
 .negative {
  color: #1e9e2a;
}
 .positive{
 color: #d82e2e;
}
</style>
<template>
  <div class="div-block-36 _1 _2">
    <div class="section-8 patient-list table">
      <div class="columns-6 w-row table-header" v-if="headers.length>0">
        <div v-for="(header,index) in headers" :key="index"
        :class="['w-col-'+header.column_width,'w-col header__item']">
          <a href="#" class="link-block-3 _1 w-inline-block">
            <div class="legends" v-html="header.name"></div>
          </a>
        </div>
      </div>
      <div id="list_rows" class="patient-list-div table-content" v-if="rows.length>0">
      <div class="columns-7 w-row table-row" v-for="(row,row_index) in rows" :key="row_index">
          <div :class="['table-data w-col', 'w-col-'+headers[index].column_width]"
           v-for="(row_value,index) in row" :key="index">
            <div class="pd-list" v-html="row_value"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from 'vue';
import Component from 'vue-class-component';

const ListProps = Vue.extend({
  props: {
    headers: {
      required: true,
    },
    rows: {
      required: true,
    },
  },
});

@Component
export default class List extends ListProps {

}

</script>
