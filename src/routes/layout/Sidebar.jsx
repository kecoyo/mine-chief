import React, {Component} from 'react';
import cs from 'classnames';
import {observer} from 'mobx-react';
import navStore from "../../stores/navStore";
import appStore from "../../stores/appStore";

@observer
export default class Content extends Component {
	render() {
		let currentPaths = navStore.currentPaths;
		let currentNav = currentPaths[1] || {};
		let {ticket} = appStore;
		return (
			<div id="sidebar">
				<div className="sidebar-inner">
					<ul id="sideNav" className="nav nav-pills nav-stacked">
						{navStore.tree.children
							.filter((nav) => nav.sidebar)
							.map((nav) => (
								<li key={nav.path}>
									<a href={`#${nav.path}`}
									   className={cs({'active': nav.path == currentNav.path})}>{nav.name} <i
										className={nav.icon}></i></a>
								</li>
							))}
						<li key="#">
							<a >扫码绑微信↓ <i className="ec-chat"></i></a>
						</li>
					</ul>



					<div className="sidebar-panel">

						<ul className="server-stats">
							<li>
								<div>
									<img width="98%" src={"https://mp.weixin.qq.com/cgi-bin/showqrcode?ticket="+ticket}></img>
								</div>
							</li>
						</ul>

					</div>
				</div>
			</div>

		)
	}
}
