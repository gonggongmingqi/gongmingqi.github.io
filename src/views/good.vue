<template>
    <div class="good">
        <Two title="购物车"></Two>
<div class="box">
        <div v-for="(a,i) in data.details" :key="i" class="good">   
            <div class="checked">
            <input type="checkbox" v-model="a.checked">
                </div> 
        <van-card
            :num="a.num"
            tag="标签"
            :price="a.price"
            :desc="a.type.text"  
            :title="a.name"
            :thumb="a.img"
            :origin-price="a.discount"
            
            >
        <div slot="footer">
    <van-button size="mini" @click="add({url:'/vue/addd',id:a.id,username:username,num:(a.num)+1});a.num++;">++</van-button>
    <van-button size="mini" @click="add({url:'/vue/addd',id:a.id,username:username,num:(a.num<=1?a.num=1:a.num-1)});a.num<=1?a.num=1:a.num--;">-</van-button>
    <van-button size="mini" @click="sc({url:'/vue/sc',id:a.id,username:username});data.details.splice(i, 1)">删除</van-button>
  </div>
</van-card>
</div>
    <div class="tijiao">

        <van-submit-bar
  :price="zj"
  button-text="提交订单"
  @submit="onSubmit"
>
 <div class="quan"><input type="checkbox" v-model="checked">全选</div> 

</van-submit-bar>
    </div>
        </div>

    </div>
</template>
<script>
import { Dialog } from 'vant'
import {mapState,mapMutations,mapActions} from "vuex"
export default {
    name:'good',
    components:{
        
    },
    data() {
        return {
            username:JSON.parse(sessionStorage.user).token,
            zj:0
            // checked:false
        }
    },
    computed: {
        ...mapState(['data']),
        checked:{
            get(){
                var zj=0;
                var flg=true;
                this.data.details.forEach((a)=>{
                    if(a.checked){
                        zj+=a.price*a.num*100
                    }
                    if(!a.checked){
                        flg=false
                        
                    }

                })
                this.zj=zj
                return flg
            },
            set(val){
                this.data.details=this.data.details.map(tiem=>{
                    tiem.checked=val
                    return tiem
                })
                
            }
        }

    },
    
     methods:{
         ...mapActions(['details','add','sc']),
         
        goumai(){
            console.log(111)
            // var token=JSON.parse(sessionStorage.user) 
            // this.delete({url:'vue/delete',params:token,cd:res=>{

            // }})
        },
   
        
        onSubmit(){

        }

     },
       mounted(){
           console.log(JSON.parse(sessionStorage.user).token)
           if(!sessionStorage.user){
               this.$router.push({name:'denglu'})
           }else{
               var token=JSON.parse(sessionStorage.user) 
           }
           this.details({url:'/vue/details',params:token,cd:res=>{
               var array=res.data.result
               console.log(array.length)
               if(array.length==0){
                   Dialog.alert({
                        message: '购物车内还没有商品'
                        }).then(() => {
                        this.$router.push({name:'cart'})
                        });
               }
           }})
    },

}
</script>

<style lang="scss" scoped>
.good{
    overflow: hidden;
}

.van-submit-bar {
    position: static;
    bottom: 52px;
    left: 0;
    z-index: 100;
    width: 100%;
    background-color: #fff;
}
.tijiao{
    position: relative;
    overflow: hidden;
    padding-bottom: 1rem;
}
.checked{
    float: left;
    height: 122px;
    line-height: 100px;
    width: 6%;
    padding-top: 15%;
    box-sizing: border-box;
    padding: 5px 0px;
    background-color: #fafafa;
     margin-top: 10px;
    
}
.van-card{
width: 93%;
float: left;
}
.quan{
    padding-left: 0.3rem;
    >input{
        margin-right: 0.2rem;
    }
}
</style>
