const AppDispatcher = require('../dispatcher/AppDispatcher'),
      MicroEvent = require('microevent'),
      AddConstants = require('../constants/AddConstants');

function AddStore() {
  const expensesArray = [{cost: {}}];

  AppDispatcher.register(payload => {
    if (payload.source === AddConstants.ADD_ACTION) {
      if (payload.action === AddConstants.NEW_EXPENSE) {
        expensesArray.push({cost: {}});
      }
      if (payload.action === AddConstants.REMOVE_EXPENSE) {
        expensesArray.splice(payload.data.index, 1);
      }

      this.trigger(ViewConstants.ADD_EVENT);
    }

    return true;
  });

  this.expenses = function() {
    return expensesArray;
  }
}

MicroEvent.mixin(AddStore);

module.exports = new AddStore();
