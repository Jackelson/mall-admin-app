<template>
  <div class="add-product">
    <a-steps :current="current" class="steps">
      <a-step v-for="item in steps" :key="item.title" :title="item.title"/>
    </a-steps>
    <baseInfo @submit="handelSubmit" v-if="current===0" :form="form"/>
    <saleInfo v-else-if="current===1" @pre="handelPre" :form="form"/>
  </div>
</template>
<script>
import baseInfo from './components/baseInfo.vue';
import saleInfo from './components/saleInfo.vue';

export default {
  components: {
    baseInfo,
    saleInfo,
  },
  data() {
    return {
      current: 0,
      steps: [
        {
          title: '填写基本信息',
          content: 'First-content',
        },
        {
          title: '填写商品的销售信息',
          content: 'Second-content',
        },
      ],
      form:{}
    };
  },
  methods: {
    next() {
      this.current++;
    },
    prev() {
      this.current--;
    },
    handelSubmit(base) {
      this.next();
      this.form = {...this.form,...base}
    },
    handelPre(form){
      this.form = {...this.form,...form};
      this.prev();
    },
  },
};
</script>
<style scoped lang="less">
  .steps{
     width: 50%;
    margin: 20px auto;
    .steps-content {
      margin-top: 16px;
      border: 1px dashed #e9e9e9;
      border-radius: 6px;
      background-color: #fafafa;
      min-height: 200px;
      text-align: center;
      padding-top: 80px;
    }
    .steps-action {
      margin-top: 24px;
    }
  }

</style>
