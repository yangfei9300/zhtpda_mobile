<template>
	<view>
		
		<!-- <view class="roww center_center"
		@click.stop="dropTable( 'scan_info' )"
		>
			<view class="xiayibubtn  fs-35"
			style="width: 140rpx;"
			>删核销</view>
		</view>    
		<view class="roww center_center"
		@click.stop="dropTable('statistics_num')"
		>
			<view class="xiayibubtn fs-35"
			style="width: 140rpx;"
			>删统计</view>    
		</view>
		 -->
		
		    
		 <!-- {{time}}--------{{saomare}} -->      
		 <!-- style="height: 100vh;" -->
		<view class="colonn center_center pore"  >
			<view class="roww endend poab"
			 style="margin-top: 30rpx;top: 0rpx;"
			 @click.stop="lixianClick">
			 <view class="allline"></view>
				<image src="/static/xuanzhongsel.png" v-if="isLixian==2" class="w-30 h-30"></image>
				<image src="/static/xuanzhongno.png" v-else class="w-30 h-30"></image>
				<view>是否开启离线模式（请联系管理员操作）</view>
				<view class="w-35"></view>
			</view>
			<view class="h-50"></view>
			<view class="colonn  p-all-25 ">
				<view class="roww  center_center fs-35 border_bottom m-top-25 p-bottom-20"
				@longtap="isShowInfoClick" 
				>
					<view class="roww center_center">
						<text class="color2_r m-right-5">*</text>
						<view>扫码</view>
					</view>
					<view class="w-20"></view>
					<view class="roww center_center">
						<view class="colonn" v-if="scanInfo" @click.stop="saomaClick">
							<view  style="color: blue;">{{scanInfo[0]}}</view>
							<view  style="color: blue;">（{{scanInfo[3]}}）</view>
						</view>
						
						<view v-else style="color: red;"
						@click.stop="saomaClick"
						>请扫码获取展会信息</view>
					</view>
					<view class="allline"></view>
				</view>
				
				<view class="colonn  fs-35 border_bottom m-top-25 p-bottom-10">
					<view class="roww  center_center">
						<text class="color2_r m-right-5">*</text>
						<view  class="fs-40">姓名</view>
						<view class="allline"></view>
					</view>
					<view class="h-15"></view>
					<input maxlength="11" v-model="form.staffName" 
					class="fs-40 m-left-15" placeholder-class="fs-40" placeholder="请输入姓名" />
				</view>
				<view class="colonn  fs-35 border_bottom m-top-25 p-bottom-10">
					<view class="roww  center_center">
						<text class="color2_r m-right-5">*</text>
						<view class="fs-40">手机号</view>
						<view class="allline"></view>
					</view>
					<view class="h-15"></view>
					<input maxlength="11" v-model="form.phoneNum" 
					class="fs-40 m-left-15" placeholder-class="fs-40"  placeholder="请输入手机号" />
				</view>
				
				
				
				<view class="roww center_center"
				@click.stop="loginstaffpda"
				>
					<view class="xiayibubtn fs-35"
					>登录</view>
				</view>
				<view class="roww center_center"
				@click.stop="toYeji(1)"
				>
					<view class="xiayibubtn fs-35"
					>查看业绩</view>
				</view>
				<view class="roww center_center"
				@longtap="toYeji(2)" v-if="isShowInfo"
				>
					<view class="xiayibubtn fs-35"   
					>扫码记录</view>
				</view>
				<view class="roww center_center"
				   @longtap="toUploadPage()" v-if="isShowInfo"
				   >
				   	<view class="xiayibubtn fs-35"
				   	>离线数据上传</view>
				</view>
				  <view class="h-150"></view>
			</view>
		</view>
		
		<view class="gengxinbtn"
		@click.stop="toGemhxom"
		>检查更新</view>
		
		<view class="gengxinbtn1 yincang1"
		@longtap="guanliyuanClick"
		>管理员</view>
		
	</view>
</template>

