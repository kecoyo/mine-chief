import React, {Component} from 'react';
import {observer} from 'mobx-react';
import navStore from "../../stores/navStore";
import routerHistory from "../../js/routerHistory";
import appStore from "../../stores/appStore";

@observer
export default class Header extends Component {

	render() {
		return (
			<div id="header">
				<div className="container-fluid">
					<div className="navbar">
						<div className="navbar-header">
							<a className="navbar-brand" href="./#/home">
								<i className="im-windows8 text-logo-element animated bounceIn"></i>
								<span className="text-logo">矿长</span>
								<span className="text-slogan">站</span>
							</a>
						</div>
						<nav className="top-nav" role="navigation">
							<ul className="nav navbar-nav pull-right">
								<li className="dropdown">
									<a href="#" data-toggle="dropdown">
										<img className="user-avatar" src="assets/img/avatars/48.jpg"
											 alt="SuggeElson"/>{appStore.loginUser.phone}
									</a>
									<ul className="dropdown-menu right" role="menu">
										<li><a href="#/home/profile"><i className="st-user"></i> Profile</a>
										</li>
										<li><a href="#/home/settings"><i className="st-settings"></i> Settings</a>
										</li>
										<li><a href="javascript:void()" onClick={() => appStore.logoff()}><i
											className="im-exit"></i> Logout</a>
										</li>
									</ul>
								</li>
							</ul>
						</nav>
					</div>
				</div>
			</div>
		)
	}

}
