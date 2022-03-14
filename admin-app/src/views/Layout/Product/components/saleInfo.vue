<template>
  <div class="sale-container">
    <a-form-model
      ref="ruleForm"
      :model="form"
      :rules="rules"
      :label-col="labelCol"
      :wrapper-col="wrapperCol"
    >
      <a-form-model-item ref="name" label="商品售价" prop="price">
        <a-input
          v-model="form.price"
        />
      </a-form-model-item>
      <a-form-model-item label="商品折扣价" prop="price_off">
        <a-input
          v-model="form.price_off"
        />
      </a-form-model-item>
      <a-form-model-item label="商品库存" prop="inventory">
        <a-input
          v-model="form.inventory"
        />
      </a-form-model-item>
      <a-form-model-item label="计量单位" prop="unit">
        <a-input
          v-model="form.unit"
        />
      </a-form-model-item>
      <a-form-model-item label="商品相册" prop="images">
        <a-upload
          action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
          list-type="picture-card"
          :file-list="fileList"
        >
          <div v-if="fileList.length < 8">
            <a-icon type="plus" />
            <div class="ant-upload-text">
              Upload
            </div>
          </div>
        </a-upload>
        <a-modal  :footer="null" >
          <img alt="example" style="width: 100%" :src="previewImage" />
        </a-modal>
      </a-form-model-item>
      <a-form-model-item :wrapper-col="{ span: 14, offset: 4 }" class="button">
        <a-button type="primary" @click="pre">
          上一步
        </a-button>
        <a-button style="margin-left: 10px;" @click="next">
          提交
        </a-button>
      </a-form-model-item>
    </a-form-model>
  </div>
</template>

<script>
export default {
  data() {
    return {
      labelCol: { span: 5 },
      wrapperCol: { span: 14 },
      cateGoryList: [],
      categorySon: [],
      previewImage: '',
      fileList: [
        {
          uid: '-1',
          name: 'image.png',
          status: 'done',
          url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
        },
      ],
      rules: {},
    };
  },
  props:['form'],
  methods: {
    pre(){
      this.$emit('pre',this.form)
    },
    next(){

    },
  },
};
</script>
<style>
  .button{
    text-align: center;
  }
  .ant-upload-select-picture-card i {
    font-size: 32px;
    color: #999;
  }

  .ant-upload-select-picture-card .ant-upload-text {
    margin-top: 8px;
    color: #666;
  }
</style>
