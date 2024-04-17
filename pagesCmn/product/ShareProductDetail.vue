<template>
    <view >
        <view class="page bg-white">
			<view class="carousel">
				<swiper indicator-dots circular=true duration="400">
					<swiper-item class="swiper-item" v-for="(item,index) in product.carouse" :key="index" :data-src="item" @tap="previewImage">
						<view class="image-wrapper">
							<image
									:src="item"
									mode="aspectFill"
							></image>
						</view>
					</swiper-item>
				</swiper>
			</view>
            <view class="cu-list menu-avatar">
            	<view class="cu-item" style="height: 110rpx; background-color:gainsboro" @tap="goQrcode(product._id)">
            		<view class="cu-avatar round ">
            			<image :src="product.avatar" mode="aspectFill" class="cu-avatar round "></image>
            		</view>
            		<view class="content flex-sub">
            			<view class="text-grey">{{product.title}}</view>
						<view  class="text-gray text-sm flex justify-between">
							价格：{{priceAndUnitName}}
						</view>
            		</view>
					<view class="action" >
						<text class="cuIcon-qr_code" style="font-size: 36px;"></text>
					</view>
            	</view>
            </view>
			<textarea v-if="product.detail.content" readonly disabled class="text-box font40 width100 padding-sm solid text-gray text-cut" style="height: 110rpx; background-color:gainsboro" scroll-y="true" maxlength="200"  v-model="product.detail.content" >
            </textarea>
			<view v-if="product.detail.videos.length>0">
				<video  :src="product.detail.videos[0]" objectFit='contain' controls show-mute-btn muted></video>
			</view>
			<image v-for="(item,index) in product.detail.images" :key="index" :src="item" :data-src="item" @tap="previewImage" mode="widthFix" style="vertical-align: middle;"></image>
			<view class="cu-tabbar-height"></view>
			<view class="cu-tabbar-height"></view>
			<view class="cu-bar bg-white tabbar border  foot">
				<view class="cu-bar bg-white tabbar border  foot" @tap="goQrcode(product._id)">
					<view class="bg-grey submit text-lg">购买详询，请点击产品二维码进入小程序</view>
				</view>
			</view>
        </view>
	</view>
</template>

