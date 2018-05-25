import React from 'react';
import {observer} from 'mobx-react';
import Content from '../layout/Content';
import Statistics from "./Statistics";
import LogList from "./LogList";

@observer
export default class Dashboard extends React.Component{

	render(){
		return (
			<Content>
				<Statistics/>
				<LogList/>
			</Content>
		)
	}
}
