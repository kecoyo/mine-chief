import React, {Component} from 'react';
import Modal from "../../components/Modal";
import Panel from "../../components/Panel";
import Form from "../../components/Form";
import FormGroup from "../../components/FormGroup";
import walletApi from "../../apis/walletApi";
import notify from "../../js/notify";
import utils from "../../js/utils";
import Input from "../../components/Input";
import Select from "../../components/Select";
import {validator} from "jeselvmo";

const coineTypeMap = {
	btc: 'BTC',
	ltc: 'LTC',
	eth: 'ETH',
	zec: 'ZEC'
};

export default class EditWalletModal extends Component {

	constructor(props) {
		super(props);
		this.state = {
			visable: false,
			title: '',
			wallet: {
				name: '',
				coineType: '',
				walletAddress: ''
			}
		}
	}

	render() {
		return (
			<Modal
				title={this.state.title}
				visable={this.state.visable}
				onCancel={this.handleCancel.bind(this)}
				onOk={this.handleOk.bind(this)}
			>
				<Form ref={e => this.form = e} horizontal>
					<FormGroup label="币种">
						<Select
							model="wallet.coineType"
							owner={this}
							options={coineTypeMap}/>
					</FormGroup>
					<FormGroup label="钱包说明">
						<Input model="wallet.name" owner={this} name="walletName" placeholder="钱包说明"/>
					</FormGroup>
					<FormGroup label="钱包地址">
						<Input model="wallet.walletAddress" name="walletAddress" owner={this} placeholder="钱包地址"/>
					</FormGroup>
				</Form>
			</Modal>
		)
	}

	show(wallet = {}) {
		this.setState({
			visable: true,
			wallet,
			title: wallet.id ? '修改钱包' : '添加钱包'
		})
	}

	hide() {
		this.setState({
			visable: false
		});
	}

	handleCancel() {
		this.hide()
	}

	handleOk() {
		let {wallet} = this.state;

		if (validator.isEmpty(wallet.name)) {
			notify.warn({
				message: '钱包名称不能为空！',
			});
			return;
		}
		if (validator.isEmpty(wallet.walletAddress)) {
			notify.warn({
				message: '钱包地址不能为空！',
			});
			return;
		}

		walletApi.save(wallet)
			.then((result) => {
				notify.success({
					message: '钱包保存成功！'
				});
				this.hide();

				let {onOk} = this.props;
				onOk && onOk()
			})
			.catch((error) => {
				notify.error({
					message: '钱包保存失败！',
					description: utils.getErrorMessage(error)
				})
			})
	}

}
