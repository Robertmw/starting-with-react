var AppDispatcher = require('../dispatcher/dispatcher');
var AppConstants = require('../constants/app.constants');

var AppActions = {

	addItem: function (newElement) {
		AppDispatcher.handleAction({
			actionType: AppConstants.APP_ADD,
			element: newElement
		})
	},

	clearItems: function () {
		AppDispatcher.handleAction({
			actionType: AppConstants.APP_CLEAR
		})
	}

};

module.exports = AppActions;