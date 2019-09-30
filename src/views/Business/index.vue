<template>
   <div class="businessContainer">
      <div class="contentContainer">
         <div class="subContentContainer" :class="{'detail-modal' : isDetailModal }"
            :style="'height:' + containerHeight + 'px'">
            <div class="product-summary">
               <div class="prd-sum-item" :class="{active: currentDetailIndex == item.index}"
                  v-for="(item, s) in subContentList" :key="s" @click.stop="switchToDetail(item.index)">
                  <img :src="item.pic" alt="">
                  <p class="sum-item-title">{{item.title}}</p>
                  <div class="sum-item-info">{{item.text}}</div>
               </div>
            </div>
            <div class="product-detail" @click="switchToSummary">
               <div class="prd-detail-item" :class="{active: currentDetailIndex == detail.index}"
                  v-for="(detail, d) in subContentList" :key="d"
                  :style="'background: #fff url(' + detail.pic + ') center center no-repeat;background-size: cover'">
                  <div class="detail-item-title">{{detail.title}}</div>
                  <div class="detail-item-info">{{detail.text}}</div>
               </div>
            </div>
         </div>
      </div>

   </div>
</template>
<script>
   export default {
      name: 'Business',
      data() {
         return {
            containerHeight: window.innerHeight - 112,
            timer: null,
            isDetailModal: false,
            currentDetailIndex: 1,
            subContentTitleList: [
               {
                  name: "宽带提供"
               },
               {
                  name: "网络互联"
               },
               {
                  name: "技术支持"
               }
            ],
            subContentList: [
               {
                  index: 1,
                  pic: require("@/assets/img/result_1.png"),
                  title: '带宽产品',
                  text: ` 专线接入（DIA）——通过联通城域网核心机房接入，确保带宽，提供互联网访问并实现CNCnet和其它电信网络间的互联和传输。 国际/国内/本地专线（IPLC/DPLC/LPLC）—— 通过联通的SDH网络，为用户提供有多种带宽选择的、可承载数据、语音及多媒体流的、端到端的数字透明电路连接。传输基础设施——暗光纤租赁服务是指联通在用户要求的两点间提供一段物理存在的、未附加任何信号发生设备和光信号中继设备的光纤。`
               }, {
                  index: 2,
                  pic: require("@/assets/img/result_2.png"),
                  title: '互联网数据产品',
                  text: `互联网数据中心（IDC）——是为满足网站及企业的系统托管外包需求而建设的基础设施，刻设施旨在建立安全可靠的机房环境，并向客户提供稳定可靠的宽带互联网接入资源。 171上网卡——依托CNCnet电信业务承载平台，全国统一采用171特服号进行拨号上网，并能在全国、全球漫游使用的新型卡类业务。`
               }, {
                  index: 3,
                  pic: require("@/assets/img/result_3.png"),
                  title: '语音产品（VOIP）',
                  text: `主叫预付费业务（17931）——是指在已开通此业务的城市，使用已申请开通该业务的固定电话，在长途电话号码前加拨“17931”，不需输入帐号，即可直接完成通话，IP长途电话费从预付款中扣除。 大客户专线接入（直接E1接入）——将用户交换机通过数字中继线E1端口接入CNC网络，用户无需键入帐号密码，可直接拨打长途电话，使用方便。`
               }
            ]
         }
      },
      methods: {
         switchToDetail: function (index) {
            this.isDetailModal = true;
            this.currentDetailIndex = index;
            clearInterval(this.timer);
            this.timer = null;
            this.timer = setInterval(() => {
               if (this.currentDetailIndex + 1 > this.subContentList.length) {
                  this.currentDetailIndex = 1
               } else {
                  this.currentDetailIndex += 1
               }
            }, 5000)
         },
         switchToSummary: function () {
            clearInterval(this.timer);
            this.timer = null;
            this.isDetailModal = false;
         }
      }
   }
</script>
<style lang="less" scoped>
   .businessContainer {
      width: 100%;
   }

   .contentContainer {
      background-color: #FFFAFA;
      transition: all 1s;
   }

   .subContentContainer {
      overflow: hidden;

      .product-summary {
         display: flex;
         flex-direction: row;
         align-items: stretch;
         width: 100%;
         height: 100%;
         transition: width 1s;

         .prd-sum-item {
            flex: 1;
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            margin: 20px 0 20px 20px;
            border-radius: 16px;
            transition: box-shadow 1s;
            cursor: pointer;

            img {
               width: 100%;
               height: 75%;
            }

            .sum-item-title {
               padding: 0 24px;
               line-height: 40px;
               font-size: 16px;
               font-weight: bold;
            }

            .sum-item-info {
               padding: 0 24px;
               line-height: 22px;
               font-size: 14px;
               text-align: left;
               text-indent: 2em;
               overflow: hidden;
               text-overflow: ellipsis;
               display: -webkit-box;
               -webkit-box-orient: vertical;
               -webkit-line-clamp: 2;
            }
         }

         .prd-sum-item:hover {
            box-shadow: 0 0 16px 0 rgba(0, 0, 0, .5);
         }

         .prd-sum-item:last-child {
            margin: 20px;
         }
      }

      .product-detail {
         width: 0;
         height: 100%;
         transition: width 1s;
         cursor: pointer;
      }
   }

   .subContentContainer.detail-modal {
      display: flex;
      overflow: auto;

      .product-summary {
         display: flex;
         flex-direction: column;
         align-items: stretch;
         width: 20%;
         height: 100%;
         transition: width 1s;

         .prd-sum-item {
            flex: 1;
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            margin: 10px;
            border-radius: 16px;
            transition: box-shadow 1s;

            img {
               width: 100%;
               flex: 1;
            }

            .sum-item-title {
               padding: 0 12px;
               line-height: 32px;
               font-size: 14px;
               font-weight: bold;
            }

            .sum-item-info {
               display: none
            }
         }

         .prd-sum-item:hover {
            box-shadow: 0 0 16px 0 rgba(0, 0, 0, .5);
         }

         .prd-sum-item.active {
            box-shadow: 0 0 20px 0 rgba(52, 0, 66, .9);
         }
      }

      .product-detail {
         position: relative;
         width: 80%;
         height: 100%;
         transition: width 1s;

         .prd-detail-item {
            position: absolute;
            left: 10px;
            right: 0;
            top: 10px;
            bottom: 10px;
            z-index: 10;
            display: flex;
            flex-direction: column;
            justify-content: flex-end;
            align-items: stretch;
            opacity: 0;
            transition: opacity 1s;

            .detail-item-title {
               padding: 20px 30px 0;
               line-height: 50px;
               text-align: left;
               font-size: 18px;
               font-weight: bold;
               color: #e5e5e5;
               background: rgba(0, 0, 0, .5);
            }

            .detail-item-info {
               padding: 0 30px 20px;
               line-height: 32px;
               text-align: left;
               font-size: 16px;
               text-indent: 2em;
               color: #e5e5e5;
               background: rgba(0, 0, 0, .5);
            }
         }

         .prd-detail-item.active {
            opacity: 1;
         }
      }
   }
</style>