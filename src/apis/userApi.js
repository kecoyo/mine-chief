import {request} from 'jeselvmo';
import env from '../js/env';

/**
 * 用户接口
 */
const userApi = {

	/**
	 * 用户注册
	 * @param params {mail, phone, oldPassword, password, repassword}
	 */
	update: (params) => request.get(env.apiPath + 'UserApi/update', params),



	/**
	 * 用户注册
	 * @param params {mail, phone, oldPassword, password, repassword}
	 */
	bindList: (params) => request.get(env.apiPath + 'UserApi/bindList', params),

	/**
	 * 解除绑定
	 * @param params {appid}
	 */
	unbind: (params) => request.get(env.apiPath + 'UserApi/bindList', params),


};

export default userApi
