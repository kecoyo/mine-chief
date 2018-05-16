import {request} from 'jeselvmo';
import env from '../js/env';


const cityApi = {
	// 查看所有城市
	list: (params) => request.get(env.apiPath + 'userManager/getAllCity', params),
};

export default cityApi
