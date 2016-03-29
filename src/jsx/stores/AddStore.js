const AppDispatcher = require('../dispatcher/AppDispatcher'),
      MicroEvent = require('microevent'),
      RequestJson = require('../services/RequestJson'),
      AddConstants = require('../constants/AddConstants');

function AddStore() {
  const expensesArray = [{cost: {}}];

  this.dispatchToken = AppDispatcher.register(payload => {
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
            expense[props[0]] = payload.data.value;
          }
        };

        setVal(expensesArray[payload.data.index], payload.data.property.split('.'));
      }

      if (payload.action === AddConstants.SAVE) {
        RequestJson.post('/api/expenses', expensesArray, payload.data.authToken)
                   .then(() => {
                     this.trigger(AddConstants.SUCCESSFUL_SAVE);
                   });
      }

      this.trigger(AddConstants.ADD_EVENT);
    }

    return true;
  });

  this.expenses = () => expensesArray;
}

MicroEvent.mixin(AddStore);

module.exports = new AddStore();
