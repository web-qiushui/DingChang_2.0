<template>
  <div class="HomeContainer">
    <div class="bannerContainer">
      <el-carousel indicator-position="outside" height="660px" autoplay :interval="1000" arrow="always">
        <el-carousel-item v-for="(item,index) in bannerPicList" :key="index">
          <img :src="item.pic" alt="" class="bannerPicCls">
        </el-carousel-item>
      </el-carousel>
      <div class="effectiveItemsContainer">
        <el-col v-for="(item,index) in effectiveList" :key="index" :span="4">
          <div>
            <div class="iconCls" style="display:inline-block;">
              <img :src="item.iconPic" alt="">
            </div>
            <div style="display:inline-block;">
              <p class="titleCls">{{item.title}}</p>
              <!-- <div class="contentCls">{{item.content}}</div> -->
            </div>
          </div>
        </el-col>
      </div>
    </div>
    <div class="contentContainer">
      <div class="resultContainer">
        <div class="titleContainer">
          <p>
            <span>成果展示</span>
            <i>-- RESULT SHOW --</i>
          </p>
        </div>
        <div class="resultContentCls">
          <el-row :gutter="22">
            <el-col :span="6" v-for="(item, index) in resultList" :key="index" :offset="index > 0 ? 2 : 1">
              <el-card :body-style="{ padding: '0px' }">
                <img :src="item.pic" class="imgCls">
                <div style="padding: 14px;">
                  <span class="txtCls">{{ item.txt}}</span>
                </div>
              </el-card>
            </el-col>
          </el-row>
        </div>
      </div>
      <div class="newsContainer">
        <div class="titleContainer">
          <p>
            <span>新闻资讯</span>
            <i>-- RECENT NEWS --</i>
          </p>
        </div>
        <div class="newsContentContainer">
          <el-col v-for="(items,index) in newsList" :key="index" :span="6" :offset="index===0 ? 2 : 1" @click="goToNews">
            <div :style="`background:url(${items.pic})`">
              <img :src="items.pic" alt="" class="imgCls">
            </div>
            <ul>
              <el-col :span="20">
                <li v-for="(item,index) in items.newsContentList" class="newsTitleCls" :key="index">{{item.newsItem}}</li>
              </el-col> 
            </ul>
          </el-col>
          <div style="clear:both;"></div>
        </div>
      </div>
      <div class="contactUsCls">
        <div style="display:inline-block;width:70%;">
          <div class="contactItemCls contactItemTitleCls">{{contactUS.title}}</div>
          <div class="contactItemCls">{{contactUS.content}}</div>
        </div>
        <div class="contactCls" @click="goToContactUS">联系我们</div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
