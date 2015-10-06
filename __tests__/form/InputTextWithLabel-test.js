jest.dontMock('../../build/lib/form/InputTextWithLabel.js');

describe('InputText', function() {
  var $, component, node, TestUtils, handleUpdate;

  beforeEach(function() {
    $ = require('jquery');
    var React = require('react/addons');
    TestUtils = React.addons.TestUtils;

    handleUpdate = jest.genMockFunction();
    var InputTextWithLabel = require('../../build/lib/form/InputTextWithLabel.js');
    component = TestUtils.renderIntoDocument(
      <InputTextWithLabel block='bem-block' name='inputName' value='val' onChange={handleUpdate}>Label Text</InputTextWithLabel>
    );

    node = React.findDOMNode(TestUtils.findRenderedDOMComponentWithTag(component, 'div'));
  });

  it('renders a compnent with the correctly generated class', function() {
    expect($(node).attr('class')).toEqual('bem-block__input-name');
  });

  it('contains a label for component name', function() {
    expect($(node).find('label').attr('for')).toEqual('inputName');
  });

  it('the label contains the given text', function() {
    expect($(node).find('label').html()).toEqual('Label Text');
  });

  it('the input is of type text', function() {
    expect($(node).find('input').attr('type')).toEqual('text');
  });

  it('the input name is the component name', function() {
    expect($(node).find('input').attr('name')).toEqual('inputName');
  });

  it('the input value is the component value', function() {
    expect($(node).find('input').val()).toEqual('val');
  });

  it('the input value should update on state change', function() {
    var input = node.querySelector('input');
    input.value = 'changed val';
    TestUtils.Simulate.change(input);

    expect(handleUpdate).toBeCalledWith('inputName', 'changed val');
  });
});