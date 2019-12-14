<template>
  <div class="hello">
    测试下nginx反向代理
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import axios from 'axios';

@Component
export default class HelloWorld extends Vue {
  @Prop() private msg!: string;
  mounted() {
    axios.get('/mytest').then(res => {
      console.log(res)
      debugger
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
</style>
