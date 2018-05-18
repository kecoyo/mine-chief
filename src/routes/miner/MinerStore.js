import {action, observable} from 'mobx';
import utils from "../../js/utils";
import minerApi from "../../apis/minerApi";
import msgBox from "../../js/msgBox";

class MinerStore {

	@observable list = [];

	@action
	fetchList() {
		minerApi.list()
			.then((result) => {
				this.list = result.obj
			})
			.catch((error) => {
				msgBox.error('加载矿工列表失败！', utils.getErrorMessage(error));
			})
	}

}

export default MinerStore;
