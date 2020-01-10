<template>
  <div class="login flex-column flex-center">
    <el-form
      :model="ruleForm"
      :rules="rules"
      ref="ruleForm"
      label-width="50px"
      class="demo-ruleForm"
    >
      <el-form-item class="m_l0">
        <h1>登陆</h1>
      </el-form-item>
      <el-form-item label="账号" prop="phone" class="m_l30 m_r30 m_t30">
        <el-input v-model="ruleForm.phone" clearable></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password" class="m_l30 m_r30 m_t30">
        <el-input type="password" v-model="ruleForm.password" clearable></el-input>
      </el-form-item>
      <el-form-item class="m_l30 m_r30 ">
        <div @click="goToRegist" class="pointer text-left">注 册</div>
      </el-form-item>
      <el-form-item class="m_l30 m_r30">
        <el-button type="warning" @click="submitForm('ruleForm')">登 陆</el-button>
        <el-button type="danger" @click="resetForm('ruleForm')">重 置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { Action, Mutation } from 'vuex-class';

@Component
export default class Login extends Vue {
  @Action('login') private login:any
  @Action('getUserInfo') private getUserInfo:any
  @Mutation('setToken') private setToken:any
  @Mutation('setUserInfo') private setUserInfo:any
  ruleForm = { phone: "", password: "" };
  rules = {
    phone: [{ required: true, message: "请输入账号", trigger: "blur" }],
    password: [{ required: true, message: "请输入密码", trigger: "blur" }]
  };
  mounted() {}

  submitForm(formName: string) {
    const form: { [k: string]: any } = this.$refs[formName];
    form.validate((valid: any) => {
      if (valid) {
        const loading = this.$loading({
          lock: true,
          text: '登陆中，请稍后',
          spinner: 'el-icon-loading',
          background: 'rgba(0, 0, 0, 0.7)'
        });
        this.login(this.ruleForm).then((res:any) => {
          loading.close();
          if(res.code === 0 && res.data) {
            this.setToken(res.data);
            this.getUserInfo(this.ruleForm).then((response:any) => {
              if(response.code === 0) {
                this.setUserInfo(response.data);
                this.$router.push('/home');//登陆成功,获取到用户信息，跳转到主页
              }
            });
          } else {
            this.$message.error(res.msg);
          }
        })
      } else {
        return false;
      }
    });
  }
  resetForm(formName: string):void {
    const form: { [k: string]: any } = this.$refs[formName];
    form.resetFields();
  }

  goToRegist() {
    this.$router.push('/regist')
  }
}
</script>

<style lang="less" scoped>
@import url('../assets/Login/login');
</style>
