import React from 'react';
import uiLoad from "../js/uiLoad";
import uiResConfig from "../js/uiResConfig";


export default class DataTable extends React.PureComponent {

	constructor(props) {
		super(props);
	}

	render() {
		return (
			<table ref={e => this._dataTable = e} className="table display"/>
		)
	}

	componentDidMount() {
		uiLoad.load(uiResConfig.DataTable)
			.then(() => {
				this.drawDataTable()
			})
	}

	componentDidUpdate() {
		this.drawDataTable();
	}

	drawDataTable() {
		let {columns, dataSource} = this.props;
		this.dataTable = $(this._dataTable).dataTable({
			"bJQueryUI": false,
			"bAutoWidth": false,
			"sDom": "<rt>",
			"paging": false,
			"destroy": true,
			"columns": columns,
			"data": dataSource
		});

	}

}
