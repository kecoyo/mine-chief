import React, {Component} from 'react';
import {observer} from 'mobx-react';
import Content from '../layout/Content';
import MinerStore from "./MinerStore";
import Panel from "../../components/Panel";
import Button from "antd/lib/button";
import {Row, Col, Table, Checkbox,FormItem} from 'antd';


const CheckboxGroup = Checkbox.Group;

const plainOptions = ['Apple', 'Pear', 'Orange'];
const defaultCheckedList = ['Apple', 'Orange'];


@observer
export default class Miner extends Component {

	constructor(props) {
		super(props);
		this.store = new MinerStore();
		this.columns = [
			{
				title: '矿场',
				dataIndex: 'mineName',
				key: 'mineName'
			}, {
				title: '机器类型',
				dataIndex: 'type',
				key: 'type'
			}, {
				title: '矿工名称',
				dataIndex: 'netProtocol',
				key: 'netProtocol'
			}, {
				title: 'MAC地址',
				dataIndex: 'macAddress',
				key: 'macAddress'
			}, {
				title: 'IP地址',
				dataIndex: 'ip',
				key: 'ip'
			}, {
				title: '温度',
				dataIndex: 'temp',
				key: 'temp'
			}, {
				title: '算力',
				dataIndex: 'rate',
				key: 'rate'
			}, {
				title: '异常信息',
				dataIndex: 'updateTime',
				key: 'updateTime'
			}, {
				title: '运行时间',
				dataIndex: 'elapsed',
				key: 'elapsed'
			}, {
				title: '操作',
				key: 'action',
				render: (text, record) => (
					<Button>忽略</Button>
				)
			},
		];
	}

	state = {
		checkedList: defaultCheckedList,
		indeterminate: true,
		checkAll: false,
	};

	render() {
		return (
			<Content>
				<Row>
					<Col>
						<Checkbox
							indeterminate={this.state.indeterminate}
							checked={this.state.checkAll}
						>
							Check all
						</Checkbox>
						<CheckboxGroup options={plainOptions} value={this.state.checkedList} />

					</Col>
					<Col>
						<Panel whiteBg plain>
							<Table columns={this.columns} dataSource={this.store.list.list} pagination={false}/>
						</Panel>
					</Col>
				</Row>
			</Content>
		)
	}

	componentDidMount() {
		this.store.fetchList()
	}
}
