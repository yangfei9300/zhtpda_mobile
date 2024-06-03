
<script>
	export default {             
		globalData:{
		},        
		onLaunch: function() {   
			
		},       
		onShow: function() {
			console.log('App Show');
		}, 
		onHide: function() {  
			console.log('App Hide');
		},
		onUnload: function()  {
			console.log("退出软件")
		}
	}  
</script>  

<style  lang="scss">
	/*每个页面公共css */
	@import url("/style/style.css");
	@import url("/style/style_rpx.css");
	@import "/style/ty_style_scss.scss";
</style>
