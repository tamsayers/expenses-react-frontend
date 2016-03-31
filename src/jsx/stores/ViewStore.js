const AppDispatcher = require('../dispatcher/AppDispatcher'),
      MicroEvent = require('microevent'),
      ViewConstants = require('../constants/ViewConstants'),
      ViewPayloadHandler = require('./payload/ViewPayloadHandler');

var currentPage = ViewConstants.VIEW.LOGIN;

function ViewStore() {
  var payloadHandler = new ViewPayloadHandler(this);

  this.dispatchToken = AppDispatcher.register(payloadHandler.handle);
  this.currentView = ViewConstants.VIEW.LOGIN;
}

MicroEvent.mixin(ViewStore);

module.exports = new ViewStore();
