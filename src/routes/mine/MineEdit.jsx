import React, {Component} from 'react';
import {observer} from 'mobx-react';
import Content from '../layout/Content';
import MineEditStore from "./MineEditStore";
import routerHistory from "../../js/routerHistory";

@observer
export default class MineEdit extends Component {

	constructor(props) {
		super(props);

		this.store = new MineEditStore();
	}

	render() {
		let {mine, errorMessage, success} = this.store;
		return (
			<Content showBack>
				<div className="row">
					<div className="col-lg-12">
						<div className="panel panel-default toggle" id="spr_0">
							<div className="panel-heading"/>
							<div className="panel-body">
								<form className="form-horizontal group-border hover-stripped" role="form" id="validate"
									  noValidate="novalidate">
									<div className="form-group">
										<label className="col-lg-2 control-label">矿工名称</label>
										<div className="col-lg-10">
											<input type="text" className="form-control required" value={mine.name}
												   onChange={e => mine.name = e.target.value}/>
										</div>
									</div>
									<div className="form-group">
										<label className="col-lg-2 control-label">IP范围</label>
										<div className="col-lg-10">
											<input id="ipStr" name="ipStr" type="text" className="form-control"
												   placeholder="192.168.0.100-200,192.168.1.50-200        注:多ip段用逗号隔开，显卡矿机不需要填写"
												   value={mine.ips}
												   onChange={e => mine.ips = e.target.value}/>
										</div>
									</div>
									<div className="form-group">
										<label className="col-lg-2 control-label">Token</label>
										<div className="col-lg-10">
											<input id="token" name="ipStr" type="text" className="form-control"
												   readOnly="true" placeholder="系统自动生成唯一编码"
												   value={mine.token}/>
										</div>
									</div>
									<div className="form-group">
										<div className="table-responsive">
											<table className="table table-striped">
												<thead>
												<tr>
													<th className="per15">机器型号</th>
													<th className="per10">最高温度</th>
													<th className="per10">报警次数</th>
													<th className="per10">最低算力</th>
													<th className="per10">报警次数</th>
													<th className="per10">无连接报警次数</th>
													<th className="per10">掉线报警次数</th>
												</tr>
												</thead>
												<tbody>
												{mine.config.map((o) => (<tr key={o.type}>
													<td>
														<input id="token" name="ipStr" type="text" value={o.type}
															   className="form-control ui-spinner-input"/>
													</td>
													<td>
														<input id="token" name="ipStr" type="number" value={o.maxTemp}
															   className="form-control ui-spinner-input"
															   onChange={e => o.maxTemp = e.target.value}/>
													</td>
													<td>
														<input id="token" name="ipStr" type="number" value={o.tempTimes}
															   className="form-control ui-spinner-input"
															   onChange={e => o.tempTimes = e.target.value}/>
													</td>
													<td>
														<input id="token" name="ipStr" type="number" value={o.minRate}
															   className="form-control ui-spinner-input"
															   onChange={e => o.minRate = e.target.value}/>
													</td>
													<td>
														<input id="token" name="ipStr" type="number" value={o.rateTimes}
															   className="form-control ui-spinner-input"
															   onChange={e => o.rateTimes = e.target.value}/>
													</td>
													<td>
														<input id="token" name="ipStr" type="number"
															   className="form-control ui-spinner-input"
															   value={o.canNotConnTimes}
															   onChange={e => o.canNotConnTimes = e.target.value}/>
													</td>
													<td>
														<input id="token" name="ipStr" type="number"
															   className="form-control ui-spinner-input"
															   value={o.offlineTimes}
															   onChange={e => o.offlineTimes = e.target.value}/>
													</td>
												</tr>))}
												</tbody>
											</table>
										</div>
									</div>


									<div className="form-group">
										<div className="col-lg-offset-2 pull-right">
											<button className="btn btn-primary mr15" type="button"
													onClick={() => this.store.saveOrUpdate()}>
												<i className="fa-ok"/> 保存
											</button>
										</div>
									</div>
								</form>
							</div>
						</div>
					</div>
				</div>
			</Content>
		)
	}

	componentDidMount() {
		let {id} = this.props.match.params;
		if (id) {
			this.store.fetchById(id)
		}
	}

}
