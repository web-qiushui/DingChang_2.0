<template>
    <div class="footerConatainer">
        <div class="contactContainer">
          <el-col :span="items.span" :offset="index===0 ? 1 : 0" v-for="(items,index) in contactList" :key="index">
            <div class="titleCls">{{items.title}}</div>
            <div v-if="items.subList.length<8">
              <div class="itemCls" v-for="(item,index) in items.subList" :key="index">
                <span>{{item.title}}</span>
                <span>{{item.content}}</span>
              </div>
            </div>
            
            <div v-else>
                <el-col class="itemCls" :span="9" v-for="(item,index) in items.subList" :key="index">
                  <span>{{item.title}}</span>
                  <span>{{item.content}}</span>
                </el-col> 
            </div>
          </el-col>
          <el-col :span="6">
            <img src="@/assets/img/erweima.png" width="100" height="100" alt="" style="margin-top:60px">
          </el-col>
          <div style="clear:both"></div>
        </div>
        <div class="copyRightContainer">
          <div class="itemsCls menuItemCls">
            <span class="menuItem" v-for="(item,index) in copyRightList.menus" :key="index">
              {{item.name}}
            </span>
          </div>
          <div class="itemsCls">
            {{copyRightList.content}}
          </div>
          <div class="itemsCls">
            {{copyRightList.notes}}
          </div>
        </div>
    </div>
</template>
<script>
export default {
  name: 'Footer',
  data () {
    return {
      contactList:[{
        title:"新闻中心",
        content:'',
        routeUrl:'',
        span:5,
        subList:[{
          title:"公司资讯",
          content:'',
          routeUrl:''
        },{
          title:"行业动态",
            content:'',
            routeUrl:''
        },{
          title:"技术学堂",
            content:'',
            routeUrl:''
        }]
      },{
        title:"服务项目",
        content:'',
        routeUrl:'',
        span:8,
        subList:[{
          title:"互联网接入服务",
          content:'',
          routeUrl:''
        },{
          title:"云+信息化解决方案",
          content:'',
          routeUrl:''
        },{
          title:"数据通信",
          content:'',
          routeUrl:''
        },{
          title:"网络系统集成",
          content:'',
          routeUrl:''
        },{
          title:"语音中继业务",
          content:'',
          routeUrl:''
        },{
          title:"数字电路",
          content:'',
          routeUrl:''
        },{
          title:"视频监控",
          content:'',
          routeUrl:''
        },{
          title:"楼宇综合布线",
          content:'',
          routeUrl:''
        },{
          title:"网络维护",
          content:'',
          routeUrl:''
        },{
          title:"技术咨询",
          content:'',
          routeUrl:''
        },{
          title:"用户局域网延伸服务",
          content:'',
          routeUrl:''
        }]
      },{
        title:"联系我们",
        content:'',
        routeUrl:'',
        span:4,
        subList:[{
          title:"电话：",
          content:'029-8888888',
          routeUrl:''
        },{
          title:"邮箱：",
          content:'dingchang@vip.com',
          routeUrl:''
        },{
          title:"传真：",
          content:'dingchang@vip.com',
          routeUrl:''
        },{
          title:"地址：",
          content:'陕西省西安市高新区',
          routeUrl:''
        },{
          title:"网址：",
          content:'www.dingchang.com',
          routeUrl:''
        }]
      }],
      copyRightList:{
        menus:[{
          name:'新闻资讯',
          routeUrl:'',
        },{
          name:'服务项目',
          routeUrl:'',
        },{
          name:'关于我们',
          routeUrl:'',
        },{
          name:'成功案例',
          routeUrl:'',
        }],
        content:'copyright © 2019 新概念科技有限公司',
        notes:'本站内容、图片、视频为网站模板演示数据，如有涉及侵犯版权，请联系我们提供书面反馈，我们核实后会立即删除。'
      }
    }
  },
  methods: {

  }
}
</script>
<style lang="less" scoped>
  .footerConatainer{
    width:100%;
    font-family: "微软雅黑";
    background:rgba(9,11,26,1);
    .contactContainer{
      margin: 0 90px 30px ;
      padding-bottom:20px;
      border-bottom:1px solid #a9a9a9;
      .titleCls{
        font-size: 16px;
        color: #eee;
        cursor: pointer;
        line-height:46px;
        text-align:left;
      }
      .itemCls{
        font-size:14px;
        color: rgb(169, 169, 169);
        line-height:32px;
        text-align:left;
      }

    }
    .copyRightContainer{
      min-height:120px;
      .itemsCls{
        font-size:14px;
        color:rgb(255,255,255);
        text-align:center;
        width:100%;
        line-height:26px;
      }
      .menuItemCls{
        font-size:16px;
        color:#fff;
        cursor: pointer;
        .menuItem{
          display: inline-block;
          width:80px;
        }
      }
    }
  }
</style>
