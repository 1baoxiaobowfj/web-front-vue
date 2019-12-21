<template>
  <div class="regist flex-column flex-center">
    <el-form
      :model="ruleForm"
      :rules="rules"
      ref="ruleForm"
      label-width="100px"
      class="demo-ruleForm"
    >
      <el-form-item class="m_l0">
        <h1>注册</h1>
      </el-form-item>
      <el-form-item label="手机号码" prop="phone" class="m_l30 m_r30 m_t30">
        <el-input v-model="ruleForm.phone" clearable></el-input>
      </el-form-item>
      <el-form-item label="姓名" prop="username" class="m_l30 m_r30 m_t30">
        <el-input v-model="ruleForm.username" clearable></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password" class="m_l30 m_r30 m_t30">
        <el-input type="pass" v-model="ruleForm.password" clearable></el-input>
      </el-form-item>
      <el-form-item label="确认密码" prop="repassword" class="m_l30 m_r30 m_t30">
        <el-input type="pass" v-model="ruleForm.repassword" clearable></el-input>
      </el-form-item>
      <el-form-item class="m_l30 m_r30 m_t30">
        <el-button type="primary" @click="submitForm('ruleForm')">注 册</el-button>
        <el-button @click="resetForm('ruleForm')">重 置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { Action } from 'vuex-class';
import { validatePhone } from '@/common/utils';

@Component
export default class Regist extends Vue {
  @Action('register') private register:any
  ruleForm = { phone: "", username: "", password: "", repassword: "" };
  rules = {
    phone: [{ required: true, validator:validatePhone, trigger: "blur" }],
    username: [{ required: true, message: "请输入姓名", trigger: "blur" }],
    password: [{ required: true, message: "请输入密码", trigger: "blur" }],
    repassword: [{ required: true, message: "请输入密码", trigger: "blur" }]
  };
  mounted() {}


validatePhone() {}
  submitForm(formName: string) {
    const form: { [k: string]: any } = this.$refs[formName];
    form.validate((valid: any) => {
      if (valid) {
        if(this.ruleForm.password === this.ruleForm.repassword) {
          const loading = this.$loading({
            lock: true,
            text: '注册中，请稍后',
            spinner: 'el-icon-loading',
            background: 'rgba(0, 0, 0, 0.7)'
          });
          this.register(this.ruleForm).then((res:any) => {
            loading.close();
            if(res.code === 0) {
              this.$message.success('注册成功');
            } else {
              this.$message.error(res.msg);
            }
          })
        } else {
          this.$message.error('两次输入的密码必须一致');
        }
      } else {
        return false;
      }
    });
  }
  resetForm(formName: string) {
    const form: { [k: string]: any } = this.$refs[formName];
    form.resetFields();
  }
}
</script>

<style lang="less" scoped>
@import url('../assets/Login/regist');
</style>
