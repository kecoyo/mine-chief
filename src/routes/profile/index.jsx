import React, {Component} from 'react';
import {observer} from 'mobx-react';
import Content from '../layout/Content';
import appStore from "../../stores/appStore";
import Row from "../../components/Row";
import Col from "../../components/Col";
import Panel from "../../components/Panel";
import ProfileStore from "./ProfileStore";
import userApi from "../../apis/userApi";

@observer
export default class Profile extends Component {

	constructor(props) {
		super(props);
		this.store = new ProfileStore();
	}

	render() {
		let {loginUser} = appStore;
		return (
			<Content>
				<Row>
					<Col>
						<Panel>
							<form className="form-horizontal group-border hover-stripped" role="form">
								<div className="form-group">
									<label className="col-lg-2 col-md-2 col-sm-12 control-label">邮箱地址</label>
									<div className="col-lg-10 col-md-10">
										<input type="text" className="form-control" placeholder="邮箱地址"
											   autoFocus="autofocus" defaultValue={loginUser.mail} readOnly={true}/>
									</div>
								</div>
								<div className="form-group">
									<label className="col-lg-2 col-md-2 col-sm-12 control-label">手机号</label>
									<div className="col-lg-10 col-md-10">
										<input type="text" className="form-control" placeholder="手机号"
											   autoFocus="autofocus" defaultValue={loginUser.phone} readOnly={true}/>
									</div>
								</div>
								<div className="form-group">
									<label className="col-lg-2 col-md-2 col-sm-12 control-label">旧密码</label>
									<div className="col-lg-10 col-md-10">
										<input type="text" className="form-control" placeholder="旧密码"
											   autoFocus="autofocus" value={this.store.oldPassword}
											   onChange={(e) => this.store.oldPassword = e.target.value}/>
									</div>
								</div>
								<div className="form-group">
									<label className="col-lg-2 col-md-2 col-sm-12 control-label">新密码</label>
									<div className="col-lg-10 col-md-10">
										<input type="text" className="form-control" placeholder="新密码"
											   autoFocus="autofocus" value={this.store.password}
											   onChange={(e) => this.store.password = e.target.value}/>
									</div>
								</div>
								<div className="form-group">
									<label className="col-lg-2 col-md-2 col-sm-12 control-label">确认新密码</label>
									<div className="col-lg-10 col-md-10">
										<input type="text" className="form-control" placeholder="确认新密码"
											   autoFocus="autofocus" value={this.store.repassword}
											   onChange={(e) => this.store.repassword = e.target.value}/>
									</div>
								</div>
								<div className="form-group">
									<label className="col-lg-2 col-md-2 col-sm-12 control-label"></label>
									<div className="col-lg-10 col-md-10">
										<button type="button" className="btn btn-primary"
												onClick={() => this.store.update()}> <i className="fa-ok"/> 保 存
										</button>
									</div>
								</div>
							</form>
						</Panel>
					</Col>
				</Row>
			</Content>
		)
	}

}
