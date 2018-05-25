import {request} from 'jeselvmo';
import env from '../js/env';

/**
 * dashboardApi
 */
const dashboardApi = {

	/**
	 * 返回当前矿机概览首页统计接口
	 * @param params {}
	 */
	dashboard: (params) => request.get(env.apiPath + 'HomeApi/dashboard', params),

	/**
	 * 获取日志列表
	 * @param params {}
	 */
	logList: (params) => request.get(env.apiPath + 'LogApi/list', params),

};

export default dashboardApi
