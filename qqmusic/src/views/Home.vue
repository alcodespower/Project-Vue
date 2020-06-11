<template>
  <div class="home">
    <kSwiper></kSwiper>
    <kGrid></kGrid>
    
    <kEmpty></kEmpty>
  </div>
</template>

<script  type="text/javascript">
  import kSwiper from '../components/kSwiper.vue'
  import kGrid from '../components/kGrid.vue'
  
  import kEmpty from '../components/kEmpty.vue'
  export default {
    data() {
      return {

      }
    },
    components: {
      kSwiper,
      kGrid,
      kEmpty
    },

  }
</script>