const $ = require('jquery');

const InputStateMixin = {
  inputValueChange(event) {
    // some weird React event pooling stuff requires copy of values to new object.
    var e = $.extend({}, event);
    this.setState(function(previousState, currentProps) {
      previousState.inputs[e.target.name] = e.target.value;
      return { inputs: previousState.inputs };
    });
  }
};

module.exports = InputStateMixin;
