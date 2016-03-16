const LOGIN_TOKEN = 'login-token',
      UNAUTHORISED = 'login-unauthorised',
      LOGIN_SUCCESFUL_EVENT = 'login-successful',
      LOGIN_ACTION = 'LOGIN_ACTION';

class LoginConstants {
  static get LOGIN_TOKEN() {
    return LOGIN_TOKEN;
  }

  static get UNAUTHORISED() {
    return UNAUTHORISED;
  }

  static get LOGIN_SUCCESFUL_EVENT() {
    return LOGIN_SUCCESFUL_EVENT;
  }

  static get LOGIN_ACTION() {
    return LOGIN_ACTION;
  }
}

module.exports = LoginConstants;
