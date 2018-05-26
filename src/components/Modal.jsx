import React from 'react';
import PropTypes from 'prop-types';
import cs from 'classnames';
import $ from 'jquery';
import Button from "./Button";

/**
 * 弹框组件
 */
export default class Modal extends React.Component {

	constructor(props) {
		super(props);
	}

	render() {
		let {theme, title, size} = this.props;

		return (
			<div ref={(e) => this._modal = e}
				 className={cs('modal', 'modal-' + theme, 'fade', 'in')}
				 tabIndex="-1" role="dialog" aria-hidden="true">
				<div className={cs("modal-dialog", `modal-${size}`)}>
					<div className="modal-content">
						<div className="modal-header">
							<button type="button" className="close" onClick={this.handleCancel.bind(this)}>
								<span aria-hidden="true">&times;</span></button>
							<h4 className="modal-title">{title}</h4>
						</div>
						<div className="modal-body">
							{this.props.children}
						</div>
						<div className="modal-footer">
							<Button theme={'default'} onClick={this.handleCancel.bind(this)}>取消</Button>
							<Button theme={'primary'} onClick={this.handleOk.bind(this)}>确定</Button>
						</div>
					</div>
				</div>
			</div>
		)
	}

	componentDidMount() {
		if (this.props.visable) {
			this.show()
		}

		//call center modal function after modal is show
		$('.modal').on('show.bs.modal', (e) => {
			//center modal
		});
		$(this._modal).on('hidden.bs.modal', (e) => {
			console.log('// do something...')
			this.handleCancel()
		});
	}

	componentDidUpdate() {
		//get settings object
	}

	componentWillReceiveProps(nextProps) {
		if (this.props.visable !== nextProps.visable) {
			if (nextProps.visable) {
				this.show()
			} else {
				this.hide();
			}
		}
	}

	show() {
		$(this._modal).modal({
			backdrop: this.props.backdrop,
			keyboard: this.props.keyboard,
			show: true,
		});
	}

	hide() {
		$(this._modal).modal('hide');
	}

	handleCancel() {
		if (this.props.onCancel) {
			this.props.onCancel()
		}
	}

	handleOk() {
		if (this.props.onOk) {
			this.props.onOk()
		}
	}
}

Modal.propTypes = {
	visible: PropTypes.bool,	// 显示模态框
	backdrop: PropTypes.bool,	// 单击弹框外是否关闭
	keyboard: PropTypes.bool, // 键盘上的 esc 键被按下时关闭模态框
	theme: PropTypes.string,	// 主题样式
	title: PropTypes.string,
	onCancel: PropTypes.func,
	onOk: PropTypes.func
};

Modal.defaultProps = {
	visable: false,
	backdrop: true,
	keyboard: true,
	theme: 'default',
	title: 'modal title'
};
