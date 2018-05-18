import {request} from 'jeselvmo';
import env from '../js/env';

/**
 * 矿工管理Api
 */
const minerApi = {

	/**
	 * 矿场列表
	 * @param params {mineId = null}
	 */
	list: (params) => request.get(env.apiPath + 'MinerApi/list', params),

};

export default minerApi
