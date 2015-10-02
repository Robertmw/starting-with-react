import React, { Component, PropTypes } from 'react';

class Paragraph extends React.Component {

	constructor () {
		super();
	}

	shouldComponentUpdate (nextProps, nextState) {
		return this.props.shouldUpdate;
	}

	render () {
		return (
			<h3>Should not update: {this.props.value}</h3>
		)
	}

}

export {Paragraph};