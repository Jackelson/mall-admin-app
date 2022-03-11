<template>
  <div class="main-top">
    <div :class="{'top-button':true,'co-button':$store.state.collapsed}">
      <a-button type="primary" style="margin-bottom: 16px" @click="toggleCollapsed">
        <a-icon :type="$store.state.collapsed ? 'menu-unfold' : 'menu-fold'"/>
      </a-button>
    </div>
    <div class="top-breadcrumbs">
      <a-breadcrumb>
        <a-breadcrumb-item>首页</a-breadcrumb-item>
        <a-breadcrumb-item><a href="">Application er</a></a-breadcrumb-item>
        <a-breadcrumb-item><a href="">Application List</a></a-breadcrumb-item>
        <a-breadcrumb-item>An Application</a-breadcrumb-item>
      </a-breadcrumb>
    </div>
    <ul class="count-info">
      <li><a href="javascript:void(0)">{{this.$store.state.userInfo.username}}</a></li>
      <li><a  @click.prevent="removeInfo">退出</a></li>
    </ul>
  </div>
</template>

<script>
  export default {
      methods:{
        toggleCollapsed(){
            this.$store.dispatch('change')
        },
        removeInfo(){
            this.$store.dispatch('remove');
            this.$router.replace({
              name:'Login'
            })
        }
      }
  }
</script>

<style scoped>

</style>
