import React from 'react';
import cs from "classnames";
import PropTypes from "prop-types";

export default class Table extends React.PureComponent {

	render() {
		let {columns, dataSource, hover, bordered, striped} = this.props;
		return (
			<div className="table-responsive">
				<table className={cs('table', {
					"table-hover": hover,
					"table-striped": striped,
					"table-bordered": bordered,
				})}>
					<thead>
					<tr>
						{columns.map((c, i) => <th key={i} className={c.className}>{c.title}</th>)}
					</tr>
					</thead>
					<tbody>
					{dataSource.map((d, i) => (
						<tr key={i}>
							{columns.map((c, j) => (
								<td key={j} style={{verticalAlign: 'middle'}}>{this.renderTdData(c, d)}</td>
							))}
						</tr>
					))}
					</tbody>
				</table>
			</div>
		)
	}

	renderTdData(column, row) {
		let data = column.data,
			render = column.render;

		let value = '';
		if (data) {
			value = row[data];
		}
		if (render) {
			value = render(value, '', row)
		}
		return value
	}
}

Table.propTypes = {
	columns: PropTypes.array,
	dataSource: PropTypes.any,
	hover: PropTypes.bool,
	striped: PropTypes.bool,
	bordered: PropTypes.bool
};

Table.defaultProps = {
	columns: [],
	dataSource: [],
};


