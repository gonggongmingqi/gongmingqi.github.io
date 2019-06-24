<template>
    <div>
    <van-swipe :autoplay="3000" indicator-color="red" loop  >
        <van-swipe-item  v-for="(a,i) in arr" :key="i"><img :src="a.src" alt=""></van-swipe-item>
    </van-swipe>
    
    </div>
</template>
<script>
import {mapState,mapActions,mapGetters} from "vuex"
export default {
   
    data() {
        return {
             arr:[
        {src:require('@/assets/images/girlbig1.jpg')},
        {src:require('@/assets/images/girlbig2.jpg')},
        {src:require('@/assets/images/girlbig3.jpg')},
        {src:require('@/assets/images/girlbig4.jpg')}
      ],
        }
    },
     computed: {
        // ...mapState(["data"])
    },
    methods: {
    //    ...mapActions(['getSearchGoods'])
    },
    mounted() {
       
            //  this.getSearchGoods({
            //     url:"/vue/movie",
            //     cb(){console.log('search success')},
            //     params:{
            //         limit:4
            //     }
            // })
    },
}
</script>

<style lang="scss" scoped>
.van-swipe{
    width: 100%;
    height: 3rem;
    img{
        width: 100%;
        height: 100%;
    }
}
</style>
