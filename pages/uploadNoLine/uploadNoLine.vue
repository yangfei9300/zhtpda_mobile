<template>
	<view>
		<view class="colonn">
			<block v-if="options.type==1">
				
			
				
				<view  style="text-align: center;color: red;font-weight: bold;padding:20rpx 0rpx;">总计：{{list.length-1}}条记录</view>
				<view class="roww rowsb border_bottom" style="padding:20rpx 15rpx;">
					<view class="allline" style="text-align: center;">兼职姓名</view>
					<!-- <view class="allline" style="text-align: center;">电话</view> -->
					<view class="allline" style="text-align: center;">核销数量</view>
					<view class="allline" style="text-align: center;">门ID</view>
					<view class="allline" style="text-align: center;">日期</view>
				</view>
				<view  class="roww rowsb border_bottom"
				 style="padding:10rpx 15rpx;line-height: 50rpx;"
				 v-for="(item,index) in list"
				 :style="{
					 'background-color':item.loginName=='总核销人数'?'red':'white',
					 'color':item.loginName=='总核销人数'?'white':'#000000',
				 }"
				 >
					<view class="allline" style="text-align: center;">{{item.loginName}}</view>
					<!-- <view class="allline" style="text-align: center;">{{item.loginPhone}}</view> -->
					<view class="allline" style="text-align: center;">{{item.count}}</view>
					<view class="allline" style="text-align: center;">{{item.doorId}}</view>
					<view class="allline" style="text-align: center;" v-if="item.loginName!='总核销人数'">{{item.dayTime}}</view>
					<view class="allline" style="text-align: center;" v-else>{{item.dayTime}}人</view>
				</view>  
				
				  
			</block>
			<block v-if="options.type==2">
				  
				<view class="roww rowsa center_center">
					<view>上传进度</view>
					<progress  style="width: 500rpx;" show-info 
					:percent="nowIndex"></progress>
				</view>
				<view
				 style="text-align: center;color: red;font-weight: bold;padding-top:20rpx;"
				>总剩余待上传{{countTotal}}条<text style="color: blue;"
				@longtap="delWuxiaodata"
				>【无效数据有{{wuxiaoNum}}条】</text></view>
				<view style="text-align: center;color: red;font-weight: bold;padding:20rpx 0rpx;">本页离线数据待上传（{{list.length}}条）
				
			
				
				</view>
				<view class="roww rowsb border_bottom" style="padding:20rpx 15rpx;">
					<view class="allline w-100" style="text-align: center;">兼职姓名</view>
					<view class="allline w-100" style="text-align: center;">客户手机号</view>
					<view class="allline w-550" style="text-align: center;">扫码时间</view>
				</view>
				<view  class="roww rowsb border_bottom"
				 style="padding:10rpx 15rpx;"
				 v-for="(item,index) in list">
					<view class="allline w-100" style="text-align: center;">{{item.loginName}}</view>
					<view class="allline w-100" style="text-align: center;">{{item.unionid}}</view>
					<view class="allline w-550" style="text-align: center;">{{item.createTime}}</view>
				</view>  
			</block>
		</view>   
		<view class="leftbo" @longtap="toStartUpload"
		>
			离线数据上传
		</view>
		<view class="centerbo yincang1" @longtap="clearTableClick"
		>
			清理表格
		</view>
		<view class="rightbo" @click.stop="toHome">
			返回首页
		</view>
		
		
		
		
	</view>
</template>

