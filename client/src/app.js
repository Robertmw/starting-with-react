import React, { Component, PropTypes } from 'react';
import {List} from './components/List';
import {Formular} from './components/Formular';
import AppStore from './stores/app.store';

function getAppState () {
	return {
		elements: AppStore.getElements()
	}
}

class App extends React.Component {  

	constructor () {
		super();
		var result = getAppState();
		this.state = {
			elements: getAppState().elements
		}

		this._bind('_onChange');
	}

	componentDidMount () {
		AppStore.addChangeListener(this._onChange);
	}

	render() {
		return ( 
			<div className="container">
				<div className="row">
					<Formular />
				</div>
				<div className="row">
					<List elements={this.state.elements} title="Results" shouldUpdate={true}/>
				</div>
				<div className="row">
					<List elements={this.state.elements} title="Initial State (won't update)" shouldUpdate={false}/>
				</div>
			</div>
		)
	}

	_bind (...methods) {
		methods.forEach( (method) => this[method] = this[method].bind(this) );
	}

	_onChange () {
		this.setState(getAppState());
	}
}

React.render(<App/>, document.getElementById('app'));