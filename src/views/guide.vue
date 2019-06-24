<template>
    <div class="box">
    <van-button type="default" round :to="{name:'home'}" class="tex">点击跳转</van-button>

    <van-swipe :autoplay="3000" indicator-color="white" :loop="false" class="guide">
    <van-swipe-item v-for="(img,i) in imgs" :key="i">
      <img :src="img.src" alt="" @click="loge(i)">
  </van-swipe-item>
</van-swipe>
    </div>
</template>
<script>
export default {
    name:"guide",
    data() {
        return {
            imgs:[
                {src:require('@/assets/images/t1.jpg')},
                {src:require('@/assets/images/t2.jpg')},
                {src:require('@/assets/images/t3.jpg')},
                {src:require('@/assets/images/t4.jpg')}
            ],
        }
    },
    computed: {
        
    },
    methods: {
        loge(id){
            if(id==this.imgs.length-1){
                this.$router.push({name:'home'})  
          
        }
    },
    },
    mounted() {
        if(localStorage.visitCount){
            localStorage.visitCount++;
    //             var a=0
    //   var tiem=setInterval(()=>{
    //       console.log(a)
    //          a++;
    //          if(a==12){
    //              clearInterval(tiem);
    //              this.$router.push({name:'home'})
    //          }
    //      },1000)
    //         if(localStorage.visitCount>3){
                this.$router.push({name:'home'}) 
            // }
        }else{
            
        
            localStorage.visitCount = 1;
          
          }
        }
}
</script>

<style lang="scss" scoped>
.tex{
    font-size: .2rem;
    width: 1.1rem;
    height: 1.1rem;
    position: absolute;
    top: .2rem;
    right: .5rem;
   z-index: 2;
}
 .van-button{
        line-height:.3rem;
    }
.guide{
    width: 100%;
    height: 100%;
    img{
    width: 100%;
    height: 100%;
    }
}
.box{
   width: 100%;
    height: 100%; 
}

</style>
