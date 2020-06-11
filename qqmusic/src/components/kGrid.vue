<template>
  <div class="kGrid_box">
    <van-grid square icon-size="60px" clickable> 
      <van-grid-item icon="https://y.gtimg.cn/music/photo_new/T001R150x150M0000025NhlN2yWrP4.jpg?max_age=2592000"
                     text="周杰伦" />
      <van-grid-item icon="https://y.gtimg.cn/music/photo_new/T001R150x150M00000067r4p0wBDDN.jpg?max_age=2592000"
                     text="任然" />
      <van-grid-item icon="https://y.gtimg.cn/music/photo_new/T001R150x150M000001fNHEf1SFEFN.jpg?max_age=2592000"
                     text="G.E.M. 邓紫棋" />
      <van-grid-item icon="https://y.gtimg.cn/music/photo_new/T001R150x150M000000aHmbL2aPXWH.jpg?max_age=2592000"
                     text="李荣浩" />
      <van-grid-item icon="https://y.gtimg.cn/music/photo_new/T001R150x150M000002J4UUk29y8BY.jpg?max_age=2592000"
                     text="薛之谦" />
      <van-grid-item icon="https://y.gtimg.cn/music/photo_new/T001R150x150M000004dr7ZS36C2B1.jpg?max_age=2592000"
                     text="梦然" />
      <van-grid-item icon="https://y.gtimg.cn/music/photo_new/T001R150x150M000001z2JmX09LLgL.jpg?max_age=2592000"
                     text="汪苏泷" />
      <van-grid-item icon="https://y.gtimg.cn/music/photo_new/T001R150x150M000000wHoyF0OZB6B.jpg?max_age=2592000"
                     text="胡66" />
    </van-grid>

  </div>

</template>

<script>
  import Vue from 'vue';
  import { Icon } from 'vant';
  import { Grid, GridItem } from 'vant';

  Vue.use(Grid);
  Vue.use(GridItem);
  Vue.use(Icon);
  export default {
    name: "name",
    data() {
      return {
        images: [
          'https://y.gtimg.cn/music/common/upload/MUSIC_FOCUS/2547027.jpg?max_age=2592000',
          'https://y.gtimg.cn/music/common/upload/MUSIC_FOCUS/2545020.jpg?max_age=2592000',
          'https://y.gtimg.cn/music/common/upload/MUSIC_FOCUS/2542911.jpg?max_age=2592000',
          'https://y.gtimg.cn/music/common/upload/MUSIC_FOCUS/2540304.jpg?max_age=2592000'
        ]
      };
    },
    methods: {}
  };
</script>

<style>
  .kGrid_box {
    border-radius: 50px;
    margin: 5px;
    background-color: rgba(255, 255, 255, 1);
    box-shadow:5px -1px 20px #cacaca93;
  }
  .kGrid_box img{
    border-radius: 50%;
  }
</style> 