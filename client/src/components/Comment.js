import React, { Component, PropTypes } from 'react';
var marked = require('marked');


class Comment extends React.Component {

	constructor () {
		super();

		this._bind('rawMarkup');
	}

	rawMarkup () {
		return { __html: marked(this.props.text, {sanitize: true}) };
	}

	render () {
		return (
			<div className="comment-item">
				<div className="profile-photo">
					<img src={this.props.user.photo} alt="" />
				</div>
				<div className="comment-content">
					<div className="comment-header">
						<p className="name">{this.props.user.username}</p>
						<p className="date">{this.props.date}</p>
					</div>
					<div className="comment-text">
						<p dangerouslySetInnerHTML={this.rawMarkup()}></p>
					</div>
				</div>
			</div>
		)
	}

	_bind(...methods) {
		methods.forEach( (method) => this[method] = this[method].bind(this) );
	}

}

export {Comment}