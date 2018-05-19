import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {observer} from 'mobx-react';
import navStore from "../../stores/navStore";
import routerHistory from "../../js/routerHistory";

@observer
export default class Content extends Component {

	render() {
		let currentPaths = navStore.currentPaths;
		let mainNav = currentPaths[1] || {};
		return (
			<div id="content">
				<div className="content-wrapper">
					<div className="row">
						<div className="col-lg-12 heading">
							<h1 className="page-header">
								<i className={mainNav.icon}></i> {mainNav.name}
							</h1>
							<ul id="crumb" className="breadcrumb">
								{currentPaths.map((p, i) => (
									<li key={p.path}>
										<i className={p.icon}></i>
										{i < (currentPaths.length - 1) ? <a href={`#${p.path}`}>{p.name}</a> : p.name}
										{i < (currentPaths.length - 1) && <i className="en-arrow-right7"></i>}
									</li>))}
							</ul>
							<div className="option-buttons">
								<div className="btn-toolbar" role="toolbar">
									{this.renderToolbar()}
									{this.props.showBack && <div className="btn-group">
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

Content.propTypes = {
	toolbar: PropTypes.any,	// 自定义toolbar按钮
	showBack: PropTypes.bool,	// 显示返回按钮
};

Content.defaultProps = {
	showBack: false
};
