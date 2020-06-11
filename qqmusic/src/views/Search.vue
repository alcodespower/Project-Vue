<template>
  <div>
    <van-search class="kSearch"
                v-model="msg"
                placeholder="请输入搜索关键词"
                @search="Enter_click" />
    <span >{{$store.state.search}}</span>
    <kEmpty></kEmpty>
  </div>
</template>

<script>
 import kEmpty from '../components/kEmpty.vue'
  import Vue from 'vue';
  import { Search, Toast } from 'vant';

  Vue.use(Search);
  export default {
    name: "name",
    data() {
      return {
        value: '',
        msg: '',
        search: '',
      };
    },
    components: {
      kEmpty
    },
    
    methods: {
      Enter_click() {
        
        // console.log('触发成功')
        this.$store.commit('updateSearch', this.msg);
        this.search = this.$store.state.search
        Toast("你搜索的是：" + this.search);
        this.msg = '';

      },
      
    }
  };
</script>

<style>
  body {
    margin-top: 50px;
  }
</style>