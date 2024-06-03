<template>
	<view class="colonn center_center">
		<view class="roww w-710 border_bottom" style="padding:20rpx 20rpx;font-size: 30rpx;">
			<view>当前展会</view>
			<view class="allline"></view>

			<view style="color: #000000;text-align: right;" class="w-500 txtShowLength">
				<block v-if="exhInfo">
					{{exhInfo[0]}}
				</block>
				<block v-else>
					请选择展会
				</block>
			</view>
		</view>
		<view class="roww w-710 border_bottom" style="padding:20rpx 20rpx;font-size: 30rpx;">
			<view>当前状态</view>
			<view class="allline"></view>
			<view style="color: #000000;text-align: right;" class="w-500 txtShowLength">
				<block v-if="isLixian==2">
					离线模式
				</block>
				<block v-else>
					在线模式
				</block>
			</view>
		</view>
		<view class="roww w-710 border_bottom" style="padding:20rpx 20rpx;font-size: 30rpx;">
			<view>懒人模式（连续扫描）</view>
			<view class="allline"></view>
			<view style="color: #000000;text-align: right;font-weight: bold;" class="w-300 "
				@click.stop="lianxuIsClick">
				{{lianxuIs?'点击关闭':'点击开启'}}
			</view>
		</view>

		<view class="roww w-710 border_bottom" style="padding:20rpx 20rpx;font-size: 30rpx;">
			<view>成功音效</view>
			<view class="allline"></view>
			<view style="color: #000000;text-align: right;font-weight: bold;" class="w-300 ">
				<view v-for="(item,index) in successMp3"
				@click.stop="changeMusic(0,index)"
				>
					<view style="color: green;" v-if="successIndex==index"
					
					>
						{{item.name}}
					</view>
					<view style="color: red;" v-else>
						{{item.name}}
					</view>
				</view>
			</view>
		</view>

		<view class="roww w-710 border_bottom" style="padding:20rpx 20rpx;font-size: 30rpx;">
			<view>失败音效</view>
			<view class="allline"></view>
			<view style="color: #000000;text-align: right;font-weight: bold;" class="w-300 ">
				<view v-for="(item,index) in loseMp3"
				@click.stop="changeMusic(1,index)"
				>
					
					<view style="color: green;" v-if="loseIndex==index">
						{{item.name}}
					</view>
					<view style="color: red;" v-else>
						{{item.name}}
					</view>
				</view>
			</view>
		</view>


		<view class="btncen center_center colonn" style="margin-top: 40%;">
			<!-- <block v-if="lianxu"> -->
			<!--  @click="continueScanFunc(false)" -->
			<view style="color: #ffffff;font-size: 40rpx;line-height: 30rpx;font-weight: bold;"
				class="colonn center_center" @click.stop="saomaClick">
				<view>核销手机号</view>
				<view style="color: #ffffff;margin-top: 20rpx;margin-top: 45rpx;">{{scanResult}}</view>
			</view>
			<!-- </block> -->
			<!-- <block v-else> -->
			<!-- <view style="color: #ffffff;font-size: 40rpx;" @click="continueScanFunc(true)">开启连续扫描</view> -->
			<!-- </block> -->

		</view>

		<!-- 		<view class="btncen1" style="margin-top: 40%;text-align: center;font-size: 35rpx;text-align: left;padding-left: 25rpx;">
			核销手机号：{{scanResult}}</view> -->

		<view class="roww center_center width poab" style="bottom: 40rpx;">
			<view class="w-50"></view>
			<view style="color:#000000;">
				<view style="color:#000000;">
					<block v-if="exhInfo">
						{{exhInfo[3]}}
					</block>
					<block v-else>
						请选择门
					</block>
				</view>
			</view>
			<view class="allline roww center_center">
				<view v-if="selResultCount">今天总人数：{{selResultCount.count}}</view>
				<view v-else>数量统计未开放</view>

			</view>
			<view style="color:#2E7EFC;" @click.stop="toLogin">退出登录</view>
			<view class="w-50"></view>
		</view>

	</view>
</template>

