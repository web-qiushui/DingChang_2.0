<template>
    <div class="businessContainer">
      <div class="bannerContainer">
        <img src="@/assets/img/banner_4.png" alt="" class="bannerImgCls">
      </div>
      <div class="contentContainer">
        <div class="titleContainer">
          <p>
            <span>联系我们</span>
            <i>-- CONTACT US --</i>
          </p>
        </div>
        <div class="subContentContainer" >
          <div class="subTitleContainer">
            <!-- <div class="subTitleCls" v-for="(item,index) in subContentTitleList" :key="index">
              {{ item.name }}
            </div> -->
            <div class="subTitleCls" @click="goToAboutUS">
              关于我们
            </div>
            <div class="subContent">
                西安鼎昌电子信息技术有限公司(简称西安鼎昌)投资60万元人民币于2014年10月组建。2016年12月，公司发展逐渐扩大，增加注册资本金1000万元。公司采用最先进的IP+以太网技术，为企事业单位及个人用户提供高速宽带的接入服务及基于宽带的增值服务，并有资深网络专家对公司的技术方案作指导工作，充分保证了西安宽带IP网络技术的世界领先性。公司秉行诚信务实的企业文化，努力成为一流的城域电信资质运营商。目前公司拥有来自西安交大、西安电子科技大学、陕西师范大学、海南大学等著名的管理人才和专业技术人才。现有近50名员工中，大专及以上学历的人员占90%以上。作为西安市最具竞争力的电信资质运营商，西安鼎昌将充分发挥新兴电信企业的体制优势，以宽带技术为基础，从带宽提供、网络互联、客户接入、设备托管、服务外包、市场拓展、技术支持、客户服务等诸多方面推动西安市互联网经济的发展，建设西安市开放的"e--基础设施"，打造一个全新的数字化西安。
            </div>
          </div>
          
          <div class="subContent">
            <el-row :gutter="24">
              <el-col :span="8"  :offset="1">
                <div>
                  <p class="txtTitle">为延伸人类的智慧，我们探求不止 为改善人类的环境，我们无微不至</p>
                  <div>
                    <el-col :span="10" center>
                      <img src="@/assets/img/erweima.png" alt="" class="imgCls">
                      <span class="imgTitleCls">官方微信</span>
                    </el-col>
                    <el-col :span="10" :offset="2" center>
                      <img src="@/assets/img/erweima.png" alt="" class="imgCls">
                      <span class="imgTitleCls">官方微博</span>
                    </el-col>
                    <div style="clear:both;"></div>
                  </div>
                  <div style="margin-top:30px">
                    <el-form label-width="80px" size="medium" style="font-size:16px">
                      <el-form-item :label="item.label" v-for="(item,index) in companyInfoList" :key="index">
                        {{item.info}}
                      </el-form-item>
                    </el-form>
                  </div>
                </div>
              </el-col>
              <el-col :span="12">
                <!-- <iframe src="@/static/map/baidumap.html" frameBorder=0 height=600 width=500 scrolling=no></iframe>
                <iframe src="../common/map/baidumap.html" frameBorder=0 height=600 width=500 scrolling=no></iframe> -->
                <img src="@/assets/img/address.png" alt="" class="imgCls">
              </el-col>
            </el-row>
          </div>
          <div class="contactUSCls">
              <div class="titleContainer">
                <el-col :span="22" :offset="2">
                  <div class="titleCls">
                    让我们更近一些，您可以
                  </div>
                  <div class="contentCls">
                    给我们留言，客服人员会立即跟您联系
                  </div>
                </el-col>
                <div style="clear:both;"></div>
              </div>
              <div class="messageContainer">
                <el-form label-width="80px" size="medium" style="font-size:16px">
                  <el-col :span="8">
                    <el-form-item label="姓名">
                      <el-col :span="18">
                        <el-input></el-input>
                      </el-col>
                    </el-form-item>
                  </el-col>  
                  <el-col :span="8">
                    <el-form-item label="手机">
                      <el-col :span="18">
                        <el-input></el-input>
                      </el-col>
                    </el-form-item>
                  </el-col> 
                  <el-col :span="8">
                    <el-form-item label="验证码">
                      <el-col :span="8" :offset="1">
                        <el-input></el-input>
                      </el-col>
                      <el-col :span="8" :offset="1">
                        <el-input></el-input>
                      </el-col>
                    </el-form-item>
                  </el-col> 
                  <el-col :span="10" :offset="7">
                    <el-form-item label="留言">
                      <el-col :span="22">
                        <el-input></el-input>
                      </el-col>
                    </el-form-item>
                  </el-col>
                  <el-col :span="2" :offset="11">
                    <el-button type="success" round>提交留言</el-button>
                  </el-col>
                </el-form>
              </div>
          </div>
        </div>
      </div>
      
    </div>
</template>
<script>
export default {
  name: 'Contact',
  data () {
    return {
      subContentTitleList:[
        {
          name:"总部"
        },
        {
          name:"分公司"
        }
      ],
      companyInfoList:[{
        label:'地址：',
        info:'陕西省西安市高新区'
      },{
        label:'电话：',
        info:'029-8888888'
      },{
        label:'传真：',
        info:'029-8888888'
      },{
        label:'邮箱：',
        info:'dingchang@vip.com'
      },{
        label:'网址：',
        info:'www.dingchang.com'
      }]
    }
  },
  methods: {
    //跳转至公司简介页面
    goToAboutUS(){
      this.$router.push({
        path:'/introduction'
      })
    }
  }
}
</script>
<style lang="less" scoped>
  .el-form-item /deep/{
    margin-bottom: 22px;
  }
  .businessContainer{
    width:100%;
    .bannerContainer{
      width:100%;
      .bannerImgCls{
        width:100%;
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
        .subTitleContainer{
          .subTitleCls{
            height:32px;
            line-height:32px;
            margin:30px auto;
            background-color: #022C6B;
            color:#FEFEFE;
            font-size:18px;
            border-radius: 3px;
            text-align:center;
            width:20%;
            cursor: pointer;
          }
          .subContent{
            padding-bottom:30px;
            line-height:26px;
            font-size: 16px;
            color: #444;
            font-family: "微软雅黑";
          }
        }
        
        .imgCls{
          width:100%;
        }
        .subContent{
          .txtTitle{
            padding:0 70px;
            font-size:16px;
            font-weight:550;
            color:#444;
            line-height:26px;
          }
          .imgCls{
            width:100%;
          }
          .imgTitleCls{
            font-size:16px;
            color:#444;
            display:inline-block;
            width:100%;
            text-align:center;
          }
        }
        .contactUSCls{
          height:250px;
          padding: 30px 0;
          background: url('../../assets/img/intropic1.png');
          .titleContainer{
            padding:20px 0;
            .titleCls {
              font-size:18px;
              font-weight:600;
              line-height:32px;
              color:rgb(255,255,255);
              text-align:left;
            }
            .contentCls{
              font-size:16px;
              font-weight:400;
              line-height:32px;
              color:rgb(255,255,255);
              text-align:left;
            }
          }
          
        }
      }
    }
  }
</style>