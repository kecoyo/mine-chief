import {observable, computed, action} from 'mobx';
import routerHistory from "../js/routerHistory";

class NavStore {

	// 当前路由
	@observable pathname = routerHistory.location.pathname;
	// 导航树
	@observable tree = {
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
						icon: 'ec-pencil',
						path: '/home/mine/add'
					},
					{
						name: '修改矿场',
						icon: 'ec-pencil',
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
				name: '微信绑定',
				icon: 'ec-chat',
				path: '/home/weixin',
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

	constructor() {
		window.addEventListener('hashchange', this.hashChange.bind(this));
	}

	@action
	hashChange() {
		this.pathname = location.hash.substring(1);
	}

	// 当前路由路径
	@computed
	get currentPaths() {
		let paths = [];
		let pathname = this.pathname + '/';

		(function f(tree) {
			if (pathname.startsWith(tree.path + '/')) {
				paths.push(tree);
				if (tree.children) {
					tree.children.forEach((child) => {
						f(child)
					})
				}
			}
		})(this.tree);

		return paths
	}

}

const navStore = new NavStore();

export default navStore;
