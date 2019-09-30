<template>
    <div class="businessContainer">
      <div class="bannerContainer">
        <img src="@/assets/img/banner_3.png" alt="" class="bannerImgCls">
      </div>
      <div class="subNavContainer">
        <div class="subNavTitleContainer">
            <div class="subNavTitleCls" :class="{'activeMenuCls':item.isChecked}" v-for="(item,index) in subContentTitleList" :key="index" @click="activeSubMenu(item,index)">
              {{ item.name }}
            </div>
          </div>
      </div>
      <div class="contentContainer" v-for="(items,index) in newsContentList" :key="index">
        <div class="titleContainer">
          <p>
            <span>{{items.title}}</span>
            <i>-- {{items.titleTxt}} --</i>
          </p>
        </div>
        <div class="subContentContainer" >
          <div class="subContent"  v-for="(item,index) in items.contentList" :key="index">
            <el-col :span="6">
              <div class="imgContainer">
                <img :src="item.pic" alt="" class="imgCls">
              </div>
            </el-col>
            <el-col :span="15" :offset="1">
                <div>
                  <el-col :span="16">
                    <div class="titleCls">{{item.title}}</div>
                    <div class="userCls">
                      <span>{{item.user.city}}</span>
                      <i><img src="@/assets/img/icon/name.png" alt=""></i>
                      <span>{{item.user.name}}</span>
                    </div>
                  </el-col>
                  <el-col :span="8">
                    <div class="dateContainer">
                      <p class="dayCls">{{item.time.day}}</p>
                      <p class="mounthCls">{{item.time.mounth}}</p>
                    </div>
                  </el-col>
                  <div style="clear:both;"></div>
                </div>
                <div class="contentCls">
                  {{item.content}}
                </div>
            </el-col>
            <div style="clear:both;"></div>
          </div>
        </div>
      </div>
    </div>
