import React, { Component, PropTypes } from 'react';

import AppActions from '../actions/app.actions';

class Formular extends React.Component {

	constructor () {
		super();

		this._bind('addComment');
	}

	addComment () {
		var user = React.findDOMNode(this.refs.itemValue).value;
		var commentText = React.findDOMNode(this.refs.commentText).value;

		AppActions.addComment(user, commentText);
	}

	render () {
		return (
			<div className="comment-form">
				<input type="text" ref="itemValue" placeholder="Enter nickname" />
				<textarea ref="commentText" placeholder="Enter comment"></textarea>
				<button onClick={this.addComment}>Submit</button>
			</div>
			)
	}

	_bind(...methods) {
		methods.forEach( (method) => this[method] = this[method].bind(this) );
	}

}

export {Formular}