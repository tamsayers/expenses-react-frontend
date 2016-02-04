const AppDispatcher = require('../dispatcher/AppDispatcher');

module.exports = {
  login(username, password) {
    AppDispatcher.handleViewAction('expenses');
  },
  unAuthorized() {
    AppDispatcher.handleViewAction('login');
  }
};
