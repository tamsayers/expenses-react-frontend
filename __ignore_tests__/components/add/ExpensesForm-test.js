jest.dontMock('../../../build/lib/components/add/ExpensesForm');

var ExpensesForm = require('../../../build/lib/components/add/ExpensesForm'),
    RequestJson = require('../../../build/lib/services/RequestJson'),
    React = require('react'),
    ReactDOM = require('react-dom'),
    TestUtils = require('react-addons-test-utils');

describe('ExpensesForm', function() {
  var component, node, postMocks;

  beforeEach(function() {
    postMocks = {
      then: jest.genMockFunction()
    };

    RequestJson.post.mockReturnValue(postMocks);

    component = TestUtils.renderIntoDocument(
      <ExpensesForm url='/expenses/endpoint' />
    );

    node = ReactDOM.findDOMNode(TestUtils.findRenderedDOMComponentWithTag(component, 'form'));
  });

  it('should post the expenses to the given url', function() {
    component.state.expenses[0].newValue = 'to submit';
    TestUtils.Simulate.submit(node);

    expect(RequestJson.post).toBeCalledWith('/api/expenses', [{cost:{},newValue:'to submit'}]);
  });

  it('should post the expenses to the given url', function() {
    component.state.expenses[0].newValue = 'to submit';
    TestUtils.Simulate.submit(node);

    expect(postMocks.then).toBeCalledWith(component._addedOk);
  });
});
