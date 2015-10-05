import React, { Component, PropTypes } from 'react';
import AppActions from '../actions/app.actions';

class Formular extends React.Component {

	constructor () {
		super();
		this._bind('addNewItem', 'clearItems');
	}

	addNewItem () {
		var newElement = React.findDOMNode(this.refs.itemValue).value;
		AppActions.addItem(newElement);

		React.findDOMNode(this.refs.itemValue).value = '';
	}

	clearItems () {
		AppActions.clearItems();
	}

	render () {
		return (
			<div className="col-md-8 col-md-offset-2">
				<div className="page-header">
					<h1>Example page</h1>
				</div>
				<input type="text" ref="itemValue" className="form-control input-lg" placeholder="Enter text" />
				<br/>
				<button className="btn btn-danger btn-lg pull-left" onClick={this.clearItems}>Clear</button>
				<button className="btn btn-success btn-lg pull-right" onClick={this.addNewItem}>Submit</button>
			</div>
			)
	}

	_bind(...methods) {
		methods.forEach( (method) => this[method] = this[method].bind(this) );
	}

}

export {Formular}