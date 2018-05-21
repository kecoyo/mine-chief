import React from 'react';
import utils from './js/utils';
import Router from './router';
import './styles/global.scss';
import appStore from "./stores/appStore";
import notification from "antd/lib/notification";

console.log(utils);

$.ajaxSetup({
	xhrFields: {
		// withCredentials: true
	},
	traditional: true,			// 用传统的方式来序列化数据
	beforeSend: function (xhr) {
		xhr.setRequestHeader('authorization', appStore.token)
	},
	complete: function (xhr) {
		if (xhr.status == 450) {
			alert(JSON.parse(xhr.responseText).message);
			location.hash = '/login';
		}
	}
});

notification.config({
	placement: 'topRight',
	bottom: 50,
	duration: 3,
});

/**
 * app
 */
export default class App extends React.Component {

	render() {
		return (
			<Router/>
		)
	}

}
