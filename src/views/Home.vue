<template>
  <div class="home">
    <van-pull-refresh v-model="isLoading" @refresh="onRefresh">
    <Head></Head>
    <Swiper></Swiper>
    <consult></consult>
    <Video></Video>
  </van-pull-refresh>
  </div>
</template>

<script>
// @ is an alias to /src

import consult from "./consult"
import Video from "./video"
export default {
  name: 'home',
  components:{
    consult,
    Video
  },
  data() {
    return {
     isLoading: false
    }
  },
   methods: {
    onRefresh() {
      setTimeout(() => {
        this.$toast('刷新成功');
        this.isLoading = false;
      }, 500);
    }
  }
}
</script>

