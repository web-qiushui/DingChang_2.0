<template>
  <div id="app">
    <el-container>
      <el-header>
        <my-header></my-header>
      </el-header>
      <el-main style="flex:1 1 auto">
        <router-view/>
      </el-main>
      <el-footer>
        <my-footer></my-footer>
      </el-footer>
    </el-container>
  </div>
</template>

<script>
import myHeader from '@/components/HeaderPage'
import myFooter from '@/components/FooterPage'
export default {
  name: 'App',
  components:{
    myHeader,
    myFooter
  }
}
</script>

<style scoped>
  .el-container,.el-header,.el-main,.el-footer{
    padding: 0;
    margin: 0;
  }
</style>
