import React, {Component} from 'react';
import {observer} from 'mobx-react';
import Header from './Header';
import Sidebar from './Sidebar';
import appStore from "../../stores/appStore";

@observer
export default class Layout extends Component {

	render() {
		if (appStore.loginUser) {
			return (
				<div>
					<Header/>
					<Sidebar/>
					{this.props.children}
				</div>
			)
		}
		return null
	}

	componentDidMount() {
		appStore.fetchLoginUser()
	}
}
