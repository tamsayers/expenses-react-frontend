const AppDispatcher = require('../dispatcher/AppDispatcher'),
      MicroEvent = require('microevent'),
      ViewConstants = require('../constants/ViewConstants'),
      ViewPayloadHandler = require('./payload/ViewPayloadHandler');

var currentPage = ViewConstants.VIEW.LOGIN;

var dispatchTokenSymbol = Symbol();

class Store {
  constructor(PayloadHandler) {
    const payloadHandler = new PayloadHandler(this);

    this[dispatchTokenSymbol] = AppDispatcher.register(payloadHandler.handle);
  }

  get dispatchToken() {
    return this[dispatchTokenSymbol];
  }
}

MicroEvent.mixin(Store);

class ViewStore extends Store {
  constructor() {
    super(ViewPayloadHandler);
    this.currentView = ViewConstants.VIEW.LOGIN;
  }
}

module.exports = new ViewStore();
