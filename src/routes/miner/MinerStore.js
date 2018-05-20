import {action, observable} from 'mobx';
import utils from "../../js/utils";
import minerApi from "../../apis/minerApi";
import notification from "antd/lib/notification";

class MinerStore {

	@observable list = [];

	@action
	fetchList() {
		minerApi.list()
			.then((result) => {
				this.list = result.obj
			})
			.catch((error) => {
				notification.error({
					message: '加载矿工数据失败',
					description: utils.getErrorMessage(error)
				})
			})
	}

}

export default MinerStore;
