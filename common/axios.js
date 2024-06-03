//封装请求文件
export default{
	axios(method,url,data){
		console.log("地址",url);
		uni.showLoading({
			'title':'加载中'
		})
		
		var header={
			'Content-Type':'application/json;charset=utf-8'
		};
		var userInfo=uni.getStorageSync("userInfo");
		if(userInfo){
			header.Authorization=userInfo.token;
		}
		
		return new Promise((resolve,reject)=>{
			uni.request({
				url: url,
				method:method,
				data:data,
				header:header,
				success:(res)=>{
					resolve(res.data)
				},
				fail:(err)=>{
					reject(err)
				},
				complete() {
					wx.hideLoading()
				}
			})
		})
	},
	axiosDate(method,url,data){
		console.log("提交的参数",url,JSON.stringify(data))
		uni.showLoading({
			'title':'加载中'
		})
		return new Promise((resolve,reject)=>{
			uni.request({
				url: url,
				method:method,
				data:data,
				header:{
					'Content-Type':'application/json;charset=utf-8',
					'auth':uni.getStorageSync("DataHt")
				},
				success:(res)=>{
					resolve(res.data)
				},
				fail:(err)=>{
					reject(err)
				},
				complete() {
					wx.hideLoading()
				}
			})
		})
	},
}
  