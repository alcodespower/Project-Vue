<template>
  <van-overlay show z-index='99999'>
    <div class="wrapper">
      <div class="block" />
    </div>
  </van-overlay>
</template>

<script>
  import Vue from 'vue';
  import { Overlay } from 'vant';

  Vue.use(Overlay);
  export default {
    name: "name",
    data() {
      return {};
    },
    methods: {}
  };
</script>

<style>
  .wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    background-color: #fff;
  }

  .block {
    width: 220px;
    height: 220px;
    border-radius: 8px;
    background-color: #fff;
    background-image: url("../assets/IC.png");
    background-size: 100%;
  }
</style>