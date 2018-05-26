import React from 'react';
import PropTypes from 'prop-types';
import cs from 'classnames';

export default class Panel extends React.PureComponent {

	settings = {
		refreshIcon: 'im-spinner6',//refresh icon for panels
		toggleIcon: 'im-minus',//toggle icon for panels
		collapseIcon: 'im-plus',//colapse icon for panels
		closeIcon: 'im-close', //close icon
		showControlsOnHover: true,//Show controls only on hover.
		overlayRefreshIcon: 'im-spinner5', //loading icon in overlay
		rememberSortablePosition: true //remember position in localstorage
	}

	render() {
		let {title, theme, whiteBg, panelMove, toggle, panelEdit, panelRefresh, panelClose} = this.props;
		return (
			<div ref={e => this._panel = e} className={cs('panel', `panel-${theme}`, {
				panelMove, toggle, panelRefresh, panelClose
			})}>
				<div className={cs('panel-heading', {'white-bg': whiteBg})}>
					{title && <h4 className="panel-title">{title}</h4>}
					<div className="panel-controls">
						{panelEdit &&
						<a href="javascript:void(0)" className="panel-refresh" onClick={this.handleEdit.bind(this)}><i
							className="im-cog2"></i></a>}
						{panelRefresh &&
						<a href="javascript:void(0)" className="panel-refresh"
						   onClick={this.handleRefresh.bind(this)}><i className="im-spinner6"></i></a>}
						{toggle &&
						<a href="javascript:void(0)" className="toggle panel-minimize"><i className="im-minus"></i></a>}
						{panelClose &&
						<a href="javascript:void(0)" className="panel-close" onClick={this.handleClose.bind(this)}><i
							className="im-close"></i></a>}
					</div>
				</div>
				<div className="panel-body">
					{this.props.children}
				</div>
			</div>
		)
	}

	handleEdit() {
		let {onEdit} = this.props;
		onEdit && onEdit()
	}

	handleRefresh() {
		let {onRefresh} = this.props;
		onRefresh && onRefresh()
	}

	handleClose() {
		let {onClose} = this.props;
		onClose && onClose()
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
