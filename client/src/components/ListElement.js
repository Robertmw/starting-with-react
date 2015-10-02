import React, { Component, PropTypes } from 'react';

class ListElement extends React.Component {

	constructor () {
		super();
	}

	render () {
		return (
			<li className="list-group-item">{this.props.text}</li>
			)
	}

}

export {ListElement}