import {action, observable} from 'mobx';
import dashboardApi from "../apis/dashboardApi";

class DashboardStore {

	@observable statistics = {};
	@observable logList = [];

	@action
	fetchStatistics() {
		dashboardApi.dashboard()
			.then((result) => {
				this.statistics = result.obj;
			})
	}

	@action
	fetchLogList(){
		dashboardApi.logList({
			currentPage: 1
		})
			.then((result)=>{
				this.logList = result.obj.list;
			})
	}

}

const dashboardStore = new DashboardStore();
export default dashboardStore;
