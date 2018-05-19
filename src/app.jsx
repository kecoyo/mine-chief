import React from 'react';
import utils from './js/utils';
import Router from './router';
import './styles/global.scss';
import appStore from "./stores/appStore";
import msgBox from "./js/msgBox"; // Global styles

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
			msgBox.alert(JSON.parse(xhr.responseText).message)
				.then(() => {
					location.hash = '/login';
				});

		}
	}
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
