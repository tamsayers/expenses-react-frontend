const Dispatcher = require('flux').Dispatcher,
      LoginConstants = require('../constants/LoginConstants'),
      QueryConstants = require('../constants/QueryConstants'),
      ViewConstants = require('../constants/ViewConstants'),
      AddConstants = require('../constants/AddConstants'),
      ExpensesConstants = require('../constants/ExpensesConstants'),
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

  handleQueryAction(action, data) {
    this.dispatch({
      source: QueryConstants.QUERY_ACTION,
      action: action,
      data: data
    });
  }

  handleExpensesAction(action) {
    this.dispatch({
      source: ExpensesConstants.EXPENSES_ACTION,
      action: action
    });
  }
}

module.exports = new AppDispatcher();
