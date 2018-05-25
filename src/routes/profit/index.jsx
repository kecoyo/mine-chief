import React, {Component} from 'react';
import {observer} from 'mobx-react';
import Content from '../layout/Content';
import AddWalletModal from "./AddWalletModal";

@observer
export default class Profit extends Component {

	render() {
		return (
			<Content toolbar={this.renderToolbar.bind(this)}>
				<div className="row">
					<div className="col-lg-12">
						<div className="panel panel-primary toggle panelRefresh panelClose" id="spr_0">
							<div className="panel-heading">
								<h4 className="panel-title">錢包管理</h4>
								<div className="panel-controls panel-controls-hide" style={{display: "none"}}><a href="#"
																											  className="panel-refresh"><i
									className="im-spinner6"></i></a><a href="#" className="toggle panel-minimize"><i
									className="im-minus"></i></a><a href="#" className="panel-close"><i
									className="im-close"></i></a></div>
							</div>
							<div className="panel-body">
								<table className="table table-bordered">
									<thead>
									<tr>
										<th className="per5">
											#
										</th>
										<th className="per40">Employe</th>
										<th className="per40">Position</th>
										<th className="per15">Salary</th>
									</tr>
									</thead>
									<tbody>
									<tr>
										<td>
											1
										</td>
										<td>Jacob Olsen</td>
										<td>Developer</td>
										<td>2530$</td>
									</tr>
									<tr>
										<td>
											2
										</td>
										<td>Lara James</td>
										<td>SEO</td>
										<td>3700$</td>
									</tr>
									<tr>
										<td>
											3
										</td>
										<td>Steve Sidwell</td>
										<td>Photographer</td>
										<td>1340$</td>
									</tr>
									<tr>
										<td>
											4
										</td>
										<td>Elena Dobrev</td>
										<td>Project manger</td>
										<td>5600$</td>
									</tr>
									</tbody>
								</table>
							</div>
						</div>
						<AddWalletModal ref={e => this.addWalletModal = e}/>
					</div>
				</div>
			</Content>
		)
	}

	renderToolbar() {
		return [
			<div className="btn-group" key="add">
				<a className="btn" title="create mine"
				   onClick={() => this.addWallet()}>
					<i className="im-plus color-blue s24"></i>
				</a>
			</div>
		]
	}

	addWallet(){
		this.addWalletModal.show()
	}
}
