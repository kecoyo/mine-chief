import React, {Component} from 'react';
import cs from 'classnames';
import {observer} from 'mobx-react';
import navStore from "../../stores/navStore";

@observer
export default class Content extends Component {
	render() {
		return (
			<div id="sidebar">
				<div className="sidebar-inner">
					<ul id="sideNav" className="nav nav-pills nav-stacked">
						{navStore.navs
							.filter((nav) => nav.sidebar)
							.map((nav) => (
								<li key={nav.path}>
									<a href={`#${nav.path}`}
									   className={cs({'active': nav.path == navStore.activeNav.path})}>{nav.name} <i
										className={nav.icon}></i></a>
								</li>
							))}
					</ul>
				</div>
			</div>
		)
	}
}
