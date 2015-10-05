var AppDispatcher = require('../dispatcher/dispatcher');
var AppConstants = require('../constants/app.constants');

var AppActions = {

	addComment: function (user, commentText) {
		AppDispatcher.handleAction({
			actionType: AppConstants.APP_ADD,
			user: user,
			text: commentText
		})
	},

};

module.exports = AppActions;