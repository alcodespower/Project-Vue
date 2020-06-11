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
    <router-view />

    <kTabbar></kTabbar>
  </div>

</template>

<style>
  body {
    background-color: #f7f8fa;
  }
  .kNavBar {
    background-color: #f7f8fa;
    margin-bottom: 50px;
  }
</style>
<script  type="text/javascript">
  import kTabbar from './components/kTabbar.vue'
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
      kTabbar

    },
    mounted() {
        if (this._isMobile()) {
          // alert("手机端");
          this.$router.replace('/');
        } else {
          // alert("pc端");
          this.$router.replace('/IsPC');
        }
      },
    methods: {
      alerts() {
        console.log("这里！")
      },
      onClickLeft() {
        Toast('暂无功能');
      },
      
      _isMobile() {
        let flag = navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i)
        return flag;
      }
    },


  }
</script>
