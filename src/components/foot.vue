<template>
    <div>
        <van-tabbar v-model="active" fixed>
  <van-tabbar-item :name="a.name" :to="{name:a.name}" :icon="a.icon" v-for='(a,i) in arr' :key="i">{{a.tex}}</van-tabbar-item>

</van-tabbar>

    </div>
</template>
<script>
import { bus } from "@/utils/bus.js";
import {mapState,mapMutations} from "vuex"
export default {
    name:'Foot',
    data() {
    return {
      active: 'home',
      arr:[
          {path:'',name:'home',icon:'wap-home',tex:'首页'},
          {path:'',name:'cart',icon:'shopping-cart-o',tex:'商品'},
          {path:'',name:'good',icon:'comment-o',tex:'购物车'},
          {path:'',name:'live',icon:'video-o',tex:'直播'},
          {path:'',name:'my',icon:'manager',tex:'我的'},
      ]
    }
  },
  methods: {
  
  },
  computed: {
  
  },
  mounted() {
    this.active=this.$route.name
    bus.$on('active',(res)=>{
      this.active=res
    })
  },
}
</script>