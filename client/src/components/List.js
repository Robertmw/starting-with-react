import React, { Component, PropTypes } from 'react';
import {ListElement} from './ListElement';

class List extends React.Component {

	constructor () {
		super();
	}

	shouldComponentUpdate (nextProps, nextState) {
		return this.props.shouldUpdate;
	}

	render () {
		var listElements = this.props.elements.map(function (data, index) {
			return <ListElement key={index} text={data} />
		}.bind(this));
		return (
			<div className="col-md-8 col-md-offset-2">
				<div className="page-header">
					<h3>{this.props.title}</h3>
				</div>
				<ul className="list-group">
					{listElements}
				</ul>
			</div>
			)
	}

}

export {List}