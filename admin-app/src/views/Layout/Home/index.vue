<template>
  <div class="home">
    <Menu :key="key"/>
    <Main/>
  </div>
</template>
<script>
import Menu from '../../components/Menu.vue';
import Main from '../../components/Main/index.vue';

export default {
  components: {
    Menu,
    Main,
  },
  data() {
    return {
      key: new Date().getTime(),
    };
  },
  watch: {
    $route() {
      this.key = new Date().getTime();
    },
  },
  methods: {
  },
};
</script>
<style lang="less">
  @import "~@/styles/home.less";
</style>