name: 'Home',
data () {
  return {
    effectiveList:[{
      title:'统一化',
      iconPic:require('@/assets/img/icon/effective_1.png'),
      content:'全国统一客户服务热线'
    },{
      title:'个性化',
      iconPic:require('@/assets/img/icon/effective_2.png'),
      content:'专业客户服务人员提供全方位，个性化服务'
    },{
      title:'完善化',
      iconPic:require('@/assets/img/icon/effective_3.png'),
      content:'接受用户的预受理、开户、暂停业务、恢复业务、销户、过户、移机、增值业务等多项业务'
    },{
      title:'便捷化',
      iconPic:require('@/assets/img/icon/effective_4.png'),
      content:'10个工作日内即可开通西安鼎昌的高速互联网专线网络服务'
    },{
      title:'专业化',
      iconPic:require('@/assets/img/icon/effective_1.png'),
      content:'专业工程师进行上门排除故障服务'
    },{
      title:'高速化',
      iconPic:require('@/assets/img/icon/effective_2.png'),
      content:'48小时内及时响应'
    }],
    bannerPicList:[{
      index:1,
      pic:require('@/assets/img/banner_1.png')
    },{
      index:2,
      pic:require('@/assets/img/banner_2.png')
    },{
      index:3,
      pic:require('@/assets/img/banner_3.png')
    }],
    resultList:[{
      index:1,
      pic:require("@/assets/img/result_1.png"),
      txt:'智能建筑'
    },{
      index:2,
      pic:require("@/assets/img/result_2.png"),
      txt:'智慧城市'
    },{
      index:3,
      pic:require("@/assets/img/result_3.png"),
      txt:'绿色节能'
    }],
    newsList:[{
      title:'公司资讯',
      pic:require('@/assets/img/news_1.png'),
      newsContentList:[{
        newsItem:'谷歌地图加入AR增强现实功能',
        url:''
      },{
        newsItem:'谷歌地图加入AR增强现实功能',
        url:''
      },{
        newsItem:'谷歌地图加入AR增强现实功能',
        url:''
      },{
        newsItem:'谷歌地图加入AR增强现实功能',
        url:''
      },{
        newsItem:'谷歌地图加入AR增强现实功能',
        url:''
      }]
    },{
      title:'行业动态',
      pic:require('@/assets/img/news_2.png'),
      newsContentList:[{
        newsItem:'谷歌地图加入AR增强现实功能',
        url:''
      },{
        newsItem:'谷歌地图加入AR增强现实功能',
        url:''
      },{
        newsItem:'谷歌地图加入AR增强现实功能',
        url:''
      },{
        newsItem:'谷歌地图加入AR增强现实功能',
        url:''
      },{
        newsItem:'谷歌地图加入AR增强现实功能',
        url:''
      }]
    },{
      title:'技术学堂',
      pic:require('@/assets/img/news_3.png'),
      newsContentList:[{
        newsItem:'谷歌地图加入AR增强现实功能',
        url:''
      },{
        newsItem:'谷歌地图加入AR增强现实功能',
        url:''
      },{
        newsItem:'谷歌地图加入AR增强现实功能',
        url:''
      },{
        newsItem:'谷歌地图加入AR增强现实功能',
        url:''
      },{
        newsItem:'谷歌地图加入AR增强现实功能',
        url:''
      }]
    }],
    contactUS:{
      title:'现在，非常期待与您的又一次邂逅',
      content:'建设西安市开放的"e--基础设施"，打造一个全新的数字化西安',
      img:require('@/assets/img/banner_4.png')
    }
  }
},
methods:{
  goToContactUS(){
    this.$router.push({
      path:'/contact'
    })
  },
  goToNews(){
     this.$router.push({
      path:'/news'
    })
  }
}
}
</script>
<style lang="less" scoped>
.HomeContainer{
  width:100%;
  .bannerContainer{
    .bannerPicCls{
      width:100%;
    }
    .effectiveItemsContainer{
      width:100%;
      height:80px;
      line-height: 80px;
      background-color: rgba(22,27,31,1);
      .iconCls{
        height:100%;
        line-height: 100%;
        margin-right:10px;
        img{
          vertical-align: middle;
        }
      }
      .titleCls{
        font-size:18px;
        color:#eee;
      }
      .contentCls{
        font-size:13px;
        color:#999;
      }
    }
  }
  .contentContainer{
    .titleContainer{
      text-align:center;
      font-size:22px;
      font-weight:600;
      color:#454545;
      line-height:26px;
      padding:10px;
      span{
        display:block;
      }
      i{
        display:block;
        margin-top:10px;
        font-size:18px;
      }
    }
    .resultContainer{
      background-color: rgba(22,27,31,0.2);
      padding: 20px 0;
      .resultContentCls{
        .imgCls{
          width:100%;
          cursor: pointer;
        }
        .txtCls{
          font-size:16px;
          color:#878787;
          font-weight:550;
          cursor: pointer;
        }
      }
    }
    .newsContainer{
      padding: 20px 0;
      .newsContentContainer{
        .imgCls{
          width:100%;
          height:260px;
          cursor: pointer;
          // -webkit-transition: -webkit-transform 2s ease-out;
          // -moz-transition: -moz-transform 2s ease-out;
          // -o-transition: -o-transform 2s ease-out;
          // -ms-transition: -ms-transform 2s ease-out;
        }
        imgCls:hover{
          -webkit-transform: rotateZ(360deg);
          -moz-transform: rotateZ(360deg);
          -o-transform: rotateZ(360deg);
          -ms-transform: rotateZ(360deg);
          transform: rotateZ(360deg);
        }
        .newsTitleCls{
          font-family:"Microsoft YaHei";
          font-size:14px;
          color:#444;
          height:26px;
          line-height:26px;
          cursor: pointer;
        }
      }
    }
    .contactUsCls{
      width:100%;
      height:120px;
      background-image: url('../../assets/img/banner_4.png');
      background-repeat: no-repeat;
      .contactItemCls{
        width:60%;
        padding:10px 20px;
        background-color:rgba(221,221,221,0.8);
        color:#333;
        font-size:18px;
        margin-top:12px;
        margin-left:10%;
        padding:6px 20px;
        border-radius:6px;
      }
      .contactItemTitleCls{
        font-size:22px;
        font-weight:600;
        width:40%;
      }
      .contactCls{
        width:120px;
        height:32px;
        line-height:32px;
        border:1px solid #999;
        float:right;
        margin-top:32px;
        margin-right:170px;
        border-radius:6px;
        background-color: rgba(22,27,31,0.4);
        color:rgb(255,255,255);
        cursor: pointer;
      }
    }
  }
}
</style>
