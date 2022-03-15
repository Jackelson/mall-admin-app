<template>
  <div class="product-list">
    <div class="header">
      <Search :cateGory="cateGoryList" @submit="handerSubmit"/>
      <a-button class="product-add">
        <router-link to="/add">添加商品</router-link>
      </a-button>
    </div>
    <Table :data="tableData" :pageInfo="page" @change="changePage" @removeHandel="remove" @edit="editProduct"/>
  </div>
</template>
<script>
import api from '@/api/index';
import Search from './components/seach.vue';
import Table from './components/Table.vue';

export default {
  components: {
    Search,
    Table,
  },
  data() {
    return {
      tableData: [],
      page: {
        current: 1,
        pageSize: 10,
        showSizeChanger: true,
        total: 0,
      },
      searchFrom: {},
      cateGoryList: [],
      categoryObj: {},
    };
  },
  async created() {
    await api.getCategory().then((res) => {
      this.cateGoryList = res.data;
      res.data.forEach((item) => {
        this.categoryObj[item.id] = item;
      });
    });
    this.getData();
  },
  methods: {
    getData() {
      api.getProductAll({
        page: this.page.current,
        size: this.page.pageSize,
        ...this.searchFrom,
      }).then((res) => {
        this.page.total = res.total;
        this.tableData = res.data.map((item) => ({
          ...item,
          categoryName: this.categoryObj[item.category].name,
        }));
      });
    },
    changePage(page) {
      this.page = page;
      this.getData();
    },
    handerSubmit(form) {
      console.log(form);
      this.searchFrom = form;
      this.getData();
    },
    remove(record) {
      this.$confirm({
        title: `你确定要删除${record.title}吗`,
        okText: '确定',
        okType: 'danger',
        cancelText: 'No',
        onOk() {
          console.log('删除成功');
          // api.removeProduct(record).then(res=>{
          //   console.log(res);
          // })
        },
        onCancel() {
          console.log('Cancel');
        },
      });
    },
    editProduct(record) {
      this.$router.push({
        name: 'ProductEdit',
        params: {
          id: record.id,
        },
      })
    },
  },
};
</script>

<style scoped lang="less">
    .header{
     display: flex;
      margin: 10px;
      justify-content: space-between;
      align-items: center;
    }
</style>
