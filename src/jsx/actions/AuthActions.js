const AppDispatcher = require('../dispatcher/AppDispatcher');

module.exports = {
  login(username, password) {

  },
  unAuthorized() {
    AppDispatcher.handleViewAction('login');
  }
};
