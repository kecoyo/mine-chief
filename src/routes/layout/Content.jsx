import React, {PureComponent} from 'react';
import {observer} from 'mobx-react';
import navStore from "../../stores/navStore";

@observer
export default class Content extends PureComponent {
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
									<div className="btn-group">
										<a id="clear-localstorage" className="btn tip" title="Reset panels position">
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
}
