<template>
  <div>
    <van-nav-bar title="KQmusic"
                 @click-left="onClickLeft" 
                 class="kNavBar"
                 fixed>
      <template #left>
        <van-icon name="apps-o"
                  size="24" />
      </template>
    </van-nav-bar>
    <kSwiper></kSwiper>
    <kGrid></kGrid>
    <kTabbar></kTabbar>
    <kEmpty></kEmpty>
    <!-- <router-view /> -->
  </div>

</template>

<style>
body{
  background-color: #f7f8fa;
}
.kNavBar{
  background-color: #f7f8fa;
  margin-bottom: 50px;
}
</style>
<script  type="text/javascript">
  import kSwiper from './components/kSwiper.vue'
  import kGrid from './components/kGrid.vue'
  import kTabbar from './components/kTabbar.vue'
  import kEmpty from './components/kEmpty.vue'
  import Vue from 'vue';
  import { Button } from 'vant';
  import { Card } from 'vant';
  import { NavBar } from 'vant';
  import { Icon } from 'vant';
  import { Grid, GridItem } from 'vant';

  Vue.use(Grid);
  Vue.use(GridItem);

  Vue.use(Icon);

  Vue.use(NavBar);
  Vue.use(Button);
  Vue.use(Card);
  import { Toast } from 'vant';

  export default {
    data() {
      return {
        msg: '你好Vue',
      }
    },
    components: {
      kSwiper,
      kGrid,
      kTabbar,
      kEmpty
    },
    methods: {
      alerts() {
        console.log("这里！")
      },
      onClickLeft() {
        Toast('暂无功能');
      }
    },


  }
</script>
