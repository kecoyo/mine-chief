import {request} from 'jeselvmo';
import env from '../js/env';

/**
 * 矿场管理Api
 */
const logApi = {

	/**
	 * 获取日志列表
	 * @param params {}
	 */
	list: (params) => request.get(env.apiPath + 'LogApi/list', params),

};

export default logApi
