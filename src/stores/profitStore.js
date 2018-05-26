import {action, observable} from 'mobx';
import dashboardApi from "../apis/dashboardApi";
import walletApi from "../apis/walletApi";

class ProfitStore {

	@observable walletList = [];

	@action
	fetchWalletList() {
		walletApi.list()
			.then(({obj}) => {
				this.walletList = obj;
			})
	}

}

const profitStore = new ProfitStore();
export default profitStore;
