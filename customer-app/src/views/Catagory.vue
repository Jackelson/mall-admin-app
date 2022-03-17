<template>
  <div class="category-container">
    <div class="seach-container">
      <van-search v-model="value" placeholder="请输入搜索关键字" input-align="center"/>
    </div>
    <OneTab/>
  </div>
</template>

<script>
import OneTab from '../components/OneTab.vue';

export default {
  components: {
    OneTab,
  },
  data() {
    return {
      value: '',
    };
  },

};
</script>

<style scoped lang="less">
  .seach-container{
    width: 100%;
  }
</style>
