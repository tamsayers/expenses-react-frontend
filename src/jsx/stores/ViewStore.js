const AppDispatcher = require('../dispatcher/AppDispatcher'),
      MicroEvent = require('microevent'),
      ViewConstants = require('../constants/ViewConstants');

var currentPage = ViewConstants.VIEW.LOGIN;

function ViewStore() {
  this.dispatchToken = AppDispatcher.register(payload => {
    if (payload.source === ViewConstants.VIEW_ACTION) {
      if(payload.action === ViewConstants.LOGGED_IN) {
        this.currentView = ViewConstants.VIEW.EXPENSES;
      } else {
        this.currentView = ViewConstants.VIEW.LOGIN;
      }

      this.trigger(ViewConstants.VIEW_CHANGE_EVENT);
    }

    return true;
  });

  this.currentView = ViewConstants.VIEW.LOGIN;
}

MicroEvent.mixin(ViewStore);

module.exports = new ViewStore();
