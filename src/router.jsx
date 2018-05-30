import React from 'react';
import {Router, Route, Switch, Redirect} from 'react-router-dom';
import routerHistory from './js/routerHistory';
// import {asyncComponent} from 'beefly-common';
// const BatteryChange = asyncComponent(() => import(/* webpackChunkName: "battery/change" */'./routes/battery/BatteryChange'));
import Login from './routes/login';
import Layout from './routes/layout';
import Dashboard from './routes/dashboard';
import Mine from './routes/mine';
import Miner from './routes/miner';
import Profit from './routes/profit';
import Settings from './routes/settings';
import Profile from './routes/profile';
import MineEdit from "./routes/mine/MineEdit";
import Weixin from "./routes/weixin";

/**
 * 模块路由
 */
const router = () => (
	<Router history={routerHistory}>
		<Switch>
			<Route path="/" exact render={() => <Redirect to="/login"/>}/>
			<Route path="/login" component={Login}/>
			<Route path="/home" render={(props) => (
				<Layout>
					<Route path={`${props.match.path}/`} exact
						   render={() => <Redirect to={`/home/dashboard`}/>}/>
					<Route path={`${props.match.path}/dashboard`} component={Dashboard}/>
					<Route path={`${props.match.path}/mine`} component={Mine} exact/>
					<Route path={`${props.match.path}/mine/add`} component={MineEdit}/>
					<Route path={`${props.match.path}/mine/edit/:id`} component={MineEdit}/>
					<Route path={`${props.match.path}/miner`} component={Miner}/>
					<Route path={`${props.match.path}/profit`} component={Profit}/>
					<Route path={`${props.match.path}/settings`} component={Settings}/>
					<Route path={`${props.match.path}/profile`} component={Profile}/>
					<Route path={`${props.match.path}/weixin`} component={Weixin}/>
				</Layout>
			)}/>
		</Switch>
	</Router>
);

export default router
