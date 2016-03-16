const AppDispatcher = require('../dispatcher/AppDispatcher'),
      MicroEvent = require('microevent'),
      RequestJson = require('../services/RequestJson'),
      LoginConstants = require('../constants/LoginConstants');

function LoginStore() {
  this.dispatchToken = AppDispatcher.register(payload => {
    if (payload.source === LoginConstants.LOGIN_ACTION) {
      if (payload.action === LoginConstants.LOGIN_TOKEN) {
        RequestJson.post('/api/authenticate', {
          username: payload.data.username,
          password: payload.data.password
        })
        .then(response => {
          this.authToken = payload.data.token;
          this.trigger(LoginConstants.LOGIN_SUCCESFUL_EVENT);
        })
        .catch(err => {
          this.trigger(LoginConstants.LOGIN_FAILURE_EVENT)
        });
      }
    }

    return true;
  });
}

MicroEvent.mixin(LoginStore);

module.exports = new LoginStore();
