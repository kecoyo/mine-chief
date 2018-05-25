import {action, observable} from 'mobx';
import utils from "../../js/utils";
import userApi from "../../apis/userApi";
import appStore from "../../stores/appStore";
import notify from "../../js/notify";
import routerHistory from "../../js/routerHistory";


class ProfileStore {

	@observable oldPassword = '';
	@observable password = '';
	@observable repassword = '';

	@action
	update() {
		let loginUser = appStore.loginUser;
		userApi.update({
			mail: loginUser.mail,
			phone: loginUser.phone,
			oldPassword: this.oldPassword,
			password: this.password,
			repassword: this.repassword
		})
			.then(() => {
				notify.success({
					message: '修改成功！'
				});
				this.oldPassword = '';
				this.password = '';
				this.repassword = '';
			})
			.catch((error) => {
				notify.error({
					message: '修改失败！',
					description: utils.getErrorMessage(error)
				})
			})
	}

}

export default ProfileStore;
