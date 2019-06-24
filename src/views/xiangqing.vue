<template>
    <div>
    <van-nav-bar :title="$route.query.name"  left-arrow  @click-left="fanhui">
        <van-icon name="search" slot="right" @click="search"/>
    </van-nav-bar>
    <div class="tu">
        <img :src="data.xq.img" alt="">
        <span>￥&nbsp;: {{data.xq.price}}&emsp;</span>
        <span class="discount">折扣{{data.xq.discount}}折</span>
        <p>{{data.xq.name}}</p>
    </div>
    <action></action>

   <van-coupon-cell
  :coupons="coupons"
  :chosen-coupon="chosenCoupon"
  @click="showList = true"
/>
<van-popup v-model="showList" position="bottom">
  <van-coupon-list
    :coupons="coupons"
    :chosen-coupon="chosenCoupon"
    :disabled-coupons="disabledCoupons"
    @change="onChange"
    @exchange="onExchange"
  />
</van-popup>
    </div>
</template>
<script>
import {mapState,mapActions} from "vuex"
import action from "./action"
export default {

    components:{
        action
    },
    data() {
        return {
            showList:false,
                chosenCoupon: -1,
      coupons: [{
  available: 1,
  condition: '无使用门槛\n最多优惠12元',
  reason: '',
  value: 150,
  name: '优惠券名称',
  startAt: 1489104000,
  endAt: 1514592000,
  valueDesc: '1.5',
  unitDesc: '元'
}],
      disabledCoupons: [{
  available: 1,
  condition: '无使用门槛\n最多优惠12元',
  reason: '',
  value: 150,
  name: '优惠券名称',
  startAt: 1489104000,
  endAt: 1514592000,
  valueDesc: '1.5',
  unitDesc: '元'
}]
        }
    },
    methods: {
        ...mapActions(['getOne']),
        fanhui(){
             this.$router.push({name:'cart'})
        },
        search(){
            this.$router.push({name:'search'})
        },
          onChange(index) {
      this.showList = false;
      this.chosenCoupon = index;
    },
    onExchange(code) {
      this.coupons.push(coupon);
    }
        
    },
    computed: {
        ...mapState(['data'])
    },
    mounted() {
        console.log(this.$route.params.id)
        this.getOne({url:'/vue/goodOne',params:{id:this.$route.params.id}})
    },
}
</script>
<style lang="scss" scoped>
    .tu{
        >img{
            width: 100%;
            height: 100%;
        }
        >p{
            text-align: left;
            font-weight: 600;
        }
        >span{
            color: red;
            font-size: 0.5rem;
        }
        .discount{
            // text-decoration: line-through;
             font-weight: 300;
             font-size: 0.2rem;
             color:#2b2b2b;
        }
    }
    
</style>
