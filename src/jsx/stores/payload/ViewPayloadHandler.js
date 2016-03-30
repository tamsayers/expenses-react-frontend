const ViewConstants = require('../../constants/ViewConstants');

const ViewPayloadHandler = {

  handle: function(payload) {
    if (payload.source === ViewConstants.VIEW_ACTION) {
      // if(payload.action === ViewConstants.LOGGED_IN) {
      //   this.currentView = ViewConstants.VIEW.EXPENSES;
      // } else {
        this.currentView = ViewConstants.VIEW.LOGIN;
      // }

      this.trigger(ViewConstants.VIEW_CHANGE_EVENT);
    }
    return true;
  }
};

module.exports = ViewPayloadHandler;
