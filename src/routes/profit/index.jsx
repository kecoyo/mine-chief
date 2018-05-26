import React, {Component} from 'react';
import {observer} from 'mobx-react';
import Content from '../layout/Content';
import EditWalletModal from "./EditWalletModal";
import profitStore from "../../stores/profitStore";
import Panel from "../../components/Panel";
import WalletPanel from "./WalletPanel";
import walletApi from "../../apis/walletApi";
import notify from "../../js/notify";
import utils from "../../js/utils";

@observer
export default class Profit extends Component {

	render() {
		return (
			<Content toolbar={this.renderToolbar.bind(this)}>
				<div className="row">
					<div className="col-lg-12">
						{profitStore.walletList.map((o, i) => (
							<WalletPanel
								key={i}
								wallet={o}
								onEdit={this.handleEdit.bind(this)}
								onClose={this.handleClose.bind(this)}/>
						))}
						<EditWalletModal ref={e => this._editWalletModal = e} onOk={this.refresh.bind(this)}/>
					</div>
				</div>
			</Content>
		)
	}

	renderToolbar() {
		return [
			<div className="btn-group" key="add">
				<a className="btn" title="create mine"
				   onClick={() => this.addWallet()}>
					<i className="im-plus color-blue s24"></i>
				</a>
			</div>
		]
	}

	componentDidMount() {
		this.refresh()
	}

	refresh() {
		profitStore.fetchWalletList()
	}

	addWallet() {
		this._editWalletModal.show()
	}

	handleEdit(wallet) {
		this._editWalletModal.show(wallet)
	}

	handleClose(wallet) {
		walletApi.delete({
			id: wallet.id
		})
			.then((result) => {
				notify.success({
					message: '删除钱包成功！'
				});
				profitStore.fetchWalletList();
			})
			.catch((error) => {
				notify.error({
					message: '删除钱包失败！',
					description: utils.getErrorMessage(error)
				})
			})
	}

}
