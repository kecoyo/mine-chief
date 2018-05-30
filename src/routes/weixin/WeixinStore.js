import {action, observable} from 'mobx';
import userApi from "../../apis/userApi";
import utils from "../../js/utils";
import notification from "antd/lib/notification";


class WeixinStore {

	@observable list = [];

	@action
	bindList() {
		userApi.bindList()
			.then((result) => {
				this.list = result.obj
			})
			.catch((error) => {
				notification.error({
					message: '加载绑定信息失败',
					description: utils.getErrorMessage(error)
				})
			})
	}
}

export default WeixinStore;
