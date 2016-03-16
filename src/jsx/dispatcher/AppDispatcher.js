const Dispatcher = require('flux').Dispatcher,
      LoginConstants = require('../constants/LoginConstants'),
      ViewConstants = require('../constants/ViewConstants'),
      AddConstants = require('../constants/AddConstants'),
      assign = require('object-assign');

class AppDispatcher extends Dispatcher {
  handleViewAction(action) {
    this.dispatch({
      source: ViewConstants.VIEW_ACTION,
      action: action
    });
  }

  handleAddAction(action, data) {
    this.dispatch({
      source: AddConstants.ADD_ACTION,
      action: action,
      data: data
    });
  }

  handleLoginAction(action, data) {
    this.dispatch({
      source: LoginConstants.LOGIN_ACTION,
      action: action,
      data: data
    });
  }
}

module.exports = new AppDispatcher();
