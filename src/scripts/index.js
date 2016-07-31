/**
 * Created by baobao on 2016/7/25.
 */
"use strict";
var a = require("../styles/index.scss");
require("bootstrap-css").carousel;
var Vue = require('vue');
var carousel = require('vue-strap').carousel;
var slider = require('vue-strap').slider;
var HEIGHT = window.screen.height-80;
var vm = new Vue({
    el: '#content',
    components: {
        'carousel': carousel,
        'slider':slider
    },
    data:{
        interval:7000,
        currentPage:0,
        currentHeight:HEIGHT,
        titleList:['Servers','Product','Support','About'],
        imgList:{
            'Servers':[{
                "styleObject":{
                    height:HEIGHT+'px',
                    width:'100%',
                    content: "url('../../img/Slogan.JPG')",
                    "-ms-interpolation-mode": "bicubic"
                }
            },
            {
                "styleObject":{
                    height:HEIGHT+'px',
                    width:'100%',
                    content: "url('../../img/1.jpeg')",
                    "-ms-interpolation-mode": "bicubic"
                }
            }],
            'Product':[{
                "styleObject":{
                    height:HEIGHT+'px',
                    content: "url('../../img/1.jpeg')"
                }
            },
            {
                "styleObject":{
                    height:HEIGHT+'px',
                    content: "url('../../img/2.jpeg')"
                }
            }]
        }
    },
});
