import {localStore} from 'jeselvmo';
import {LOGIN_USER, TOKEN} from "./constants";

let utils = {

	// 是成功的结果
	isSuccess(result) {
		return result && result.code == 0
	},

	// 获取错误信息
	getErrorMessage(error) {
		try {
			return JSON.parse(error.responseText).message
		} catch (e) {
			console.log(e);
		}
		return ''
	},

	// 获取数据
	getResultData(result) {
		return result.obj
	},

	// 跳首页
	toIndex() {
		location.hash = '/home'
	},

	// 跳登录
	toLogin() {
		location.hash = '/login'
	},

	// 文件下载
	download(url) {
		$('body').append(`<iframe src="${url}" style="display: none;"></iframe>`)
	},

};

window.beefly = utils;
export default utils;
