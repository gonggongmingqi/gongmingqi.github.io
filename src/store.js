import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)


import axios from "@/utils/ajax"
// import { AddressEdit } from 'vant';
export default new Vuex.Store({
 
  state: {
    username:'',
    aaa:'',
    show:false,
    add:0,
    data:{
      xq:[],
      goods:[],
      msg:[],
      cart:[],
      details:[],
      arr:[]
      
    }
  },
  actions: {
      getSearchGoods({commit},{url,cb,params}){
        axios.get(url,{
            params:params
        }).then(res=>{
            cb(res); // 执行一些回调 
            commit("getSearchGoods",res.data.result);
        })
      },
      getGood({commit},{url,cb}){
        axios.get(url).then(res=>{
          cb(res);
          commit('getGood',res.data.result)
        })
      },
      getLogin({commit},{url,data,cd}){
        axios.post(url,data).then(res=>{
          console.log(1,res)
          cd(res);
          // console.log(res)
          commit('getLogin',res.data)
        })
      },
      geturl({commit},{url,username,cd}){
        axios.get(url,{params:{username}}).then(res=>{
          cd(res)
        })
      },
      getOne({commit},{url,params}){
        axios.get(url,{params}).then(res=>{
          commit('getOne',res.data.result)
        })
      },
      setCart({commit},{url,data}){
        axios.post(url,data).then(res=>{
          commit('serCart',res.data)
        })
      },
      //购物车
      details({commit},{url,params,cd}){
        axios.get(url,{params}).then(res=>{
          cd(res);
          commit('details',res.data.result)
        })
      },
      //删除
      sc({commit},{url,id,username}){
        console.log('121')
        axios.get(url,{params:{
          id,username
        }}).then(res=>{

        })
      },
      //+++
      add({commit},{url,id,username,num}){
        // console.log(id,username,num)
        axios.get(url,{params:{
          id,username,num
        }}).then(res=>{
        })
      },
    
      //地址
      ddd({commit},{url,data,cd}){
        axios.post(url,{data}).then(res=>{
          cd(res);
        })
      },
      getEdit({commit},{url,params,cd}){
        axios.get(url,{params}).then(res=>{
          cd(res);
          commit('getEdit',res.data.result)
        })
      },
     
      
  },

  mutations: {
      getSearchGoods(state,msg){
        state.data = {...state.data,msg}
    },
      getGood(state,goods){
        state.data={...state.data,goods}
        
      },
      getLogin(state,res){
       if(!!res.type){
         state.username=res.username;
       }
       state.src=res.avatar
      },
      getOne(state,xq){
        state.data={...state.data,xq}
        state.data={...state.data,cart:xq}
      },
      details(state,details){
        state.data={...state.data,details}
      },
      getEdit(state,arr){
        state.data={...state.data,arr}
      }

  },


  getters:{

  }
})
