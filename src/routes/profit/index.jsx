import React, {Component} from 'react';
import {observer} from 'mobx-react';
import Content from '../layout/Content';
import appStore from "../../stores/appStore";

@observer
export default class Profit extends Component {

	render() {
		return (
			<Content>
				<div className="row">
					<div className="col-lg-12">
						token: {appStore.token}aaa
					</div>
				</div>
			</Content>
		)
	}

}
