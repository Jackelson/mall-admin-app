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
      <a-form-model-item label="商品相册" prop="images" v-model="images">
        <a-upload
          :action="'http://mallapi.duyiedu.com/upload/images?appkey=' + $store.state.userInfo.appkey"
          list-type="picture-card"
          :file-list="fileList"
          @preview="handlePreview"
          @change="handleChange"
          name="avator"
        >
          <div v-if="fileList.length < 8">
            <a-icon type="plus"/>
            <div class="ant-upload-text">
              Upload
            </div>
          </div>
        </a-upload>
        <a-modal :visible="previewVisible" :footer="null" @cancel="handleCancel">
          <img alt="example" style="width: 100%" :src="previewImage"/>
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
  import api from '@/api/index';

  function getBase64(file) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = error => reject(error);
    });
  }

  export default {
    data() {
      return {
        previewVisible: false,
        previewImage: '',
        labelCol: {span: 5},
        wrapperCol: {span: 14},
        cateGoryList: [],
        categorySon: [],
        fileList: [],
        rules: {},
        images: [],
      };
    },

    props: ['form'],
    created() {
      if (this.form.images.length > 0) {
        this.fileList = this.form.images.map((item, index) => {
          return {
            uid: index,
            name: `image-${index}.png`,
            status: 'done',
            url: item,
          }
        })
      }
    },
    methods: {
      pre() {
        this.$emit('pre', this.form);
      },
      next() {
        if (this.$route.params.id) {
          api.edit({...this.form, images: this.images}).then(res => {
            this.$message.success("商品修改成功")
          })
        } else {
          api.uploadInfo({...this.form, images: this.images}).then(res => {
            this.$message.success("商品添加成功")
          })
        }
        this.$router.push({
          name: 'List',
        })
      },
      handleCancel() {
        this.previewVisible = false;
      },
      async handlePreview(file) {
        if (!file.url && !file.preview) {
          file.preview = await getBase64(file.originFileObj);
        }
        this.previewImage = file.url || file.preview;
        this.previewVisible = true;
      },
      handleChange({file, fileList}) {
        if (file.status === 'done') {
          this.images.push(file.thumbUrl);
        }
        this.fileList = fileList;
      },
    },
  };
</script>
<style>
  .button {
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
