import React, {PureComponent} from 'react';
import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";

export default class Login extends PureComponent {

    render() {
        return (
            <div id="login" className="animated bounceIn">
                <img id="logo" src="assets/img/logo.png" alt="sprFlat Logo"/>
                <div className="login-wrapper">
                    <ul id="myTab" className="nav nav-tabs nav-justified bn">
                        <li className="active">
                            <a href="#log-in" data-toggle="tab">登陆</a>
                        </li>
                        <li>
                            <a href="#register" data-toggle="tab">注册</a>
                        </li>
                    </ul>
                    <div id="myTabContent" className="tab-content bn">
                        <div className="tab-pane fade active in" id="log-in">
                            <LoginForm/>
                        </div>
                        <div className="tab-pane fade" id="register">
                            <RegisterForm/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    componentDidMount() {
        document.body.className = 'login-page';
    }

    componentWillUnmount() {
        document.body.className = '';
    }

}
