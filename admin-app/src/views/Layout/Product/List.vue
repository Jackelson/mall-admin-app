<template>
  <div class="product-list">
    <Search/>
    <Table/>
  </div>
</template>
<script>
import Search from './components/seach.vue';
import Table from './components/Table.vue';

export default {
  components: {
    Search,
    Table,
  },
};
</script>

<style scoped>

</style>
