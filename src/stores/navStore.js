import {observable, computed, action} from 'mobx';


class NavStore {

	constructor() {
		window.addEventListener('hashchange', this.hashChange.bind(this));
	}

	@observable navs = [
		{name: 'Dashboard', icon: 'im-screen', path: '/home'},
		{name: '矿工管理', icon: 'im-users2', path: '/home/miner'},
		{name: '矿场管理', icon: 'im-office', path: '/home/mine'},
		{name: '收益计算', icon: 'im-library', path: '/home/profit'}
	];
	@observable activeNav = this.navs[0];

	@action
	hashChange() {
		this.activeNav = this.navs.find((nav) => nav.path == location.hash.substring(1)) || this.navs[0]
	}

}

const navStore = new NavStore();

export default navStore;
