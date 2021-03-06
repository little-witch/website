/**
 * Created by baobao on 2016/7/25.
 */
"use strict";
require("bootstrap-css").carousel;
var pageData = require('./data.js');
var Vue = require('vue');
var $jq = require('jquery');
require('./common/fsvs.js');
require("../styles/index.scss");
var carousel = require('vue-strap').carousel;
var slider = require('vue-strap').slider;
var videojs = require('./common/video.js');
var HEIGHT = window.screen.height-80;
var vueVm = new Vue({
    el: '#content',
    components: {
        'carousel': carousel,
        'slider':slider
    },
    data:{
        isChinese: true,
        interval:1000,
        currentPage:0,
        currentHeight:HEIGHT,
        titleListChina:['服务','产品','支持','关于'],
        titleList:['Servers','Product','Support','About'],
        imgList: pageData.imgList
    },
    methods:{
        choseTitle: function (index){
            this.currentPage = index+1;
            fsvs.slideToIndex(this.currentPage);
        },
        changeLanguage: function (value){
          this.isChinese = value;
        }
    },
    compiled: function(){
      // $jq("#defaultData").empty().hide();
    }
});
var begin = {
    init: function (){
        this.first();
    },
    first: function (){
        var len = vueVm.titleList.length+1;
            vueVm.$children[0].isAnimating = false;
        for (var i = 1;i<len;i++) {
            vueVm.$children[i].isAnimating = true;
        }
    },
    slide: function (index) {
        var len = vueVm.titleList.length+1;
        for (var i = 0;i<len;i++) {
            vueVm.$children[i].isAnimating = true;
        }
        vueVm.$children[index].isAnimating = false;
    }
};
var fsvs = $jq.fn.fsvs({
    bodyID : 'fsvs-body',
    selector : '> .slide',
    mouseSwipeDisance : 40,
    afterSlide : function(){},
    beforeSlide : function(index){
        vueVm.currentPage = index;
        begin.slide(index);
    },
    endSlide : function(){},
    mouseWheelEvents : true,
    mouseDragEvents : true,
    touchEvents : true,
    arrowKeyEvents : true,
    pagination : true,
    nthClasses : false,
    detectHash : true
    });
$jq(document).ready( function() {
    begin.init();
    videojs("example_video1", {
        autoplay:false,
        controlBar: {
            captionsButton: false,
            chaptersButton : false,
            liveDisplay:false,
            subtitlesButton:false,
            volumeMenuButton:true
      }
    }).ready(function(){

      var myPlayer = this;
      myPlayer.play();

        myPlayer.on('error',function (e) {
          myPlayer.error(null);
          myPlayer.reset();
        });

    });
});
