import React from 'react';
import '../../styles/global.scss';
import Header from './Header';
import Sidebar from './Sidebar';
import Content from './Content';

const Layout = (props) => (
	<div>
		<Header/>
		<Sidebar/>
		{props.children}
	</div>
);

export default Layout;
