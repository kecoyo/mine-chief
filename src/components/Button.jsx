import React from 'react';
import PropTypes from 'prop-types';
import cs from 'classnames';

export default class Button extends React.Component {

	render() {
		let {theme, size, block, alt, value, children, className, icon} = this.props;
		return (
			<button
				type="button"
				className={cs('btn', {
					[`btn-${theme}`]: theme,
					[`btn-${size}`]: size,
					'btn-block': block,
					'btn-alt': alt,
					[`${className}`]: className
				})} onClick={this.handleClick.bind(this)}>
				{icon && <i className={icon}></i>}&nbsp;
				{children || value}&nbsp;
			</button>
		)
	}

	handleClick() {
		let onClick = this.props.onClick;
		onClick && onClick()
	}
}

Button.propTypes = {
	theme: PropTypes.string,
	size: PropTypes.string,
	block: PropTypes.bool,
	alt: PropTypes.bool,
	icon: PropTypes.string,
	value: PropTypes.string,
	disabled: PropTypes.bool,      // 是否禁用,
	margin: PropTypes.bool,
	className: PropTypes.string,
	onClick: PropTypes.func
};

Button.defaultProps = {}
