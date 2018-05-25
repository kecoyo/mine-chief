import React from 'react';
import PropTypes from 'prop-types';
import cs from 'classnames';

export default class Col extends React.Component {
	render() {
		let {xs, sm, md, lg} = this.props;
		return (
			<div className={cs({
				[`col-xs-${xs}`]: xs,
				[`col-sm-${sm}`]: sm,
				[`col-md-${md}`]: md,
				[`col-lg-${lg}`]: lg
			})}>
				{this.props.children}
			</div>
		)
	}
}
Col.propTypes = {
	xs: PropTypes.number,
	sm: PropTypes.number,
	md: PropTypes.number,
	lg: PropTypes.number,
};
Col.defaultProps = {};
