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
										<label className="col-lg-2 control-label">矿场名称</label>
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
										<label className="col-lg-2 control-label"></label>
										<div className="col-lg-10">
											<label className="checkbox">
													<input type="checkbox" name="restar" id="restart" checked={mine.restart} onChange={()=>{mine.restart = !mine.restart}} />
												当无法连接矿池，掉线或算力低于70%重启矿工?
											</label>
										</div>
									</div>



									<div className="form-group">

										<div className="col-lg-offset-0 pull-right">
											<button className="btn btn-success mr15" type="button"
													onClick={() => this.store.saveOrUpdate()}>
												<i className="fa-ok"/> 保存
											</button>
										</div>

										<div className="col-lg-offset-0 pull-right">
											<button className="btn btn-primary mr15" type="button"
													onClick={() => this.store.changeToken(this.store.mine.id)}>
												<i className="st-reload"/> 重置token
											</button>
										</div>

										<div className="col-lg-offset-0 pull-right">
											<button className="btn btn-danger mr15" type="button"
													onClick={() => this.store.delete(this.store.mine.id)}>
												<i className="fa-remove"/> 删除
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
