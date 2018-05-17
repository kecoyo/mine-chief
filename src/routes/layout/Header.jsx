import React from 'react';

const Header = () => (
	<div id="header">
		<div className="container-fluid">
			<div className="navbar">
				<div className="navbar-header">
					<a className="navbar-brand" href="./#/home">
						<i className="im-windows8 text-logo-element animated bounceIn"></i>
						<span className="text-logo">spr</span>
						<span className="text-slogan">flat</span>
					</a>
				</div>
				<nav className="top-nav" role="navigation">
					<ul className="nav navbar-nav pull-right">
						<li className="dropdown">
							<a href="#" data-toggle="dropdown">
								<img className="user-avatar" src="assets/img/avatars/48.jpg" alt="SuggeElson"/>SuggeElson
							</a>
							<ul className="dropdown-menu right" role="menu">
								<li><a href="#/home/profile"><i className="st-user"></i> Profile</a>
								</li>
								<li><a href="#/home/settings"><i className="st-settings"></i> Settings</a>
								</li>
								<li><a href="#/login"><i className="im-exit"></i> Logout</a>
								</li>
							</ul>
						</li>
					</ul>
				</nav>
			</div>
		</div>
	</div>
);

export default Header;
