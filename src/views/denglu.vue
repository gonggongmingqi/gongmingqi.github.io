<template>
    <div>
        <van-nav-bar
  title="立即登陆,更多体验"
  left-arrow
  @click-left="onClickLeft"
/>

    <van-cell-group >
  <van-field
    v-model="login.username"
    required
    clearable
    label="用户名"
    right-icon="question-o"
    placeholder="请输入用户名"
    @click-right-icon="$toast('question')"
    
  />

  <van-field
    v-model="login.password"
    type="password"
    label="密码"
    placeholder="请输入密码"
    required
  />
</van-cell-group>
<van-button type="primary" size="large" @click="but">登陆</van-button>

<div class="span">
    <span @click="zhuce">注册账号</span>
    忘记密码？
</div>

    </div>
</template>
<script>
import { Toast } from 'vant';
import {mapState,mapActions} from  "vuex"
export default {
    name:'denglu',
    data() {
        return {
            login:{},
        }
    },
    computed: {
        // ...mapState(['src'])
    },
  methods: {
      ...mapActions(['getLogin']),
    onClickLeft() {
     this.$router.push({name:'home'})
    },
    but(){
        //     Toast.loading({
            // mask: true,
    // message: '加载中...'
    // });
    this.getLogin({url:'/vue/login',data:this.login,cd:(res)=>{
        console.log(res)
         if(!!res.data.type){
             sessionStorage.user=JSON.stringify({token:res.data.token});
               Toast.success('登陆成功');
               this.$router.push({name:'my'})
               console.log('111')
           }else{
               Toast.fail('用户名或密码不正确');
               sessionStorage.removeItem('user')
           }
    }})
    //    this.$axios.post('/vue/login',this.login)
    //    .then(res=>{
    //        if(!!res.data.type){
               
    //            sessionStorage.user=JSON.stringify({token:res.data.token});
    //            Toast.success('登陆成功');
    //            this.$router.push({name:'my'})
    //        }else{
    //            Toast.fail('用户名或密码不正确');
    //            sessionStorage.removeItem('user')
    //        }
    //    })
    },
   zhuce(){
       this.$router.push({name:'zhuce'})
       
   }
  }
}
</script>
<style lang="scss" scoped>
.van-nav-bar__title{
    color: #6ae66a;
}
.span{
    margin-top: 0.5rem;
    font-size: 0.3rem;
    >span{
        color: #6ae66a;
        border-right: 2px solid #2b2b2b2b; 
        padding-right: 0.1rem;
        margin-right: 0.2rem;
    }
}
</style>
