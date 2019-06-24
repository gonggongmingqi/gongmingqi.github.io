<template>
    <div>
        <van-nav-bar
        title="手机快速注册"
        left-arrow
        @click-left="onClickLeft"
        />

    <van-cell-group>
        <van-field
    v-model="nick"
    label="手机号"
    placeholder="请输入手机号"
    error-message=""
  />
  <van-field
    v-model="username"
    label="用户名"
    placeholder="请输入用户名"
  />
   <van-field
    v-model="password"
    type="password"
    label="密码"
    placeholder="请输入密码"
    required
  />
   <van-field
    v-model="password_tow"
    type="password"
    label="确认密码"
    placeholder="请确认密码"
    required
  />
  
</van-cell-group>
<van-button type="info" size="large" @click="pd">注册</van-button>
    </div>
</template>
<script>
import { Dialog } from 'vant';
export default {
    name:'zhuce',
    data() {
        return {
            nick:"",
            username:'',
            password:'',
            password_tow:'',
            log:{}
        }
    },
    methods: {
        onClickLeft(){
            this.$router.push({name:'denglu'})
        },
        pd(){
            if(this.nick==""){
                Dialog.alert({
                message: '请填写手机号'
                    }).then(() => {})
            }else{
                if(this.nick.length!=11){
                    Dialog.alert({
                message: '手机号格式不正确'
                    }).then(() => {})
                }else{
                    if(this.username==""){
                         Dialog.alert({
                        message: '请填写用户名'
                    }).then(() => {})
                    }else{
                        if(this.password_tow!=this.password){
                             Dialog.alert({
                        message: '两次密码不一致'
                        }).then(() => {})
                        }else{
                            this.log={username:this.username,password:this.password,password_tow:this.password_tow,nick:this.nick}
                            this.$axios.post('/vue/zhuce',this.log).then(res=>{
                                console.log(res);
                                if(!!res.data.result.type){
                                    alert(res.data.result.msg)
                                    this.$router.push({name:'denglu'})
                                }else{
                                    alert(res.data.result.msg)
                                }
                            })
                            
                        }
                    }
                }
            }
        }
    },
     mounted() {
        
    },       
}
</script>

<style lang="scss" scoped>
.van-nav-bar__title{
    color: #6ae66a;
}
</style>
