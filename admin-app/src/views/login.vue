<template>
  <a-form-model class="login-container" ref="ruleForm" :model="ruleForm" :rules="rules" v-bind="layout">
    <h2>每日优鲜后台管理</h2>
    <a-form-model-item has-feedback label="账号" prop="email">
      <a-input v-model="ruleForm.email" type="密码" autocomplete="off" />
    </a-form-model-item>
    <a-form-model-item has-feedback label="密码" prop="password">
      <a-input v-model="ruleForm.password" type="password" autocomplete="off" />
    </a-form-model-item>
    <a-form-model-item :wrapper-col="{ span: 14, offset: 4 }">
      <a-button type="primary" @click="submitForm('ruleForm')">
        登录
      </a-button>
    </a-form-model-item>
  </a-form-model>
</template>
<script>
  import api from '@/api/index';
  export default {
    data() {
      let validatePass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('亲，你还没输入密码呢'));
        }else{
          callback();
          return true;
        }
      };
      let count = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('想登录先把账户写上'));
        }else{
          callback()
          return true;
        }
      };
      return {
        ruleForm: {
          password: '',
          email: '',
        },
        rules: {
          password: [{ validator: validatePass, trigger: 'change' }],
          email: [{ validator: count, trigger: 'change' }],
        },
        layout: {
          labelCol: { span: 4 },
          wrapperCol: { span: 14 },
        },
      };
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate(valid => {
          if (valid) {
            api.login(this.ruleForm).then(res=>{
              this.$store.dispatch('setInfo',res);
              this.$router.push({
                    name:'Home'
                });
            }).catch(err=>{
              this.$message.error(err);
            })
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
    },
  };
</script>
<style lang="less">
    .login-container{
      width: 50%;
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%,-50%);
      border: 1px solid gainsboro;
      padding: 20px 0px 10px 20px;
      h2{
        text-align: center;
        margin: 24px 0;
      }
    }
</style>
