import React, { Component } from 'react';
import systemApi from "../../apis/systemApi";
import utils from "../../js/utils";
import notify from "../../js/notify";
import {validator} from 'jeselvmo';

const COUNT = 30;

export default class RegisterForm extends Component {

	constructor(props) {
		super(props);

		this.state = {
			email: '',
			phone: '',
			password: '',
			password2: '',
			code: '',

			isFetching: false,
			errorMessage: '',
			successMessage: '',

			isCounting: false, // 是否在倒计时
			count: COUNT, //
		}
	}

	render() {
		let { email, phone, password, password2, code, errorMessage, successMessage } = this.state;
		return (
			<form className="form-horizontal mt20" action="" id="register-form" role="form">
				<div className="form-group">
					<div className="col-lg-12">
						<input id="email1" name="email" type="email" className="form-control left-icon"
							placeholder="邮箱地址"
							value={email} onChange={(e) => this.setState({ email: e.target.value })} />
						<i className="ec-mail s16 left-input-icon"></i>
					</div>
				</div>
				<div className="form-group">
					<div className="col-lg-12">
						<input id="phone" name="phone" type="text" className="form-control left-icon"
							placeholder="手机号码"
							value={phone} onChange={(e) => this.setState({ phone: e.target.value })} />
						<i className="ec-mail s16 left-input-icon"></i>
					</div>
				</div>
				<div className="form-group">
					<div className="col-lg-12">
						<input type="password" className="form-control left-icon" id="password1" name="password1"
							placeholder="密码"
							value={password} onChange={(e) => this.setState({ password: e.target.value })} />
						<i className="ec-locked s16 left-input-icon"></i>
					</div>
				</div>
				<div className="form-group">
					<div className="col-lg-12">
						<input type="password" className="form-control left-icon" id="password2" name="password2"
							placeholder="确认密码" value={password2}
							onChange={(e) => this.setState({ password2: e.target.value })} />
						<i className="ec-locked s16 left-input-icon"></i>
					</div>
				</div>
				<div className="form-group">
					<div className="col-lg-12">
						<input type="text" className="form-control left-icon" id="code" name="code"
							placeholder="验证码" value={code}
							onChange={(e) => this.setState({ code: e.target.value })} />
						<i className="ec-chat s16 left-input-icon"></i>
						{this.state.isCounting
							? <span className="help-block">{this.state.count}秒后重新发送验证码</span>
							: <span className="help-block"><a href="javascript:" onClick={this.sendCode.bind(this)}>发送验证码</a></span>}
					</div>
				</div>
				<div className="form-group">
					<div className="col-lg-12">
						<button className="btn btn-success btn-block" type="button"
							onClick={this.register.bind(this)}>注册
						</button>
					</div>
				</div>
				{errorMessage && <div className="form-group">
					<div className="col-lg-12 text-center text-danger">
						{errorMessage}
					</div>
				</div>}
				{successMessage && <div className="form-group">
					<div className="col-lg-12 text-center text-success">
						{successMessage}
					</div>
				</div>}
			</form>
		)
	}


	componentDidMount() {

		// 邮政编码验证
		$.validator.addMethod("phone", function (value, element) {
			var tel = /^((1[3,5,8][0-9])|(14[5,7])|(17[0,6,7,8])|(19[7]))\d{8}$/;
			return this.optional(element) || (tel.test(value));
		}, "请正确填写您的手机号");

		//validate login form
		$("#register-form").validate({
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
				email: {
					required: true,
					email: true
				},
				phone: {
					required: true,
					phone: true
				},
				password1: {
					required: true,
					minlength: 5
				},
				password2: {
					required: true,
					equalTo: "#password1"
				},
				code: {
					required: true
				},
			},
			messages: {
				email: "Please enter your email",
				phone: "Please enter your phone",
				password1: {
					required: "Please enter a password",
					minlength: "Your password must be at least 5 characters long"
				},
				password2: {
					required: "Please enter the password again.",
					equalTo: "Please enter the same password again."
				},
				code: "Please enter your code",
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

	register() {
		if (this.state.isFetching) {
			return;
		}

		this.setState({
			errorMessage: ''
		});

		let valid = $("#register-form").valid();
		if (valid) {
			let { email, phone, password, password2, code } = this.state;
			this.setState({
				isFetching: true
			});
			systemApi.register({
				mail: email,
				phone,
				password,
				repassword: password2,
				code
			}).then((result) => {
				this.setState({
					isFetching: false,
					successMessage: '注册成功，请登录！'
				});
				setTimeout(() => {
					location.reload();
				}, 1500)
			}).catch(error => {
				this.setState({
					isFetching: false,
					errorMessage: utils.getErrorMessage(error)
				})
			});

		}
	}

	sendCode() {
		let { phone } = this.state;

		if(validator.isEmpty(phone)){
			notify.warning({
				message: '手机号不能为空！'
			});
			return;
		}

		systemApi.phoneCode({
			phone
		})
			.then((result) => {
				notify.success({
					message: '验证码已发送！',
				});
				// 开始倒计时
				this.startCounting();
			})
			.catch((error) => {
				notify.error({
					message: '验证码发送失败！',
					description: utils.getErrorMessage(error)
				})
			})
	}

	// 开始计时
	startCounting() {
		this.setState({
			isCounting: true,
			count: COUNT
		})
		this.timer = setInterval(() => {
			let count = this.state.count - 1;
			if (count === -1) {
				clearInterval(this.timer);
				this.setState({
					isCounting: false
				})
			} else {
				this.setState({
					count
				})
			}
		}, 1000);
	}

}
