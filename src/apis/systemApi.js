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

	// 用户退出
	logout: (params) => request.get(env.apiPath + 'account/logout', params),

	// 修改密码
	updatePassword: (params) => request.get(env.apiPath + 'account/updatePassword', params),

	// 测试登录
	testToken: (params) => request.get(env.apiPath + 'account/getListPage', params),

	// 获取系统菜单
	listMenu: (params) => request.get(env.apiPath + 'permission/listMenuByUserId', params),

	// 获取系统按钮
	listButton: (params) => request.get(env.apiPath + 'permission/listPermissionByUserId', params),



};

export default systemApi
