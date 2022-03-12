<template>
  <div class="home">
    <Menu/>
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

    };
  },
  methods: {
  },
};
</script>
<style lang="less">
  @import "~@/styles/home.less";
</style>
