import React, {Component, PropTypes} from 'react';

import {Formular} from './components/Formular';
import {CommentsList} from './components/CommentsList';

import AppStore from './stores/app.store';

function getAppState () {
	return {
		elements: AppStore.getComments(),
		totalElements: AppStore.getTotal()
	}
}

class CommentBox extends React.Component {

	constructor () {
		super();
		this.state = {
			elements: getAppState().elements
		}

		this._bind('_onChange');
	}

	componentDidMount () {
		AppStore.addChangeListener(this._onChange);
	}

	render () {
		return (
				<div className="comments-box">
					<Formular />
					<CommentsList elements={this.state.elements} />
				</div>
			);
	}

	_bind (...methods) {
		methods.forEach( (method) => this[method] = this[method].bind(this) );
	}

	_onChange () {
		this.setState(getAppState());
	}

}

React.render(<CommentBox />, document.getElementById('app'));