<template>
  <div class="list">
    <Search @submit="handelSubmit"/>
    <Table :list="productList"/>
  </div>
</template>

<script>
import api from '@/api/index';
import Search from './components/seach.vue';
import Table from './components/Table.vue';

export default {
  data() {
    return {
      productList: [],
      params: {
        page: 1,
      },
    };
  },
  created() {
    this.getData();
  },
  components: {
    Search,
    Table,
  },
  methods: {
    handelSubmit(value) {
      this.params = {
        ...value,
      };
      this.getData();
    },
    getData() {
      api.getProductList(this.params).then((res) => {
        this.productList = res.data;
      });
    },
  },
};
</script>

<style scoped>
</style>
