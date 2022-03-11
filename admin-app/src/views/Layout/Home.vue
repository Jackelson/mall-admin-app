<template>
  <div class="home">
    <Menu/>
    <Main/>
  </div>
</template>
<script>
  import Menu from '../components/Menu'
  import Main from '../components/Main'
export default {
  components:{
    Menu,
    Main
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
