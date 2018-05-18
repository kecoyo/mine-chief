import {observable, computed, action} from 'mobx';
import mineApi from "../apis/mineApi";
import utils from "../js/utils";


class MineStore {

	@observable list = [];
	@observable message = '';

	@action
	fetchList() {
		let {id, name, ips, token, config} = this;
		mineApi.list()
			.then((result) => {
				this.list = result.obj
			})
			.catch((error) => {
				console.log(error);
				this.errorMessage = utils.getErrorMessage(error);
			})
	}

}

export default MineStore;
