const ADD_NEW_VIEW = 'add-new',
      EXPENSES_ACTION = 'expenses-action',
      QUERY_VIEW = 'query-view',
      VIEW_CHANGE_EVENT = 'expenses-view-change';

class ViewNames {
  static get ADD_NEW() {
    return ADD_NEW_VIEW;
  }
  static get QUERY() {
    return QUERY_VIEW;
  }
}

class ExpensesConstants {
  static get EXPENSES_ACTION() {
    return EXPENSES_ACTION;
  }

  static get VIEW_CHANGE_EVENT() {
    return VIEW_CHANGE_EVENT;
  }

  static get VIEW() {
    return ViewNames;
  }
}

module.exports = ExpensesConstants;
