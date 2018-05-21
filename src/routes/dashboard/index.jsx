import React from 'react';
import Content from '../layout/Content';


const module = {
	name: 'Dashboard',
	iconCls: 'im-screen',
	path: '/home'
}

const Dashboard = () => (
	<Content module={module}>
		<div className="row">
			<div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
				<div className="tile orange">
					<div className="tile-icon">
						<i className="im-office s64"></i>
					</div>
					<div className="tile-content">
						<div className="number">5</div>
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
						<div className="number">24</div>
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
						<div className="number">325</div>
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
						<div className="number">3548</div>
						<h3>异常矿机</h3>
					</div>
				</div>
			</div>
		</div>
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
							<table className="table table-bordered">
								<thead>
								<tr>
									<th className="per10">矿场</th>
									<th className="per10">机器类型</th>
									<th className="per10">矿工名称</th>
									<th className="per10">MAC地址</th>
									<th className="per10">IP地址</th>
									<th className="per10">温度</th>
									<th className="per10">算力</th>
									<th className="per15">异常信息</th>
									<th className="per10">运行时间</th>
									<th className="per15">操作</th>
								</tr>
								</thead>
								<tbody>
								<tr>
									<td>苏挖庄</td>
									<td>Antminer T9+</td>
									<td>苏挖庄</td>
									<td>00:FF:93:3A:5C:9A</td>
									<td>192.168.100.158</td>
									<td>80℃</td>
									<td>10500</td>
									<td>温度过高</td>
									<td>12d24h12m</td>
									<td>
										<button type="button" className="btn btn-sm btn-danger">忽略
										</button>
									</td>
								</tr>
								<tr>
									<td>苏挖庄</td>
									<td>Antminer T9+</td>
									<td>苏挖庄</td>
									<td>00:FF:93:3A:5C:9A</td>
									<td>192.168.100.158</td>
									<td>80℃</td>
									<td>10500</td>
									<td>温度过高</td>
									<td>12d24h12m</td>
									<td>
										<button type="button" className="btn btn-sm btn-danger">忽略
										</button>
									</td>
								</tr>
								<tr>
									<td>苏挖庄</td>
									<td>Antminer T9+</td>
									<td>苏挖庄</td>
									<td>00:FF:93:3A:5C:9A</td>
									<td>192.168.100.158</td>
									<td>80℃</td>
									<td>10500</td>
									<td>温度过高</td>
									<td>12d24h12m</td>
									<td>
										<button type="button" className="btn btn-sm btn-danger">忽略
										</button>
									</td>
								</tr>
								<tr>
									<td>苏挖庄</td>
									<td>Antminer T9+</td>
									<td>苏挖庄</td>
									<td>00:FF:93:3A:5C:9A</td>
									<td>192.168.100.158</td>
									<td>80℃</td>
									<td>10500</td>
									<td>温度过高</td>
									<td>12d24h12m</td>
									<td>
										<button type="button" className="btn btn-sm btn-danger">忽略
										</button>
									</td>
								</tr>
								<tr>
									<td>苏挖庄</td>
									<td>Antminer T9+</td>
									<td>苏挖庄</td>
									<td>00:FF:93:3A:5C:9A</td>
									<td>192.168.100.158</td>
									<td>80℃</td>
									<td>10500</td>
									<td>温度过高</td>
									<td>12d24h12m</td>
									<td>
										<button type="button" className="btn btn-sm btn-danger">忽略
										</button>
									</td>
								</tr>
								<tr>
									<td>苏挖庄</td>
									<td>Antminer T9+</td>
									<td>苏挖庄</td>
									<td>00:FF:93:3A:5C:9A</td>
									<td>192.168.100.158</td>
									<td>80℃</td>
									<td>10500</td>
									<td>温度过高</td>
									<td>12d24h12m</td>
									<td>
										<button type="button" className="btn btn-sm btn-danger">忽略
										</button>
									</td>
								</tr>
								<tr>
									<td>苏挖庄</td>
									<td>Antminer T9+</td>
									<td>苏挖庄</td>
									<td>00:FF:93:3A:5C:9A</td>
									<td>192.168.100.158</td>
									<td>80℃</td>
									<td>10500</td>
									<td>温度过高</td>
									<td>12d24h12m</td>
									<td>
										<button type="button" className="btn btn-sm btn-danger">忽略
										</button>
									</td>
								</tr>
								<tr>
									<td>苏挖庄</td>
									<td>Antminer T9+</td>
									<td>苏挖庄</td>
									<td>00:FF:93:3A:5C:9A</td>
									<td>192.168.100.158</td>
									<td>80℃</td>
									<td>10500</td>
									<td>温度过高</td>
									<td>12d24h12m</td>
									<td>
										<button type="button" className="btn btn-sm btn-danger">忽略
										</button>
									</td>
								</tr>
								<tr>
									<td>苏挖庄</td>
									<td>Antminer T9+</td>
									<td>苏挖庄</td>
									<td>00:FF:93:3A:5C:9A</td>
									<td>192.168.100.158</td>
									<td>80℃</td>
									<td>10500</td>
									<td>温度过高</td>
									<td>12d24h12m</td>
									<td>
										<button type="button" className="btn btn-sm btn-danger">忽略
										</button>
									</td>
								</tr>
								<tr>
									<td>苏挖庄</td>
									<td>Antminer T9+</td>
									<td>苏挖庄</td>
									<td>00:FF:93:3A:5C:9A</td>
									<td>192.168.100.158</td>
									<td>80℃</td>
									<td>10500</td>
									<td>温度过高</td>
									<td>12d24h12m</td>
									<td>
										<button type="button" className="btn btn-sm btn-danger">忽略
										</button>
									</td>
								</tr>
								<tr>
									<td>苏挖庄</td>
									<td>Antminer T9+</td>
									<td>苏挖庄</td>
									<td>00:FF:93:3A:5C:9A</td>
									<td>192.168.100.158</td>
									<td>80℃</td>
									<td>10500</td>
									<td>温度过高</td>
									<td>12d24h12m</td>
									<td>
										<button type="button" className="btn btn-sm btn-danger">忽略
										</button>
									</td>
								</tr>
								<tr>
									<td>苏挖庄</td>
									<td>Antminer T9+</td>
									<td>苏挖庄</td>
									<td>00:FF:93:3A:5C:9A</td>
									<td>192.168.100.158</td>
									<td>80℃</td>
									<td>10500</td>
									<td>温度过高</td>
									<td>12d24h12m</td>
									<td>
										<button type="button" className="btn btn-sm btn-danger">忽略
										</button>
									</td>
								</tr>
								<tr>
									<td>苏挖庄</td>
									<td>Antminer T9+</td>
									<td>苏挖庄</td>
									<td>00:FF:93:3A:5C:9A</td>
									<td>192.168.100.158</td>
									<td>80℃</td>
									<td>10500</td>
									<td>温度过高</td>
									<td>12d24h12m</td>
									<td>
										<button type="button" className="btn btn-sm btn-danger">忽略
										</button>
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

export default Dashboard;
