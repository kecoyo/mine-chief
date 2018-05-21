import {action, observable} from 'mobx';
import utils from "../../js/utils";
import minerApi from "../../apis/minerApi";
import notification from "antd/lib/notification";

class MinerStore {

	@observable allList = [];
	@observable list = [];
	@observable searchInfo = [];

	@action
	fetchList() {
		minerApi.list()
			.then((result) => {
				this.allList = result.obj.list;
				this.list = result.obj.list;
				let searchInfo = result.obj.searchInfo;
				searchInfo.forEach((item) => {
					item.status = {...item.value};
				});
				this.searchInfo = searchInfo;
			})
			.catch((error) => {
				notification.error({
					message: '加载矿工数据失败',
					description: utils.getErrorMessage(error)
				})
			})
	}

	filterData() {
		this.list = this.allList.filter((d) => {
			for (let item of this.searchInfo) {
				for (let vk in item.status) {
					if (d[item.filed] == vk && !item.status[vk]) {
						return false
					}
				}
			}
			return true
		})
	}

}

export default MinerStore;
