import React from 'react';
import PropTypes from 'prop-types';
import ModelComponent from "./ModelComponent";

export default class Input extends ModelComponent {

	render() {
		let {type, placeholder, value, model, width} = this.props;

		if (model) {
			value = this.getOwnerStateValue(model);
		}

		// input样式
		let inputStyle = {};
		if (width) {
			inputStyle.width = width;
		}

		return (
			<input type={type} className="form-control" placeholder={placeholder} value={value}
				   onChange={(e) => this.handleChange(e)} style={inputStyle}/>
		)
	}

	handleChange(e) {
		let {model, onChange} = this.props;
		if (model) {
			this.setOwnerStateValue(model, e.target.value)
		}
		onChange && onChange(e)
	}

}

Input.propTypes = {
	type: PropTypes.string,
	name: PropTypes.string,
	value: PropTypes.string,
	placeholder: PropTypes.string,
	width: PropTypes.object,
};

Input.defaultProps = {
	type: 'text',
	value: '',
	placeholder: '',
};
