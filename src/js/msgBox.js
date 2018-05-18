/**
 * 消息提示框
 * @type {{success(*=): void, error(*=): void, info(*=): void, warning(*=): void}}
 */
const msgBox = {

	success(msg) {
		$.gritter.add({
			// (string | mandatory) the heading of the notification
			title: 'Done !!!',
			// (string | mandatory) the text inside the notification
			text: msg,
			// (int | optional) the time you want it to be alive for before fading out
			time: '',
			// (string) specify font-face icon  class for close message
			close_icon: 'en-cross',
			// (string) specify font-face icon class for big icon in left. if are specify image this will not show up.
			icon: 'fa-ok',
			// (string | optional) the class name you want to apply to that specific message
			class_name: 'success-notice'
		});
	},

	error(msg) {
		$.gritter.add({
			// (string | mandatory) the heading of the notification
			title: 'Error !!!',
			// (string | mandatory) the text inside the notification
			text: msg,
			// (int | optional) the time you want it to be alive for before fading out
			time: '',
			// (string) specify font-face icon  class for close message
			close_icon: 'en-cross',
			// (string) specify font-face icon class for big icon in left. if are specify image this will not show up.
			icon: 'ec-users',
			// (string | optional) the class name you want to apply to that specific message
			class_name: 'error-notice'
		});
	},

	info(msg) {
		$.gritter.add({
			// (string | mandatory) the heading of the notification
			title: 'Info !!!',
			// (string | mandatory) the text inside the notification
			text: msg,
			// (string | optional) the image to display on the left
			image: 'https://s3.amazonaws.com/uifaces/faces/twitter/kolage/128.jpg',
			// (string) specify font-face icon  class for close message
			close_icon: 'en-cross',
		});
	},

	warning(msg) {
		$.gritter.add({
			// (string | mandatory) the heading of the notification
			title: 'Warrning !!!',
			// (string | mandatory) the text inside the notification
			text: msg,
			// (int | optional) the time you want it to be alive for before fading out
			time: '',
			// (string) specify font-face icon  class for close message
			close_icon: 'en-cross',
			// (string) specify font-face icon class for big icon in left. if are specify image this will not show up.
			icon: 'ec-users',
			// (string | optional) the class name you want to apply to that specific message
			class_name: 'error-notice'
		});
	}
};

export default msgBox;
