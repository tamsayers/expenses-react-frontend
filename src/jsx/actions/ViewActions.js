const AppDispatcher = require('../dispatcher/AppDispatcher'),
      ViewConstants = require('../constants/ViewConstants');

module.exports = {
  loggedId() {
    AppDispatcher.handleViewAction(ViewConstants.LOGGED_IN);
  }
};
