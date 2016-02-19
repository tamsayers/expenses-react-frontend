const ADD_ACTION = 'ADD_EXPENSE_ACTION',
      NEW_EXPENSE = 'new-expense',
      REMOVE_EXPENSE = 'remove-expense',
      ADD_EVENT = 'expense-added';

class AddConstants {
  static get ADD_ACTION() {
    return ADD_ACTION;
  }

  static get NEW_EXPENSE() {
    return NEW_EXPENSE;
  }

  static get REMOVE_EXPENSE() {
    return REMOVE_EXPENSE;
  }

  static get ADD_EVENT() {
    return ADD_EVENT;
  }
}

module.exports = AddConstants;
