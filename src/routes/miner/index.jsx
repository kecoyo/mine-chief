import React, {Component} from 'react';
import {observer} from 'mobx-react';
import cs from 'classnames';
import Content from '../layout/Content';
import MinerStore from "./MinerStore";
import Panel from "../../components/Panel";
import Row from "../../components/Row";
import Col from "../../components/Col";
import DataTable from "../../components/DataTable";
import dtUtils from "../../js/dtUtils";


@observer
export default class Miner extends Component {

	constructor(props) {
		super(props);
		this.state = {
			columns: [
				{title: '矿场', data: 'mineName'},
				{title: '机器类型', data: 'type'},
				{title: '矿工名称', data: 'netProtocol'},
				{title: 'MAC地址', data: 'macAddress'},
				{title: 'IP地址', data: 'ip'},
				{title: '温度', data: 'temp'},
				{title: '算力', data: 'rate'},
				{title: '异常信息', data: 'updateTime'},
				{title: '运行时间', data: 'elapsed'},
				{title: '操作', render: this.renderActions, sorting: false},
			]
		};
		this.store = new MinerStore();
	}

	renderActions(data, type, row) {
		let actions = [
			{text: '忽略', theme: 'danger'},
		];
		return dtUtils.renderActions(actions)
	}

	render() {
		return (
			<Content>
				<Row>
					<Col>
						<Panel whiteBg plain>
							<form className="form-horizontal group-border hover-stripped" role="form">
								{this.store.searchInfo.map((item, i) => (
									<div className="form-group" key={i}>
										<label className="col-lg-2 col-md-2 col-sm-12 control-label">
											{item.name}
										</label>
										<label className="checkbox-inline"
											   onClick={(e) => this.handleChecked(e, item)}>
											<div
												className={cs('icheckbox_flat-blue', {'checked': this.isItemAllChecked(item)})}>
												<input type="checkbox" value=""/>
												<ins className="iCheck-helper"></ins>
											</div>
											全部
										</label>
										{Object.keys(item.value).map((k, j) => (
											<label className="checkbox-inline" key={j}
												   onClick={(e) => this.handleChecked(e, item, k)}>
												<div className={cs('icheckbox_flat-blue', {'checked': item.status[k]})}>
													<input type="checkbox" value=""/>
													<ins className="iCheck-helper"></ins>
												</div>
												{k} (<span className="color-pink">{item.value[k]}</span>)
											</label>
										))}
									</div>
								))}
							</form>
						</Panel>
						<Panel>
							<DataTable columns={this.state.columns} dataSource={this.store.list}/>
						</Panel>
					</Col>
				</Row>
			</Content>
		)
	}

	componentDidMount() {
		this.store.fetchList()
	}

	isItemAllChecked(item) {
		for (let k in item.status) {
			if (!item.status[k]) {
				return false
			}
		}
		return true
	}

	handleChecked(e, item, k) {
		e.preventDefault();
		if (k) {
			item.status[k] = !item.status[k];
		} else {
			let status = !this.isItemAllChecked(item);
			for (let k2 in item.status) {
				item.status[k2] = status
			}
		}
		this.store.filterData()
	}

}
