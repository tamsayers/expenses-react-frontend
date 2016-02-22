const AppDispatcher = require('../dispatcher/AppDispatcher'),
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
  save(expenses) {
    RequestJson.post('/api/expenses', expenses)
               .then(AppDispatcher.handleAddAction(AddConstants.SAVE_SUCCESSFUL));
  },
  updateExpense(index, property, value) {
    AppDispatcher.handleAddAction(AddConstants.UPDATE_EXPENSE, {
      index: index,
      property: property,
      value: value
    });
  }
};
