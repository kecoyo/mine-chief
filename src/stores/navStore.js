import {observable, computed, action} from 'mobx';


class NavStore {

	constructor() {
		window.addEventListener('hashchange', this.hashChange.bind(this));
	}

	@observable navs = [
		{name: 'Dashboard', icon: 'im-screen', path: '/home', sidebar: true},
		{name: '矿工管理', icon: 'im-users2', path: '/home/miner', sidebar: true},
		{name: '矿场管理', icon: 'im-office', path: '/home/mine', sidebar: true},
		{name: '收益计算', icon: 'im-library', path: '/home/profit', sidebar: true},
		{name: 'Profile', icon: 'st-user', path: '/home/profile'},
		{name: 'Settings', icon: 'st-settings', path: '/home/settings'}
	];

	@observable navs2 = {
		name: 'Home',
		icon: 'im-screen',
		path: '/home',
		children: [
			{
				name: 'Dashboard',
				icon: 'im-screen',
				path: '/home/dashboard',
				sidebar: true
			},
			{
				name: '矿工管理',
				icon: 'im-users2',
				path: '/home/miner',
				sidebar: true
			},
			{
				name: '矿场管理',
				icon: 'im-office',
				path: '/home/mine',
				sidebar: true,
				children: [
					{
						name: '添加矿场',
						icon: 'st-user',
						path: '/home/mine/add'
					},
					{
						name: '修改矿场',
						icon: 'st-settings',
						path: '/home/mine/edit'
					}
				]
			},
			{
				name: '收益计算',
				icon: 'im-library',
				path: '/home/profit',
				sidebar: true
			},
			{
				name: 'Profile',
				icon: 'st-user',
				path: '/home/profile'
			},
			{
				name: 'Settings',
				icon: 'st-settings',
				path: '/home/settings'
			}
		]
	};

	@observable activeNav = this.navs[0];

	@action
	hashChange() {
		let find = this.navs.find((nav) => nav.path == location.hash.substring(1));
		if (find) {
			this.activeNav = find
		}

	}

}

const navStore = new NavStore();

export default navStore;
