<template>
    <div>

        <van-nav-bar title="搜索" left-text="返回" left-arrow  @click-left="aaa" fixed>
            
        </van-nav-bar>

            
 <div class="search">
   <van-search
  v-model="value"
  placeholder="请输入搜索关键词"
  show-action
  shape="round"
  @search="onSearch"
>
  <div slot="action" @click="onSearch">搜索</div>
</van-search>
</div>
<van-pull-refresh v-model="isLoading" @refresh="onRefresh">
       <ul class="list"> 
           <li v-for="(a,i) in data.msg" :key="i">
                 <img :src="a.img" alt="" >
             <p>{{a.name}}</p>
             <p>￥{{a.price}}</p>
               </li>  
       </ul> 
       </van-pull-refresh>
    </div>
</template>
<script>
import { PullRefresh } from 'vant';
import {mapState,mapActions} from "vuex"
export default {
    data() {
        return {
            value:"",
             isLoading: false
        }
    },
    computed: {
        ...mapState(['data'])
    },
    methods: {
        ...mapActions(['getSearchGoods']),
        aaa(){
            this.$router.push({name:'cart'})
        },
        onRefresh() {
      setTimeout(() => {
          this.data.msg=this.data.msg.reverse()
        this.$toast('刷新成功');
        this.isLoading = false;
        this.count++;
      }, 500);
    },
        onSearch(){
            console.log(this.value)
             this.getSearchGoods({url:"/vue/getGoods",cb:(res)=>{},params:{keyword:this.value}})
        },
      
       
    },
    mounted() {
         
    },
}
</script>

<style lang="scss" scoped>
    .search{
        padding-top: 0.9rem;
    }
    .list{
        >li{
            margin: 0.6rem;
            >img{
                width: 100%;
                height: 100%;
            }
        }
    }
</style>
