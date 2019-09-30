<template>
  <div class="introContainer">
    <div class="bannerContainer">
      <img src="@/assets/img/banner_4.png" alt="" class="bannerImgCls">
    </div>
    <div class="contentContainer">
      <div class="titleContainer">
        <p>
          <span>走进鼎昌</span>
          <i>-- ABOUT US --</i>
        </p>
      </div>
      <div class="subContentContainer" v-for="(item,index) in subContentList" :key="index">
        <div class="subTitleCls">
          {{ item.title }}
        </div>
        <div class="subPicContainer" v-if="item.pic">
          <img :src="item.pic" alt="" class="subPicCls">
        </div>
        <div class="subTxtContainer" v-if="item.id===1 || item.id===2">
          {{ item.text }}
        </div>
        <div class="subTxtContainer" v-if="item.id===3">
          <div class="itemTxtCls" v-for="(itemTxt,index) in item.cultureList" :key="index">
            <el-col :span="6">
              <div class="cultureItemContainer">
                <div class="itemTxtTitleCls">
                  {{itemTxt.title}}
                </div>
                <div class="itemTxtContentCls">
                  {{itemTxt.content}}
                </div>
              </div>
            </el-col>
          </div>
          <div style="clear:both;"></div>
        </div>
        <div class="subTxtContainer partnerItemContainer" v-if="item.id===4">
            <div class="partnerItemCls" v-for="(partnerItem,index) in item.partnerList" :key="index">
              <el-col :span="7" :offset="1">
                <div style="width:100%;margin-top:20px;">
                  <h3 class="medium partnerItemTitleCls">{{ partnerItem.title }}</h3>
                  <div style="width:100%;overflow:hidden;">
                    <img :src="partnerItem.pic" alt="" class="imgCls">
                  </div>
                </div>
              </el-col>
            </div>
          <div style="clear:both;"></div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Introduction',
  data () {
    return {
      subContentList:[{
        id:1,
        title:"公司简介",
        pic:require('@/assets/img/intropic1.png'),
        text:'西安鼎昌电子信息技术有限公司(简称西安鼎昌)投资60万元人民币于2014年10月组建。2016年12月，公司发展逐渐扩大，增加注册资本金1000万元。公司采用最先进的IP+以太网技术，为企事业单位及个人用户提供高速宽带的接入服务及基于宽带的增值服务，并有资深网络专家对公司的技术方案作指导工作，充分保证了西安宽带IP网络技术的世界领先性。公司秉行诚信务实的企业文化，努力成为一流的城域电信资质运营商。目前公司拥有来自西安交大、西安电子科技大学、陕西师范大学、海南大学等著名的管理人才和专业技术人才。现有近50名员工中，大专及以上学历的人员占90%以上。作为西安市最具竞争力的电信资质运营商，西安鼎昌将充分发挥新兴电信企业的体制优势，以宽带技术为基础，从带宽提供、网络互联、客户接入、设备托管、服务外包、市场拓展、技术支持、客户服务等诸多方面推动西安市互联网经济的发展，建设西安市开放的"e--基础设施"，打造一个全新的数字化西安。'
      },{
        id:2,
        title:"总裁致辞",
        pic:require('@/assets/img/intropic2.png'),
        text:`
              西安鼎昌电子信息技术有限公司是应新经济发展的需要而诞生的。公司采用了世界上最先进的网络技术，突破了传统的电信体制，是技术创新推动体制创新的结果。公司致力于建设和完善西安市数字化基础设施，创造西安人民新的生活环境。
            我们采用最先进的宽带IP技术将丰富的网络应用以高速引入到千家万户，引导大家走进无限的互联网世界。先进技术的采用，使得西安在互联网上同外界信息的交流不再成为障碍，世界各地人民同西安的联络和沟通也将变得非常方便，从而大大缩短西安与世界的距离，有力地带动西安经济的发展。
            鼎昌关心每个用户的需求，也重视人的价值。作为新型的城域电信运营商，西安鼎昌非常重视用户的个性化要求，了解用户潜在的需要，给广大用户提供及时周到的服务。西安鼎昌也充分尊重员工的价值，重视每个人的劳动，提倡昂扬向上的敬业精神。只有全体员工的共同努力，我们才能赢得企业广阔的未来和西安市数字化生活的灿烂前景。
            新经济给企业的发展带来了巨大的机遇，西安鼎昌电子信息技术有限公司将以宽带技术的应用为手段,促进西安市经济的腾飞,带动企业的进步。我们将同志同道合的合作伙伴一起，共同创造西安人民美好的未来！
            `
      },{
        id:3,
        title:"企业文化",
        pic:require('@/assets/img/intropic3.png'),
        cultureList:[{
          title:'企业理念',
          content:'秉承“  诚信、专业、创新 ”的企业精神,以科技发展为契机，致力于成为通信建设服务行业领跑者，以打造技术核心竞争力，为客户提供针对性专业服务和解决方案'
        },{
          title:'企业使命',
          content:'秉承“  诚信、专业、创新 ”的企业精神,以科技发展为契机，致力于成为通信建设服务行业领跑者，以打造技术核心竞争力，为客户提供针对性专业服务和解决方案'
        },{
          title:'企业目标',
          content:'秉承“  诚信、专业、创新 ”的企业精神,以科技发展为契机，致力于成为通信建设服务行业领跑者，以打造技术核心竞争力，为客户提供针对性专业服务和解决方案'
        },{
          title:'企业战略',
          content:'秉承“  诚信、专业、创新 ”的企业精神,以科技发展为契机，致力于成为通信建设服务行业领跑者，以打造技术核心竞争力，为客户提供针对性专业服务和解决方案'
        }]
      },{
        id:4,
        title:"合作伙伴",
        partnerList:[{
          title:'西安交通大学第一附属医院',
          pic:require('@/assets/img/intro_1.jpg')
        },{
          title:'兴业证券',
          pic:require('@/assets/img/intro_2.jpg')
        },{
          title:'西安钟楼',
          pic:require('@/assets/img/intro_3.jpg')
        },{
          title:'长安信托',
          pic:require('@/assets/img/intro_4.jpg')
        },{
          title:'西北工业大学',
          pic:require('@/assets/img/intro_5.jpg')
        },{
          title:'西北农林科技大学',
          pic:require('@/assets/img/intro_6.jpg')
        }]
      }]
    }
  },
  methods: {

  }
}
</script>
<style lang="less" scoped>
  .introContainer{
    width:100%;
    .bannerContainer{
      width:100%;
      .bannerImgCls{
        width:100%;
      }
    }
    .contentContainer{
      padding:60px;
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
        }
        .subPicContainer{
          width:100%;
          .subPicCls{
            width:100%;
          }
        }
        .subTxtContainer{
          line-height:26px;
          .itemTxtCls{
            .cultureItemContainer{
              padding:10px 20px;
              .itemTxtTitleCls{
                width: 100%;
                text-align: center;
                font-size:18px;
                font-weight:600;
              }
              .itemTxtContentCls{
                font-size:14px;
                margin-top:10px;
                line-height:22px;
              }
            }
          }
        }
        .partnerItemContainer{
          .partnerItemCls{
            margin-top:30px;
            .partnerItemTitleCls{
              width:100%;
              height:36px;
              line-height:36px;
              text-align:center;
            }
            .imgCls{
              width:100%;
              height:260px;
              transition: all 0.6s;
            }
            .imgCls:hover{
              transform: scale(1.2);
            }
          }
        }
      }
    }
  }
</style>
