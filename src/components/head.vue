<template>
<div class="head">
    <div class="header">

      <span>偶偶足球</span>
      <div class="search">
        <van-search placeholder="请输入搜索关键词"  background="#6ae66a" shape='round' fixed  @click="aaaa"/>
      </div>
 
      </div>
    </div>
</template>
<script>
export default {
    name:'Head',
  methods: {
    aaaa(){
      this.$router.push({name:'search'})
    }
  },
}
</script>
<style lang="scss" scoped>
.search{
    width: 70%;
    float: right;
}
.header{
    height: 1.1rem;
    width: 100%;
    line-height: 1.1rem;
    background-color: #6ae66a;
    color: #fff;
    position: fixed;
  z-index: 111;
}
.head{
  height: 1.1rem;
}
</style>
