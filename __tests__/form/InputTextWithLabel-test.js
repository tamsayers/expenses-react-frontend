jest.dontMock('../../build/lib/form/InputTextWithLabel.js');

describe('InputText', function() {
  var $, component, DOM, TestUtils;

  beforeEach(function() {
    $ = require('jquery');
    var React = require('react/addons');
    TestUtils = React.addons.TestUtils;

    var InputTextWithLabel = require('../../build/lib/form/InputTextWithLabel.js');
    component = TestUtils.renderIntoDocument(
      <InputTextWithLabel block='bem-block' name='inputName' value='val'>Label Text</InputTextWithLabel>
    );

    DOM = React.findDOMNode(TestUtils.findRenderedDOMComponentWithTag(component, 'div'));
  });

  it('renders a compnent with the correctly generated class', function() {
    expect($(DOM).attr('class')).toEqual('bem-block__input-name');
  });

  it('contains a label for component name', function() {
    expect($(DOM).find('label').attr('for')).toEqual('inputName');
  });

  it('the label contains the given text', function() {
    expect($(DOM).find('label').html()).toEqual('Label Text');
  });

  it('the input is of type text', function() {
    expect($(DOM).find('input').attr('type')).toEqual('text');
  });

  it('the input name is the component name', function() {
    expect($(DOM).find('input').attr('name')).toEqual('inputName');
  });

  it('the input value is the component value', function() {
    expect($(DOM).find('input').val()).toEqual('val');
  });

  it('the input value should update on state change', function() {
    var input = DOM.querySelector('input');
    input.value = 'changed val';
    TestUtils.Simulate.change(input);

    expect(component.state.value).toEqual('changed val');
  });
});