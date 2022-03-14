<template>
  <div class="base-container">
    <a-form-model
      ref="ruleForm"
      :model="form"
      :rules="rules"
      :label-col="labelCol"
      :wrapper-col="wrapperCol"
    >
      <a-form-model-item ref="name" label="商品名称" prop="title">
        <a-input
          v-model="form.title"
        />
      </a-form-model-item>
      <a-form-model-item label="商品描述" prop="desc">
        <a-input
          v-model="form.desc"
        />
      </a-form-model-item>
      <a-form-model-item label="商品类目" prop="category">
        <a-select v-model="form.category" placeholder="请选择商品类目" @change="changeCategory">
          <a-select-option v-for="n in cateGoryList" :key="n.id" :value="n.id">
            {{n.name}}
          </a-select-option>
        </a-select>
        <a-select v-model="form.region" placeholder="请选择商品子类目">
          <a-select-option v-for="(c,index) in categorySon" :key="index" :value="c.name">
            {{c}}
          </a-select-option>
        </a-select>
      </a-form-model-item>
      <a-form-model-item label="商品标签" prop="tags">
        <a-select
          mode="tags"
          :default-value="['最晚，次日达']"
          style="width: 100%"
          placeholder="请选择商品标签"
          v-model="form.tags"
        >
          <a-select-option value="包邮，最晚次日达">
            最晚,次日达
          </a-select-option>
        </a-select>
      </a-form-model-item>
      <a-form-model-item :wrapper-col="{ span: 14, offset: 4 }" class="button">
        <a-button type="primary" @click="onSubmit">
          下一步
        </a-button>
        <a-button style="margin-left: 10px;" @click="resetForm">
          清空表单
        </a-button>
      </a-form-model-item>
    </a-form-model>
  </div>
</template>

<script>
import api from '@/api/index';
export default {
  data() {
    return {
      labelCol: { span: 5 },
      wrapperCol: { span: 14 },
      cateGoryList: [],
      categorySon: [],
      rules: {},
    };
  },
  props:['form'],
  created() {
    api.getCategory().then((res) => {
      this.cateGoryList = res.data;
    });
  },
  methods: {
    onSubmit() {
      this.$emit('submit',this.form);

    },
    resetForm() {
      this.$refs.ruleForm.resetFields();
    },
    changeCategory(category) {
      for (let i = 0; i < this.cateGoryList.length; i += 1) {
        if (category === this.cateGoryList[i].id) {
          this.categorySon = this.cateGoryList[i].c_items;
        }
      }
    },
  },
};
</script>
<style>
  .button{
    text-align: center;
  }
</style>
