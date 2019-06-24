<template>
    <div class="consult">
        <ul class="ul">
            <li v-for="(a,i) in arr" :key="i"><van-icon :name="a.icon" @click="Add(i)" />{{a.name}}</li>
    <!-- {{add}} -->
        </ul>
       
    </div>
</template>
<script>
import {mapState} from "vuex"
import { bus } from "@/utils/bus.js";
export default {
    name:'consult',
    data() {
        return {
            arr:[
                {name:'衬衫',icon:'gift-o'},
                {name:'礼服',icon:'gift-o'},
                {name:'西裤',icon:'gift-o'},
                {name:'西装',icon:'gift-o'},
                {name:'t恤',icon:'gift-o'},
                {name:'西服',icon:'gift-o'},
            ]
        }
    },
    computed: {
        ...mapState(['add'])
    },
    methods: {
        Add(i){
            this.$router.push({name:'cart',query:{ind:i}})
        }
    },
}
</script>
<style lang="scss" scoped>
.consult{
    background-color: #fff;
}
.ul{
    display: flex;
    // flex-direction: column;
    flex-wrap: wrap;
    >li{
    width: 33%;
     display: flex;
    flex-direction: column;
    }
}
</style>
