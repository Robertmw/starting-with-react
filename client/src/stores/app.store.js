var AppDispatcher = require('../dispatcher/dispatcher');
var EventEmitter = require('events').EventEmitter;
var AppConstants = require('../constants/app.constants');
var assign = require('object-assign');
var _ = require('underscore');

var _comments = [];

function addComment (user, text) {
	if (user, text) {
		var comment = {
			id: (+new Date() + Math.floor(Math.random() * 999999)),
			user: {
				username: user,
				photo: 'https://cdn0.iconfinder.com/data/icons/user-pictures/100/malecostume-128.png'
			},
			text: text,
			date: Date().substr(0,10)
		}

		_comments.push(comment);
	}
}

var AppStore = assign({}, EventEmitter.prototype, {

	getComments: function () {
		return _comments;
	},

	getTotal: function () {
		return _comments.length;
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
			addComment(action.user, action.text)
			break;

		default:
			return true;
	}

	AppStore.emitChange();

	return true;

});

module.exports = AppStore;
