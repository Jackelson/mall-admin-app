<template>
  <div>
    <van-tabbar v-model="active" route>
      <van-tabbar-item  icon="wap-home-o" to="/home">首页</van-tabbar-item>
      <van-tabbar-item icon="apps-o" to="/home/category">分类</van-tabbar-item>
      <van-tabbar-item  icon="shopping-cart-o" to="/home/shopping">购物车</van-tabbar-item>
      <van-tabbar-item  icon="manager-o" to="/home/my">我的</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
  data() {
    return {
      active: 0,
    };
  },
};
</script>

<style scoped>

</style>
