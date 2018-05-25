import React, {Component} from 'react';
import Modal from "../../components/Modal";
import Panel from "../../components/Panel";
import Form from "../../components/Form";
import FormGroup from "../../components/FormGroup";

export default class AddWalletModal extends Component {

	constructor(props) {
		super(props);
		this.state = {
			show: false,
		}
	}

	render() {
		return (
			<Modal show={this.state.show} title="添加钱包" onHide={this.hide.bind(this)} onOk={this.ok.bind(this)}>
				<Modal.Body>
					<Form horizontal>
						<FormGroup label="币种">
								<select className="form-control select2">
									<option value="btc">BTC</option>
									<option value="ltc">LTC</option>
									<option value="eth">ETH</option>
									<option value="zec">ZEC</option>
								</select>
						</FormGroup>
						<FormGroup label="钱包说明">
							<input type="text" className="form-control" placeholder="钱包说明"/>
						</FormGroup>
						<FormGroup label="钱包地址">
								<input type="text" className="form-control" placeholder="钱包地址"/>
						</FormGroup>
					</Form>
				</Modal.Body>
				<Modal.Footer>
					<button type="button" className="btn btn-default" data-dismiss="modal"
							onClick={this.hide.bind(this)}>取 消
					</button>
					<button type="button" className="btn btn-primary" onClick={this.ok.bind(this)}>确 定
					</button>
				</Modal.Footer>
			</Modal>
		)
	}

	show() {
		this.setState({
			show: true,
		})
	}

	hide() {
		this.setState({
			show: false
		});
	}

	ok() {
		this.hide()
	}

}
