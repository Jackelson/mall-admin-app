<template>
  <div class="menu-list">
    <a-menu
      :default-selected-keys="[defaultSelectKey]"
      :default-open-keys="[defaultOpenKey]"
      mode="inline"
      theme="dark"
      :inline-collapsed="$store.state.collapsed"
    >
      <template v-for="n in $store.state.menuRoutes" >
        <a-sub-menu v-if="n.isShow" :key="n.name">
            <span slot="title">
              <a-icon :type="n.type"/>
               <span> {{n.meta.title}}</span>
            </span>
            <a-menu-item v-for="i in n.children" >
              <router-link :to="i.path" :key="i.name" v-if="!i.isShow">
                <a-icon :type="i.type"/>
                {{i.meta.title}}
              </router-link>
            </a-menu-item>
        </a-sub-menu>
      </template>
    </a-menu>
  </div>
</template>
<script>
export default {
  computed:{
      defaultSelectKey: {
        get() {
          return this.$router.currentRoute.matched[1]
            ? this.$router.currentRoute.matched[1].name
            : '';
        },
      },
      defaultOpenKey: {
        get() {
          return this.$router.currentRoute.matched[0].name;
        },
      },
  }
};
</script>

<style scoped>

</style>
