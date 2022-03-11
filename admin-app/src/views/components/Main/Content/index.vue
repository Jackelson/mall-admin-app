<template>
  <div :class="{'main-content':true,'e-content':$store.state.collapsed}">
      <router-view></router-view>
  </div>
</template>

<script>
  export default {

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
