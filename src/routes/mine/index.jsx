import React, {Component} from 'react';
import {observer} from 'mobx-react';
import Content from '../layout/Content';
import MineStore from "./MineStore";
import {dateUtils} from 'jeselvmo';
import routerHistory from "../../js/routerHistory";

@observer
export default class Mine extends Component {

	constructor(props) {
		super(props);
		this.store = new MineStore();
	}

	render() {
		return (
			<Content toolbar={this.renderToolbar.bind(this)}>
				<div className="row">
					<div className="col-lg-12">
						<div className="panel panel-default plain toggle panelClose panelRefresh" id="spr_3">
							<div className="panel-heading white-bg"></div>
							<div className="panel-body">
								<div className="table-responsive">
									<table className="table table-striped">
										<thead>
										<tr>
											<th className="per15">矿工名称</th>
											<th className="per10">总机器数</th>
											<th className="per10">在线机器数</th>
											<th className="per15">Token</th>
											<th className="per15">创建时间</th>
											<th className="per15">最近连接</th>
											<th className="per5">配置</th>
										</tr>
										</thead>
										<tbody>
										{this.store.list.map((o, i) => (<tr key={i}>
											<td>{o.name}</td>
											<td>{o.mineNum}</td>
											<td>{o.onlineNum}</td>
											<td>{o.token}</td>
											<td>{dateUtils.format(o.createTime, dateUtils.patterns.datetime)}</td>
											<td>-</td>
											<td>
												<button type="button" className="btn btn-sm btn-danger"
														onClick={this.edit.bind(this, o.id)}>配置
												</button>
											</td>
										</tr>))}
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

	renderToolbar() {
		return [
			<div className="btn-group" key="add">
				<a className="btn tip" title="create mine"
				   onClick={() => this.add()}>
					<i className="im-plus s24"></i>
				</a>
			</div>
		]
	}

	componentDidMount() {
		this.store.fetchList()
	}

	add() {
		routerHistory.push({
			pathname: 'mine/add'
		})
	}

	edit(id) {
		routerHistory.push({
			pathname: 'mine/edit/' + id
		})
	}
}
