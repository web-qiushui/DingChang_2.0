<template>
   <div class="businessContainer">
      <div class="contentContainer">
         <div class="subContentContainer clearfix">
            <template v-for="(pro, i) in subContentList1">
               <div class="summary-item" v-if="summaryContainerIndex == i" :key="i">
                  <div class="product-item" :class="{active: pro.index == currentIndex}" :key="i" title="查看详情"
                     @click="showDetail(i, pro.index)">
                     <img :src="pro.pic" alt="">
                     <div class="pro-item-title">{{ pro.title }}</div>
                     <div class="pro-item-info">{{ pro.text }}</div>
                  </div>
               </div>
               <div class="product-item" v-else :class="{active: pro.index == currentIndex}" :key="i" title="查看详情"
                  @click="showDetail(i, pro.index)">
                  <img :src="pro.pic" alt="">
                  <div class="pro-item-title">{{ pro.title }}</div>
                  <div class="pro-item-info">{{ pro.text }}</div>
               </div>

            </template>
            
         </div>
      </div>
   </div>
</template>
<script>
   export default {
      name: 'Case',
      data() {
         return {
            currentIndex: 4,
            summaryContainerIndex: 3,
            subContentList1: [
               {
                  index: 1,
                  pic: require("@/assets/img/result_1.png"),
                  title: '这个项目名称就叫项目一',
                  text: '简单介绍简单介绍简单介绍简单介绍简单介绍简单介绍简单介绍简单介绍简单介绍简单介绍简单介绍简单介绍简单介绍简单介绍简单介绍简单介绍简单介绍简单介绍简单介绍简单介绍简单介绍简单介绍简单介绍简单介绍简单介绍简单介绍简单介绍简单介绍简单介绍简单介绍简单介绍简单介绍简单介绍简单介绍简单介绍简单介绍简单介绍简单介绍简单介绍简单介绍简单介绍简单介绍简单介绍简单介绍简单介绍简单介绍简单介绍简单介绍简单介绍简单介绍简单介绍简单介绍简单介绍简单介绍简单介绍简单介绍简单介绍简单介绍简单介绍'
               }, {
                  index: 2,
                  pic: require("@/assets/img/result_2.png"),
                  title: '这个项目名称就叫项目二',
                  text: '简单介绍简单介绍简单介绍简单介绍简单介绍简单介绍简单介绍简单介绍简单介绍简单介绍简单介绍简单介绍简单介绍简单介绍简单介绍简单介绍简单介绍简单介绍简单介绍简单介绍简单介绍简单介绍简单介绍简单介绍简单介绍简单介绍简单介绍简单介绍简单介绍简单介绍简单介绍简单介绍简单介绍简单介绍简单介绍简单介绍简单介绍简单介绍简单介绍简单介绍简单介绍简单介绍简单介绍简单介绍简单介绍简单介绍简单介绍简单介绍简单介绍简单介绍简单介绍简单介绍简单介绍简单介绍简单介绍简单介绍简单介绍简单介绍简单介绍'
               }, {
                  index: 3,
                  pic: require("@/assets/img/result_3.png"),
                  title: '这个项目名称就叫项目三',
                  text: '简单介绍简单介绍简单介绍简单介绍简单介绍简单介绍简单介绍简单介绍简单介绍简单介绍简单介绍简单介绍简单介绍简单介绍简单介绍简单介绍简单介绍简单介绍简单介绍简单介绍简单介绍简单介绍简单介绍简单介绍简单介绍简单介绍简单介绍简单介绍简单介绍简单介绍简单介绍简单介绍简单介绍简单介绍简单介绍简单介绍简单介绍简单介绍简单介绍简单介绍简单介绍简单介绍简单介绍简单介绍简单介绍简单介绍简单介绍简单介绍简单介绍简单介绍简单介绍简单介绍简单介绍简单介绍简单介绍简单介绍简单介绍简单介绍简单介绍'
               },
               {
                  index: 4,
                  pic: require("@/assets/img/result_1.png"),
                  title: '这个项目名称就叫项目四',
                  text: '简单介绍简单介绍简单介绍简单介绍简单介绍简单介绍简单介绍简单介绍简单介绍简单介绍简单介绍简单介绍简单介绍简单介绍简单介绍简单介绍简单介绍简单介绍简单介绍简单介绍简单介绍简单介绍简单介绍简单介绍简单介绍简单介绍简单介绍简单介绍简单介绍简单介绍简单介绍简单介绍简单介绍简单介绍简单介绍简单介绍简单介绍简单介绍简单介绍简单介绍简单介绍简单介绍简单介绍简单介绍简单介绍简单介绍简单介绍简单介绍简单介绍简单介绍简单介绍简单介绍简单介绍简单介绍简单介绍简单介绍简单介绍简单介绍简单介绍'
               }, {
                  index: 5,
                  pic: require("@/assets/img/result_2.png"),
                  title: '这个项目名称就叫项目五',
                  text: '简单介绍简单介绍简单介绍简单介绍简单介绍简单介绍简单介绍简单介绍简单介绍简单介绍简单介绍简单介绍简单介绍简单介绍简单介绍简单介绍简单介绍简单介绍简单介绍简单介绍简单介绍简单介绍简单介绍简单介绍简单介绍简单介绍简单介绍简单介绍简单介绍简单介绍简单介绍简单介绍简单介绍简单介绍简单介绍简单介绍简单介绍简单介绍简单介绍简单介绍简单介绍简单介绍简单介绍简单介绍简单介绍简单介绍简单介绍简单介绍简单介绍简单介绍简单介绍简单介绍简单介绍简单介绍简单介绍简单介绍简单介绍简单介绍简单介绍'
               }, {
                  index: 6,
                  pic: require("@/assets/img/result_1.png"),
                  title: '这个项目名称就叫项六',
                  text: '简单介绍简单介绍简单介绍简单介绍简单介绍简单介绍简单介绍简单介绍简单介绍简单介绍简单介绍简单介绍简单介绍简单介绍简单介绍简单介绍简单介绍简单介绍简单介绍简单介绍简单介绍简单介绍简单介绍简单介绍简单介绍简单介绍简单介绍简单介绍简单介绍简单介绍简单介绍简单介绍简单介绍简单介绍简单介绍简单介绍简单介绍简单介绍简单介绍简单介绍简单介绍简单介绍简单介绍简单介绍简单介绍简单介绍简单介绍简单介绍简单介绍简单介绍简单介绍简单介绍简单介绍简单介绍简单介绍简单介绍简单介绍简单介绍简单介绍'
               }, {
                  index: 7,
                  pic: require("@/assets/img/result_2.png"),
                  title: '这个项目名称就叫项六',
                  text: '简单介绍简单介绍简单介绍简单介绍简单介绍简单介绍简单介绍简单介绍简单介绍简单介绍简单介绍简单介绍简单介绍简单介绍简单介绍简单介绍简单介绍简单介绍简单介绍简单介绍简单介绍简单介绍简单介绍简单介绍简单介绍简单介绍简单介绍简单介绍简单介绍简单介绍简单介绍简单介绍简单介绍简单介绍简单介绍简单介绍简单介绍简单介绍简单介绍简单介绍简单介绍简单介绍简单介绍简单介绍简单介绍简单介绍简单介绍简单介绍简单介绍简单介绍简单介绍简单介绍简单介绍简单介绍简单介绍简单介绍简单介绍简单介绍简单介绍'
               }
            ],

         }
      },
      methods: {
         showDetail: function (i, index) {
            if (index == this.currentIndex) {
               return;
            }
            let thePro = this.subContentList1.splice(i, 1);
            this.subContentList1.splice(3, 0, thePro[0]);
            this.currentIndex = 0;
            let timer = setTimeout(() => {
               this.currentIndex = index;
               clearTimeout(timer);
               timer = null;
            }, 600);

         },
         // showDetail: function (i, index) {
         //    console.log('i  index  currentIdenx：', i, index, this.currentIndex);
         //    if (index == this.currentIndex) {
         //       this.currentIndex = 0;
         //       this.summaryContainerIndex = -1;
         //       return;
         //    }


         //    let thePro = this.subContentList1.splice(i, 1);
         //    this.subContentList1.splice(3, 0, thePro[0]);
         //    if (this.currentIndex == 0) {
         //       this.currentIndex = index;
         //    } else {
         //       this.currentIndex = 0;
         //       let timer = setTimeout(() => {
         //          this.currentIndex = index;
         //          clearTimeout(timer);
         //          timer = null;
         //       }, 600);
         //    }
         // }
      }
   }
