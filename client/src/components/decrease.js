import React, { Component, PropTypes } from 'react';

class Decrease extends React.Component {

	_bind(...methods) {
		methods.forEach( (method) => this[method] = this[method].bind(this) );
	}

	constructor () {
		super();
	}

	render () {
		return (
			<button className="btn btn-danger" onClick={this.props.onClick.bind(null, this)}>Decrease</button>
			)
	}

}

export {Decrease}