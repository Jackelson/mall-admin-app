<template>
  <div class="main-top">
    <div :class="{'top-button':true,'co-button':$store.state.collapsed}">
      <a-button type="primary" style="margin-bottom: 16px" @click="toggleCollapsed">
        <a-icon :type="$store.state.collapsed ? 'menu-unfold' : 'menu-fold'"/>
      </a-button>
    </div>
    <div class="top-breadcrumbs">
      <a-breadcrumb>
        <a-breadcrumb-item>
          <router-link to="/"> 首页 </router-link>
        </a-breadcrumb-item>
        <a-breadcrumb-item v-if="$router.currentRoute.matched[1]">
          <router-link :to="$router.currentRoute.matched[1].name">
            {{$route.meta.title}}
          </router-link>
        </a-breadcrumb-item>
      </a-breadcrumb>
    </div>
    <ul class="count-info">
      <li> {{this.$store.state.userInfo.username}} <a-icon type="down" /></li>
      <transition duration="0.3s" name="fade">
      <li><a  @click.prevent="removeInfo">退出</a></li>
      </transition>
    </ul>
  </div>
</template>

<script>
  export default {
      created() {
        console.log(this.$route)
      },
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
