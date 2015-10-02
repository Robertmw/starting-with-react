import React, { Component, PropTypes } from 'react';

class Increase extends React.Component {

	_bind(...methods) {
		methods.forEach( (method) => this[method] = this[method].bind(this) );
	}

	constructor () {
		super();
	}

	render () {
		return (
			<button className="btn btn-success" onClick={this.props.onClick.bind(null, this)}>Increase</button>
			)
	}

}

export {Increase};