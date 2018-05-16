import {request} from 'jeselvmo';
import env from '../js/env';

/**
 * 代数接口
 */
const generationApi = {
	/**
	 * 查询电车电池代数，type：1=电车/2=电池
	 */
	getGenerationlist: (params) => request.get(env.apiPath + 'init/listGenerations', params),
};

export default generationApi
