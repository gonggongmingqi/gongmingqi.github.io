<template>
    <div>
        <van-nav-bar :title="title"  >
  <van-icon name="search" slot="right" fixed  @click="aaaa" />
</van-nav-bar>
    </div>
</template>
<script>
import {mapState,mapActions,mapGetters} from "vuex"
export default {
    props:["title"],
    data() {
        return {
 
        }
    },
    methods: {
         aaaa(){
      this.$router.push({name:'search'})
    }
    },
    computed: {
       
    },
}
</script>
<style lang="scss" scoped>
    .van-nav-bar{
        background-color: #6ae66a;
        
    }
    .van-nav-bar .van-icon{
        color: #fff;
        font-size: 0.5rem;
    }
    .van-nav-bar__title{
        color: #fff;
    }
</style>
