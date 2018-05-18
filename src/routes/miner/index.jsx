import React, {Component} from 'react';
import {observer} from 'mobx-react';
import Content from '../layout/Content';
import MinerStore from "./MinerStore";

@observer
export default class Miner extends Component {

	constructor(props) {
		super(props);
		this.store = new MinerStore();
	}

	render() {
		return (
			<Content>
				<div className="row">
					<div className="col-lg-12">
						<div className="panel panel-default plain toggle panelClose panelRefresh" id="spr_3">
							<div className="panel-heading white-bg"></div>
							<div className="panel-body">
								<div className="table-responsive">
									<table className="table table-striped">
										<thead>
										<tr>
											<th className="per10">矿场</th>
											<th className="per10">机器类型</th>
											<th className="per10">矿工名称</th>
											<th className="per10">MAC地址</th>
											<th className="per10">IP地址</th>
											<th className="per10">温度</th>
											<th className="per10">算力</th>
											<th className="per15">异常信息</th>
											<th className="per10">运行时间</th>
											<th className="per15">操作</th>
										</tr>
										</thead>
										<tbody>
										{this.store.list.slice(0, 20).map((o, i) =>
											<tr key={i}>
												<td>苏挖庄</td>
												<td>{o.type}</td>
												<td>苏挖庄</td>
												<td>00:FF:93:3A:5C:9A</td>
												<td>{o.ip}</td>
												<td>80℃</td>
												<td>{o.rate}</td>
												<td>温度过高</td>
												<td>12d24h12m</td>
												<td>
													<button type="button" className="btn btn-sm btn-danger">忽略</button>
												</td>
											</tr>)}
										</tbody>
									</table>
								</div>
							</div>
						</div>
					</div>
				</div>
			</Content>
		)
	}

	componentDidMount() {
		this.store.fetchList()
	}
}
