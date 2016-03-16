const AppDispatcher = require('../dispatcher/AppDispatcher'),
      RequestJson = require('../services/RequestJson'),
      AddConstants = require('../constants/AddConstants');

module.exports = {
  addNew() {
    AppDispatcher.handleAddAction(AddConstants.NEW_EXPENSE);
  },
  removeExpense(index) {
    AppDispatcher.handleAddAction(AddConstants.REMOVE_EXPENSE, {
      index: index
    });
  },
  save() {
    AppDispatcher.handleAddAction(AddConstants.SAVE);
  },
  updateExpense(index, property, value) {
    AppDispatcher.handleAddAction(AddConstants.UPDATE_EXPENSE, {
      index: index,
      property: property,
      value: value
    });
  }
};