<script>
    import { mapState,mapMutations } from 'vuex'
    import cloudbase from '@cloudbase/js-sdk';
    import jweixin from 'jweixin-module';

	
    export default{
        data() {
            return {
                isLoad:false,
                product:{
                    _id:'',
					qrcode:'',
                    detail:{
                        content:'',
                        images:[],
                        imgList:[],
                        videos:[]
                    },
					num:1
                },
                priceAndUnitName:'',
				authBizInfo:{}
            };
        },

        onLoad(options) {
            let that = this;
            if(options.id){
                that.product._id=options.id;
                that.getDetail();
            }
            //扫码加好友
            else if (options.scene) {
                that.paramsStr +='scene='+options.scene;
                let res = {};
                let params = decodeURIComponent(options.scene).split("&");
                params.forEach(item => {
                    let paramMap = item.split("=");
                    res[paramMap[0]] = paramMap[1];
                    if(paramMap[0]=='qrcode'){
                        that.product.qrcode=paramMap[1];
                    }
                });
                that.getDetailByQrcode();
            }
            //根据产品获取企业名片
            that.authBizInfo = {_id:that.product.card_id,name:that.product.name,avatar:that.product.avatar};
            that.needWxAuth(that.authBizInfo);
        },
        onReady(){
            wx.setNavigationBarTitle({
                title: "产品详情"
            })
        },

		onShareAppMessage(res){
		    if(res.from=== 'button'){
		        let  product = res.target.dataset.product;
		        return{
		            title:product.title,
                    desc: product.detail.content, // 分享描述
		            imageUrl:product.cover||'',
		            path:"/pagesCmn/product/ShareProductDetail?id="+product._id,
		            success:function(r){
		                uni.showToast({
		                    'icon':'success',
		                    'title':'分享成功'
		                });
		            }
		        }
		    }
		},

		computed:{
			...mapState(['user','filePath']),
		},
    methods:{
        ...mapMutations(['needWxAuth','convertFilePath']),

		ShareProductDetail(){
		    uni.showShareMenu({
		        withShareTicket:true,
		    })
		},
		async getDetail(){
		    let that = this;
            await cloudbase.auth().anonymousAuthProvider().signIn();
            // 匿名登录成功检测登录状态isAnonymous字段为true
            const loginState = await cloudbase.auth().getLoginState();
            console.log('login',loginState.isAnonymousAuth); // true
            let res = await cloudbase.callFunction({
                name:'web',
                data:{
                    $url:'getProductDetail',
                    id:that.product._id
                }
            });
			// console.log('product',res.result.data);
            that.product = JSON.parse(res.result.data);
            //替换cloud为https
            if(that.product.cover.indexOf('cloud')==0){
                that.convertFilePath(that.product.cover);
                that.product.cover=that.filePath;
				that.convertFilePath(that.product.detail.videos[0]);
				that.product.detail.videos[0]=that.filePath;
            }
            //-------------------------
			let reqUrl = "http://cb.upservce.com/#/pagesCmn/product/ShareProductDetail?id="+that.product._id;
            //提供分享公众号能力
            res = await cloudbase.callFunction({
                name:'web',
                data:{
                    $url:'signWeixin',
                    url:reqUrl,
                    needRefreshSignature:false
                }
            });
            let signRet =  JSON.parse(res.result.data);
            console.log('sign',res.result.data);
            jweixin.config({
                debug: signRet.debug, // 调试，发布的时候改为false
                appId: signRet.appId,//'wxc42ba3b82548c8b6',
                nonceStr: signRet.nonceStr,
                timestamp: signRet.timestamp,
                signature: signRet.signature,
                jsApiList: signRet.jsApiList,//[ 'updateAppMessageShareData','updateTimelineShareData','onMenuShareAppMessage','onMenuShareTimeline', 'onMenuShareQQ', 'onMenuShareQZone'],
            });

            jweixin.ready(() => {   //需在用户可能点击分享按钮前就先调用
                //旧：群分享
                jweixin.onMenuShareAppMessage({
                    title: that.product.title, // 分享标题
                    desc: that.product.detail.content, // 分享描述
                    link: reqUrl, // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
                    imgUrl:  that.product.cover, // 分享图标
                    success: function () {
                        // 设置成功
                        console.log('success');
                    }
                });
                //旧：分享朋友圈
                jweixin.onMenuShareTimeline({
                    title: that.product.title, // 分享标题
                    desc: that.product.detail.content, // 分享描述
                    link: reqUrl, // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
                    imgUrl:  that.product.cover, // 分享图标
                    success: function () {
                        // 设置成功
                        console.log('success');
                    }
                });
                //新接口
                jweixin.updateAppMessageShareData({
                    title: that.product.title, // 分享标题
                    desc: that.product.detail.content, // 分享描述
                    link: reqUrl, // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
                    imgUrl:  that.product.cover, // 分享图标
                    success: function () {
                        // 设置成功
                        console.log('success');
                    }
                });
            });

            jweixin.error ((res)=>{
                console.log('jweixin.error',res);
                //刷新后再分享
                cloudbase.callFunction({
                    name:'web',
                    data:{
                        $url:'signWeixin',
                        url:reqUrl,
                        needRefreshSignature:true
                    }
                });
                setTimeout (() => {
                    uni.showToast({
                        icon:'none',
                        title:'产品授权变更，需刷新后重新分享！'
                    });
                } , 500 );
            });
            //-------------------------

			that.product.num=1;
            that.priceAndUnitName = '¥ '+ parseFloat(that.product.price).toFixed(2) + that.product.unit_name;
            //根据产品获取企业名片
            that.authBizInfo = {_id:that.product.card_id,name:that.product.name,avatar:that.product.avatar};
            that.needWxAuth(that.authBizInfo);


		},

        async getDetailByQrcode(){
            let that = this;
            let res = {};
            // #ifdef MP-WEIXIN
            res =await wx.cloud.callFunction({
                name: 'cmn',
                data: {
                    $url: 'getProductDetailByQrcode',
                    qrcode: that.product.qrcode,
                }
            });
            that.product = res.result.data;
            // #endif
            // #ifdef H5
            res =await cloudbase.callFunction({
                name: 'web',
                data: {
                    $url: 'getProductDetailByQrcode',
                    qrcode: that.product.qrcode,
                }
            });
            that.product = JSON.parse(res.result.data);
            // #endif
            that.product.num=1;
            that.priceAndUnitName = '¥ '+ parseFloat(that.product.price).toFixed(2) + that.product.unit_name;
            //根据产品获取企业名片
            that.authBizInfo = {_id:that.product.card_id,name:that.product.name,avatar:that.product.avatar};
            that.needWxAuth(that.authBizInfo);
        },

		previewImage(e){
			let that = this;
			console.log(e);
			let image = "";
			let images = [];
			image = e.currentTarget.dataset.src;
			for(let i in that.product.carouse){
				images.push(that.product.carouse[i])
			}
			for(let j=0;j<that.product.detail.images.length;j++){
				images.push(that.product.detail.images[j])
			}
			wx.previewImage({
				current:image,
				urls:images
			})
		},

        goQrcode(id){
		    console.log('goQrcode',id);
            uni.navigateTo({
                url:"/pagesCmn/product/ProductQrcode?id="+ id
            })
        },
    },

    }
</script>

<style lang='scss'>
  .page{
  	z-index: 0;
  	height: 100vh;
  }

  video {
  	width: 750rpx;
  }
  image {
  	width: 750rpx;
  }

  .carousel {
	  height: 600rpx;
	  position:relative;
	  swiper{
		  height: 100%;
	  }
	  .image-wrapper{
		  width: 100%;
		  height: 100%;
	  }
	  .swiper-item {
		  display: flex;
		  justify-content: center;
		  align-content: center;
		  overflow: hidden;
		  image {
			  width: 100%;
			  height: 100%;
		  }
	  }
  }

</style>
