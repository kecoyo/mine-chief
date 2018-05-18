import React, {Component} from 'react';
import {observer} from 'mobx-react';
import Content from '../layout/Content';
import appStore from "../../stores/appStore";

@observer
export default class Profile extends Component {

	render() {
		appStore.token = 'yangkk';
		return (
			<Content>
				<div className="row">
					<div className="col-lg-12">
						profile
					</div>
					<div className="col-lg-12">
						{appStore.token}
					</div>
				</div>
			</Content>
		)
	}

}
