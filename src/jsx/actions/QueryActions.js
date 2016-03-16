const AppDispatcher = require('../dispatcher/AppDispatcher'),
      QueryConstants = require('../constants/QueryConstants');

module.exports = {
  search(authToken, from, till, params) {
    AppDispatcher.handleQueryAction(QueryConstants.SEARCH, {
      authToken: authToken,
      from: from,
      till: till,
      params: params
    });
  }
};
