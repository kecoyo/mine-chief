import {localStore} from 'jeselvmo';
import {LOGIN_USER} from "./constants";
import $ from 'jquery';

let utils = {

	// 获取登录用户
	getLoginUser() {
		let loginUser = localStore.get(LOGIN_USER);
		console.log('loginUser:', loginUser);
		return loginUser;
	},

	// 存储登录用户
	setLoginUser(loginUser) {
		localStore.set(LOGIN_USER, loginUser);
	},

	// 删除登录用户
	removeLoginUser() {
		localStore.remove(LOGIN_USER);
	},

	// 是成功的结果
	isSuccess(result) {
		return result && result.code == 0
	},

	// 获取错误信息
	getErrorMessage(error) {
		return JSON.parse(error.responseText).message
	},

	// 跳首页
	toIndex() {
		location = 'index.html'
	},

	// 跳登录
	toLogin() {
		location = 'login.html'
	},

	download(url) {
		$('body').append(`<iframe src="${url}" style="display: none;"></iframe>`)
	}
};

window.beefly = utils;
export default utils;
