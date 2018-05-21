import React from 'react';

export default class Row extends React.PureComponent {

	render() {
		return (
			<div className="row">
				{this.props.children}
			</div>
		)
	}
}

