import {request} from 'jeselvmo';
import env from '../js/env';

/**
 * 系统接口
 */
const systemApi = {

	/**
	 * 用户注册
	 * @param params {mail, phone, password, repassword}
	 */
	register: (params) => request.get(env.apiPath + 'UserApi/register', params),

	/**
	 * 用户登录
	 * @param params {mailOrPhone, password}
	 */
	login: (params) => request.get(env.apiPath + 'UserApi/login', params),

	/**
	 * 获取当前登录信息
	 * @param params {}
	 */
	getLoginUser: (params) => request.get(env.apiPath + 'UserApi/info', params),

	/**
	 * 获取短信验证码
	 * @param params { phone }
	 */
	phoneCode: (params) => request.get(env.apiPath + 'UserApi/phoneCode', params),
};

export default systemApi
