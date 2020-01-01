<template>
  <el-container class="total_container">
    <el-header class="total_header">
      <Header />
    </el-header>
    <el-container>
      <el-aside class="total_aside">
        <Aside />
      </el-aside>
      <el-main class="total_main">Main</el-main>
    </el-container>
    <el-footer class="total_footer">Footer</el-footer>
  </el-container>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import Header from "@/views/home/header.vue";
import Aside from "@/views/home/aside.vue";

@Component({
  name: 'index',
  components: { Header, Aside }
})
export default class Index extends Vue {
  mounted() {}
}
</script>

<style lang="less" scoped>
.total_container {
  height: 100%;
}
.total_header {
  background: #fff;
  line-height: 60px;
}
.total_aside {
  background: #fff;
}
.total_footer {
  background: #fff;
  line-height: 60px;
}
.total_main {
  background: #eee
}
</style>
