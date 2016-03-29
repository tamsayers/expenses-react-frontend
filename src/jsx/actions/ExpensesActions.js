const AppDispatcher = require('../dispatcher/AppDispatcher'),
      ExpensesConstants = require('../constants/ExpensesConstants');

module.exports = {
  addNewView() {
    AppDispatcher.handleExpensesAction(ExpensesConstants.VIEW.ADD_NEW);
  },

  queryView() {
    AppDispatcher.handleExpensesAction(ExpensesConstants.VIEW.QUERY);
  }
};
