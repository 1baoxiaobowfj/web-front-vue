<template>
  <div class="header">
    <span class="color_66 m_r30">欢迎{{userInfo.username}}!</span>
    <span class="pointer dialog" @click="hanldLogout">退回登陆</span>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { State, Mutation } from "vuex-class";

@Component
export default class Header extends Vue {
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
.header {
  text-align: right;
}
.item {
  img {
    height: 100%;
  }
}
</style>
