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
      if (payload.action === AddConstants.UPDATE_EXPENSE) {
        var setVal = function(expense, props) {
          if (props.length > 1) {
            setVal(expense[props.shift()], props);
          } else {
            obj[expense[0]] = payload.data.value;
          }
        };

        setVal(expensesArray[payload.data.index], payload.data.property.split('.'));
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
