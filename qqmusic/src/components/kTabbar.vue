<template>
  <van-tabbar v-model="active">
    <van-tabbar-item>
      <span>自定义</span>
      <template #icon="props">
        <img :src="props.active ? icon.active : icon.inactive" />
      </template>
    </van-tabbar-item>
    <van-tabbar-item icon="search">
      <span>搜索</span>
    </van-tabbar-item>
    <van-tabbar-item icon="setting-o"
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