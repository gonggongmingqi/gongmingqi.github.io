<template>
    <div>
        <van-row>
  <van-col span="8"><van-icon name="close" />span: 8</van-col>
  <van-col span="8"><van-icon name="close" />span: 8</van-col>
  <van-col span="8"><van-icon name="close" />span: 8</van-col>
</van-row>
    <ul class="movie">
        <li v-for="(a,i) in movie" :key="i">
            <img :src="a.images.large" alt="">
            <h3>{{a.title}}</h3>
            <p>分类：{{a.genres}}</p>
            <p>导演：{{ a.directors[0].name}}</p>
        </li>
    </ul>

    </div>
</template>
<script>
import {mapState,mapActions} from 'vuex'
export default {
    name:"Video",
    data(){
        return{
            movie:[]
        }
    },
    computed: {
        
    },
    methods: {
        ...mapActions(['getSearchGoods'])
    },
    mounted() {
       this.getSearchGoods({url:'/vue/movie',cb:res=>{
            this.movie=res.data.result
        }})
    },
}
</script>

<style lang="scss" scoped>
.van-col{
    display: flex;
    flex-direction: column;

}
.movie{
    li{
            vertical-align: top;
        overflow: hidden;
        padding-bottom: .2rem;
        margin-bottom: .2rem;
        border-bottom: 1px solid #2b2b2b;
        img{
            width: 1.6rem;
            height: 1.6rem;
            float: left;
        }
    }
}
</style>