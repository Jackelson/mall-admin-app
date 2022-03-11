<template>
  <div class="seach-container">
    <a-form-model layout="inline" :model="formSearch" @submit="handleSubmit" @submit.native.prevent>
      <a-form-model-item label="检索关键字">
        <a-input v-model="formSearch.searchWord" placeholder="请输入关键词">
          <a-icon slot="prefix" type="user" style="color:rgba(0,0,0,.25)" />
        </a-input>
      </a-form-model-item>
      <a-form-model-item label="检索字段">
        <a-select
          show-search
          placeholder="请选择商品类目"
          style="width: 200px"
          @change="handleChange"
        >
          <a-select-option v-for="n in this.cateGoryList" :key="n._id" :value="n.id">
                {{n.name}}
          </a-select-option>
        </a-select>
      </a-form-model-item>
      <a-form-model-item>
        <a-button
          type="primary"
          html-type="submit"
        >
          搜索
        </a-button>
      </a-form-model-item>
    </a-form-model>
  </div>
</template>

<script>
  import api from '@/api/index'
  export default {
    data() {
      return {
        formSearch: {
          searchWord: '',
          cateGory:'',
        },
        cateGoryList:[],
      };
    },
    created() {
        api.getCategory().then(res=>{
           this.cateGoryList = res.data;
        })
    },
    methods: {
      handleSubmit(e) {
        this.$emit("submit",this.formSearch)
      },
      handleChange(val){
        this.formSearch.cateGory = val;
      }
    },
  };
</script>

<style scoped>
    .seach-container{
      padding: 10px 30px;
    }
</style>
