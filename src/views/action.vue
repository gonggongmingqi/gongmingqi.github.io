<template>
    <div>
         <div class="num">
       <span > 数量：</span><van-stepper v-model="value" />
    </div>
        <van-goods-action>
  <van-goods-action-icon
    icon="chat-o"
    text="客服"
    @click="kefu"
  />
  <van-goods-action-icon
    icon="cart-o"
    text="购物车"
    @click="onClickIcon"
  />
  <van-goods-action-button
    type="warning"
    text="加入购物车"
    @click="good"
  />
  <van-goods-action-button
    type="danger"
    text="立即购买"
    @click="onClickButton"
  />
</van-goods-action>

 </div>
</template>
<script>
import {mapState,mapActions} from "vuex"
import { Dialog } from 'vant';
import { Toast } from 'vant';
export default {
    data() {
        return {
            value:1,
           
        }
    },
    computed: {
        ...mapState(['data'])
    },
   
    methods: {
        ...mapActions(['setCart']),
        onClickIcon() {
    this.$router.push({name:'good'})
    },
    onClickButton() {
        Dialog.confirm({
        message: '是否立即购买'
        }).then(() => {
        var token=JSON.parse(sessionStorage.user) 
         var goods={...this.data.xq,id:this.$route.params.id,username:token.token,num:this.value,checked:false}
        this.setCart({url:'/vue/cartJoin',data:goods})
        this.$router.push({name:'good'})
        }).catch(() => {
        // on cancel
        });
    },
    good(){
        var token=JSON.parse(sessionStorage.user) 
         var goods={...this.data.xq,id:this.$route.params.id,username:token.token,num:this.value,checked:false}
         console.log(goods)
        this.setCart({url:'/vue/cartJoin',data:goods})
         Toast.success('加入购物车成功');
        //  this.$router.push({name:'good'})
    },
    kefu(){
         Toast.success('还未开放敬请期待');
    }
    },
}
</script>
<style lang="scss" scoped>
    .num{
        margin-top: .5rem;
        >span{
            margin-right: .5rem;
            display: block;
            float: left;
        }
        .van-stepper{
            float: left;
            
        }
    }
</style>
