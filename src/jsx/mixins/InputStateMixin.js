const $ = require('jquery');

const InputStateMixin = {
  inputValueChange(event) {
    // some weird React event pooling stuff requires copy of values to new object.
    var e = $.extend({}, event);
    this.setState(function(previousState, currentProps) {
      previousState.query[e.target.name] = e.target.value;
      return {query: previousState.query};
    });
  }
};

module.exports = InputStateMixin;
