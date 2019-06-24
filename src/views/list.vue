<template>
    <div>
        <van-pull-refresh v-model="isLoading" @refresh="onRefresh">
        <ul :goods="goods" class="list">
          <li v-for="(good,i) in goods" :key="i">
            <router-link :to="{name:'xiangqing',params:{id:good.id},query:{name:good.name}}">
             <img :src="good.img" alt="" >
             <p>{{good.name}}</p>
             <p>￥{{good.price}}</p>
            </router-link>
          </li>
      </ul>
      </van-pull-refresh>
    </div>
</template>
<script>
export default {
    props:['goods'],
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
    },
   
  }
}
</script>

<style lang="scss" scoped>
.list{
    li{
        margin: .25rem;
        float: left;
        width: 3.2rem;
        img{
            width: 100%;
            height: 100%;
        }
        p{
            white-space: nowrap;
            text-overflow: ellipsis;
            overflow: hidden;
        }
    }
}
</style>
