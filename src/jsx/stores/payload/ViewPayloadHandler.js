const ViewConstants = require('../../constants/ViewConstants');

const viewFor = action => {
  switch (action) {
    case ViewConstants.LOGGED_IN: return ViewConstants.VIEW.EXPENSES;
    default: return ViewConstants.VIEW.LOGIN;
  };
};

function ViewPayloadHandler(store) {
  this.handle = function(payload) {
    if (payload.source === ViewConstants.VIEW_ACTION) {
      store.currentView = viewFor(payload.action)
      store.trigger(ViewConstants.VIEW_CHANGE_EVENT);
    }
    return true;
  }
};

module.exports = ViewPayloadHandler;