<script>
	import DB from '@/common/sqlite.js'
	const innerAudioContext = uni.createInnerAudioContext() //想要实现暂停功能就要把该对象变为全局属性

	export default {
		data() {
			return {
				zhanhuiInfo: null,
				exhList: ['展会1', '展会2'],
				cishuNum: 0,
				lianxu: false,
				invTime: "1000",
				menType: null,
				menList: [],
				exhInfo: null,
				scanResult: "", //扫码结果
				isLixian: 1, //2是离线  1在线
				selResultCount: null, //统计表的实体类
				lianxuIs: false,

				successMp3: [
					
					{
					'name': '成功音效1',
					'url': 'https://shandongtibohui.zsyflive.com/profile/upload/hbgw/正常成功.mp3'
					}, 
					{
					'name': '成功音效2',
					'url': 'https://shandongtibohui.zsyflive.com/profile/upload/hbgw/成功2.mp3'
					}, 
					
				
				],
				successIndex: 0,
				loseMp3: [
					
					{
						'name': '失败音效1',
						'url': 'https://shandongtibohui.zsyflive.com/profile/upload/hbgw/啊哦.mp3'
					},
					{
						'name': '失败音效2',
						'url': 'https://shandongtibohui.zsyflive.com/profile/upload/hbgw/选修失败.mp3'
					},
					{
						'name': '失败音效3',
						'url': 'https://shandongtibohui.zsyflive.com/profile/upload/hbgw/刀剑.mp3'
					},
					{
					'name': '失败音效4',
					'url': 'https://shandongtibohui.zsyflive.com/profile/upload/hbgw/成功提示音 (7)_爱给网_aigei_com.mp3'
					}, 

				],
				loseIndex: 0,
			}
		},
		onLoad() {



			var exhInfo = uni.getStorageSync("exhInfo")
			console.log("-----onLoad-----当前扫码信息", exhInfo);
			if (!exhInfo) {
				this.$tools.showToast("请扫展会二维码进行登录");
				return false;
			}
			var isLixian = uni.getStorageSync("isLixian")
			if (isLixian) {
				this.isLixian = isLixian;
			}
			this.exhInfo = exhInfo;
			this.openSQL();
			
			
			var successIndex = uni.getStorageSync("successIndex")
			var loseIndex = uni.getStorageSync("loseIndex")
			if(successIndex){
				this.successIndex=successIndex;
			}
			if(loseIndex){
				this.loseIndex=loseIndex;
			}
		},

		onShow() {
			console.log("-----onShowonShow-----当前扫码信息", );



		},
		onUnload() {

		},

		methods: {
			// 切换音效
			changeMusic(type,index){
				if(type==1){
					this.loseIndex=index;
				}else{
					this.successIndex=index;
				}
				
				uni.setStorageSync("loseIndex",this.loseIndex)
				 uni.setStorageSync("successIndex",this.successIndex)
				
			},
			// 播放音效
			yinxiaoPlay(index) {
				if (index == 1) {
					const url = this.successMp3[this.successIndex].url
					innerAudioContext.src = url;
					innerAudioContext.play();
				} else {
					const url = this.loseMp3[this.loseIndex].url
					innerAudioContext.src = url;
					innerAudioContext.play();
				}

			},

			// 修改是否连续扫描硬件
			lianxuIsClick() {
				this.lianxuIs = !this.lianxuIs;
			},
			saomaClick() {
				uni.scanCode({
					onlyFromCamera: true,
					success: (res) => {

						this.initScan(res.result);
					}
				});
			},

			// 初始化扫描
			initScan(qrvalue) {
				if (!this.exhInfo) {
					this.$tools.showToast("请先前往登录页面选择展会");
					return false;
				}
				var barcode = qrvalue;
				if (barcode.indexOf("-") >= 0) {
					//核销活动
					this.hexiaoLuntan(barcode);
				} else if (this.$tools.isphone(barcode)) {
					//核销展会预报名入场
					this.hexiao(barcode);
				} else {
					this.$tools.showToast("请勿扫描其他码-----" + barcode);
					this.scanResult = barcode;
					this.yinxiaoPlay(0);
				}
			},
			// 核销论坛入场
			hexiaoLuntan(data1) {

				data1 = data1.split("-");
				var data = {
					exhId: this.exhInfo[1],
					unionid: data1[0],
					userId: uni.getStorageSync("userInfo").userId,
					activityId: data1[1],
				};
				if (this.isLixian == 2) { //离线
					this.saveZhanhui(data1[0], data1[1], 2, false); //1是展会2是论坛  falses是离线
					return
				}
				console.log("开始核销论坛", this.$paths.activitypda, data)
				this.$axios
					.axios('post', this.$paths.activitypda, data)
					.then(res => {
						console.log("论坛结果", res, res.code == 200)
						if (res.code == 200) {
							this.scanResult = data1[0];
							this.$tools.showToast(data1[0] + "论坛核销成功");

							this.saveZhanhui(data1[0], data1[1], 2, true); //1是展会2是论坛  true是在线
						} else {
							this.$tools.showToast(res.msg);
							this.scanResult = res.msg;
						}
					})
					.catch(err => {
						console.log("报错", err)
					});
			},
			// 核销展会入场
			hexiao(unionid) {

				// 扫码结果
				var data = {
					exhId: this.exhInfo[1],
					params: {
						unionid: unionid,
						userId: uni.getStorageSync("userInfo").userId,
						doorId: this.exhInfo[2],
					},
					// 可以在这里添加大门信息
				};
				if (this.isLixian == 2) { //离线
					this.saveZhanhui(unionid, "", 1, false); //1是展会2是论坛  false离线
					return;
				}
				this.$axios
					.axios('post', this.$paths.visitpdaapi, data)
					.then(res => {
						console.log("和小爱", res)
						if (res.code == 200) {
							this.$tools.showToast(unionid + "核销成功");
							this.scanResult = unionid;
							this.saveZhanhui(unionid, "", 1, true); //1是展会2是论坛  true在线

							this.yinxiaoPlay(1);
							setTimeout(res => {
								if (this.lianxuIs) {
									this.saomaClick();
								}
							}, 200)

						} else {
							this.yinxiaoPlay(0);
							this.$tools.showToast(res.msg);

						}
					})
					.catch(err => {

						console.log("报错了", err)
					});
			},
			// 获取展会列表
			getExhList() {
				var data = {};
				console.log("获取展会列表", data, this.$paths.listexhpda)
				this.$axios
					.axios('post', this.$paths.listexhpda, data)
					.then(res => {
						console.log("展会列博鳌", res)
						if (res.code == 200) {
							this.exhList = res.rows;
							if (uni.getStorageSync("zhanhuiInfo")) {
								uni.removeStorageSync("zhanhuiInfo")
							}

						} else {
							this.$tools.showToast(res.msg);
						}
					})
					.catch(err => {});
			},

			// 获取大门列表
			getMenList() {
				var data = {
					exhId: uni.getStorageSync("zhanhuiInfo").id,
				};
				console.log("获取大门列表", data, this.$paths.listmenpda);
				this.$axios
					.axios('post', this.$paths.listmenpda, data)
					.then(res => {
						if (res.code == 200) {
							this.menList = res.data;
						} else {
							this.menList = [];
							this.$tools.showToast(res.msg);
						}
					})
					.catch(err => {});
			},

			// 展会修改
			exhChange(res) {
				console.log(res)
				this.zhanhuiInfo = this.exhList[res.detail.value];

				uni.setStorageSync("zhanhuiInfo", this.zhanhuiInfo)
				uni.removeStorageSync("menType")
				this.menType = null;
				this.getMenList();
			},
			// 修改门
			menChange(res) {
				this.menType = this.menList[res.detail.value];
				uni.setStorageSync("menType", this.menType)
			},
			// 退出登录
			toLogin() {
				wx.showModal({
					title: "提示",
					content: "确定要退出吗",
					success: (res) => {
						if (res.confirm) {
							uni.reLaunch({
								url: "/pages/login/login"
							})
						} else if (res.cancel) {
							console.log('用户点击取消');
						}
					}
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
							this.selectHexiaoNum();
						})
						.catch(error => {
							console.log("数据库开启失败");
						});
				} else {
					this.selectHexiaoNum();
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

			// 离线保存展会数据
			saveZhanhui(unionid, activityId, type, isLine) {
				console.log("离线保存", unionid, activityId, type)
				var userInfo = uni.getStorageSync("userInfo");
				var exhInfo = uni.getStorageSync("exhInfo")
				if (!userInfo) {
					this.$tools.showToast("请先登录");
					return false;
				}
				if (!exhInfo) {
					this.$tools.showToast("请先扫码获取展会信息");
					return false;
				}
				var obg = {
					loginPhone: userInfo.phoneNum,
					loginName: userInfo.staffName,
					exhId: exhInfo[1],
					activityId: activityId,
					doorId: exhInfo[2],
					unionid: unionid,
					userId: "", //离线没有这个
					type: type,
					'isLine': isLine,
					createTime: this.formatDate(new Date().getTime())
				}
				if (this.isLixian == 1 || (userInfo && userInfo.userId)) {
					obg.userId = userInfo.userId;
				}
				obg.isUpload = false;

				let time = this.formatDate(new Date().getTime());
				let sql =
					`'${obg.loginPhone}','${obg.loginName}','${obg.exhId}','${obg.activityId}','${obg.doorId}','${obg.unionid}','${obg.userId}','${obg.type}','${obg.isLine}','${obg.isUpload}','${obg.createTime}'`;
				let condition =
					"'loginPhone','loginName','exhId','activityId','doorId','unionid','userId','type','isLine','isUpload','createTime'";
				// 新增 DB.insertTableData(表名, 对应表头列的数据)
				DB.insertTableData("scan_info", sql, condition)
					.then(res => {
						console.log("新增数据成功");
						this.updateHexiaoNum();
						if (!isLine) {
							this.scanResult = unionid;
							if (type == 1) {
								this.$tools.showToast(unionid + "入场离线核销成功");
							} else if (type == 2) {
								this.$tools.showToast(unionid + "论坛离线核销成功");
							}
						}

					})
					.catch(error => {
						console.log("失败", error);
					});
			},

			// 查询当前核销的数量
			selectHexiaoNum() {
				var time = this.formatDate1(new Date().getTime());
				var exhInfo = this.exhInfo;
				var userInfo = uni.getStorageSync("userInfo");
				DB.selectTableData("statistics_num", 'exhId', exhInfo[1], 'doorId', exhInfo[2], 'loginPhone', userInfo
						.phoneNum,
						'dayTime', time)
					.then(res => {
						console.log("查询成功", res);
						if (res.length > 0) {
							var selResultCount = res[0];
							selResultCount.count = parseInt(selResultCount.count);
							this.selResultCount = selResultCount;
						} else {
							this.$tools.showToast("查询失败");
						}
					})
					.catch(error => {});
			},
			// 修改核销的数量
			updateHexiaoNum() {
				var selResultCount = this.selResultCount;
				selResultCount.count = selResultCount.count + 1;
				var updateTxt = "count=" + parseInt(selResultCount.count);
				this.selResultCount = selResultCount;
				DB.updateTableData("statistics_num", updateTxt, "id", selResultCount.id)
					.then(res => {
						console.log("修改成功", res);
					})
					.catch(error => {
						console.log("修改数量失败", error);
						this.$tools.showToast("修改数量失败");
					});
			},
			// 提示框
			showToast: function(str) {
				uni.showToast({
					icon: "none",
					title: str,
					mask: true
				});
			},

			// 时间戳转年月日
			formatDate(data) {
				let now = new Date(data);
				var year = now.getFullYear(); //取得4位数的年份
				var month =
					now.getMonth() + 1 < 10 ?
					"0" + (now.getMonth() + 1) :
					now.getMonth() + 1;
				var date = now.getDate() < 10 ? "0" + now.getDate() : now.getDate();
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
					date +
					" " +
					hour +
					":" +
					minute +
					":" +
					second
				);
			},

			formatDate1(data) {
				let now = new Date(data);
				var year = now.getFullYear(); //取得4位数的年份
				var month =
					now.getMonth() + 1 < 10 ?
					"0" + (now.getMonth() + 1) :
					now.getMonth() + 1;
				var date = now.getDate() < 10 ? "0" + now.getDate() : (now.getDate());
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
					date
				);
			}
		}
	}
</script>

<style>
	.btncen {
		width: 700rpx;
		height: 250rpx;
		background-color: green;
		line-height: 350rpx;
		text-align: center;
		color: white;
		border-radius: 2%;
		color: white;
	}

	.btncen1 {
		width: 750rpx;
	}

	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.logo {
		height: 200rpx;
		width: 200rpx;
		margin-top: 200rpx;
		margin-left: auto;
		margin-right: auto;
		margin-bottom: 50rpx;
	}

	.text-area {
		display: flex;
		justify-content: center;
	}

	.title {
		font-size: 36rpx;
		color: #8f8f94;
	}
</style>