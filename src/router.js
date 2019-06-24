import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

import Vant from 'vant';
Vue.use(Vant);

Vue.use(Router)


export default new Router({

  mode:"hash",
  base:'/',
  routes: [
    {path:'/',redirect:{name:'guide'}},
    {path: '/search',name: 'search',component: ()=>import('@/views/search.vue')},
    {path: '/xiangqing/:id',name: 'xiangqing',component: ()=>import('@/views/xiangqing.vue')},
    {path: '/guide',name: 'guide',component: ()=>import('@/views/guide.vue')},
    {path: '/denglu',name: 'denglu',component: ()=>import('@/views/denglu.vue')},
    {path: '/zhuce',name: 'zhuce',component: ()=>import('@/views/zhuce.vue')},
    {path: '/dizhi',name: 'dizhi',component: ()=>import('@/views/dizhi.vue')},
    {path: '/edit',name: 'edit',component: ()=>import('@/views/edit.vue')},

    {path: '/index',name: 'index',component: ()=>import('@/views/index.vue'),
      children:[
         {path: 'home',name: 'home',component: Home},
         {path: 'my',name: 'my',component: ()=>import('@/views/my.vue')},
         {path: 'cart',name: 'cart',component: ()=>import('@/views/cart.vue')},
         {path: 'live',name: 'live',component: ()=>import('@/views/live.vue')},
         {path: 'good',name: 'good',component: ()=>import('@/views/good.vue')},
      ]
  },
   
   
  ]
})
