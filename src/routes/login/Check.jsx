import React from 'react';
import cs from 'classnames';

export default class Check extends React.PureComponent {

	constructor(props) {
		super(props);
	}

	render() {
		let {checked, text} = this.props;
		const insStyle = {
			position: 'absolute',
			top: '0%',
			left: '0%',
			display: 'block',
			width: '100%', height: '100%',
			margin: 0,
			padding: 0,
			background: 'rgb(255, 255, 255)',
			border: 0,
			opacity: 0
		};
		return (
			<label className="checkbox">
				<div className={cs('icheckbox_flat-green', {checked: checked})} style={{position: 'relative'}}>
					<input type="checkbox" style={{position: 'absolute', opacity: 0}} checked={checked}
						   onChange={(e) => this.handleChange(e)}/>
					<ins className="iCheck-helper" style={insStyle}></ins>
				</div>
				{text}
			</label>
		)
	}

	handleChange(e) {
		let {onChange} = this.props;
		onChange && onChange(e)
	}
}

