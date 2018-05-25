import notification from "antd/lib/notification";

const notify = {

	success(args) {
		notification.success(args)
	},

	error(args) {
		notification.error(args)
	},

	info(args) {
		notification.info(args)
	},

	warn(args) {
		notification.warn(args)
	},

	warning(args) {
		notification.warning(args)
	}
};

export default notify
