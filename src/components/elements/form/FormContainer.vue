<template>
  <div class="form-container .w-tab-content d-flex flex-column h-100">
    <div class="form-wrapper flex-grow-1">
      <slot></slot>
    </div>
  </div>
</template>
<style scoped>
.form-wrapper {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  overflow: scroll;
  padding-top: 20px;
  padding-right: 20px;
  padding-bottom: 15px;
  padding-left: 40px;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -webkit-flex-direction: column;
  -ms-flex-direction: column;
  flex-direction: column;
  -webkit-box-pack: start;
  -webkit-justify-content: flex-start;
  -ms-flex-pack: start;
  justify-content: flex-start;
}

.form-container {
  padding-top: 10px;
  padding-right: 10px;
  -webkit-box-flex: 1;
  -webkit-flex: 1;
  -ms-flex: 1;
  flex: 1;
  border-radius: 15px;
  background-color: #fff;
  box-shadow: 0 0 5px 1px #d3d3d3;
}
</style>
