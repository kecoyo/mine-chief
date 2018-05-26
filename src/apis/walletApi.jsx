import {request} from 'jeselvmo';
import env from '../js/env';

/**
 * 钱包管理接口
 */
const walletApi = {

	/**
	 * 钱包列表
	 * @param params { }
	 */
	list: (params) => request.get(env.apiPath + 'WalletApi/list', params),

	/**
	 * 保存或修改钱包
	 * @param params { id, name, coineType, walletAddress }
	 */
	save: (params) => request.get(env.apiPath + 'WalletApi/add', params),

	/**
	 * 钱包列表
	 * @param params { id }
	 */
	delete: (params) => request.get(env.apiPath + 'WalletApi/delete', params),

	/**
	 * 获取钱包收益信息
	 * @param params { }
	 */
	details: (params) => request.get(env.apiPath + 'WalletApi/walletInfo', params),

};

export default walletApi
