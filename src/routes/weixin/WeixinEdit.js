import {action, observable} from 'mobx';
import userApi from "../../apis/userApi";
import utils from "../../js/utils";
import notification from "antd/lib/notification";


class WeixinEdit {

	@action
	unBind(openid) {
		alert(openid)
		userApi.unbind({"openid":openid})
			.then((result) => {
				this.list = result.obj
			})
			.catch((error) => {
				notification.error({
					message: '解除绑定失败',
					description: utils.getErrorMessage(error)
				})
			})
	}
}

export default WeixinEdit;