</template>
<script>
export default {
  name: 'News',
  data () {
    return {
      newsContentList:[{
        title:'公司资讯',
        titleTxt:'RECENT NEWS',
        url:'/news/1',
        contentList:[{
          title:"Uber上市首日遭破发大跌7.62% 市值697亿美元",
          user:{
            city:'陕西省西安市',
            name:'王大锤'
          },
          url:'',
          time:{
            mounth:'5月',
            day:'16'
          },
          content:'今天Uber美国IPO首日开盘破发报42美元，此前给出的IPO定价为45美元，截止收盘，Uber大跌7.62%报41.57美元，竞争对手、网约车第一股Lyft也跌逾7%',
          pic:require('@/assets/img/news_1.png')
        },{
          title:"Uber上市首日遭破发大跌7.62% 市值697亿美元",
          user:{
            city:'陕西省西安市',
            name:'王大锤'
          },
          url:'',
          time:{
            mounth:'5月',
            day:'16'
          },
          content:'今天Uber美国IPO首日开盘破发报42美元，此前给出的IPO定价为45美元，截止收盘，Uber大跌7.62%报41.57美元，竞争对手、网约车第一股Lyft也跌逾7%',
          pic:require('@/assets/img/news_2.png')
        },{
          title:"Uber上市首日遭破发大跌7.62% 市值697亿美元",
          user:{
            city:'陕西省西安市',
            name:'王大锤'
          },
          url:'',
          time:{
            mounth:'5月',
            day:'16'
          },
          content:'今天Uber美国IPO首日开盘破发报42美元，此前给出的IPO定价为45美元，截止收盘，Uber大跌7.62%报41.57美元，竞争对手、网约车第一股Lyft也跌逾7%',
          pic:require('@/assets/img/news_3.png')
        }]
      },{
        title:'行业动态',
        titleTxt:'INDUSTRY NEWS',
        url:'/news/2',
        contentList:[{
          title:"Uber上市首日遭破发大跌7.62% 市值697亿美元",
          user:{
            city:'陕西省西安市',
            name:'王大锤'
          },
          url:'',
          time:{
            mounth:'5月',
            day:'16'
          },
          content:'今天Uber美国IPO首日开盘破发报42美元，此前给出的IPO定价为45美元，截止收盘，Uber大跌7.62%报41.57美元，竞争对手、网约车第一股Lyft也跌逾7%',
          pic:require('@/assets/img/news_4.png')
        },{
          title:"Uber上市首日遭破发大跌7.62% 市值697亿美元",
          user:{
            city:'陕西省西安市',
            name:'王大锤'
          },
          url:'',
          time:{
            mounth:'5月',
            day:'16'
          },
          content:'今天Uber美国IPO首日开盘破发报42美元，此前给出的IPO定价为45美元，截止收盘，Uber大跌7.62%报41.57美元，竞争对手、网约车第一股Lyft也跌逾7%',
          pic:require('@/assets/img/news_5.png')
        },{
          title:"Uber上市首日遭破发大跌7.62% 市值697亿美元",
          user:{
            city:'陕西省西安市',
            name:'王大锤'
          },
          url:'',
          time:{
            mounth:'5月',
            day:'16'
          },
          content:'今天Uber美国IPO首日开盘破发报42美元，此前给出的IPO定价为45美元，截止收盘，Uber大跌7.62%报41.57美元，竞争对手、网约车第一股Lyft也跌逾7%',
          pic:require('@/assets/img/news_6.png')
        }]
      },{
        title:'技术学堂',
        titleTxt:'TECHNICAL NEWS',
        url:'/news/3',
        contentList:[{
          title:"Uber上市首日遭破发大跌7.62% 市值697亿美元",
          user:{
            city:'陕西省西安市',
            name:'王大锤'
          },
          url:'',
          time:{
            mounth:'5月',
            day:'16'
          },
          content:'今天Uber美国IPO首日开盘破发报42美元，此前给出的IPO定价为45美元，截止收盘，Uber大跌7.62%报41.57美元，竞争对手、网约车第一股Lyft也跌逾7%',
          pic:require('@/assets/img/news_7.png')
        },{
          title:"Uber上市首日遭破发大跌7.62% 市值697亿美元",
          user:{
            city:'陕西省西安市',
            name:'王大锤'
          },
          url:'',
          time:{
            mounth:'5月',
            day:'16'
          },
          content:'今天Uber美国IPO首日开盘破发报42美元，此前给出的IPO定价为45美元，截止收盘，Uber大跌7.62%报41.57美元，竞争对手、网约车第一股Lyft也跌逾7%',
          pic:require('@/assets/img/news_8.png')
        },{
          title:"Uber上市首日遭破发大跌7.62% 市值697亿美元",
          user:{
            city:'陕西省西安市',
            name:'王大锤'
          },
          url:'',
          time:{
            mounth:'5月',
            day:'16'
          },
          content:'今天Uber美国IPO首日开盘破发报42美元，此前给出的IPO定价为45美元，截止收盘，Uber大跌7.62%报41.57美元，竞争对手、网约车第一股Lyft也跌逾7%',
          pic:require('@/assets/img/news_9.png')
        }]
      }],
      subContentTitleList:[
        {
          name:"公司资讯",
          url:'/news/1',
          isChecked: true
        },
        {
          name:"行业动态",
          url:'/news/2',
          isChecked: false
        },
        {
          name:"技术学堂",
          url:'/news/3',
          isChecked: false
        }
      ]

    }
  },
  methods: {
    // 激活子导航菜单
    activeSubMenu(item,index){
      this.$router.push({path:item.url})
       this.subContentTitleList.forEach((item)=>{
         item.isChecked = false
       })
      this.subContentTitleList[index].isChecked=true
    }
  }
}
</script>
<style lang="less" scoped>
  .businessContainer{
    width:100%;
    .bannerContainer{
      width:100%;
      .bannerImgCls{
        width:100%;
      }
    }
    .subNavContainer{
      height:60px;
      font-size:16px;
      background:#022C6B;
      .subNavTitleContainer{
        .subNavTitleCls{
          display:inline-block;
          width:150px;
          font-size:16px;
          font-weight:550;
          color:#fff;
          line-height:60px;
          cursor: pointer;
          .subTitleCls{
            width:180px;
            height:32px;
            line-height:32px;
            margin:30px auto;
            background-color: #022C6B;
            color:#FEFEFE;
            font-size:18px;
            border-radius: 3px;
            text-align:center;
            display:inline-block;
            width:20%;
            cursor: pointer;
          }
        }
        .subNavTitleCls:hover{
          background:#bbb;
          color: rgb(5, 149, 199);
        }
        .activeMenuCls{
          background:#bbb;
          color: rgb(5, 149, 199);
        }
      }

    }
    .contentContainer{
      padding:20px 60px;
      background-color: #FFFAFA;
      .titleContainer{
        text-align:center;
        font-size:22px;
        font-weight:600;
        color:#454545;
        span{
          display:block;
        }
        i{
          display:block;
          margin-top:10px;
          font-size:18px;
        }
      }
      .subContentContainer{
        text-align:left;
        .subContent{
          padding:36px;
          .imgContainer{
            width:100%;
            overflow: hidden;
            .imgCls{
              width:100%;
              cursor: pointer;
              transition: all 0.6s;
            }
            .imgCls:hover{
              transform: scale(1.2);
            }
          }
          .titleCls{
            height:36px;
            line-height:36px;
            color:#337ab7;
            font-size:22px;
            float:left;
            width:100%;
            cursor: pointer;
          }
          .titleCls:focus,.titleCls:hover{
            color:#23527c;
          }
          .userCls{
            float:left;
            width:100%;
            height:36px;
            line-height:36px;
            color:#337ab7;
            span{
              margin-right:32px;
            }
            img{
              vertical-align: middle;
              margin-right:10px;
            }
          }
          .contentCls{
            width:80%;
            color:#999;
            border-bottom:1px solid #898989;
            line-height:28px;
            margin-top:20px;
            padding-bottom:30px;
          }
          .dateContainer{
            width: 72px;
            height: 90px;
            background: #e72a54;
            float:right;
            .mounthCls{
              font-size:28px;
              color:#fff;
              text-align: center;
              line-height:38px;
            }
            .dayCls{
              font-size:24px;
              color:#fff;
              text-align: center;
              line-height:48px;
            }
          }
        }
      }
    }
  }
</style>
