import React from 'react';
import {HashRouter as Router, Route, Switch, Redirect} from 'react-router-dom';
// import {asyncComponent} from 'beefly-common';
// const BatteryChange = asyncComponent(() => import(/* webpackChunkName: "battery/change" */'./routes/battery/BatteryChange'));
import Login from './routes/login';
import Layout from './routes/layout';
import Dashboard from './routes/dashboard';
import Mine from './routes/mine';
import Miner from './routes/miner';
import Profit from './routes/profit';

/**
 * 模块路由
 */
const router = () => (
	<Router>
		<Switch>
			<Route path="/" exact render={() => <Redirect to="/login"/>}/>
			<Route path="/login" component={Login}/>
			<Route path="/home" render={(props) => (
				<Layout>
					<Route exact path={`${props.match.path}/`} component={Dashboard}/>
					<Route path={`${props.match.path}/mine`} component={Mine}/>
					<Route path={`${props.match.path}/miner`} component={Miner}/>
					<Route path={`${props.match.path}/profit`} component={Profit}/>
				</Layout>
			)}/>
		</Switch>
	</Router>
);

export default router
