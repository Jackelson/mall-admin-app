<template>
  <div class="menu-list">
    <a-menu
      :default-selected-keys="[$router.currentRoute.name]"
      :default-open-keys="[$router.currentRoute.name]"
      mode="inline"
      theme="dark"
      :inline-collapsed="$store.state.collapsed"
    >
      <a-sub-menu v-if="n.isShow" v-for="n in $store.state.menuRoutes" :key="n.name">
        <span slot="title"><a-icon :type="n.type"/><span>{{n.meta.title}}</span></span>
        <a-menu-item v-for="i in n.children" :key="i.name">
          <router-link :to="i.name"> <a-icon :type="i.type"/> {{i.meta.title}}</router-link>
        </a-menu-item>
      </a-sub-menu>
    </a-menu>
  </div>
</template>
<script>
  export default {

  }
</script>

<style scoped>

</style>
