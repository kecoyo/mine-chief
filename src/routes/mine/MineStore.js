import {action, observable} from 'mobx';
import mineApi from "../../apis/mineApi";
import utils from "../../js/utils";
import notification from "antd/lib/notification";


class MineStore {

	@observable list = [];
	@observable pagination = {total: 200};

	@action
	fetchList() {
		mineApi.list()
			.then((result) => {
				this.list = result.obj
			})
			.catch((error) => {
				notification.error({
					message: '加载矿场数据失败',
					description: utils.getErrorMessage(error)
				})
			})
	}

}

export default MineStore;
