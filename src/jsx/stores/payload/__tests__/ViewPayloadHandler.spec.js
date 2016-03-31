jest.dontMock('../ViewPayloadHandler');
jest.dontMock('../../../constants/ViewConstants');

const ViewPayloadHandler = require('../ViewPayloadHandler'),
      ViewConstants = require('../../../constants/ViewConstants');

describe('ViewTemplateHandler', () => {
  var payloadHandler, store;

  beforeEach(() => {
    store = {
      trigger: jest.fn()
    };
    payloadHandler = new ViewPayloadHandler(store);
  });

  [
    {
      name: 'view action source unknown action',
      payload: {
        source: ViewConstants.VIEW_ACTION
      },
      expectedView: ViewConstants.VIEW.LOGIN,
      triggerChangeEvent: true
    },{
      name: 'view action source logged in action',
      payload: {
        source: ViewConstants.VIEW_ACTION,
        action: ViewConstants.LOGGED_IN
      },
      expectedView: ViewConstants.VIEW.EXPENSES,
      triggerChangeEvent: true
    },{
      name: 'non view action source',
      payload: {},
      expectedView: undefined,
      triggerChangeEvent: false
    }
  ].forEach(testData => {
    describe(testData.name, () => {
      var result;
      beforeEach(() => {
        result = payloadHandler.handle(testData.payload);
      });

      it('current view correct', () => {
        expect(store.currentView).toBe(testData.expectedView);
      });

      it('trigger a view change event', () => {
        if (testData.triggerChangeEvent) {
          expect(store.trigger).toBeCalledWith(ViewConstants.VIEW_CHANGE_EVENT);
        } else {
          expect(store.trigger).not.toBeCalled();
        }
      });

      it('should return true', () => {
        expect(result).toBe(true);
      });
    });
  });
});
