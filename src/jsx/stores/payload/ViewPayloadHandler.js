const ViewConstants = require('../../constants/ViewConstants');

const viewFor = action => {
  switch (action) {
    case ViewConstants.LOGGED_IN: return ViewConstants.VIEW.EXPENSES;
    default: return ViewConstants.VIEW.LOGIN;
  };
};

const ViewPayloadHandler = {
  handle: function(payload) {
    if (payload.source === ViewConstants.VIEW_ACTION) {
      this.currentView = viewFor(payload.action)
      this.trigger(ViewConstants.VIEW_CHANGE_EVENT);
    }
    return true;
  }
};

module.exports = ViewPayloadHandler;