<script>
		import DB from '@/common/sqlite.js'
	export default {
		data() {
			return {
				list:[],
				options:{
					type:2
				},
				countTotal:0,//总个数
				nowIndex:0,//当前离线数据进度百分比
				
				wuxiaoNum:0,
			}
		},
		onLoad(options){
			// this.options=options;
			this.openSQL();
		},
		methods: {
			
			clearTableClick(){   
			
				uni.navigateTo({
					url:"/pages/clearData/clearData"
				})
			},
			// 获取百分比
			getbaifenbi(index){
				// 进度百分比
				this.nowIndex=index/this.list.length*100;
				this.nowIndex=this.nowIndex.toFixed(0);
			},
			
			toHome(){
				uni.reLaunch({
					url:"/pages/login/login"
				})
			},
			// 打开数据库
			openSQL() {
				// 这个是查询有没有打开数据库
				let open = DB.isOpen();
				console.log("数据库状态", open ? "开启" : "关闭");
				if (!open) {
					DB.openSqlite()
						.then(res => {
							console.log("数据库已打开");
							this.getYeji("scan_info");
							this.getZong("scan_info");  
							this.delInvalidInfo();
						})  
						.catch(error => {
							console.log("数据库开启失败");
						});
				}else{
					this.getYeji("scan_info");
						this.getZong("scan_info");  
							this.delInvalidInfo();
				}
			},
			// 获取总个数
			getZong(tableName){
				console.log("总个数",tableName)
				DB.selectgetTotalCont(tableName).then(res=>{
					console.log("总个数",res)
					this.countTotal=res[0].count;
				}).catch(error => {         
					this.$tools.showToast("查询失败");
				});  
			},
			// 获取离线数据
			getYeji(tableName){
				// DB.selectTableData(tableName,'isUpload','false','isLine','false').then(res=>{
				// 	this.list=res;
				// }).catch(error => {         
				// 	this.$tools.showToast("查询失败");
				// });   
				DB.selectTableData1(tableName,100).then(res=>{
					this.list=res;
				}).catch(error => {      
					console.log('error',error)
					this.$tools.showToast("查询失败");
				});   
			},
			toStartUpload(){
				uni.showModal({
					title:"提示",
					"content":"确定要上传吗？",
					success: (res) => {
						if (res.confirm) {
								if(this.list.length>0){
									this.toUploadItem(this.list[0],0);
								}else{
									this.$tools.showToast("无离线数据。");
								}
								} else if (res.cancel) {
									console.log('用户点击取消');
								}
					}
				})
			},
			toUploadItem(info,index){
					
					if(info.activityId){
						var data = {
							exhId: info.exhId,
							unionid:info.unionid,
							userId:"359",
							activityId:info.activityId,
							createTime:info.createTime
						};
						
						console.log("开始核销论坛",this.$paths.activitypda,data)
						this.$axios
							.axios('post', this.$paths.activitypda, data)
							.then(res => {
								console.log("论坛结果",res,res.code == 200)
								if (res.code == 200) {
									this.updateBendiDB(info,index,'yes');
								} else {
									this.$tools.showToast(res.msg);
									setTimeout(res=>{
										this.updateBendiDB(info,index,"no");
									},500)
								}  
							})
							.catch(err => {
								console.log("报错",err)
							});
					}else{
						// 扫码结果
						var data = {
							exhId: info.exhId,
							params: { 
								unionid: info.unionid,
								userId:  "359",
								doorId:  info.doorId,
							},  
							createTime:info.createTime
							// 可以在这里添加大门信息
						};
						this.$axios
							.axios('post', this.$paths.visitpdaapi, data)
							.then(res => {
								console.log("核销入口结果", res)
								if (res.code == 200) {
									this.updateBendiDB(info,index,'yes');
								} else {
									this.$tools.showToast(res.msg);
									setTimeout(res=>{
										this.updateBendiDB(info,index,"no");
									},500)
								}
							})
							.catch(err => {
								
								console.log("报错了",err)
							});
					}
					
				//////////////////////////
			},
			// 修改是否上传状态  参数3是否上传成功
			updateBendiDB(info,index,isTrue){
				var where='isUpload="true"';
				if(isTrue=='no'){  
					where='isUpload="no"';
				}
				DB.updateTableData("scan_info",where,'id',info.id).then(res=>{
					this.$tools.showToast(info.id+"上传成功");
					index=index+1;
					if(index<this.list.length){
							this.toUploadItem(this.list[index],index);
								this.getbaifenbi(index);
					}else{
							this.getbaifenbi(index);
							this.$tools.showToast("上传完成");
							this.nowIndex=0;  
							this.getYeji("scan_info");   
							this.getZong("scan_info");  
							this.delInvalidInfo()
					}
				
				}).catch(error => {
					console.log("修改失败",error)
					this.$tools.showToast("修改失败");
				}); 
			},
			// 获取离线数据中无效数据的个数
			delInvalidInfo(){
				// 
				DB.selWuxiaoNum().then(res=>{
					console.log("获取离线数据中无效数据的个数",res)  
					this.wuxiaoNum=res[0].count;
				}).catch(error => {
					console.error("查询失败无效数量",error)
					this.$tools.showToast("无效数据查询失败");
				}); 
			},
			// 删除无效数据 
			delWuxiaodata(){
				uni.showModal({
					title: '提示',
					content: '确定要删除无效数据吗？',
					success:  (res1)=> {
						if (res1.confirm) {
							DB.delWuxiaodata().then(res=>{
								console.log("删除成功",res);
								this.$tools.showToast("无效数据删除成功");
								this.delInvalidInfo();
							}).catch(error => {
								this.$tools.showToast("无效数据删除失败");
							}); 
						} else if (res1.cancel) {
						}
					}
				});
				
			},
			
		}
	}
</script>

<style>
	.leftbo{
		width: 200rpx;
		height: 50rpx;
		background-color: blue;
		color: white;
		line-height: 50rpx;
		border-radius: 15rpx;
		text-align: center;
		position: fixed;
		bottom: 40rpx;
		padding:0rpx 10rpx;
		left: 40rpx;
	}
	
	.centerbo{
		width: 300rpx;
		height: 50rpx;
		background-color: blue;
		color: white;
		line-height: 50rpx;
		border-radius: 15rpx;
		text-align: center;
		position: fixed;
		bottom: 40rpx;
		padding:0rpx 10rpx;
		left: 250rpx;
	}
	
.rightbo{
	width: 150rpx;
	height: 50rpx;
	background-color: blue;
	color: white;
	line-height: 50rpx;
	border-radius: 15rpx;
	text-align: center;
	position: fixed;
	bottom: 40rpx;
	right: 40rpx;
}
</style>
