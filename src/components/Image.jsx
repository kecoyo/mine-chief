import React from 'react';
import PropTypes from 'prop-types';
import cs from 'classnames';

export default class Image extends React.Component {

	render() {
		let {src,width,height} = this.props;
		return (
			<img src={src}  width={width} height={height}>

			</img>
		)
	}
}


Image.defaultProps = {}
