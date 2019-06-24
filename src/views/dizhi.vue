<template>
    <div>

      <van-nav-bar title="地址" left-text="返回" left-arrow @click-left='aaa'>
  <van-icon name="search" slot="right" @click='bbb'/>
</van-nav-bar>


<!-- {{data.arr}} -->


        <van-address-list  
  v-model="chosenAddressId"
  :list="list"
 

  @add="onAdd"
  @edit="onEdit"
/>


<van-popup 
v-model="show"
  position="top"
  :style="{ height: '60%' }"
 get-container=".van-address-item__edit"
>
  
  <xiugai :id="id"></xiugai>
  
  </van-popup>

    </div>
</template>
<script>
import {mapState,mapActions} from 'vuex'
import xiugai from './xiugai'
export default {
  components:{
    xiugai
  },
     data() {
    return {
      chosenAddressId: '1',
      show:false,
      id:'',
      list: [
         
      ]
    }
  },
  computed: {
    ...mapState(['data'])
  },
   methods: {
     ...mapActions(['getEdit']),
     aaa(){
       this.$router.push({name:'my'})
     },
     bbb(){
       this.$router.push({name:'search'})
     },
    onAdd() {
      this.$router.push({name:'edit'})
    },

    onEdit(item, index) {
      console.log('编辑地址:' + index);
      this.show=true
      this.id=index
    }
  },
  mounted() {
    var username=JSON.parse(sessionStorage.user).token
    this.getEdit({url:'/vue/getEdit',params:{username},cd:res=>{
      console.log(res.data.result)
    localStorage.index=JSON.stringify(res.data.result) ||[]
      var arr=res.data.result
      var a=[]
      arr.forEach((tiem,i) => {
         a.unshift({id:tiem.a,name:tiem.name,tel:tiem.tel,address:tiem.addressDetail})
      });
       this.list=a
     
    }})
  },

}

</script>


