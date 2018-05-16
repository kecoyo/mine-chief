import {observable} from 'mobx';

class AppStore {
	@observable number = 0;

	changeNumber() {
		this.number++;
	}
}

const appStore = new AppStore();

export default AppStore;
