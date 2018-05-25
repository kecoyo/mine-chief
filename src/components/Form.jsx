import React from 'react';
import PropTypes from 'prop-types';
import cs from 'classnames'

export default class Form extends React.Component {

	render() {
		let {className, horizontal, inline, groupBorder, hoverStripped} = this.props;
		return (
			<form ref={e => this.form = e}
				  className={cs(className, {
					  'form-horizontal': horizontal,
					  'form-inline': inline,
					  'group-border': groupBorder,
					  'hover-stripped': hoverStripped
				  })}
				  role="form">
				{this.renderChildren()}
			</form>
		)
	}

	get dom() {
		return this.form
	}

	renderChildren() {
		return React.Children.map(this.props.children, (child) => {
			if (child) {
				const cType = child.type
				if ((typeof cType === 'string')) {
					return child
				}
				return React.cloneElement(child, {
					__form__: this
				})
			}
			return child
		})
	}

	reset() {
		this.form && this.form.reset()
	}

}

Form.propTypes = {
	horizontal: PropTypes.bool, 	// 水平布局
	inline: PropTypes.bool,		// 行内布局
	groupBorder: PropTypes.bool,
	hoverStripped: PropTypes.bool,
};

Form.defaultProps = {};
