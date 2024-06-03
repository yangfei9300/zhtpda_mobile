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
				
					
				<view style="text-align: center;color: red;font-weight: bold;padding:20rpx 0rpx;">总核销次数：{{list.length}}</view>
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
		
		<view class="leftbo yincang1" @longtap="clearSaanInfo"
		>
			清除数据
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
				options:{},
				
			}
		},
		onLoad(options){
			this.options=options;
			this.openSQL();
		},
		methods: {
			// 清除扫码数据
			clearSaanInfo(){
				uni.showModal({
					confirmColor:"#ff0000",      
					title: '警告警告！！！',
					content: '确定要清空扫码详情表吗？（联系管理员处理）',
					success:  (res)=> {   
						if (res.confirm) {
							DB.deleteTableData("scan_info").then(res1=>{
								this.$tools.showToast("扫码详情表数据清空成功");
							}).catch(error => {  
								this.$tools.showToast("数据清空失败");
							});  
						} else if (res.cancel) {
							
						}
					}
				});
			},
			// 前往首页
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
							if(this.options.type==1){
								this.getYeji("statistics_num");
							}else{
								this.getYeji("scan_info");
							}
							
						})  
						.catch(error => {
							console.log("数据库开启失败");
						});
				}else{
					if(this.options.type==1){
						this.getYeji("statistics_num");
					}else{
								this.getYeji("scan_info");
							}
				}
			},
			getYeji(tableName){
				
				DB.selectTableData(tableName).then(res=>{
					this.list=res;
					if(tableName=='statistics_num'){
						var obg={
							'loginName':'总核销人数',
							'count':'',
							'doorId':"",
							'dayTime':''
						}
						var count=0;
						for(var a=0;a<res.length;a++){
							count=count+parseInt(res[a].count)
						}
						obg.dayTime=count;
						this.list.push(obg);
					}
				}).catch(error => {  
					this.$tools.showToast("查询失败");
				});
			}
			
		}
	}
</script>

	
<style>
	
	.leftbo{
		width: 150rpx;
		height: 50rpx;
		background-color: blue;
		color: white;
		line-height: 50rpx;
		border-radius: 15rpx;
		text-align: center;
		position: fixed;
		bottom: 40rpx;
		left: 40rpx;
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
