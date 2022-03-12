<template>
  <div class="main-app">
    <Header/>
    <div :class="{'main-content':true,'e-content':$store.state.collapsed}">
      <router-view></router-view>
    </div>
  </div>
</template>
<script>
  import Header from '@/views/components/Main/Header'
  export default {
      components:{
        Header,
      }
  }
</script>

<style scoped lang="less">
  .main-content{
    margin-left: 180px;
    transition: 0.5s;
  &.e-content{
     margin-left: 80px;
   }
  }
</style>
