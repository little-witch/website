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
            'Home':[{
                "styleObject":{
                    height:HEIGHT+'px',
                    width:'100%',
                    content: "url('../../img/Home-Slogan.JPG')",
                    "-ms-interpolation-mode": "bicubic"
                }
            },{
                "styleObject":{
                    height:HEIGHT+'px',
                    width:'100%',
                    content: "url('../../img/Home-activity.JPG')",
                    "-ms-interpolation-mode": "bicubic"
                }
            }],
            'Servers':[{
                "styleObject":{
                    height:HEIGHT+'px',
                    width:'100%',
                    content: "url('../../img/Services-Embedded-Development.JPG')",
                    "-ms-interpolation-mode": "bicubic"
                }
            },
            {
                "styleObject":{
                    height:HEIGHT+'px',
                    width:'100%',
                    content: "url('../../img/Services-Product-Design.jpg')",
                    "-ms-interpolation-mode": "bicubic"
                }
            },{
                "styleObject":{
                    height:HEIGHT+'px',
                    width:'100%',
                    content: "url('../../img/Services-RF-Design.jpg')",
                    "-ms-interpolation-mode": "bicubic"
                }
            }],
            'Product':[{
                "styleObject":{
                    height:HEIGHT+'px',
                    width:'100%',
                    content: "url('../../img/Product-Blood-glucose.jpg')",
                    "-ms-interpolation-mode": "bicubic"
                }
            },{
                "styleObject":{
                    height:HEIGHT+'px',
                    width:'100%',
                    content: "url('../../img/Product-HVAC.jpg')",
                    "-ms-interpolation-mode": "bicubic"
                }
            },
            {
                "styleObject":{
                    height:HEIGHT+'px',
                    width:'100%',
                    content: "url('../../img/Product-More-to-Be-Continued.jpg')",
                    "-ms-interpolation-mode": "bicubic"
                }
            }],
            "Support":[{
                "styleObject":{
                    height:HEIGHT+'px',
                    width:'100%',
                    content: "url('../../img/Support.jpg')",
                    "-ms-interpolation-mode": "bicubic"
                }
            }],
            "About":[{
                "styleObject":{
                    height:HEIGHT+'px',
                    width:'100%',
                    content: "url('../../img/About.jpg')",
                    "-ms-interpolation-mode": "bicubic"
                }
            }]
        }
    },
});
