import React from 'react';
import utils from './js/utils';
import Router from './router';
import './styles/global.scss'; // Global styles

console.log(utils);
/**
 $.ajaxSetup({
	xhrFields: {
		// withCredentials: true
	},
	data: {
		token: function () {
			let loginUser = localStore.get('loginUser');
			return loginUser ? loginUser.token : ''
		}
	},
	traditional: true,			// 用传统的方式来序列化数据
	beforeSend: function (xhr) {
		// console.log(xhr)
	},
	complete: function (XMLHttpRequest, textStatus) {
		// console.log(XMLHttpRequest, textStatus);
		try {
			let json = XMLHttpRequest.responseJSON;
			if (json.code) {
				if (json.code === 1001) {
					alert(json.message);
				} else if (json.code === 9999) {
					alert(json.message);
				} else if (json.code === 6666) {
					alert(json.message);
				} else {
					// console.log(json)
				}
			}
		} catch (e) {
			console.log(e)
		}
	}
});

 // 请求过滤器
 $.ajaxPrefilter(function (options, originalOptions, jqXHR) {
	// console.log(options, originalOptions, jqXHR);

	if ("POST".indexOf(options.type.toUpperCase()) >= 0) {
		if (validator.isFormData(options.data)) {
			let loginUser = localStore.get('loginUser');
			options.data.append('token', loginUser ? loginUser.token : '')
		}
	}

});
 **/

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
