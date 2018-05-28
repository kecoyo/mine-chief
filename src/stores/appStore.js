import {action, computed, observable} from 'mobx';
import {localStore} from 'jeselvmo';
import {TICKET, TOKEN} from "../js/constants";
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

	@computed
	get ticket(){
		localStore.get(TICKET)
	}

	setTicket(ticket){
		localStore.set(TICKET, ticket)
	}


	@action
	fetchLoginUser() {
		systemApi.getLoginUser()
			.then((result) => {
				this.loginUser = result.obj
				this.setTicket(result.obj.ticket)
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
