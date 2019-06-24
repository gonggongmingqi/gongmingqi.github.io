<template>
    <div class="zh">
        <div class="sz">
            <div>
            <span>设置</span>
            <van-icon name="comment-o" />
            </div>
        </div>
            <div class="username" v-if="islogin">
             <upload></upload>
             <div>
            <span>欢迎您！<br>{{username}}</span>
             </div>
            </div>
            <div class="else" v-else @click="add">
                <div><img :src="src" alt=""></div>
            <span>登陆/注册</span>
            </div>

            <div class="but" v-if="islogin">
                <p>账户余额 <span>0</span> <van-button type="default" >提现</van-button></p>
                <van-button type="danger">充值</van-button>
                <van-button type="danger">交易记录</van-button>
                <div> 偶币 <span>0</span>  积分<span>0</span> </div>
            </div>
    
    </div>
</template>
<script>
import upload from './upload'
import {mapState} from 'vuex'
export default {
    components:{
        upload
    },
    data() {
        return {
            islogin:sessionStorage.user,
            src:require('@/assets/images/t5.jpg'),
        }
    },
    methods: {
        add(){
            this.$router.push({name:'denglu'})
        }
    },
    computed: {
        ...mapState(['username'])
    },

}
</script>

<style lang="scss" scoped>
.zh{
    font-size: 0.3rem;
    color: #fff;
    background-color: #6ae66a;
    overflow: hidden;
}
.sz{
    width: 100%;
    height: 0.6rem;
    padding-bottom: .3rem;
    >div{
    padding-top: .2rem;
    padding-right: .3rem;
    float: right;
    >span{
        padding-right: .3rem;
    }
    }
}
    .username{
        float: left;
        padding-right: .5rem;
        >div{

            float: left;
           
        span{
            display: block; padding-top: 0.2rem;
        }
        }
    }
  .else{
        overflow: hidden;
             >span{
                float: left;
                 margin-top: 0.3rem;
                 margin-left: 0.2rem;
             }
         >div{
            float: left;
            margin-left: 0.5rem;
             img{
                 width: 1.2rem;
                 height: 1.2rem;
                 border-radius: 50%;
             }
         }
  }
    .but{
        
        float: left;
        >p{
            .van-button{
                height: 0.3rem;
                width: 0.3rem;
                font-size: 0.1rem;
                line-height: 0.3rem;
                background-color: #8cce8c;
                color: #fff;
                margin-left: 0.2rem;
                padding:0;
            }
        }
        .van-button{
            height: 0.4rem;
            // width: 1rem;
            line-height: 0.4rem;
            margin-right: 0.3rem;
            margin-top: 0.2rem;
            margin-bottom: 0.1rem;
        }
    }
</style>
