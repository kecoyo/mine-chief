import React, {Component} from 'react';
import Content from '../layout/Content';
import {dateUtils} from "jeselvmo";
import Table from "../../components/Table";
import Row from "../../components/Row";
import Col from "../../components/Col";
import Button from "../../components/Button";
import Panel from "../../components/Panel";
import WeixinStore from "./WeixinStore";
import {observer} from "mobx-react/index";
import WeixinEdit from "./WeixinEdit";
import Image from "../../components/Image";

@observer
export default class Weixin extends Component {

	constructor(props) {
		super(props);
		this.store = new WeixinStore();
		this.edit = new WeixinEdit();
		this.columns = [
			{
				title: '头像',
				data: 'headimgurl',
				render: (text, record) => {
					return <Image src={text} width="65px" heigh={"12"}/>
				}
			},{
				title: '名称',
				data: 'nickname',
			}, {
				title: '省份',
				data: 'province',
				render: (text) => text?text:"未知"
			}, {
				title: '关注时间',
				data: 'subscribe_time',
				render: (text) => dateUtils.format(text*1000, dateUtils.F_DATETIME)
			}, {
				title: '配置',
				data: 'openid',
				render: (text) => {
					return <Button theme="primary" onClick={() => this.edit.unBind(text)}>解除绑定</Button>
				}
			},
		];
	}

	render() {
		return (
			<Content>
				<div className="row">

					<div className="col-lg-3 col-md-3 col-xs-3">

						<div className="panel panel-primary panelMove toggle panelRefresh panelClose">
							<div className="panel-heading">
								<h4 className="panel-title">60分钟内扫描二维码绑定微信</h4>
								<div className="panel-controls panel-controls-hide">
									<a href="#" className="panel-refresh"><i className="im-spinner6"></i></a>
									<a href="#" className="toggle panel-minimize"><i className="im-minus"></i></a>
									<a href="#" className="panel-close"><i className="im-close"></i></a>
								</div>
							</div>
							<div className="thumbnail">
									<Image src="https://mp.weixin.qq.com/cgi-bin/showqrcode?ticket=gQF_8TwAAAAAAAAAAS5odHRwOi8vd2VpeGluLnFxLmNvbS9xLzAyQUpMazBLTVVjSGsxMDAwME0wN0gAAgRJmwpbAwQAAAAA"/>
							</div>
						</div>
					</div>
					<div className="col-lg-9 col-md-9 col-xs-9">
						<Row>
							<Col>
								<Panel whiteBg plain>
									<Table columns={this.columns} dataSource={this.store.list}/>
								</Panel>
							</Col>
						</Row>
					</div>
				</div>
			</Content>
		)
	}


	componentDidMount() {
		this.store.bindList();
	}

}
