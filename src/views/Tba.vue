<template>
    <div class="Tba">
       <van-tabs v-model="active" animated>
  <van-tab v-for="(a,i) in types" :key="i" :title="a">
      <list :goods="data.goods.filter(item=>item.type.text==a)"></list>
  </van-tab>
  
</van-tabs>
    </div>
</template>
<script>
import {mapState,mapActions} from "vuex"
import { bus } from "@/utils/bus.js";
import list from "./list"
export default {
    components:{
        list
    },
    data() {
        return {
              active: 0,
                types:[]
        }
    },
    computed: {
        ...mapState(['data','add'])
    },
    methods: {
        ...mapActions(['getGood'])
    },
    mounted() {
        this.getGood({url:"/vue/good",cb:(res)=>{
            var arr = res.data.result;
            var result = arr.map((item,index)=>{
                return item.type.text
            })
            this.types = Array.from(new Set(result))

        }})

     if(this.$route.query.ind){
         this.active=this.$route.query.ind
     }
    },
   
}
</script>
<style lang="css" scoped>


</style>
