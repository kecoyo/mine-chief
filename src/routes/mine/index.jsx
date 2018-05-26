import React, {Component} from 'react';
import {observer} from 'mobx-react';
import Content from '../layout/Content';
import MineStore from "./MineStore";
import routerHistory from "../../js/routerHistory";
import Panel from "../../components/Panel";
import {dateUtils} from 'jeselvmo'
import Table from "../../components/Table";
import Row from "../../components/Row";
import Col from "../../components/Col";
import Button from "../../components/Button";


@observer
export default class Mine extends Component {

	constructor(props) {
		super(props);
		this.store = new MineStore();
		this.columns = [
			{
				title: '矿工名称',
				data: 'name',
			}, {
				title: '总机器数',
				data: 'mineNum',
			}, {
				title: '可连接数',
				data: 'onlineNum',
			}, {
				title: 'Token',
				data: 'token',
			}, {
				title: '创建时间',
				data: 'createTime',
				render: (text) => dateUtils.format(text, dateUtils.F_DATETIME)
			}, {
				title: '在线状态',
				data: 'timeDiff',
			}, {
				title: '配置',
				render: (text, record) => {
					return <Button onClick={this.edit.bind(this, record.id)}>配置</Button>
				}
			},
		];
	}

	render() {
		return (
			<Content toolbar={this.renderToolbar.bind(this)}>
				<Row>
					<Col>
						<Panel whiteBg plain>
							<Table columns={this.columns} dataSource={this.store.list}/>
						</Panel>
					</Col>
				</Row>
			</Content>
		)
	}

	renderToolbar() {
		return [
			<div className="btn-group" key="add">
				<a className="btn" title="create mine"
				   onClick={() => this.add()}>
					<i className="im-plus color-blue s24"></i>
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
