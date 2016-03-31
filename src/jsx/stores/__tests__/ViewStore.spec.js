jest.dontMock('../ViewStore');
jest.dontMock('../../constants/ViewConstants');

const AppDispatcher = require('../../dispatcher/AppDispatcher'),
      ViewConstants = require('../../constants/ViewConstants'),
      ViewPayloadHandler = require('../payload/ViewPayloadHandler');

describe('ViewStore', () => {
  const payloadHandler = 'handler';
  var viewStore;

  beforeAll(() => {
    ViewPayloadHandler.mockImplementation(() => ({
      handle: payloadHandler
    }));
    AppDispatcher.register.mockReturnValue('token');
    viewStore = require('../ViewStore');
  });

  it('should set the dispatch token on creation', () => {
    expect(viewStore.dispatchToken).toBe('token');
  });

  it('current should be the login view by default', () => {
    expect(viewStore.currentView).toBe(ViewConstants.VIEW.LOGIN);
  });

  it('should create a new payload handle from the view store', () => {
    expect(ViewPayloadHandler).toBeCalledWith(viewStore);
  });

  it('should create a new payload handle from the view store', () => {
    expect(AppDispatcher.register).toBeCalledWith(payloadHandler);
  });
});
