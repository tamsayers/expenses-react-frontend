jest.dontMock('../../build/lib/form/InputTextWithLabel.js');

describe('InputText', function() {
  var $, DOM, TestUtils, inputValue;

  beforeEach(function() {
    $ = require('jquery');
    var React = require('react/addons');
    TestUtils = React.addons.TestUtils;
    inputValue = undefined;

    var InputTextWithLabel = require('../../build/lib/form/InputTextWithLabel.js');
    var component = TestUtils.renderIntoDocument(
      <InputTextWithLabel block='bem-block' name='inputName' value={inputValue}>Label Text</InputTextWithLabel>
    );
    
    DOM = React.findDOMNode(TestUtils.findRenderedDOMComponentWithTag(component, 'div'));
  });
  
  it('renders a compnent with the correctly generated class', function() {
    expect($(DOM).attr('class')).toEqual('bem-block__inputName');
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
  
//  it('the input value is the component value', function() {
//    expect($(DOM).find('input').attr('value')).toEqual(undefined);
//    inputValue = 'val';
//    expect($(DOM).find('input').attr('value')).toEqual('val');
//  });
});