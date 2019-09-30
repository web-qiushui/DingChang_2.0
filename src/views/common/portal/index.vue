<template>
    <div class="portalConatainer">
        <el-menu
            :default-active="activeIndex"
            class="el-menu-demo"
            mode="horizontal"
            @select="handleSelect"
            background-color="rgba(9, 11, 26, 0.88)"
            text-color="rgba(255,255,255,1)"
            active-text-color="#ffd04b">
            <el-col :span="7">
              <el-menu-item index="0">
                <template slot="title">
                  <img src="@/assets/img/logo.png" style="height:30px;vertical-align:middle">
                </template>
              </el-menu-item>
            </el-col>
            <el-col :span="2">
              <el-menu-item index="1">首页</el-menu-item>
            </el-col>
            <el-col :span="2">
              <el-menu-item index="2">走进鼎昌</el-menu-item>
            </el-col>
            <el-col :span="2">
              <el-menu-item index="3">公司业务</el-menu-item>
            </el-col>
            <el-col :span="2">
              <el-menu-item index="4">经典案例</el-menu-item>
            </el-col>
            <el-col :span="3">
              <el-submenu index="5">
                <template slot="title">新闻资讯</template>
                <el-menu-item index="5-1">公司资讯</el-menu-item>
                <el-menu-item index="5-2">行业动态</el-menu-item>
                <el-menu-item index="5-3">技术学堂</el-menu-item>
              </el-submenu>
            </el-col>
            <el-col :span="2">
              <el-menu-item index="6">联系我们</el-menu-item>
            </el-col>
            <el-col :span="4">
              <el-menu-item>
                <el-col :span="6">
                  <img src="@/assets/img/icon/phone.png" alt="">
                </el-col>
                <el-col :span="12">
                  {{ '029-8888888' }}
                </el-col>
              </el-menu-item>
            </el-col>
        </el-menu>
    </div>
</template>
<script>
export default {
  name: 'PortalNav',
  data () {
    return {
      activeIndex:'1'
    }
  },
  watch: {
    '$route':'getPath'
  },
  methods: {
    handleSelect(key) {
      if(key==='1'){
        this.$router.push({
          path:'/home'
        });
      }
      if(key==='2'){
        this.$router.push({
          path:'/introduction'
        });
      }
      if(key==='3'){
        this.$router.push({
          path:'/business'
        });
      }
      if(key==='4'){
        this.$router.push({
          path:'/case'
        });
      }
      if(key==='5'){
        key = '5-1'
      }
      if(key==='5-1'){
        this.$router.push({
          path:'/news/1'
        });
      }
      if(key==='5-2'){
        this.$router.push({
          path:'/news/2'
        });
      }
      if(key==='5-3'){
        this.$router.push({
          path:'/news/3'
        });
      }
      if(key==='6'){
        this.$router.push({
          path:'/contact'
        });
      }
    },
    getPath(){
      if(this.$route.path==="/home"){
        this.activeIndex = "1"
      }else if(this.$route.path==="/introduction"){
        this.activeIndex = "2"
      }else if(this.$route.path==="/business"){
        this.activeIndex = "3"
      }else if(this.$route.path==="/case"){
        this.activeIndex = "4"
      }else if(this.$route.path==="/news" || this.$route.path==="/news/1" || this.$route.path==="/news/2" || this.$route.path==="/news/3"){
        this.activeIndex = "5"
      }else if(this.$route.path==="/contact"){
        this.activeIndex = "6"
      }
    }
  }
}
</script>
<style lang="less" scoped>
  .portalConatainer{
    font-size:16px;
    font-weight:600;
  }
</style>
