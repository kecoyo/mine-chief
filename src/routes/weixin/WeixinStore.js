import {action, observable} from 'mobx';
import userApi from "../../apis/userApi";
import utils from "../../js/utils";
import notification from "antd/lib/notification";


class WeixinStore {

	@observable list = [];

	@observable ticketStr = "";

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

	@action
	unBind(openid) {
		userApi.unbind({"openid":openid})
			.then((result) => {
				notification.success({
					message: result.message
				});
				this.bindList();
			})
			.catch((error) => {
				notification.error({
					message: '解除绑定失败',
					description: utils.getErrorMessage(error)
				})
			})
	}

	@action
	ticket() {
		userApi.ticket()
			.then((result) => {
				this.ticketStr = result.message ;
			})
			.catch((error) => {
				notification.error({
					message: '失败',
					description: utils.getErrorMessage(error)
				})
			})
	}
}

export default WeixinStore;
