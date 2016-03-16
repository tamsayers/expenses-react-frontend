const AppDispatcher = require('../dispatcher/AppDispatcher'),
      MicroEvent = require('microevent'),
      RequestJson = require('../services/RequestJson'),
      QueryConstants = require('../constants/QueryConstants');

var results = [];

function QueryStore() {
  this.dispatchToken = AppDispatcher.register(payload => {
    if (payload.source === QueryConstants.QUERY_ACTION) {
      if (payload.action === QueryConstants.SEARCH) {
         RequestJson.get('/api/expenses/' + payload.data.from + '/to/' + payload.data.till, payload.data.params, payload.data.authToken)
                    .then(response => {
                      results = response;
                      this.trigger(QueryConstants.NEW_RESULTS);
                    });
      }
    }

    return true;
  });

  this.results = () => results;
};

MicroEvent.mixin(QueryStore);

module.exports = new QueryStore();
