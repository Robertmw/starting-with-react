var AppDispatcher = require('../dispatcher/dispatcher');
var EventEmitter = require('events').EventEmitter;
var AppConstants = require('../constants/app.constants');
var assign = require('object-assign');
var _ = require('underscore');

var _items = {};

function add (element) {
	console.log(element);
	_items.push(element);
}

function reset () {
	_items = {};
}

var AppStore = assign({}, EventEmitter.prototype, {

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
