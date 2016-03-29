const AppDispatcher = require('../dispatcher/AppDispatcher'),
      MicroEvent = require('microevent'),
      ExpensesConstants = require('../constants/ExpensesConstants');

var content = ExpensesConstants.VIEW.QUERY;

function ExpensesStore() {
  this.dispatchToken = AppDispatcher.register(payload => {
    if (payload.source === ExpensesConstants.EXPENSES_ACTION) {
      content = payload.action;

      this.trigger(ExpensesConstants.VIEW_CHANGE_EVENT);
    }

    return true;
  });

  this.content = () => content;
}

MicroEvent.mixin(ExpensesStore);

module.exports = new ExpensesStore();
