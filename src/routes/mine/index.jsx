import React, {Component} from 'react';
import {observer} from 'mobx-react';
import Content from '../layout/Content';
import MineStore from "./MineStore";
import routerHistory from "../../js/routerHistory";
import Table from 'antd/lib/table';
import Row from 'antd/lib/row';
import Col from 'antd/lib/col';
import Button from 'antd/lib/button';
import Panel from "../../components/Panel";
import {dateUtils} from 'jeselvmo'


@observer
export default class Mine extends Component {

	constructor(props) {
		super(props);
		this.store = new MineStore();
		this.columns = [
			{
				title: '矿工名称',
				dataIndex: 'name',
				key: 'name',
			}, {
				title: '总机器数',
				dataIndex: 'mineNum',
				key: 'mineNum',
			}, {
				title: '可连接数',
				dataIndex: 'onlineNum',
				key: 'onlineNum',
			}, {
				title: 'Token',
				dataIndex: 'token',
				key: 'token',
			}, {
				title: '创建时间',
				dataIndex: 'createTime',
				key: 'createTime',
				render: (text)=> dateUtils.format(text, dateUtils.patterns.datetime)
			}, {
				title: '在线状态',
				dataIndex: 'lastConnTime',
				key: 'lastConnTime',
				render: (text)=> text==null?"离线":dateUtils.format(text, dateUtils.patterns.datetime)
			}, {
				title: '配置',
				key: 'action',
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
							<Table columns={this.columns} dataSource={this.store.list} pagination={false}/>
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
