const ADD_ACTION = 'ADD_EXPENSE_ACTION',
      NEW_EXPENSE = 'new-expense',
      REMOVE_EXPENSE = 'remove-expense',
      SAVE = 'save-expenses',
      UPDATE_EXPENSE = 'update-expense',
      SUCCESSFUL_SAVE = 'expenses-saved',
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

  static get SUCCESSFUL_SAVE() {
    return SUCCESSFUL_SAVE;
  }

  static get SAVE() {
    return SAVE;
  }

  static get UPDATE_EXPENSE() {
    return UPDATE_EXPENSE;
  }
}

module.exports = AddConstants;
