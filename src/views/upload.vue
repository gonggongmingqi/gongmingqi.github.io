<template>
    <div>
        <div class="tu">
            <img :src="src" alt="上传头像" @click.stop="upload" >
            <input type="file" ref="one" accept="image/*" @change="shangchuan" >
        </div>
    </div>
</template>
<script>
import {mapState,mapActions} from "vuex";

export default {
    data(){
        return {
            // username:'',
            src:"",
            avatar:'',
            add:''
        }
    },
      mounted(){
        if(localStorage.src){
            this.src = localStorage.src;
        }else{
            this.src = require('@/assets/images/t5.jpg');
        }
    },
     computed: {
        ...mapState(['aaa','username'])
    },
    methods: {
        ...mapActions(['geturl']),
        upload(){
            this.$refs.one.click();
        },
        shangchuan(){
            let file=this.$refs.one.files[0];
            let data=new FormData();
            data.append('avatar',file);

             this.$axios({
                url:'/vue/upload',
                method:'POST',
                contentType:false,
                processData:false,
                data:data
            }).then(res=>{
                console.log(res)
                //  this.username=data.username
                 this.src = res.data.avatarurl.replace(/public/,'');
                 localStorage.src = this.src;
                 
            })
        },
    },
    // mounted() {
    //     var  username=JSON.parse(sessionStorage.user).token
    //     console.log(username)
    //     this.geturl({url:'/vue/geturl',username:username,cd:res=>{
    //        var a=res.data.result.avatar
    //        this.add= 'http://localhost:1902/avatar/'+a.substring(a.indexOf("r")+2)
    //        console.log(this.add)
    //     }})
    // },
}
</script>
<style lang="scss" scoped>
    .tu{
        img{
           
            width: 1.2rem;
            height: 1.2rem;
            border-radius: 50%;
            
        }
        input{
            display: none;
        }

    }

</style>
