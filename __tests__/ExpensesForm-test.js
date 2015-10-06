jest.dontMock('../build/lib/ExpensesForm.js');

describe('ExpensesForm', function() {
  var $, component, node, TestUtils;

  beforeEach(function() {
    $ = require('jquery');
    var React = require('react/addons');
    TestUtils = React.addons.TestUtils;

    spyOn($, 'post');
    
    var ExpensesForm = require('../build/lib/ExpensesForm.js');
    component = TestUtils.renderIntoDocument(
      <ExpensesForm url='/expenses/endpoint' />
    );

    node = React.findDOMNode(TestUtils.findRenderedDOMComponentWithTag(component, 'form'));
  });

  it('should post the expenses to the given url', function() {
    component.state.expenses[0].newValue = 'to submit';
    TestUtils.Simulate.submit(node);
    expect($.post).toHaveBeenCalledWith('/expenses/endpoint', JSON.stringify(component.state.expenses));
  });
});
