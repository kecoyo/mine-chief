import React from 'react';
import Header from './Header';
import Sidebar from './Sidebar';

const Layout = (props) => (
	<div>
		<Header/>
		<Sidebar/>
		{props.children}
	</div>
);

export default Layout;
