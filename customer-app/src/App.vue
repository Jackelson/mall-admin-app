<template>
  <div id="app">
    <router-view></router-view>
    <TabBar/>
  </div>
</template>
<script>
import TabBar from './components/TabBar.vue';

export default {
  components: {
    TabBar,
  },
};
</script>
<style lang="less">
  *{
    margin: 0;
    padding: 0;
  }
  #app {
    width: 375px;
    height: 100px;
  }
</style>
