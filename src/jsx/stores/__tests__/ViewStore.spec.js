jest.dontMock('../ViewStore');
jest.dontMock('../../constants/ViewConstants');

const AppDispatcher = require('../../dispatcher/AppDispatcher'),
      ViewConstants = require('../../constants/ViewConstants');

describe('ViewStore', () => {
  var viewStore;

  beforeAll(() => {
    AppDispatcher.register.mockReturnValue('token');
    viewStore = require('../ViewStore');
  });

  it('should set the dispatch token on creation', () => {
    expect(viewStore.dispatchToken).toBe('token');
  });

  it('current should be the login view by default', () => {
    expect(viewStore.currentView).toBe(ViewConstants.VIEW.LOGIN);
  });


});
