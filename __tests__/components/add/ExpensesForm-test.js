jest.dontMock('../../../build/lib/components/add/ExpensesForm');

var ExpensesForm = require('../../../build/lib/components/add/ExpensesForm'),
    $ = require('jquery'),
    React = require('react'),
    ReactDOM = require('react-dom'),
    TestUtils = require('react-addons-test-utils');

describe('ExpensesForm', function() {
  var component, node, ajaxSpy;

  beforeEach(function() {
    ajaxSpy = jasmine.createSpyObj('ajax', ['done']);
    spyOn($, 'ajax').and.returnValue(ajaxSpy);

    component = TestUtils.renderIntoDocument(
      <ExpensesForm url='/expenses/endpoint' />
    );

    node = ReactDOM.findDOMNode(TestUtils.findRenderedDOMComponentWithTag(component, 'form'));
  });

  it('should post the expenses to the given url', function() {
    component.state.expenses[0].newValue = 'to submit';
    TestUtils.Simulate.submit(node);

    expect($.ajax).toHaveBeenCalledWith({
      url: '/api/expenses',
      method: 'POST',
      data: JSON.stringify([{cost:{},newValue:'to submit'}]),
      contentType: 'application/json',
      dataType: 'json'
    });
  });

  it('should post the expenses to the given url', function() {
    component.state.expenses[0].newValue = 'to submit';
    TestUtils.Simulate.submit(node);

    expect(ajaxSpy.done).toHaveBeenCalledWith(component._addedOk);
  });
});
