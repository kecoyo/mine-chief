import React from 'react';
import Content from '../layout/Content';

const Sample = () => (
	<Content>
		<div className="row">
			<div className="col-lg-12">
				<div className="panel panel-default plain toggle panelClose panelRefresh" id="spr_3">
					<div className="panel-heading white-bg"></div>
					<div className="panel-body">
						<div className="table-responsive">
							<table className="table table-striped">
								<thead>
								<tr>
									<th className="per15">矿工名称</th>
									<th className="per10">总机器数</th>
									<th className="per10">在线机器数</th>
									<th className="per15">Token</th>
									<th className="per15">创建时间</th>
									<th className="per15">最近连接</th>
									<th className="per5">配置</th>
								</tr>
								</thead>
								<tbody>
								<tr>
									<td>苏挖庄</td>
									<td>1200</td>
									<td>200</td>
									<td>00:FF:93:3A:5C:9A</td>
									<td>2015-08-07 22:22:55</td>
									<td>2015-08-07 22:22:55</td>
									<td>
										<button type="button" className="btn btn-sm btn-danger">配置</button>
									</td>
								</tr>
								</tbody>
							</table>
						</div>
					</div>
				</div>
			</div>
		</div>
	</Content>
);

export default Sample;
