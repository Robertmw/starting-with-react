import React, { Component, PropTypes } from 'react';
import {List} from './components/List';
import {Formular} from './components/Formular';
import AppStore from './stores/app.store';

class App extends React.Component {  

	constructor () {
		super();
		this.state = {
			elements: [
				'Cras justo odio',
				'Dapibus ac facilisis in',
				'Morbi leo risus',
				'Porta ac consectetur ac',
				'Vestibulum at eros'
			]
		}
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
		this.setState({number: 0});
	}
}

React.render(<App/>, document.getElementById('app'));