</script>
<style lang="less" scoped>
   .businessContainer {
      width: 100%;

      .bannerContainer {
         width: 100%;

         .bannerImgCls {
            width: 100%;
         }
      }

      .contentContainer {
         padding: 20px 60px;
         background-color: #FFFAFA;

         .subContentContainer {
            display: flex;
            justify-content: space-around;
            flex-wrap: wrap;
            align-items: center;
            margin-right: -1%;

            .product-item {
               width: calc(94% / 3);
               margin-top: 20px;
               background: #FFFAFA;
               border-radius: 12px;
               overflow: hidden;
               box-shadow: 0 0 5px 0 rgba(0, 0, 0, .6);
               cursor: pointer;
               transition: all 1s;


               img {
                  width: 100%
               }

               .pro-item-title {
                  padding: 10px 20px;
                  line-height: 36px;
                  text-align: left;
                  font-size: 16px;
                  font-weight: bold
               }

               .pro-item-info {
                  height: 0;
                  line-height: 26px;
                  font-size: 14px;
                  text-align: left;
                  text-indent: 2em;
                  overflow: hidden;
                  transition: all 1s;
               }
            }

            .product-item.active {
               width: 90%;
               box-shadow: 0 0 20px 0 rgba(52, 0, 66, 0.9);

               .pro-item-info {
                  height: auto;
                  padding: 0 20px 20px;
               }
            }

            .summary-item {
               display: flex;
               justify-content: center;
               min-width: 98%;
            }

            .product-item:hover {
               box-shadow: 0 0 20px 0 rgba(52, 0, 66, 0.9)
            }
         }

      }
   }

   .clearfix:after {
      content: ".";
      display: block;
      height: 0;
      clear: both;
      visibility: hidden;
   }
</style>