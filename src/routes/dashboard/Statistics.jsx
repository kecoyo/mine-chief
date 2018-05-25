import React from 'react';
import {observer} from 'mobx-react';
import dashboardStore from "../../stores/dashboardStore";

@observer
export default class Statistics extends React.Component {

	render() {
		// { mineNum: 0, okNum: 0, errNum: 0, onlineNum: 0 }
		let {statistics} = dashboardStore;
		return (
			<div className="row">
				<div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
					<div className="tile orange">
						<div className="tile-icon">
							<i className="im-office s64"></i>
						</div>
						<div className="tile-content">
							<div className="number">{statistics.mineNum}</div>
							<h3>矿场数</h3>
						</div>
					</div>
				</div>
				<div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
					<div className="tile blue">
						<div className="tile-icon">
							<i className="im-users2 s64"></i>
						</div>
						<div className="tile-content">
							<div className="number">{statistics.onlineNum}</div>
							<h3>总工机数</h3>
						</div>
					</div>
				</div>
				<div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
					<div className="tile green">
						<div className="tile-icon">
							<i className="im-smiley s64"></i>
						</div>
						<div className="tile-content">
							<div className="number">{statistics.okNum}</div>
							<h3>正常矿机</h3>
						</div>
					</div>
				</div>
				<div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
					<div className="tile magenta">
						<div className="tile-icon">
							<i className="im-sad2 s64"></i>
						</div>
						<div className="tile-content">
							<div className="number">{statistics.errNum}</div>
							<h3>异常矿机</h3>
						</div>
					</div>
				</div>
			</div>
		)
	}

	componentDidMount() {
		dashboardStore.fetchStatistics()
	}
}
