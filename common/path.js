
// 测试
export const BASE_URL_ZLF = 'http://192.168.0.22:9004'
        
// 正式 prod-api   
// export const BASE_URL_ZLF = 'https://frdzlfapi.zsyflive.com'
// 是否报名  
const loginpdaapi=BASE_URL_ZLF + '/api/pda/login'
// 获取展会列表
const listexhpda=BASE_URL_ZLF + '/api/pda/exh/list'   
const visitpdaapi=BASE_URL_ZLF + '/api/pda/visit'
const listmenpda=BASE_URL_ZLF + '/api/pda/door/list'
// 核销论坛  
const activitypda=BASE_URL_ZLF + '/api/pda/activity'   
// 兼职登录 
const loginstaffpda=BASE_URL_ZLF + '/api/pda/staff/login'
// 获取是否热更新
const versionpda=BASE_URL_ZLF + '/api/pda/version'
      

 export default {
	 loginpdaapi,listexhpda,visitpdaapi,listmenpda,
	 activitypda,loginstaffpda,versionpda,
 }
