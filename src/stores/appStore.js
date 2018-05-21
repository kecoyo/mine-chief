import {action, computed, observable} from 'mobx';
import {localStore} from 'jeselvmo';
import {TOKEN} from "../js/constants";
import systemApi from "../apis/systemApi";
import utils from "../js/utils";
import routerHistory from "../js/routerHistory";
import notification from "antd/lib/notification";

class AppStore {

	@observable loginUser = null;

	@computed
	get token() {
		return localStore.get(TOKEN);
	}

	set token(token) {
		localStore.set(TOKEN, token)
	}

	@action
	fetchLoginUser() {
		systemApi.getLoginUser()
			.then((result) => {
				this.loginUser = result.obj
			})
			.catch((error) => {
				notification.error({
					message: '获取用户信息失败!',
					description: utils.getErrorMessage(error)
				})
			})
	}

	@action
	logoff() {
		this.token = null;
		routerHistory.push('/login');
	}

}

const appStore = new AppStore();

export default appStore;
