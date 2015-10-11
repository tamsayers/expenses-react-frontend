jest.dontMock('../../build/lib/form/InputsWithLabel.js');

describe('InputsWithLabel', function() {
  var $ = require('jquery');
  var inputTypes = ['text', 'number'];
  var component, nodes, TestUtils, handleUpdate;

  beforeEach(function() {
    var React = require('react/addons');
    TestUtils = React.addons.TestUtils;

    handleUpdate = jest.genMockFunction();
    var InputsWithLabel = require('../../build/lib/form/InputsWithLabel.js');
    component = TestUtils.renderIntoDocument(
      <section>
        <InputsWithLabel.Text block='text' name='inputName' value='val' onChange={handleUpdate}>text label</InputsWithLabel.Text>
        <InputsWithLabel.Number block='number' name='inputName' value='val' onChange={handleUpdate}>number label</InputsWithLabel.Number>
      </section>
    );

    var nodeArray = TestUtils.scryRenderedDOMComponentsWithTag(component, 'div');
    nodes = {
      'text': React.findDOMNode(nodeArray[0]),
      'number': React.findDOMNode(nodeArray[1])
    };
  });

  $.each(inputTypes, function(i, type) {
    it('renders a ' + type + ' component with the correctly generated class', function() {
      expect($(nodes[type]).attr('class')).toEqual(type + '__input-name');
    });
  });

  $.each(inputTypes, function(i, type) {
    it('contains a label for component name', function() {
      expect($(nodes[type]).find('label').attr('for')).toEqual('inputName');
    });
  });

  $.each(inputTypes, function(i, type) {
    it('the label contains the given ' + type, function() {
      expect($(nodes[type]).find('label').html()).toEqual(type + ' label');
    });
  });

  $.each(inputTypes, function(i, type) {
    it('the input is of type ' + type, function() {
      expect($(nodes[type]).find('input').attr('type')).toEqual(type);
    });
  });

  $.each(inputTypes, function(i, type) {
    it('the ' + type + ' input name is the component name', function() {
      expect($(nodes[type]).find('input').attr('name')).toEqual('inputName');
    });
  });

  $.each(inputTypes, function(i, type) {
    it('the ' + type + ' input value is the component value', function() {
      expect($(nodes[type]).find('input').val()).toEqual('val');
    });
  });

  $.each(inputTypes, function(i, type) {
    it('the ' + type + ' input value should update on state change', function() {
      var input = nodes[type].querySelector('input');
      input.value = 'changed val';
      TestUtils.Simulate.change(input);
  
      expect(handleUpdate).toBeCalled();
    });
  });
});
