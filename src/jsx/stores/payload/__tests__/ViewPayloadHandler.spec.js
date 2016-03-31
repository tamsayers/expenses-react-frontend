jest.dontMock('../ViewPayloadHandler');
jest.dontMock('../../../constants/ViewConstants');

const ViewPayloadHandler = require('../ViewPayloadHandler'),
      ViewConstants = require('../../../constants/ViewConstants');

describe('ViewTemplateHandler', () => {
  var handle, binding, payload;

  beforeEach(() => {
    payload = {
      source: ''
    }
    binding = {
      trigger: jest.fn()
    };
    handle = ViewPayloadHandler.handle.bind(binding);
  });

  it('should return true', () => {
    expect(handle(payload)).toBe(true);
  });

  describe('view action source unknown action', () => {
    beforeEach(() => {
      payload.source = ViewConstants.VIEW_ACTION;
      handle(payload);
    });

    it('should set current view to login by default', () => {
      expect(binding.currentView).toBe(ViewConstants.VIEW.LOGIN);
    });

    it('should trigger a view change event', () => {
      expect(binding.trigger).toBeCalledWith(ViewConstants.VIEW_CHANGE_EVENT);
    });
  });

  describe('view action source logged in action', () => {
    beforeEach(() => {
      payload.source = ViewConstants.VIEW_ACTION;
      payload.action = ViewConstants.LOGGED_IN;
      handle(payload);
    });

    it('should set current view to login by default', () => {
      expect(binding.currentView).toBe(ViewConstants.VIEW.EXPENSES);
    });

    it('should trigger a view change event', () => {
      expect(binding.trigger).toBeCalledWith(ViewConstants.VIEW_CHANGE_EVENT);
    });
  });

  describe('non view action source', () => {
    beforeEach(() => {
      payload.source = '';
      handle(payload);
    });

    it('should not trigger event', () => {
      expect(binding.trigger).not.toBeCalled();
    });

    it('should not set the current view', () => {
      expect(binding.currentView).toBe(undefined);
    });
  });
});
