import React, {Component} from 'react';
import {observer} from 'mobx-react';
import navStore from "../../stores/navStore";
import routerHistory from "../../js/routerHistory";

@observer
export default class Content extends Component {

	render() {
		return (
			<div id="content">
				<div className="content-wrapper">
					<div className="row">
						<div className="col-lg-12 heading">
							<h1 className="page-header">
								<i className={navStore.activeNav.icon}></i> {navStore.activeNav.name}
							</h1>
							<ul id="crumb" className="breadcrumb">
								<li><i className="im-home"></i><a href="#/home">Home</a><i
									className="en-arrow-right7"></i>
								</li>
								<li><i className={navStore.activeNav.icon}></i> {navStore.activeNav.name}</li>
							</ul>
							<div className="option-buttons">
								<div className="btn-toolbar" role="toolbar">
									{this.renderToolbar()}
									{routerHistory.length > 1 && <div className="btn-group">
										<a className="btn tip" title="refresh current page"
										   onClick={() => this.goBack()}>
											<i className="im-undo color-brown s24"></i>
										</a>
									</div>}
									<div className="btn-group">
										<a className="btn tip" title="refresh current page"
										   onClick={() => this.refresh()}>
											<i className="ec-refresh color-red s24"></i>
										</a>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="outlet">
						{this.props.children}
					</div>
				</div>
				<div className="clearfix"></div>
			</div>
		)
	}

	renderToolbar() {
		let {toolbar} = this.props;
		if (typeof toolbar == 'function') {
			return toolbar()
		}
		return toolbar
	}

	refresh() {
		routerHistory.go(0)
	}

	goBack() {
		routerHistory.goBack()
	}
}
