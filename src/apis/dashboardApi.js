import {request} from 'jeselvmo';
import env from '../js/env';

/**
 * 矿场管理Api
 */
const dashboardApi = {

	/**
	 * 返回当前矿机概览首页统计接口
	 * @param params {}
	 */
	dashboard: (params) => request.get(env.apiPath + 'MineApi/list', params),


};

export default dashboardApi
