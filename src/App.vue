<template>
  <div id="app">
    <PortalNav/>
    <div class="mainContainer">
      <router-view/>
    </div>
    <Footer />
  </div>
</template>

<script>
import PortalNav from "@/views/common/portal/index"
import Footer from "@/views/common/footer/index"
export default {
  name: 'App',
  components:{
    PortalNav,
    Footer
  },
  watch: {
    '$route':'getPath'
  },
  data(){
    return {
      containerHeight: window.outerHeight - 112
    }
  },
  methods: {
    getPath(){
      if(this.$route.path==="/home"){

      }else if(this.$route.path==="/introduction"){

      }else if(this.$route.path==="/business"){

      }else if(this.$route.path==="/case"){

      }else if(this.$route.path==="/contact"){

      }
    }
  }
}
</script>

<style lang="less">
@import "./assets/css/reset.less";
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top:60px;
  margin-bottom:260px;
  margin:0;
  padding:0;
  overflow-x: hidden;
  overflow-y: auto;
  .mainContainer{
    max-height:calc(100% - 180)
  }
}
body{
  margin:0;
  padding:0;
}
</style>
