import React from 'react';
import PropTypes from 'prop-types';

/**
 * FormGroup
 */
export default class FormGroup extends React.Component {

	render() {
		let {label} = this.props;
		return (
			<div className="form-group">
				<label className="col-lg-2 col-md-2 col-sm-12 control-label">{label}</label>
				<div className="col-lg-10 col-md-10">
					{this.props.children}
				</div>
			</div>
		)
	}

}

FormGroup.propTypes = {
	label: PropTypes.string,          // label
};

FormGroup.defaultProps = {
};
