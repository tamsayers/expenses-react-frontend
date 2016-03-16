const AppDispatcher = require('../dispatcher/AppDispatcher'),
      RequestJson = require('../services/RequestJson'),
      LoginConstants = require('../constants/LoginConstants');

module.exports = {
  login(username, password) {
    AppDispatcher.handleLoginAction(LoginConstants.LOGIN_TOKEN, {
      username: username,
      password: password
    });
  },

  unAuthorized() {
    AppDispatcher.handleViewAction(LoginConstants.UNAUTHORISED);
  }
};
