<template>
  <div class="kSwiper_box">
    <van-swipe class="my-swipe"
               :autoplay="3000"
               indicator-color="white"
               show-indicators	>
      <van-swipe-item v-for="(image, index) in images"
                      :key="index">
        <img v-lazy="image"
             class="kSwiper_image"
             alt="" />
      </van-swipe-item>
    </van-swipe>

  </div>

</template>

<script>
  import Vue from 'vue';
  import { Lazyload } from 'vant';
  import { Swipe, SwipeItem } from 'vant';
  Vue.use(Swipe);
  Vue.use(SwipeItem);
  Vue.use(Lazyload);
  Vue.use(Lazyload, {
    lazyComponent: true,
  });
  export default {
    // name: "name",
    data() {
      return {
        images: [
          'https://y.gtimg.cn/music/common/upload/MUSIC_FOCUS/2547027.jpg?max_age=2592000',
          'https://y.gtimg.cn/music/common/upload/MUSIC_FOCUS/2545020.jpg?max_age=2592000',
          'https://y.gtimg.cn/music/common/upload/MUSIC_FOCUS/2542911.jpg?max_age=2592000',
          'https://y.gtimg.cn/music/common/upload/MUSIC_FOCUS/2540304.jpg?max_age=2592000'
        ],
      };
    },
    methods: {}
  };
</script>

<style>
  .my-swipe .van-swipe-item {
    color: #fff;
    /* font-size: 20px; */
    /* line-height: 150rpx; */
    text-align: center;
    background-color: #39a8ed17;
  }
  .kSwiper_box{
    margin-top: 50px;
  }
  .kSwiper_image {
    width: 100%;
    height: 160px;
  }
</style>