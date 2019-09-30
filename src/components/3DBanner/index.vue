<template>
    <div class="3DBannerContainer">
        <div id="slider" class="slide-wp">
            <ul>
                <li v-for="(items,index) in bannerList" :key="index">
                    <img :src="items.pic" alt="" />
                </li>
            </ul>
        </div>
        <div class="nav-wp">
            <ul id="nav" class="nav">
                <li @click="mySlider.pos(items.index)" v-for="(items,index) in bannerList" :key="index">●</li>
            </ul>
            <a class="next" @click="mySlider.move()">next</a>
        </div>
    </div>
    
</template>
<script>
    export default {
        name: '3DBanner',
        data() {
            bannerList: [{
                index: 0,
                pic: require('@/assets/img/banner_1.png')
            }, {
                index: 1,
                pic: require('@/assets/img/banner_2.png')
            }, {
                index: 3,
                pic: require('@/assets/img/banner_3.png')
            }, {
                index: 4,
                pic: require('@/assets/img/banner_4.png')
            }]
        },
        props:['bannerList'],
        methods: {
            // var HR = {
            //     $: function(i) {
            //         return document.getElementById(i)
            //     },
            //     $$: function(c, p) {
            //         return p.getElementsByTagName(c)
            //     },
            //     ce: function(i, t) {
            //         var o = document.createElement(i);
            //         t.appendChild(o);
            //         return o;
            //     }
            // };
        }
    }
</script>
<style lang="less" scoped>
    ul {
        margin: 0;
        padding: 0;
    }
    
    li {
        list-style: none;
    }
    
    img {
        border: none;
        display: block
    }
    
    .slide-wp {
        width: 100%;
        height: 100%;
        overflow: hidden;
        position: absolute;
        left: 50%;
        top: 50%;
        margin-left: -250px;
        margin-top: -150px;
    }
    
    .nav-wp {
        position: absolute;
        background: #ccc;
        top: 50%;
        margin-top: 170px;
        left: 50%;
        margin-left: -100px;
        border-radius: 4px;
        -moz-border-radius: 4px;
        -webkit-border-radius: 4px;
        padding: 0 20px 6px 10px;
        _padding: 0 20px 2px 10px;
    }
    
    .nav li {
        float: left;
        margin-left: 10px;
        font-size: 20px;
        font-weight: bold;
        font-family: tahoma;
        color: #22739e;
        cursor: pointer;
        height: 22px;
    }
    
    .nav li.cur {
        color: #ff7a00
    }
    
    .next {
        position: absolute;
        top: 0;
        left: 160px;
        padding: 4px 8px;
        color: #ff7a00;
        background: #ccc;
        height: 20px;
        border-radius: 4px;
        -moz-border-radius: 4px;
        -webkit-border-radius: 4px;
        cursor: pointer;
    }
</style>