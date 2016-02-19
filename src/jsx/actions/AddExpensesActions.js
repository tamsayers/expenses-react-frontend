const AppDispatcher = require('../dispatcher/AppDispatcher'),
      AddConstants = require('../constants/AddConstants');

module.exports = {
  addExpense() {
    AppDispatcher.handleAddAction(AddConstants.NEW_EXPENSE);
  },
  removeExpense(index) {
    AppDispatcher.handleAddAction(AddConstants.REMOVE_EXPENSE, { index: index });
  }
};
