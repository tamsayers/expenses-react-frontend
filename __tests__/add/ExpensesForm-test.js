jest.dontMock('../../build/lib/add/ExpensesForm.js');

describe('ExpensesForm', function() {
  var component, node;
  var $ = require('jquery');
  var React = require('react');
  var ReactDOM = require('react-dom');
  var TestUtils = require('react-addons-test-utils');

  beforeEach(function() {
    spyOn($, 'ajax');

    var ExpensesForm = require('../../build/lib/add/ExpensesForm.js');
    component = TestUtils.renderIntoDocument(
      <ExpensesForm url='/expenses/endpoint' />
    );

    node = ReactDOM.findDOMNode(TestUtils.findRenderedDOMComponentWithTag(component, 'form'));
  });

  it('should post the expenses to the given url', function() {
    component.state.expenses[0].newValue = 'to submit';
    TestUtils.Simulate.submit(node);

    expect($.ajax).toHaveBeenCalledWith({
      url: '/expenses/endpoint',
      method: 'POST',
      data: JSON.stringify([{cost:{},newValue:'to submit'}]),
      contentType: 'application/json',
      dataType: 'json'
    });
  });
});
