import React, {Component} from 'react';
import {observer} from 'mobx-react';
import Content from '../layout/Content';
import appStore from "../../stores/appStore";

@observer
export default class Profit extends Component {

	render() {
		return (
			<Content>
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
								<div className="form-group">
									<div className="col-lg-12 col-md-12">
										<div className="row">
											<div className="col-lg-3 col-md-3">
												<select className="form-control select2" >
													<option value="btc">BTC</option>
													<option value="ltc">LTC</option>
													<option value="eth">ETH</option>
													<option value="zec">ZEC</option>
												</select>
											</div>

											<div className="col-md-3 col-md-3">
												<input type="text" className="form-control" placeholder="钱包说明" />
											</div>

											<div className="col-md-4 col-md-4">
												<input type="text" className="form-control" placeholder="钱包地址" />
											</div>

											<div className="col-md-2 col-md-2">
												<button type="button" className="ant-btn"><span>保存</span></button>
												&nbsp;&nbsp;&nbsp;&nbsp;
												<button type="button" className="ant-btn"><span>刷新</span></button>
											</div>
										</div>
									</div>
								</div>
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
					</div>
				</div>
			</Content>
		)
	}

}