<script>
	import DB from '@/common/sqlite.js'
	export default {
		data() {
			return {
				form:{
				  "phoneNum": "",
				  "staffName": "",
				},
				scanInfo:null,//扫码结果为空
				lianxu: false,
				invTime: "1000",
				
				isLixian:1,//1是在线2是离线
				isShowInfo:false,//扫码记录
				
				time:"",
				saomare:""
			}
		},
		onLoad(){
			console.log("刚开始架子啊")
			var form_login=uni.getStorageSync("form_login")
			if(form_login){  
				this.form=form_login;
			} 
			var scanInfo=uni.getStorageSync("exhInfo")
			if(scanInfo){  
				this.scanInfo=scanInfo;
			}
			this.openSQL();
		},
		onShow() {
			
		},
		onUnload() {
			// this.closeSQL();//关闭数据库
		},
		
		methods: {
			saomaClick(){   
				uni.scanCode({
					onlyFromCamera: true,
					success:  (res)=> {
						console.log("扫码内容",res)
						var scanInfo=(res.result);
						if(scanInfo.indexOf("~")>=0){
							scanInfo=scanInfo.split("~");
							this.scanInfo=scanInfo;
							// 存储扫码信息
							uni.setStorageSync("exhInfo",scanInfo)
						}else{
							this.$tools.showToast("二维码不正确");
						}
						
					}
				});
			},
			guanliyuanClick(){
				console.log("管理员")
				uni.navigateTo({
					url:"/pages/administrators/administrators",
					complete: (res) => {
						console.log("阿萨德",res)
					}
				})
			},
			
			toUploadPage(){
				uni.navigateTo({
					url:"/pages/uploadNoLine/uploadNoLine"
				})
			},
			
			toGemhxom(){
				uni.navigateTo({
					url:"/pages/gengxin/gengxin"
				})
			},
			
			isShowInfoClick(){
				this.isShowInfo=!this.isShowInfo;
			},
			// 业绩
			toYeji(type){
				uni.navigateTo({
					url:"/pages/tongjiNum/tongjiNum?type="+type
				})
			},
			
			lixianClick(){
				this.isLixian=this.isLixian==1?2:1;
			},
			
			
			
			toSqlite(){
				uni.navigateTo({
					url:"/pages/sqlLite/sqlLite",
					complete: (res) => {
						console.log("跳转结果",res)
					}
				})
			},
			
			
			// 兼职扫码人员登录下面的弃用了 
			isLogin2(){
				console.log("asdas",this.form)
				if(!this.scanInfo){
					this.$tools.showToast("请先扫展会二维码");
					return false;
				}
				if(this.form.staffName==""){
					this.$tools.showToast("请输入用户名");
					return false;
				}
				if(this.form.phoneNum==""){
					this.$tools.showToast("请输入手机号");
					return false;
				}
				if(!this.$tools.isPhoneNumber(this.form.phoneNum)){
					this.$tools.showToast("请输入正确的手机号");
					return false;
				}
				return true;
			},
			loginstaffpda(){
				if(!this.isLogin2()){
					return false;
				}
				var data=this.form;  
				uni.setStorageSync("form_login",data);
				uni.setStorageSync("isLixian",this.isLixian)
				this.selCountNUm();//查询当天总数量
				if(this.isLixian==2){
					uni.setStorageSync("userInfo",data)
					
					setTimeout(res=>{
						uni.reLaunch({
							url:"/pages/sanCode/sanCode"
						})
					},200)
					
					return false;
				} 
				
				this.$axios
					.axios('post', this.$paths.loginstaffpda, data)
					.then(res => {    
						console.log("登录结果",res,data);
						if (res.code == 200) {
							data.userId=res.data;
							uni.setStorageSync("userInfo",data)
							
							setTimeout(res=>{
								uni.reLaunch({  
									url:"/pages/sanCode/sanCode"
								})
							},200)
							
						} else {
							this.$tools.showToast(res.msg);
						}
					})
					.catch(err => {});
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
							this.createTable()
						})
						.catch(error => {
							console.log("数据库开启失败");
						});
				}else{
					this.createTable()
				}
			},
			// 关闭数据库
			closeSQL() {
				// 这个是查询有没有打开数据库
				let open = DB.isOpen();
				if (open) {
					DB.closeSqlite()
						.then(res => {
							console.log("数据库已关闭");
						})
						.catch(error => {
							console.log("数据库关闭失败");
						});
				}
			},
			// 删除表
			dropTable(tableName){
				DB.dropTable(tableName).then(res => {
							console.log("删除"+tableName+"表成功");
						})
						.catch(error => {
							console.log("删除"+tableName+"表失败");
						});
			},
			// 创建表
			createTable() { 
				let open = DB.isOpen();
				if (open) {  
					let sql =
						'"id" INTEGER PRIMARY KEY AUTOINCREMENT,"loginName" text,"loginPhone" text,"exhId" text,"activityId" text,"doorId" text,"unionid" text,"userId" text,"type" text,"isLine" text,"isUpload" text,"createTime" text';
					// 创建表 DB.(表名, 表的列)
					DB.createTable("scan_info", sql)
						.then(res => {
							console.log("创建scan_info表成功",res);
						})   
						.catch(error => {
							console.log("创建表失败");
							this.$tools.showToast("创建scan_info表失败",error);
						});
						  
					let sql1 =
						'"id" INTEGER PRIMARY KEY AUTOINCREMENT,"exhId" text,"exhName" text,"doorId" text,"loginName" text,"loginPhone" text,"dayTime" text, "count" text ,"createTime" text';
						  
					DB.createTable("statistics_num", sql1)
						.then(res => {
							console.log("创建statistics_num表成功",res);
						})            
						.catch(error => {  
							console.log("创建表失败",error);
							this.$tools.showToast("创建statistics_num表失败",error);
						});
				} else {  
					console.log("数据库未打开");
					this.$tools.showToast("数据库未打开");
				}
			},
			
			//查询扫码统计数据
			selCountNUm(){
				var time=this.formatDate(new Date().getTime());
				console.log("查询时间",time)
				this.time=time;   
				var scanInfo=this.scanInfo;
				DB.selectTableData("statistics_num", 'exhId',scanInfo[1],'doorId',scanInfo[2],'loginPhone',this.form.phoneNum,'dayTime',time)
					.then(res => {
						console.log("扫码统计结果",res)
						this.saomare=JSON.stringify(res)
						if(res.length<=0){  
							this.addStatisticsData();//添加一条记录
						}     
					})               
					.catch(error => {  
						console.log("查询扫码统计数据失败",error);
						this.$tools.showToast("查询扫码统计数据失败");
					});
			},
			// 插入统计数据
			addStatisticsData(){
				var time=this.formatDate(new Date().getTime());
				var obg={
					exhId:this.scanInfo[1],
					exhName:this.scanInfo[0],
					doorId:this.scanInfo[2],
					loginName:this.form.staffName,
					loginPhone:this.form.phoneNum,
					dayTime:time,
					count:"0",
					createTime:this.formatDate(new Date().getTime())
				}
				  
				let sql = `'${obg.exhId}','${obg.exhName}','${obg.doorId}','${obg.loginName}','${obg.loginPhone}','${obg.dayTime}','${obg.count}','${obg.createTime}'`;
				let condition = "'exhId','exhName','doorId','loginName','loginPhone','dayTime','count','createTime'";
				// 新增 DB.insertTableData(表名, 对应表头列的数据)
				DB.insertTableData("statistics_num", sql, condition)
					.then(res => {
						console.log("新增数据成功",res);
					})  
					.catch(error => {
						console.log("失败", error);
					});
			},
			
			
			
			
			
			
			
			
			
			formatDate(data) {
				let now = new Date(data);
				var year = now.getFullYear(); //取得4位数的年份
				var month =
					now.getMonth() + 1 < 10 ?
					"0" + (now.getMonth() + 1) :
					now.getMonth() + 1;
				var date = now.getDate() < 10 ? "0" + now.getDate() :( now.getDate());
				var hour = now.getHours() < 10 ? "0" + now.getHours() : now.getHours();
				var minute =
					now.getMinutes() < 10 ? "0" + now.getMinutes() : now.getMinutes();
				var second =
					now.getSeconds() < 10 ? "0" + now.getSeconds() : now.getSeconds();
				return (
					year +
					"-" +  
					month +
					"-" +
					(date) 
				);
			},
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			// 下面是后台管理人员的逻辑
			isLogin(){
				if(this.form.username==""){
					this.$tools.showToast("请输入用户名");
					return false;
				}
				if(this.form.password==""){
					this.$tools.showToast("请输入密码");
					return false;
				}
				return true;
			},
			toLogin(){
				if(!this.isLogin()){
					return false;
				}
				var data=this.form;
				uni.setStorageSync("form_login",data);
				this.$axios
					.axios('post', this.$paths.loginpdaapi, data)
					.then(res => {    
						if (res.code == 200) {
							uni.setStorageSync("userInfo",res)
							this.$tools.showToast("登录成功");
							setTimeout(res=>{
								uni.redirectTo({
									url:"/pages/sanCode/sanCode"
								})
							},1000)
						} else {
							this.$tools.showToast(res.msg);
						}
					})
					.catch(err => {});
			},
		}
	}
</script>

<style>
	@import url(login.css);
</style>
