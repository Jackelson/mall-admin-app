<template>
  <a-table :columns="columns" :data-source="tableData" :pagination='pageInfo' @change="changPage">
    <div slot="operation" slot-scope="text,record">
      <button  @click="edit(record)">编辑</button>
      <button @click="remove(record)">删除</button>
    </div>
  </a-table>
</template>
<script>
const columns = [
  {
    title: '商品名称',
    dataIndex: 'title',
    key: 'title',
  },
  {
    title: '描述',
    dataIndex: 'desc',
    key: 'desc',
    ellipsis: true,
  },
  {
    title: '类目',
    dataIndex: 'categoryName',
    key: 'category',
    ellipsis: true,
  },
  {
    title: '价格',
    dataIndex: 'price',
    key: 'price',
    ellipsis: true,
  },
  {
    title: '折扣价格',
    dataIndex: 'price_off',
    key: 'price_off',
    ellipsis: true,
  },
  {
    title: '商品销量',
    dataIndex: 'sale',
    key: 'sale',
    ellipsis: true,
  },
  {
    title: '商品库存',
    dataIndex: 'inventory',
    key: 'inventory',
    ellipsis: true,
  },
  {
    title: '上架状态',
    dataIndex: 'status',
    key: 'status',
    ellipsis: true,
    customRender: function (text,record) {
       return record.status === 1 ? '上架' : '下架';
    }
  },
  {
    title: '操作',
    key: 'operation',
    scopedSlots: {
      customRender: 'operation',
    },
  },
];
export default {
  data() {
    return {
      columns,
    };
  },
  props: ['data', 'pageInfo'],
  computed: {
    tableData() {
      return this.data.map((item) => ({
        ...item,
        key: item.id,

      }));
    },
  },
  methods: {
    changPage(page) {
      this.$emit('change', page);
    },
    edit(record){
        this.$router.push({
          path:'/add',
          params:{
            id:record.id
          }
        })
    },
    remove(record){
      this.$emit('removeHandel',record);
    }
  },
};
</script>
