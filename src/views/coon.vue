<template>
    <div>
        <div class="sp">
            <ol>
                <li><span>0</span> 商品关注</li>
                <li><span>0</span> 店铺关注</li>
                <li><span>0</span> 足迹关注</li>
            </ol>
        </div>
        <div class="ding">
            <span>我的订单</span>
            <span class="ck">查看更多订单></span>
        </div>
        <div class="dan">
            <ul>
                <li @click="dizhi"><van-icon name="home-o" size= "26"/>地址管理</li>
                <li><van-icon name="logistics" size= "26"/>待发货</li>
                <li><van-icon name="orders-o" size= "26"/>待评价</li>
                <li><van-icon name="balance-pay" size= "26"/>退款</li>
            </ul>
        </div>
    </div>
</template>
<script>
export default {
    name:'coon',
    data() {
        return {
            
        }
    },
    methods: {
        dizhi(){
            this.$router.push({name:'dizhi'})
        }
    },
}
</script>

<style lang="scss" scoped>
    .sp{
        margin-top: 0.3rem;
        background-color: #fff;
        ol{
            padding: 0.2rem 0;
            display: flex;
            justify-content: space-around;
            >li{
                display: flex;
                flex-direction: column;
            }
        }
    }
   .ding{
       margin-top: 0.3rem;
       padding: 0.3rem 0.2rem;
       display: flex;
       justify-content: space-between;
       font-size: 16px;
       border-bottom: 1px solid #2b2b2b2b;
        background-color: #fff;
       .ck{
           font-size: 12px;
           font-weight: 200;
       }
   }
   .dan{
       margin-top: 0.3rem;
        background-color: #fff;
       ul{
           padding: 0.2rem 0;
           display: flex;
            justify-content: space-around;
             >li{
                display: flex;
                flex-direction: column;
                
            }
       }
   }
</style>
