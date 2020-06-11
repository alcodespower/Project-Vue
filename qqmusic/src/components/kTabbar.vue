<template>
  <!-- <van-tabbar v-model="active"> -->
  <van-tabbar fixed
              route>
    <van-tabbar-item icon="friends-o"
                    to="/">
      <span>主页</span>

    </van-tabbar-item>
    <van-tabbar-item icon="search"
                    to="/search">
      <span>搜索</span>
    </van-tabbar-item>
    <van-tabbar-item icon="setting-o"
                     to="/setting"
                     badge="3">设置</van-tabbar-item>
  </van-tabbar>
</template>

<script>
  import Vue from 'vue';
  import { Tabbar, TabbarItem } from 'vant';

  Vue.use(Tabbar);
  Vue.use(TabbarItem);
  export default {
    name: "name",
    data() {
      return {
        active: 0,
        icon: {
          active: 'https://img.yzcdn.cn/vant/user-active.png',
          inactive: 'https://img.yzcdn.cn/vant/user-inactive.png',
        },
      };
    },
    methods: {}
  };
</script>

<style lang="scss" scoped>
</style>