import React, { Component, PropTypes } from 'react';
import {Comment} from './Comment';

class CommentsList extends React.Component {

	constructor () {
		super();
	}

	render () {
		var list = this.props.elements.map(function (data, index) {
			return <Comment
						key={index}
						user={data.user}
						date={data.date}
						text={data.text} />
		}.bind(this));
		return (
			<div className="list-wrapper">
					{list}
			</div>
			)
	}

}

export {CommentsList}