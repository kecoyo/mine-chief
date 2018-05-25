import React from 'react';
import {PropTypes} from 'prop-types';

export default class Col extends React.PureComponent {

	render() {
		return (
			<div className="col-lg-12">
				{this.props.children}
			</div>
		)
	}
}

Col.propTypes = {
	lg: PropTypes.number
};

