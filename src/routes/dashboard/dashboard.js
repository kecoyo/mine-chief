import {action, observable} from 'mobx';
import mineApi from "../../apis/dashboardApi";
import utils from "../../js/utils";
import notification from "antd/lib/notification";


class dashboard {

	@observable list = [];

	constructor() {
		this.fetchList();
	}

	@action
	fetchList() {
		dashboardApi.dashboard()
			.then((result) => {
				this.list = result.obj
			})
			.catch((error) => {
				notification.error({
					message: '获取矿场信息失败',
					description: utils.getErrorMessage(error)
				})
			})
	}

}

export default dashboard;
