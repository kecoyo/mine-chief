import React from 'react';

export default class Col extends React.PureComponent {

	render() {
		return (
			<div className="col-lg-12">
				{this.props.children}
			</div>
		)
	}
}

