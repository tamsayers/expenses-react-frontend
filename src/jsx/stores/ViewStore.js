const AppDispatcher = require('../dispatcher/AppDispatcher'),
      MicroEvent = require('microevent'),
      Stores = require('./Stores'),
      ViewConstants = require('../constants/ViewConstants');

var currentPage = ViewConstants.VIEW.LOGIN;

function ViewStore() {
  this.dispatchToken = AppDispatcher.register(payload => {
    if (payload.source === ViewConstants.VIEW_ACTION) {
      if(payload.action === ViewConstants.LOGGED_IN) {
        currentPage = ViewConstants.VIEW.EXPENSES;
      } else {
        currentPage = payload.action;
      }

      this.trigger(ViewConstants.VIEW_CHANGE_EVENT);
    }

    return true;
  });

  this.current = () => currentPage;
}

MicroEvent.mixin(ViewStore);

module.exports = new ViewStore();
