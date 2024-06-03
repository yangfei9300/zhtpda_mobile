<template>
	<view>
		<view class="colonn">
			<button class="xiayibubtn" @longpress="clearSaanInfo('statistics_num')">清理登录用户表</button>
			<button class="xiayibubtn" @longpress="clearSaanInfo('scan_info')">清理登录扫码详情表</button>
		</view>
	</view>
</template>

<script>
	import DB from '@/common/sqlite.js'
	export default {
		data() {
			return {
				
			}
		},
		onLoad() {
			this.openSQL();
		},
		methods: {
			
			clearSaanInfo(tableName){
				uni.showModal({
					confirmColor:"#ff0000",      
					title: '警告警告！！！',
					content: '确定要清空'+tableName+'吗？（联系管理员处理）',
					success:  (res)=> {   
						if (res.confirm) {
							DB.deleteTableData(tableName).then(res1=>{
								this.$tools.showToast(tableName+"数据清空成功");
							}).catch(error => {  
								this.$tools.showToast("数据清空失败");
							});  
						} else if (res.cancel) {
							
						}
					}
				});
			},
			
			openSQL() {
				// 这个是查询有没有打开数据库
				let open = DB.isOpen();
				if (!open) {
					DB.openSqlite()
						.then(res => {
							console.log("数据库已打开");
							this.$tools.showToast("数据库已打开");
						})  
						.catch(error => {
							console.log("数据库开启失败");
							this.$tools.showToast("数据库开启失败");
						});
				}else{
					this.$tools.showToast("数据库早已打开");
				}
			},
		}
	}
</script>

<style>
@import url(clearData.css);
</style>
