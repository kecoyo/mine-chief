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
			restart:true
		}
	}

	@action
	fetchById(id) {
		mineApi.findById({id})
			.then((result) => {
				let mine = result.obj;
				this.mine = mine
			})
			.catch((error) => {
				console.log(utils.getErrorMessage(error))
			})
	}

	@action
	delete(id) {
		mineApi.delete({id})
			.then((result) => {
				notification.success({
					message: '删除成功！'
				});
				location.href ="/#/home/mine"
			})
			.catch((error) => {
				console.log(utils.getErrorMessage(error))
			})
	}

	@action
	changeToken(id) {
		mineApi.changeToken({id})
			.then((result) => {
				notification.success({
					message: result.message
				});
				this.mine.token = result.obj ;
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
			restart: mine.restart
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
