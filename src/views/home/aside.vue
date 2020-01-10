<template>
  <div class="aside">
    <el-menu>
      <el-menu-item index="4" class="aside-item">
        <i class="el-icon-s-home"></i>
        <span slot="title">首页</span>
      </el-menu-item>
      <el-submenu index="1" class="aside-item">
        <template slot="title">
          <i class="el-icon-reading"></i>导航一
        </template>
        <el-menu-item-group>
          <el-menu-item index="1-1">选项1</el-menu-item>
          <el-menu-item index="1-2">选项2</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <el-submenu index="2" class="aside-item">
        <template slot="title">
          <i class="el-icon-alarm-clock"></i>导航二
        </template>
        <el-menu-item-group>
          <el-menu-item index="2-1">选项1</el-menu-item>
          <el-menu-item index="2-2">选项2</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
    </el-menu>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { State, Mutation } from "vuex-class";

@Component
export default class Aside extends Vue {
  @State("userInfo") private userInfo: any;
  @Mutation("logout") private logout: any;
  menmList = [
    {
      label: "工作相关",
      path: "",
      children: [{ label: "学习", path: "" }]
    }
  ];
  mounted() {}
  private hanldLogout() {
    this.logout();
    this.$router.push({ name: "login" });
  }
}
</script>

<style lang="less" scoped>
</style>
