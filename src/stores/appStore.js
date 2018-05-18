import {observable, action, computed} from 'mobx';
import {localStore} from 'jeselvmo';
import {LOGIN_USER, TOKEN} from "../js/constants";
import systemApi from "../apis/systemApi";
import msgBox from "../js/msgBox";
import utils from "../js/utils";
import routerHistory from "../js/routerHistory";

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
				msgBox.error('获取用户信息失败！' + utils.getErrorMessage(error))
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
