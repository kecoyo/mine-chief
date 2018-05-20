import React from 'react';
import PropTypes from 'prop-types';
import cs from 'classnames';


export default class Panel extends React.PureComponent {

	render() {
		let {title, theme, whiteBg, plain} = this.props;
		return (
			<div className={cs('panel', `panel-${theme}`, {'plain': plain})}>
				<div className={cs('panel-heading', {'white-bg': whiteBg})}>
					{title && <h4 className="panel-title">{title}</h4>}
				</div>
				<div className="panel-body">
					{this.props.children}
				</div>
			</div>
		)
	}
}

Panel.propTypes = {
	title: PropTypes.string,
	whiteBg: PropTypes.bool,
	theme: PropTypes.string,
	plain: PropTypes.bool,
};

Panel.defaultProps = {
	whiteBg: false,
	theme: 'default',
	plain: false
};
