import {observable, computed, action} from 'mobx';


class MineStore {

	@observable id = '';
	@observable name = '苏挖庄';
	@observable ips = '192.168.0.100-200,192.168.1.50-200';
	@observable token = '';
	@observable config = [];

	constructor() {
		this.config = [
			{
				type: "Antminer T9+",
				maxTemp: 98,
				tempTimes: 5,
				minRate: 9000,
				rateTimes: 1,
				canNotConnTimes: 1,
				offlineTimes: 1,
			},
			{
				type: "Antminer L3+",
				maxTemp: 98,
				tempTimes: 5,
				minRate: 9000,
				rateTimes: 1,
				canNotConnTimes: 1,
				offlineTimes: 1,
			}
		]
	}

}

export default MineStore;
