const AppDispatcher = require('../dispatcher/AppDispatcher'),
      MicroEvent = require('microevent');

var currentPage = 'login';

function ViewStore() {
  this.current = function() {
    return currentPage;
  }
}

MicroEvent.mixin(ViewStore);

AppDispatcher.register((payload) => {
  if (payload.source == 'VIEW_ACTION') {
    currentPage = payload.action;
    ViewStore.trigger('change');
  }

  return true;
});


module.exports = new ViewStore();
