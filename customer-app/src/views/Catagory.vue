<template>
  <div class="category-container">
    <div class="seach-container">
      <van-search v-model="value" placeholder="请输入搜索关键字" input-align="center"/>
    </div>
    <template>
      <OneTab/>
      <SideTab/>
      <List/>
    </template>
    <van-loading type="spinner" class="center" v-if="isLoading"/>
  </div>
</template>

<script>
import OneTab from '../components/OneTab.vue';
import SideTab from '../components/SideTab.vue';
import List from '../components/List.vue';

export default {
  components: {
    OneTab,
    SideTab,
    List,
  },
  computed: {
    isLoading() {
      return this.$store.state.isLoading;
    },
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
  .center {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
</style>
