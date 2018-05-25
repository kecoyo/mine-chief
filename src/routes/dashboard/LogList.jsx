import React from 'react';
import {observer} from 'mobx-react';
import dashboardStore from "../../stores/dashboardStore";

@observer
export default class LogList extends React.Component {

	render() {
		let {logList} = dashboardStore;
		return (
			<div className="row">
				<div className="col-lg-12">
					<div className="panel panel-default plain toggle panelClose panelRefresh" id="spr_3">
						<div className="panel-heading white-bg">
							<h4 className="panel-title">待处理</h4>
							<div className="panel-controls panel-controls-hide" style={{display: "none"}}>
								<a href="#" className="panel-refresh"><i
									className="im-spinner6"></i></a><a href="#"
																	   className="toggle panel-minimize"><i
								className="im-minus"></i></a><a
								href="#" className="panel-close"><i className="im-close"></i></a></div>
						</div>
						<div className="panel-body">
							<div className="table-responsive">
								<table className="table table-bordered table-hover">
									<thead>
									<tr>
										<th className="per10">消息类型</th>
										<th className="per10">消息时间</th>
										<th className="per10">创建时间</th>
										<th className="per50">信息</th>
										<th className="per10">状态</th>
									</tr>
									</thead>
									<tbody>
									{logList.map((item, i)=>(
										<tr key={i}>
											<td>{item.messageType}</td>
											<td>{item.messageTime}</td>
											<td>{item.createTime}</td>
											<td>{item.info}</td>
											<td>{item.status}</td>
										</tr>
									))}
									</tbody>
								</table>
							</div>
						</div>
					</div>
				</div>
			</div>
		)
	}

	componentDidMount() {
		dashboardStore.fetchLogList()
	}
}
