import {action, observable} from 'mobx';
import utils from "../../js/utils";
import minerApi from "../../apis/minerApi";
import notification from "antd/lib/notification";

class MinerStore {

	@observable list = [];
	@observable searchInfo = [];

	@action
	fetchList() {
		return new Promise((resolve, reject) => {
			minerApi.list()
				.then((result) => {
					this.srcList = result.obj.list;
					this.list = result.obj.list;
					let searchInfo = result.obj.searchInfo;
					searchInfo.forEach((item) => {
						item.status = {...item.value};
					});
					this.searchInfo = searchInfo;
					console.log(this.searchInfo)
					resolve()
				})
				.catch((error) => {
					notification.error({
						message: '加载矿工数据失败',
						description: utils.getErrorMessage(error)
					})
				})
		})
	}

}

export default MinerStore;
