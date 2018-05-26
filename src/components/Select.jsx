import React from 'react';
import _ from 'lodash';
import PropTypes from "prop-types";
import {validator} from 'jeselvmo';
import ModelComponent from "./ModelComponent";

export default class Select extends ModelComponent {

	constructor(props) {
		super(props);

		let options = this.handleOptions(props.options);
		let optionsMap = this.handleOptionsMap(options);
		this.state = {
			options,
			optionsMap
		}
	}

	// options 转换 array
	handleOptions(options) {
		let {whole, wholeOption, choose, chooseOption, textField, valueField} = this.props;
		let array = [];
		if (validator.isJson(options)) {
			_.forEach(options, (text, value) => array.push({text, value}))
		}
		if (validator.isArray(options)) {
			array = options.map((opt) => ({'text': opt[textField], 'value': opt[valueField]}));
		}
		if (whole) {
			array.unshift(wholeOption)
		}
		if (choose) {
			array.unshift(chooseOption)
		}
		return array
	}

	// options 转换 map
	handleOptionsMap(options) {
		let optionsMap = {};
		options.forEach((op) => optionsMap[op.value] = op.text);
		return optionsMap
	}

	render() {
		let {model, value, width} = this.props;
		let {options, optionsMap} = this.state;
		if (model) {
			value = this.getOwnerStateValue(model);

			// value 列表中没有时处理
			if (!optionsMap[value] && options && options.length > 0) {
				value = options[0].value
				this.setOwnerStateValue(model, value)
			}
		}

		// input样式
		let inputStyle = {};
		if (width) {
			inputStyle.width = width;
		}

		return (
			<select className="form-control" value={value} onChange={this.handleChange.bind(this)} style={inputStyle}>
				{options.map((op) => (
					<option key={op.value} value={op.value}>{op.text}</option>
				))}
			</select>
		)
	}

	componentWillReceiveProps(nextProps) {
		if (this.props.options !== nextProps.options) {
			this.updateOptions(nextProps.options)
		}
	}

	updateOptions(propOptions) {
		let options = this.handleOptions(propOptions);
		let optionsMap = this.handleOptionsMap(options);
		this.setState({
			options,
			optionsMap
		})
	}

	handleChange(e) {
		let {model, onChange} = this.props;
		if (model) {
			this.setOwnerStateValue(model, e.target.value)
		}
		onChange && onChange(e)
	}

}

Select.propTypes = {
	options: PropTypes.object,    // 所有option，可是map，或array
	value: PropTypes.string,      // 选中的value
	whole: PropTypes.bool,                        // 显示全部
	wholeOption: PropTypes.object,                // 自定义全部option
	choose: PropTypes.bool,                       // 显示请选择
	chooseOption: PropTypes.object,               // 自定义请选择option
	textField: PropTypes.string,                  // 数组options中text字段名称
	valueField: PropTypes.string,                 // 数组options中value字段名称
};

Select.defaultProps = {
	typeName: 'select',
	value: '',
	options: {},
	whole: false,
	wholeOption: {text: '--全部--', value: ''},
	choose: false,
	chooseOption: {text: '--请选择--', value: ''},
	textField: 'text',
	valueField: 'value',
};
