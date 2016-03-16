const VIEW_ACTION = 'VIEW_ACTION',
      LOGGED_IN = 'logged-in',
      VIEW_CHANGE_EVENT = 'view-change';

const LOGIN_VIEW = 'login',
      EXPENSES_VIEW = 'expenses';

class ViewNames {
  static get LOGIN() {
    return LOGIN_VIEW;
  }
  static get EXPENSES() {
    return EXPENSES_VIEW;
  }
}

class ViewConstants {
  static get VIEW_ACTION() {
    return VIEW_ACTION;
  }

  static get LOGGED_IN() {
    return LOGGED_IN;
  }

  static get VIEW_CHANGE_EVENT() {
    return VIEW_CHANGE_EVENT;
  }

  static get VIEW() {
    return ViewNames;
  }
}

module.exports = ViewConstants;
