(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pagesCmn-product-ShareProductDetail"],{4249:function(e,t,n){(function(i){var a;n("c975"),n("ac1f"),n("466d"),n("5319"),n("1276");var r=n("9523");!function(i,r){a=function(){return r(i)}.call(t,n,t,e),void 0===a||(e.exports=a)}(window,(function(e,t){if(!e.jWeixin){var n,a,o={config:"preVerifyJSAPI",onMenuShareTimeline:"menu:share:timeline",onMenuShareAppMessage:"menu:share:appmessage",onMenuShareQQ:"menu:share:qq",onMenuShareWeibo:"menu:share:weiboApp",onMenuShareQZone:"menu:share:QZone",previewImage:"imagePreview",getLocation:"geoLocation",openProductSpecificView:"openProductViewWithPid",addCard:"batchAddCard",openCard:"batchViewCard",chooseWXPay:"getBrandWCPayRequest",openEnterpriseRedPacket:"getRecevieBizHongBaoRequest",startSearchBeacons:"startMonitoringBeacons",stopSearchBeacons:"stopMonitoringBeacons",onSearchBeacons:"onBeaconsInRange",consumeAndShareCard:"consumedShareCard",openAddress:"editAddress"},c=function(){var e={};for(var t in o)e[o[t]]=t;return e}(),s=e.document,u=s.title,d=navigator.userAgent.toLowerCase(),l=navigator.platform.toLowerCase(),p=!(!l.match("mac")&&!l.match("win")),f=-1!=d.indexOf("wxdebugger"),g=-1!=d.indexOf("micromessenger"),m=-1!=d.indexOf("android"),v=-1!=d.indexOf("iphone")||-1!=d.indexOf("ipad"),h=(a=d.match(/micromessenger\/(\d+\.\d+\.\d+)/)||d.match(/micromessenger\/(\d+\.\d+)/))?a[1]:"",w={initStartTime:O(),initEndTime:0,preVerifyStartTime:0,preVerifyEndTime:0},S={version:1,appId:"",initTime:0,preVerifyTime:0,networkType:"",isPreVerifyOk:1,systemType:v?1:m?2:-1,clientVersion:h,url:encodeURIComponent(location.href)},y={},_={_completes:[]},I={state:0,data:{}};N((function(){w.initEndTime=O()}));var x=!1,b=[],k=(n={config:function(t){D("config",y=t);var n=!1!==y.check;N((function(){if(n)C(o.config,{verifyJsApiList:L(y.jsApiList),verifyOpenTagList:L(y.openTagList)},function(){_._complete=function(e){w.preVerifyEndTime=O(),I.state=1,I.data=e},_.success=function(e){S.isPreVerifyOk=0},_.fail=function(e){_._fail?_._fail(e):I.state=-1};var e=_._completes;return e.push((function(){!function(){if(!(p||f||y.debug||h<"6.0.2"||S.systemType<0)){var e=new Image;S.appId=y.appId,S.initTime=w.initEndTime-w.initStartTime,S.preVerifyTime=w.preVerifyEndTime-w.preVerifyStartTime,k.getNetworkType({isInnerInvoke:!0,success:function(t){S.networkType=t.networkType;var n="https://open.weixin.qq.com/sdk/report?v="+S.version+"&o="+S.isPreVerifyOk+"&s="+S.systemType+"&c="+S.clientVersion+"&a="+S.appId+"&n="+S.networkType+"&i="+S.initTime+"&p="+S.preVerifyTime+"&u="+S.url;e.src=n}})}}()})),_.complete=function(t){for(var n=0,i=e.length;n<i;++n)e[n]();_._completes=[]},_}()),w.preVerifyStartTime=O();else{I.state=1;for(var e=_._completes,t=0,i=e.length;t<i;++t)e[t]();_._completes=[]}})),k.invoke||(k.invoke=function(t,n,i){e.WeixinJSBridge&&WeixinJSBridge.invoke(t,A(n),i)},k.on=function(t,n){e.WeixinJSBridge&&WeixinJSBridge.on(t,n)})},ready:function(e){0!=I.state?e():(_._completes.push(e),!g&&y.debug&&e())},error:function(e){h<"6.0.2"||(-1==I.state?e(I.data):_._fail=e)},checkJsApi:function(e){C("checkJsApi",{jsApiList:L(e.jsApiList)},(e._complete=function(e){if(m){var t=e.checkResult;t&&(e.checkResult=JSON.parse(t))}e=function(e){var t=e.checkResult;for(var n in t){var i=c[n];i&&(t[i]=t[n],delete t[n])}return e}(e)},e))},onMenuShareTimeline:function(e){M(o.onMenuShareTimeline,{complete:function(){C("shareTimeline",{title:e.title||u,desc:e.title||u,img_url:e.imgUrl||"",link:e.link||location.href,type:e.type||"link",data_url:e.dataUrl||""},e)}},e)},onMenuShareAppMessage:function(e){M(o.onMenuShareAppMessage,{complete:function(t){"favorite"===t.scene?C("sendAppMessage",{title:e.title||u,desc:e.desc||"",link:e.link||location.href,img_url:e.imgUrl||"",type:e.type||"link",data_url:e.dataUrl||""}):C("sendAppMessage",{title:e.title||u,desc:e.desc||"",link:e.link||location.href,img_url:e.imgUrl||"",type:e.type||"link",data_url:e.dataUrl||""},e)}},e)},onMenuShareQQ:function(e){M(o.onMenuShareQQ,{complete:function(){C("shareQQ",{title:e.title||u,desc:e.desc||"",img_url:e.imgUrl||"",link:e.link||location.href},e)}},e)},onMenuShareWeibo:function(e){M(o.onMenuShareWeibo,{complete:function(){C("shareWeiboApp",{title:e.title||u,desc:e.desc||"",img_url:e.imgUrl||"",link:e.link||location.href},e)}},e)},onMenuShareQZone:function(e){M(o.onMenuShareQZone,{complete:function(){C("shareQZone",{title:e.title||u,desc:e.desc||"",img_url:e.imgUrl||"",link:e.link||location.href},e)}},e)},updateTimelineShareData:function(e){C("updateTimelineShareData",{title:e.title,link:e.link,imgUrl:e.imgUrl},e)},updateAppMessageShareData:function(e){C("updateAppMessageShareData",{title:e.title,desc:e.desc,link:e.link,imgUrl:e.imgUrl},e)},startRecord:function(e){C("startRecord",{},e)},stopRecord:function(e){C("stopRecord",{},e)},onVoiceRecordEnd:function(e){M("onVoiceRecordEnd",e)},playVoice:function(e){C("playVoice",{localId:e.localId},e)},pauseVoice:function(e){C("pauseVoice",{localId:e.localId},e)},stopVoice:function(e){C("stopVoice",{localId:e.localId},e)},onVoicePlayEnd:function(e){M("onVoicePlayEnd",e)},uploadVoice:function(e){C("uploadVoice",{localId:e.localId,isShowProgressTips:0==e.isShowProgressTips?0:1},e)},downloadVoice:function(e){C("downloadVoice",{serverId:e.serverId,isShowProgressTips:0==e.isShowProgressTips?0:1},e)},translateVoice:function(e){C("translateVoice",{localId:e.localId,isShowProgressTips:0==e.isShowProgressTips?0:1},e)},chooseImage:function(e){C("chooseImage",{scene:"1|2",count:e.count||9,sizeType:e.sizeType||["original","compressed"],sourceType:e.sourceType||["album","camera"]},(e._complete=function(e){if(m){var t=e.localIds;try{t&&(e.localIds=JSON.parse(t))}catch(e){}}},e))},getLocation:function(e){},previewImage:function(e){C(o.previewImage,{current:e.current,urls:e.urls},e)},uploadImage:function(e){C("uploadImage",{localId:e.localId,isShowProgressTips:0==e.isShowProgressTips?0:1},e)},downloadImage:function(e){C("downloadImage",{serverId:e.serverId,isShowProgressTips:0==e.isShowProgressTips?0:1},e)},getLocalImgData:function(e){!1===x?(x=!0,C("getLocalImgData",{localId:e.localId},(e._complete=function(e){if(x=!1,0<b.length){var t=b.shift();wx.getLocalImgData(t)}},e))):b.push(e)},getNetworkType:function(e){C("getNetworkType",{},(e._complete=function(e){e=function(e){var t=e.errMsg;e.errMsg="getNetworkType:ok";var n=e.subtype;if(delete e.subtype,n)e.networkType=n;else{var i=t.indexOf(":"),a=t.substring(i+1);switch(a){case"wifi":case"edge":case"wwan":e.networkType=a;break;default:e.errMsg="getNetworkType:fail"}}return e}(e)},e))},openLocation:function(e){C("openLocation",{latitude:e.latitude,longitude:e.longitude,name:e.name||"",address:e.address||"",scale:e.scale||28,infoUrl:e.infoUrl||""},e)}},r(n,"getLocation",(function(e){C(o.getLocation,{type:(e=e||{}).type||"wgs84"},(e._complete=function(e){delete e.type},e))})),r(n,"hideOptionMenu",(function(e){C("hideOptionMenu",{},e)})),r(n,"showOptionMenu",(function(e){C("showOptionMenu",{},e)})),r(n,"closeWindow",(function(e){C("closeWindow",{},e=e||{})})),r(n,"hideMenuItems",(function(e){C("hideMenuItems",{menuList:e.menuList},e)})),r(n,"showMenuItems",(function(e){C("showMenuItems",{menuList:e.menuList},e)})),r(n,"hideAllNonBaseMenuItem",(function(e){C("hideAllNonBaseMenuItem",{},e)})),r(n,"showAllNonBaseMenuItem",(function(e){C("showAllNonBaseMenuItem",{},e)})),r(n,"scanQRCode",(function(e){C("scanQRCode",{needResult:(e=e||{}).needResult||0,scanType:e.scanType||["qrCode","barCode"]},(e._complete=function(e){if(v){var t=e.resultStr;if(t){var n=JSON.parse(t);e.resultStr=n&&n.scan_code&&n.scan_code.scan_result}}},e))})),r(n,"openAddress",(function(e){C(o.openAddress,{},(e._complete=function(e){e=function(e){return e.postalCode=e.addressPostalCode,delete e.addressPostalCode,e.provinceName=e.proviceFirstStageName,delete e.proviceFirstStageName,e.cityName=e.addressCitySecondStageName,delete e.addressCitySecondStageName,e.countryName=e.addressCountiesThirdStageName,delete e.addressCountiesThirdStageName,e.detailInfo=e.addressDetailInfo,delete e.addressDetailInfo,e}(e)},e))})),r(n,"openProductSpecificView",(function(e){C(o.openProductSpecificView,{pid:e.productId,view_type:e.viewType||0,ext_info:e.extInfo},e)})),r(n,"addCard",(function(e){for(var t=e.cardList,n=[],i=0,a=t.length;i<a;++i){var r=t[i],c={card_id:r.cardId,card_ext:r.cardExt};n.push(c)}C(o.addCard,{card_list:n},(e._complete=function(e){var t=e.card_list;if(t){for(var n=0,i=(t=JSON.parse(t)).length;n<i;++n){var a=t[n];a.cardId=a.card_id,a.cardExt=a.card_ext,a.isSuccess=!!a.is_succ,delete a.card_id,delete a.card_ext,delete a.is_succ}e.cardList=t,delete e.card_list}},e))})),r(n,"chooseCard",(function(e){C("chooseCard",{app_id:y.appId,location_id:e.shopId||"",sign_type:e.signType||"SHA1",card_id:e.cardId||"",card_type:e.cardType||"",card_sign:e.cardSign,time_stamp:e.timestamp+"",nonce_str:e.nonceStr},(e._complete=function(e){e.cardList=e.choose_card_info,delete e.choose_card_info},e))})),r(n,"openCard",(function(e){for(var t=e.cardList,n=[],i=0,a=t.length;i<a;++i){var r=t[i],c={card_id:r.cardId,code:r.code};n.push(c)}C(o.openCard,{card_list:n},e)})),r(n,"consumeAndShareCard",(function(e){C(o.consumeAndShareCard,{consumedCardId:e.cardId,consumedCode:e.code},e)})),r(n,"chooseWXPay",(function(e){C(o.chooseWXPay,B(e),e)})),r(n,"openEnterpriseRedPacket",(function(e){C(o.openEnterpriseRedPacket,B(e),e)})),r(n,"startSearchBeacons",(function(e){C(o.startSearchBeacons,{ticket:e.ticket},e)})),r(n,"stopSearchBeacons",(function(e){C(o.stopSearchBeacons,{},e)})),r(n,"onSearchBeacons",(function(e){M(o.onSearchBeacons,e)})),r(n,"openEnterpriseChat",(function(e){C("openEnterpriseChat",{useridlist:e.userIds,chatname:e.groupName},e)})),r(n,"launchMiniProgram",(function(e){C("launchMiniProgram",{targetAppId:e.targetAppId,path:function(e){if("string"==typeof e&&0<e.length){var t=e.split("?")[0],n=e.split("?")[1];return t+=".html",void 0!==n?t+"?"+n:t}}(e.path),envVersion:e.envVersion},e)})),r(n,"openBusinessView",(function(e){C("openBusinessView",{businessType:e.businessType,queryString:e.queryString||"",envVersion:e.envVersion},(e._complete=function(e){if(m){var t=e.extraData;if(t)try{e.extraData=JSON.parse(t)}catch(t){e.extraData={}}}},e))})),r(n,"miniProgram",{navigateBack:function(e){e=e||{},N((function(){C("invokeMiniProgramAPI",{name:"navigateBack",arg:{delta:e.delta||1}},e)}))},navigateTo:function(e){N((function(){C("invokeMiniProgramAPI",{name:"navigateTo",arg:{url:e.url}},e)}))},redirectTo:function(e){N((function(){C("invokeMiniProgramAPI",{name:"redirectTo",arg:{url:e.url}},e)}))},switchTab:function(e){N((function(){C("invokeMiniProgramAPI",{name:"switchTab",arg:{url:e.url}},e)}))},reLaunch:function(e){N((function(){C("invokeMiniProgramAPI",{name:"reLaunch",arg:{url:e.url}},e)}))},postMessage:function(e){N((function(){C("invokeMiniProgramAPI",{name:"postMessage",arg:e.data||{}},e)}))},getEnv:function(t){N((function(){t({miniprogram:"miniprogram"===e.__wxjs_environment})}))}}),n),T=1,P={};return s.addEventListener("error",(function(e){if(!m){var t=e.target,n=t.tagName,i=t.src;if(("IMG"==n||"VIDEO"==n||"AUDIO"==n||"SOURCE"==n)&&-1!=i.indexOf("wxlocalresource://")){e.preventDefault(),e.stopPropagation();var a=t["wx-id"];if(a||(a=T++,t["wx-id"]=a),P[a])return;P[a]=!0,wx.ready((function(){wx.getLocalImgData({localId:i,success:function(e){t.src=e.localData}})}))}}}),!0),s.addEventListener("load",(function(e){if(!m){var t=e.target,n=t.tagName;if(t.src,"IMG"==n||"VIDEO"==n||"AUDIO"==n||"SOURCE"==n){var i=t["wx-id"];i&&(P[i]=!1)}}}),!0),t&&(e.wx=e.jWeixin=k),k}function C(t,n,i){e.WeixinJSBridge?WeixinJSBridge.invoke(t,A(n),(function(e){V(t,e,i)})):D(t,i)}function M(t,n,i){e.WeixinJSBridge?WeixinJSBridge.on(t,(function(e){i&&i.trigger&&i.trigger(e),V(t,e,n)})):D(t,i||n)}function A(e){return(e=e||{}).appId=y.appId,e.verifyAppId=y.appId,e.verifySignType="sha1",e.verifyTimestamp=y.timestamp+"",e.verifyNonceStr=y.nonceStr,e.verifySignature=y.signature,e}function B(e){return{timeStamp:e.timestamp+"",nonceStr:e.nonceStr,package:e.package,paySign:e.paySign,signType:e.signType||"SHA1"}}function V(e,t,n){"openEnterpriseChat"!=e&&"openBusinessView"!==e||(t.errCode=t.err_code),delete t.err_code,delete t.err_desc,delete t.err_detail;var i=t.errMsg;i||(i=t.err_msg,delete t.err_msg,i=function(e,t){var n=e,i=c[n];i&&(n=i);var a="ok";if(t){var r=t.indexOf(":");"confirm"==(a=t.substring(r+1))&&(a="ok"),"failed"==a&&(a="fail"),-1!=a.indexOf("failed_")&&(a=a.substring(7)),-1!=a.indexOf("fail_")&&(a=a.substring(5)),"access denied"!=(a=(a=a.replace(/_/g," ")).toLowerCase())&&"no permission to execute"!=a||(a="permission denied"),"config"==n&&"function not exist"==a&&(a="ok"),""==a&&(a="fail")}return n+":"+a}(e,i),t.errMsg=i),(n=n||{})._complete&&(n._complete(t),delete n._complete),i=t.errMsg||"",y.debug&&!n.isInnerInvoke&&alert(JSON.stringify(t));var a=i.indexOf(":");switch(i.substring(a+1)){case"ok":n.success&&n.success(t);break;case"cancel":n.cancel&&n.cancel(t);break;default:n.fail&&n.fail(t)}n.complete&&n.complete(t)}function L(e){if(e){for(var t=0,n=e.length;t<n;++t){var i=e[t],a=o[i];a&&(e[t]=a)}return e}}function D(e,t){if(!(!y.debug||t&&t.isInnerInvoke)){var n=c[e];n&&(e=n),t&&t._complete&&delete t._complete,i("log",'"'+e+'",',t||""," at node_modules/_jweixin-module@1.6.0@jweixin-module/lib/index.js:1")}}function O(){return(new Date).getTime()}function N(t){g&&(e.WeixinJSBridge?t():s.addEventListener&&s.addEventListener("WeixinJSBridgeReady",t,!1))}}))}).call(this,n("0de9")["log"])},"61fe":function(e,t,n){"use strict";n.r(t);var i=n("e0cf"),a=n.n(i);for(var r in i)"default"!==r&&function(e){n.d(t,e,(function(){return i[e]}))}(r);t["default"]=a.a},9523:function(e,t){function n(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}e.exports=n},"9be8":function(e,t,n){var i=n("a481");"string"===typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);var a=n("4f06").default;a("4afd699f",i,!0,{sourceMap:!1,shadowMode:!1})},a481:function(e,t,n){var i=n("24fb");t=i(!1),t.push([e.i,".page[data-v-3442e108]{z-index:0;height:100vh}uni-video[data-v-3442e108]{width:%?750?%}uni-image[data-v-3442e108]{width:%?750?%}.carousel[data-v-3442e108]{height:%?600?%;position:relative}.carousel uni-swiper[data-v-3442e108]{height:100%}.carousel .image-wrapper[data-v-3442e108]{width:100%;height:100%}.carousel .swiper-item[data-v-3442e108]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-align-content:center;align-content:center;overflow:hidden}.carousel .swiper-item uni-image[data-v-3442e108]{width:100%;height:100%}",""]),e.exports=t},b3bb:function(e,t,n){"use strict";var i;n.d(t,"b",(function(){return a})),n.d(t,"c",(function(){return r})),n.d(t,"a",(function(){return i}));var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-uni-view",[n("v-uni-view",{staticClass:"page bg-white"},[n("v-uni-view",{staticClass:"carousel"},[n("v-uni-swiper",{attrs:{"indicator-dots":!0,circular:"true",duration:"400"}},e._l(e.product.carouse,(function(t,i){return n("v-uni-swiper-item",{key:i,staticClass:"swiper-item",attrs:{"data-src":t},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.previewImage.apply(void 0,arguments)}}},[n("v-uni-view",{staticClass:"image-wrapper"},[n("v-uni-image",{attrs:{src:t,mode:"aspectFill"}})],1)],1)})),1)],1),n("v-uni-view",{staticClass:"cu-list menu-avatar"},[n("v-uni-view",{staticClass:"cu-item",staticStyle:{height:"110rpx","background-color":"gainsboro"},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.goQrcode(e.product._id)}}},[n("v-uni-view",{staticClass:"cu-avatar round "},[n("v-uni-image",{staticClass:"cu-avatar round ",attrs:{src:e.product.avatar,mode:"aspectFill"}})],1),n("v-uni-view",{staticClass:"content flex-sub"},[n("v-uni-view",{staticClass:"text-grey"},[e._v(e._s(e.product.title))]),n("v-uni-view",{staticClass:"text-gray text-sm flex justify-between"},[e._v("价格："+e._s(e.priceAndUnitName))])],1),n("v-uni-view",{staticClass:"action"},[n("v-uni-text",{staticClass:"cuIcon-qr_code",staticStyle:{"font-size":"36px"}})],1)],1)],1),e.product.detail.content?n("v-uni-textarea",{staticClass:"text-box font40 width100 padding-sm solid text-gray text-cut",staticStyle:{height:"110rpx","background-color":"gainsboro"},attrs:{readonly:!0,disabled:!0,"scroll-y":"true",maxlength:"200"},model:{value:e.product.detail.content,callback:function(t){e.$set(e.product.detail,"content",t)},expression:"product.detail.content"}}):e._e(),e.product.detail.videos.length>0?n("v-uni-view",[n("v-uni-video",{attrs:{src:e.product.detail.videos[0],objectFit:"contain",controls:!0,"show-mute-btn":!0,muted:!0}})],1):e._e(),e._l(e.product.detail.images,(function(t,i){return n("v-uni-image",{key:i,staticStyle:{"vertical-align":"middle"},attrs:{src:t,"data-src":t,mode:"widthFix"},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.previewImage.apply(void 0,arguments)}}})})),n("v-uni-view",{staticClass:"cu-tabbar-height"}),n("v-uni-view",{staticClass:"cu-tabbar-height"}),n("v-uni-view",{staticClass:"cu-bar bg-white tabbar border  foot"},[n("v-uni-view",{staticClass:"cu-bar bg-white tabbar border  foot",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.goQrcode(e.product._id)}}},[n("v-uni-view",{staticClass:"bg-grey submit text-lg"},[e._v("购买详询，请点击产品二维码进入小程序")])],1)],1)],2)],1)},r=[]},e0cf:function(e,t,n){"use strict";(function(e){var i=n("4ea4");n("4160"),n("c975"),n("b680"),n("acd8"),n("ac1f"),n("1276"),n("159b"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,n("96cf");var a=i(n("1da1")),r=i(n("5530")),o=n("2f62"),c=i(n("2f7e")),s=i(n("4249")),u={data:function(){return{isLoad:!1,product:{_id:"",qrcode:"",detail:{content:"",images:[],imgList:[],videos:[]},num:1},priceAndUnitName:"",authBizInfo:{}}},onLoad:function(e){var t=this;if(e.id)t.product._id=e.id,t.getDetail();else if(e.scene){t.paramsStr+="scene="+e.scene;var n={},i=decodeURIComponent(e.scene).split("&");i.forEach((function(e){var i=e.split("=");n[i[0]]=i[1],"qrcode"==i[0]&&(t.product.qrcode=i[1])})),t.getDetailByQrcode()}t.authBizInfo={_id:t.product.card_id,name:t.product.name,avatar:t.product.avatar},t.needWxAuth(t.authBizInfo)},onReady:function(){wx.setNavigationBarTitle({title:"产品详情"})},onShareAppMessage:function(e){if("button"===e.from){var t=e.target.dataset.product;return{title:t.title,desc:t.detail.content,imageUrl:t.cover||"",path:"/pagesCmn/product/ShareProductDetail?id="+t._id,success:function(e){uni.showToast({icon:"success",title:"分享成功"})}}}},computed:(0,r.default)({},(0,o.mapState)(["user","filePath"])),methods:(0,r.default)((0,r.default)({},(0,o.mapMutations)(["needWxAuth","convertFilePath"])),{},{ShareProductDetail:function(){uni.showShareMenu({withShareTicket:!0})},getDetail:function(){var t=this;return(0,a.default)(regeneratorRuntime.mark((function n(){var i,a,r,o,u;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return i=t,n.next=3,c.default.auth().anonymousAuthProvider().signIn();case 3:return n.next=5,c.default.auth().getLoginState();case 5:return a=n.sent,e("log","login",a.isAnonymousAuth," at pagesCmn/product/ShareProductDetail.vue:139"),n.next=9,c.default.callFunction({name:"web",data:{$url:"getProductDetail",id:i.product._id}});case 9:return r=n.sent,i.product=JSON.parse(r.result.data),0==i.product.cover.indexOf("cloud")&&(i.convertFilePath(i.product.cover),i.product.cover=i.filePath,i.convertFilePath(i.product.detail.videos[0]),i.product.detail.videos[0]=i.filePath),o="http://cb.upservce.com/#/pagesCmn/product/ShareProductDetail?id="+i.product._id,n.next=15,c.default.callFunction({name:"web",data:{$url:"signWeixin",url:o,needRefreshSignature:!1}});case 15:r=n.sent,u=JSON.parse(r.result.data),e("log","sign",r.result.data," at pagesCmn/product/ShareProductDetail.vue:168"),s.default.config({debug:u.debug,appId:u.appId,nonceStr:u.nonceStr,timestamp:u.timestamp,signature:u.signature,jsApiList:u.jsApiList}),s.default.ready((function(){s.default.onMenuShareAppMessage({title:i.product.title,desc:i.product.detail.content,link:o,imgUrl:i.product.cover,success:function(){e("log","success"," at pagesCmn/product/ShareProductDetail.vue:187")}}),s.default.onMenuShareTimeline({title:i.product.title,desc:i.product.detail.content,link:o,imgUrl:i.product.cover,success:function(){e("log","success"," at pagesCmn/product/ShareProductDetail.vue:198")}}),s.default.updateAppMessageShareData({title:i.product.title,desc:i.product.detail.content,link:o,imgUrl:i.product.cover,success:function(){e("log","success"," at pagesCmn/product/ShareProductDetail.vue:209")}})})),s.default.error((function(t){e("log","jweixin.error",t," at pagesCmn/product/ShareProductDetail.vue:215"),c.default.callFunction({name:"web",data:{$url:"signWeixin",url:o,needRefreshSignature:!0}}),setTimeout((function(){uni.showToast({icon:"none",title:"产品授权变更，需刷新后重新分享！"})}),500)})),i.product.num=1,i.priceAndUnitName="¥ "+parseFloat(i.product.price).toFixed(2)+i.product.unit_name,i.authBizInfo={_id:i.product.card_id,name:i.product.name,avatar:i.product.avatar},i.needWxAuth(i.authBizInfo);case 25:case"end":return n.stop()}}),n)})))()},getDetailByQrcode:function(){var e=this;return(0,a.default)(regeneratorRuntime.mark((function t(){var n,i;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n=e,i={},t.next=4,c.default.callFunction({name:"web",data:{$url:"getProductDetailByQrcode",qrcode:n.product.qrcode}});case 4:i=t.sent,n.product=JSON.parse(i.result.data),n.product.num=1,n.priceAndUnitName="¥ "+parseFloat(n.product.price).toFixed(2)+n.product.unit_name,n.authBizInfo={_id:n.product.card_id,name:n.product.name,avatar:n.product.avatar},n.needWxAuth(n.authBizInfo);case 10:case"end":return t.stop()}}),t)})))()},previewImage:function(t){var n=this;e("log",t," at pagesCmn/product/ShareProductDetail.vue:275");var i="",a=[];for(var r in i=t.currentTarget.dataset.src,n.product.carouse)a.push(n.product.carouse[r]);for(var o=0;o<n.product.detail.images.length;o++)a.push(n.product.detail.images[o]);wx.previewImage({current:i,urls:a})},goQrcode:function(t){e("log","goQrcode",t," at pagesCmn/product/ShareProductDetail.vue:292"),uni.navigateTo({url:"/pagesCmn/product/ProductQrcode?id="+t})}})};t.default=u}).call(this,n("0de9")["log"])},e9a1:function(e,t,n){"use strict";n.r(t);var i=n("b3bb"),a=n("61fe");for(var r in a)"default"!==r&&function(e){n.d(t,e,(function(){return a[e]}))}(r);n("fe64");var o,c=n("f0c5"),s=Object(c["a"])(a["default"],i["b"],i["c"],!1,null,"3442e108",null,!1,i["a"],o);t["default"]=s.exports},fe64:function(e,t,n){"use strict";var i=n("9be8"),a=n.n(i);a.a}}]);