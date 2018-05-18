import {observable, computed} from 'mobx';
import {localStore} from 'jeselvmo';
import {LOGIN_USER, TOKEN} from "../js/constants";

class AppStore {

	@computed
	get token() {
		return localStore.get(TOKEN);
	}

	set token(token) {
		localStore.set(TOKEN, token)
	}

	@computed
	get loginUser() {
		return localStore.get(LOGIN_USER);
	}

	// 存储登录用户
	set loginUser(loginUser) {
		localStore.set(LOGIN_USER, loginUser);
	}

}

const appStore = new AppStore();

export default appStore;
