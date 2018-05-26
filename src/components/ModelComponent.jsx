import React from 'react';
import modelUtils from "../js/modelUtils";

export default class ModelComponent extends React.Component {

	constructor(props) {
		super(props);

		if (props) {
			this.form = props.__form__;
		}
	}

	componentWillMount() {
		this.owner = {state: {}};
		// console.log(this)
		let {owner} = this.props;
		if (owner) {
			this.owner = owner;
		}
	}

	getOwnerStateValue(model) {
		return modelUtils.getStateValue(this.owner, model)
	}

	setOwnerStateValue(model, value) {
		modelUtils.setStateValue(this.owner, model, value)
	}

	getOwnerStateValues(model) {
		return modelUtils.getStateValues(this.owner, model)
	}

	setOwnerStateValues(model, values) {
		modelUtils.setStateValues(this.owner, model, values)
	}
}
