<template>
  <a-table :columns="columns" :data-source="data">
    <div slot="operation">
      <a-button>编辑</a-button>
      <a-button>删除</a-button>
    </div>
  </a-table>
</template>
<script>
  const columns = [
    {
      title: 'ID',
      dataIndex: '_id',
      key: '_id'
    },
    {
      title: '商品名称',
      dataIndex: 'name',
      key: 'name'
    },
    {
      title: '描述',
      dataIndex: 'desc',
      key: 'desc',
      ellipsis: true,
    },
    {
      title: '类目',
      dataIndex: 'category',
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
    },
    {
      title: '商品标签',
      dataIndex: 'tags',
      key: 'tags',
      ellipsis: true,
    },
    {
      title: '销量',
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
    },
    {
      title: '上架状态',
      dataIndex: 'status',
      key: 'status',
      ellipsis: true,
    },
    {
      title: '操作',
      dataIndex: 'operation',
      key: 'operation',
      scopedSlots: {
        customRender: 'operation'
      }
    }
  ];

  const data = [

  ];

  export default {
    data() {
      return {
        data,
        columns,
      };
    },
  };
</script>

