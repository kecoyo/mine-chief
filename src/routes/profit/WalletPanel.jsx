import React, {Component} from 'react';
import {observer} from 'mobx-react';
import profitStore from "../../stores/profitStore";
import Panel from "../../components/Panel";
import walletApi from "../../apis/walletApi";
import {dateUtils, numberUtils} from 'jeselvmo';
import notify from "../../js/notify";
import utils from "../../js/utils";

@observer
export default class WalletPanel extends Component {

	constructor(props) {
		super(props);
		this.state = {
			price: 0,
			list: []
		}
	}

	render() {
		let {wallet} = this.props;
		return (
			<Panel title={`${wallet.name} - (${wallet.coinType}) - (${wallet.walletAddress})`}
				   panelEdit panelClose
				   onEdit={this.handleEdit.bind(this)}
				   onClose={this.handleClose.bind(this)}
			>
				<table className="table table-bordered">
					<thead>
					<tr>
						<th className="per5">#</th>
						<th className="per40">Confirmed</th>
						<th className="per40">Price</th>
						<th className="per15">Value</th>
					</tr>
					</thead>
					<tbody>
					{this.state.list.map((o, i) => (
						<tr key={i}>
							<td>{i + 1}</td>
							<td>{dateUtils.format(o.confirmed, dateUtils.F_DATETIME)}</td>
							<td>{numberUtils.format(o.price, '0.0000')}</td>
							<td>{numberUtils.format(o.value, '0.0000')}</td>
						</tr>
					))}
					</tbody>
				</table>
			</Panel>
		)
	}

	componentDidMount() {
		let {wallet} = this.props;
		walletApi.details({
			coinType: wallet.coinType,
			walletAddress: wallet.walletAddress  	// 1EPVMLMzTPMWBebqY3JNfWDbHAfJ362bS7
		}).then(({obj}) => {
			this.setState({
				price: obj.price,
				list: obj.records
			})
		}).catch((error) => {
			notify.error({
				message: '加载钱包信息失败！',
				description: utils.getErrorMessage(error)
			})
		})
	}

	handleEdit() {
		let {onEdit, wallet} = this.props;
		onEdit && onEdit(wallet)
	}

	handleClose() {
		let {onClose, wallet} = this.props;
		onClose && onClose(wallet)
	}

}
