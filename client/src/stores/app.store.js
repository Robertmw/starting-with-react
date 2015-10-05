var AppDispatcher = require('../dispatcher/dispatcher');
var EventEmitter = require('events').EventEmitter;
var AppConstants = require('../constants/app.constants');
var assign = require('object-assign');
var _ = require('underscore');

var _items = [
	'Cras justo odio',
	'Dapibus ac facilisis in',
	'Morbi leo risus',
	'Porta ac consectetur ac',
	'Vestibulum at eros'
];

function add (element) {
	if (element) {
		_items.push(element);
		_items = _.uniq(_items);
	}
}

function reset () {
	_items = [];
}

var AppStore = assign({}, EventEmitter.prototype, {

	getElements: function () {
		return _items;
	},

	emitChange: function() {
		this.emit('change');
	},

	addChangeListener: function(callback) {
		this.on('change', callback);
	},

	removeChangeListener: function(callback) {
		this.removeListener('change', callback);
	}

});

AppDispatcher.register(function(payload) {
	var action = payload.action;

	switch(action.actionType) {

		case AppConstants.APP_ADD:
			add(action.element);
			break;

		case AppConstants.APP_CLEAR:
			reset();
			break;

		default:
			return true;
	}

	AppStore.emitChange();

	return true;

});

module.exports = AppStore;
