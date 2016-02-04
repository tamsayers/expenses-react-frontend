var Dispatcher = require('flux').Dispatcher;
var assign = require('object-assign');

class AppDispatcher extends Dispatcher {
  handleViewAction(action) {
    this.dispatch({
      source: 'VIEW_ACTION',
      action: action
    });
  }
}

module.exports = new AppDispatcher();
