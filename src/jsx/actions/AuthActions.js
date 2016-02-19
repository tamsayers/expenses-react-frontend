const AppDispatcher = require('../dispatcher/AppDispatcher'),
      RequestJson = require('../services/RequestJson'),
      ViewNames = require('../constants/ViewConstants').VIEW;

module.exports = {
  login(username, password) {
    RequestJson.post('/api/authenticate', {
      username: username,
      password: password
    })
    .then(response => AppDispatcher.handleViewAction(ViewNames.EXPENSES))
    .catch(console.error);
  },
  unAuthorized() {
    AppDispatcher.handleViewAction(ViewNames.LOGIN);
  }
};
