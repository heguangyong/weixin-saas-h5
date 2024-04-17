(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/ups-products/index"],{"028a":function(t,n,r){"use strict";r.r(n);var e=r("a19b"),u=r.n(e);for(var a in e)"default"!==a&&function(t){r.d(n,t,(function(){return e[t]}))}(a);n["default"]=u.a},"51c9":function(t,n,r){},a19b:function(t,n,r){"use strict";(function(t){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var r={name:"ups-products",props:{productList:{type:Array,required:!0},isEdit:{type:[Boolean,String],required:!1,default:!1},isShowSwitch:{type:[Boolean,String],required:!1,default:!1}},data:function(){return{}},computed:{priceArray:function(t){var n=String(Number(t).toFixed(2)).split(".");return n}},methods:{goProductDetail:function(n){var r="";r="/pagesCmn/product/ShareProductDetail?id="+n._id,t.navigateTo({url:r})}}};n.default=r}).call(this,r("543d")["default"])},ab95:function(t,n,r){"use strict";r.r(n);var e=r("b716"),u=r("028a");for(var a in u)"default"!==a&&function(t){r.d(n,t,(function(){return u[t]}))}(a);r("db6b");var i,o=r("f0c5"),c=Object(o["a"])(u["default"],e["b"],e["c"],!1,null,"09564014",null,!1,e["a"],i);n["default"]=c.exports},b716:function(t,n,r){"use strict";var e;r.d(n,"b",(function(){return u})),r.d(n,"c",(function(){return a})),r.d(n,"a",(function(){return e}));var u=function(){var t=this,n=t.$createElement;t._self._c},a=[]},db6b:function(t,n,r){"use strict";var e=r("51c9"),u=r.n(e);u.a}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/ups-products/index-create-component',
    {
        'components/ups-products/index-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("ab95"))
        })
    },
    [['components/ups-products/index-create-component']]
]);
