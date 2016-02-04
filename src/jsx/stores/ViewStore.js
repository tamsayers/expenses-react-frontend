const AppDispatcher = require('../dispatcher/AppDispatcher'),
      MicroEvent = require('microevent');

var currentPage = 'login';

function ViewStore() {
  AppDispatcher.register(payload => {
    if (payload.source == 'VIEW_ACTION') {
      currentPage = payload.action;
      this.trigger('change');
    }

    return true;
  });

  this.current = function() {
    return currentPage;
  }
}

MicroEvent.mixin(ViewStore);

module.exports = new ViewStore();
