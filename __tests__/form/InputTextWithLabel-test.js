jest.dontMock("../../build/lib/form/InputTextWithLabel.js");

describe("InputText", function() {
  var $, React, DOM, TestUtils;

  beforeEach(function() {
    $ = require('jquery');
    React = require("react/addons");
    TestUtils = React.addons.TestUtils; 

    var InputTextWithLabel = require("../../build/lib/form/InputTextWithLabel.js");
    DOM = TestUtils.renderIntoDocument(
      <InputTextWithLabel block="bem-block" name="inputName">Label Text</InputTextWithLabel>
    );
  });
  
  it("renders a div with the correctly generated class", function() {
    var block = TestUtils.findRenderedDOMComponentWithClass(DOM, "bem-block__inputName");
  });
  
  it("contains a label for component name", function() {
    var label = TestUtils.findRenderedDOMComponentWithClass(DOM, "bem-block__inputName");
    
    expect(React.findDOMNode(DOM).children[0].tagName).toEqual("LABEL");
    expect(React.findDOMNode(DOM).children[0].getAttribute('for')).toEqual('inputName');
  });
});