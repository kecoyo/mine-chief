import {action, observable} from 'mobx';
import mineApi from "../../apis/mineApi";
import utils from "../../js/utils";
import routerHistory from "../../js/routerHistory";
import notification from "antd/lib/notification";


class MineEditStore {

	@observable mine = {};

	constructor() {
		this.mine = {
			id: '',
			name: '',
			ips: '',
			token: '',
			config: [
				{
					type: "Antminer T9+",
					maxTemp: 98,
					tempTimes: 5,
					minRate: 9000,
					rateTimes: 1,
					canNotConnTimes: 1,
					offlineTimes: 1,
				},
				{
					type: "Antminer L3+",
					maxTemp: 98,
					tempTimes: 5,
					minRate: 9000,
					rateTimes: 1,
					canNotConnTimes: 1,
					offlineTimes: 1,
				}
			],
		}
	}

	@action
	fetchById(id) {
		mineApi.findById({id})
			.then((result) => {
				let mine = result.obj;
				mine.config = JSON.parse(mine.config);
				this.mine = mine
			})
			.catch((error) => {
				console.log(utils.getErrorMessage(error))
			})
	}

	@action
	saveOrUpdate() {
		let {mine} = this;
		mineApi.saveOrUpdate({
			id: mine.id,
			name: mine.name,
			ips: mine.ips,
			token: mine.token,
			config: JSON.stringify(mine.config)
		}).then((result) => {
			notification.success({
				message: '保存成功！'
			});
			if (!mine.id) {
				// 保存成功后，跳编辑页
				routerHistory.push('edit/' + result.obj.id)
			}
		}).catch((error) => {
			notification.success({
				message: '保存失败！',
				description: utils.getErrorMessage(error)
			});
		})
	}

}

export default MineEditStore;
