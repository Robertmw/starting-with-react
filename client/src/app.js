import React, { Component, PropTypes } from 'react';
import {List} from './components/List';

class App extends React.Component {  

	_bind (...methods) {
		methods.forEach( (method) => this[method] = this[method].bind(this) );
	}

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

		this._bind('addNewItem', 'clearItems');
	}


	addNewItem () {
		var updatedElements = this.state.elements.slice();
		var newElement = React.findDOMNode(this.refs.itemValue).value;
		updatedElements.push(newElement);
		this.setState({
			elements: updatedElements
		});
	}

	clearItems () {
		this.setState({
			elements: []
		});
	}


	render() {
		return ( 
			<div className="container">
				<div className="row">
					<div className="col-md-8 col-md-offset-2">
						<div className="page-header">
							<h1>Example page</h1>
						</div>
						<input type="text" ref="itemValue" className="form-control input-lg" placeholder="Enter text" />
						<br/>
						<button className="btn btn-danger btn-lg pull-left" onClick={this.clearItems}>Clear</button>
						<button className="btn btn-success btn-lg pull-right" onClick={this.addNewItem}>Submit</button>
					</div>
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
}

React.render(<App/>, document.getElementById('app'));