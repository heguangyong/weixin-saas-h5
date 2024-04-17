<template>
	<view>
		<view v-if="categories.length>1" class='padding-sm flex flex-wrap'>
			<view class="padding-xs" v-for="(item,index) in categories" :key="index">
				<view v-if="item.checked" class='cu-tag  bg-grey round'  @tap="chooseTag(index)">{{item.label}}</view>
				<view v-else class='cu-tag line-gray round' @tap="chooseTag(index)">{{item.label}}</view>
			</view>
		</view>
		<view>
			<ups-products :productList="products"></ups-products>
		</view>
		<view class="cu-tabbar-height"></view>
	</view>
</template>

<script>
	import { mapState,mapMutations  } from 'vuex'
    import upsProducts from '@/components/ups-products/index.vue'
    import cloudbase from '@cloudbase/js-sdk';
    import jweixin from 'jweixin-module';
	import cmnUtils from '@/utils/cmnUtils.js';

	export default {
		components:{
            'ups-products':upsProducts,
		},
		data() {
			return {
				products:[],
                checkedLabels:[],
				page:1,
				bizCard:{_id:''},//用于更新产品标签，为检索
                //产品标签分类
                categories:[{label:'全部',checked:true}],
			}
		},
        onLoad(options){
		    let that = this;
		    if(options.bizCardId){
                that.bizCard._id=options.bizCardId;
            }else{
		        if(that.user.userInfo){
                    that.bizCard._id=that.user.userInfo.bizCardId;
                }
            }
        },
        onReady(){
            wx.setNavigationBarTitle({
                title: "最新产品"
            });
        },
		onShow(){
			this.getList()
		},
		onPullDownRefresh() {
			this.page=1
			this.getList()
			uni.stopPullDownRefresh(); // 停止刷新
		},
		onReachBottom() {
			this.page++;
			this.getList()
		},

        onShareAppMessage(res){
            if(res.from=== 'button'){
                return{
                    title:this.bizCard.name,
                    desc: this.bizCard.introduce, // 分享描述
                    imageUrl:this.bizCard.avatar||'',
                    path:"/pagesSys/site/product?bizCardId="+this.bizCard._id,
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
		methods: {
            ...mapMutations(['needWxAuth','convertFilePath']),
			async getList(){
                let that = this;
                if (that.page == 1) {
                    await cloudbase.auth().anonymousAuthProvider().signIn();
                    // 匿名登录成功检测登录状态isAnonymous字段为true
                    const loginState = await cloudbase.auth().getLoginState();
                    console.log('login',loginState.isAnonymousAuth); // true
                    that.products=[];
                }
                let res = null;
                res= await cloudbase.callFunction({
                    name:'web',
                    data:{
                        $url:'getOnSaleProductListByCardId',
                        cardId:that.bizCard._id,
                        checkedLabels:that.checkedLabels,
                        page:that.page
                    }
                });
				if(!cmnUtils.isEmpty(JSON.parse(res.result.data))){
					that.products.push(...JSON.parse(res.result.data));
				}
                that.products.forEach(product=>{
                    //替换cloud为https
                    if(product.cover.indexOf('cloud')==0){
						that.convertFilePath(product.cover);
						product.cover=that.filePath;
					}
				});
                res = await cloudbase.callFunction({
                    name:'web',
                    data:{
                        $url:'getCardDetailById',
                        id:that.bizCard._id
                    }
                });
                that.bizCard = JSON.parse(res.result.data) || {};
                that.needWxAuth(that.bizCard);
                if(that.checkedLabels.length==0){
                    that.doCategories();
                };
                //-------------------------
                let reqUrl = "http://cb.upservce.com/#/pagesSys/site/product?bizCardId="+that.bizCard._id;
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
                    //旧：朋友圈分享
                    jweixin.onMenuShareTimeline({
                        title: that.bizCard.name, // 分享标题
                        desc: that.bizCard.introduce, // 分享描述
                        link: reqUrl, // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
                        imgUrl:  that.bizCard.avatar, // 分享图标
                        success: function () {
                            // 设置成功
                            console.log('success');
                        }
                    });
                    //旧：群分享
                    jweixin.onMenuShareAppMessage({
                        title: that.bizCard.name, // 分享标题
                        desc: that.bizCard.introduce, // 分享描述
                        link: reqUrl, // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
                        imgUrl:  that.bizCard.avatar, // 分享图标
                        success: function () {
                            // 设置成功
                            console.log('success');
                        }
                    });
                    //新接口
                    jweixin.updateAppMessageShareData({
                        title: that.bizCard.name, // 分享标题
                        desc: that.bizCard.introduce, // 分享描述
                        link: reqUrl, // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
                        imgUrl:  that.bizCard.avatar, // 分享图标
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
			},

            async doCategories(){
                let that =this;
                let tags = that.bizCard.tags||{card:'',products:'',activity:'',trends:''};
                let dbProductTags=tags.products||'';
                that.categories=[{label:'全部',checked:true,manage:false}];
                let checkStr = '';
                //中文逗号替换成英文逗号
                dbProductTags = dbProductTags.replace(RegExp('，','g'),',');
                //英文逗号
                if(dbProductTags.indexOf(',')>0){
                    dbProductTags.split(',').forEach(each=>{
                        if(each.trim().length>0 && checkStr.indexOf(each)<0){
                            checkStr += each;
                            that.categories.push({label:each,checked:false,manage:false});
                        }
                    })
                }
            },

            async chooseTag(index){
                let that = this;
                //计算当前选中标签
                that.checkedLabels=[];
                that.products=[];

                //点全部
                if(index==0 ){
                    that.checkedLabels=[];
                    that.categories[0].checked = true;
                    that.page=1;
                    that.getList();
                    that.categories.forEach(category=>{
                        if(category.label!='全部') {
                            category.checked = false;
                        }
                    });
                }else {
                    //计算当前被选中的标签集合
                    that.categories[index].checked = !that.categories[index].checked;
                    that.categories.forEach(category=>{
                        if(category.checked){
                            if(category.label!='全部'){
                                that.checkedLabels.push(category.label);
                            }
                        }
                    });

                    //如果没有选中，设定默认全部
                    if(that.checkedLabels.length==0){
                        that.checkedLabels=[];
                        that.categories[0].checked = true;
                        that.page=1;
                        that.getList();
                    }else{
                        //去掉全部
                        that.categories[0].checked = false;
                        that.page=1;
                        that.getList();
                    }
                }
                //数据库中加载
                that.$forceUpdate();
            },
		}
	}
</script>

<style>
</style>
