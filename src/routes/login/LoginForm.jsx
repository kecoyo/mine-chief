import React, {Component} from 'react';
import {observer} from 'mobx-react';
import systemApi from "../../apis/systemApi";
import utils from "../../js/utils";
import {localStore} from "jeselvmo";
import appStore from "../../stores/appStore";

@observer
export default class LoginForm extends Component {

	constructor(props) {
		super(props);

		this.state = {
			username: '',
			password: '',

			isFetching: false,
			errorMessage: '',
		}
	}

	render() {
		let {username, password, errorMessage} = this.state;
		return (
			<form className="form-horizontal mt10" action="" id="login-form" role="form">
				<div className="form-group">
					<div className="col-lg-12">
						<input type="text" name="username" id="username" className="form-control left-icon"
							   value={username}
							   placeholder="邮箱或手机号码" onChange={(e) => this.setState({username: e.target.value})}/>
						<i className="ec-user s16 left-input-icon"></i>
					</div>
				</div>
				<div className="form-group">
					<div className="col-lg-12">
						<input type="password" name="password" id="password"
							   className="form-control left-icon"
							   value={password} placeholder="密码"
							   onChange={(e) => this.setState({password: e.target.value})}/>
						<i className="ec-locked s16 left-input-icon"></i>
						<span className="help-block"><a href="#"><small>忘记密码 ?</small></a></span>
					</div>
				</div>
				<div className="form-group">
					<div className="col-lg-6 col-md-6 col-sm-6 col-xs-8">
						<label className="checkbox">
							<input type="checkbox" name="remember" id="remember" value="option"/>记住我?
						</label>
					</div>
					<div className="col-lg-6 col-md-6 col-sm-6 col-xs-4">
						{errorMessage && <label className="loginErrorInfo">
							{errorMessage}
						</label>}
						<button className="btn btn-success pull-right" type="button"
								onClick={this.login.bind(this)}>登陆
						</button>
					</div>
				</div>
			</form>
		)
	}


	componentDidMount() {

		//for custom checkboxes
		$('input').not('.noStyle').iCheck({
			checkboxClass: 'icheckbox_flat-green'
		});

		//validate login form
		$("#login-form").validate({
			ignore: 'input[type="hidden"]',
			errorPlacement: function (error, element) {
				let wrap = element.parent();
				let wrap1 = wrap.parent();
				if (wrap1.hasClass('checkbox')) {
					error.insertAfter(wrap1);
				} else {
					if (element.attr('type') == 'file') {
						error.insertAfter(element.next());
					} else {
						error.insertAfter(element);
					}
				}
			},
			errorClass: 'help-block',
			rules: {
				username: {
					required: true
				},
				password: {
					required: true,
					minlength: 5
				}
			},
			messages: {
				username: "Please type your email",
				password: {
					required: "Please provide a password",
					minlength: "Your password must be at least 5 characters long"
				},
			},
			highlight: function (element) {
				if ($(element).offsetParent().parent().hasClass('form-group')) {
					$(element).offsetParent().parent().removeClass('has-success').addClass('has-error');
				} else {
					if ($(element).attr('type') == 'file') {
						$(element).parent().parent().removeClass('has-success').addClass('has-error');
					}
					$(element).offsetParent().parent().parent().parent().removeClass('has-success').addClass('has-error');

				}
			},
			unhighlight: function (element, errorClass) {
				if ($(element).offsetParent().parent().hasClass('form-group')) {
					$(element).offsetParent().parent().removeClass('has-error').addClass('has-success');
					$(element.form).find("label[for=" + element.id + "]").removeClass(errorClass);
				} else if ($(element).offsetParent().parent().hasClass('checkbox')) {
					$(element).offsetParent().parent().parent().parent().removeClass('has-error').addClass('has-success');
					$(element.form).find("label[for=" + element.id + "]").removeClass(errorClass);
				} else if ($(element).next().hasClass('bootstrap-filestyle')) {
					$(element).parent().parent().removeClass('has-error').addClass('has-success');
				}
				else {
					$(element).offsetParent().parent().parent().removeClass('has-error').addClass('has-success');
				}
			}
		});
	}

	login() {
		this.setState({isFetching: true});

		let valid = $("#login-form").valid();
		if (valid) {
			let {username, password} = this.state;
			this.setState({isFetching: true});
			systemApi.login({
				mailOrPhone: username,
				password,
			}).then((result) => {
				this.setState({
					isFetching: false,
				});
				appStore.token = result.obj;
				location.hash = '/home';
			}).catch((error) => {
				this.setState({
					isFetching: false,
					errorMessage: utils.getErrorMessage(error)
				})
			});
		}
	}

}
