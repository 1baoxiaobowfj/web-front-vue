<template>
  <div class="aside">
     <el-menu>
      <el-submenu index="1">
        <template slot="title"><i class="el-icon-message"></i>导航一</template>
        <el-menu-item-group>
          <el-menu-item index="1-1">选项1</el-menu-item>
          <el-menu-item index="1-2">选项2</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <el-submenu index="2">
        <template slot="title"><i class="el-icon-menu"></i>导航二</template>
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
  @State('userInfo') private userInfo:any
  @Mutation('logout') private logout:any
  mounted() {}
  private hanldLogout() {
    this.logout();
    this.$router.push({name: 'login'});
  }
}
</script>

<style lang="less" scoped>
</style>
