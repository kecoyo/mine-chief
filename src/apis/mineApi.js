import {request} from 'jeselvmo';
import env from '../js/env';

/**
 * 矿场管理Api
 */
const mineApi = {

	/**
	 * 保存新增或修改矿场的信息
	 * @param params {id, name, token, ips, config}
	 */
	saveOrUpdate: (params) => request.get(env.apiPath + 'MineApi/saveOrUpdate', params),

	/**
	 * 删除矿场
	 * @param params {id}
	 */
	delete: (params) => request.get(env.apiPath + 'MineApi/delete', params),

	/**
	 * 修改矿场的token
	 * @param params {id}
	 */
	changeToken: (params) => request.get(env.apiPath + 'MineApi/changeToken', params),

};

export default mineApi
