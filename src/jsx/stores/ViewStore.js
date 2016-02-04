const AppDispatcher = require('../dispatcher/AppDispatcher'),
      MicroEvent = require('microevent'),
      ViewConstants = require('../constants/ViewConstants');

var currentPage = ViewConstants.VIEW.LOGIN;

function ViewStore() {
  AppDispatcher.register(payload => {
    if (payload.source === ViewConstants.VIEW_ACTION) {
      currentPage = payload.action;
      this.trigger(ViewConstants.VIEW_CHANGE_EVENT);
    }

    return true;
  });

  this.current = function() {
    return currentPage;
  }
}

MicroEvent.mixin(ViewStore);

module.exports = new ViewStore();
