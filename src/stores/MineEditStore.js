import {observable, computed, action} from 'mobx';
import mineApi from "../apis/mineApi";
import utils from "../js/utils";
import msgBox from "../js/msgBox";


class MineEditStore {

	@observable mine = {};

	constructor() {
		this.mine = {
			id: '',
			name: '苏挖庄',
			ips: '192.168.0.100-200,192.168.1.50-200',
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
			msgBox.success('保存成功！');
		}).catch((error) => {
			msgBox.error('保存失败！' + utils.getErrorMessage(error));
		})
	}

}

export default MineEditStore;
