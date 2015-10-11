var React = require('react');
var QueryForm = require('./QueryForm.js');
var $ = require('jquery');

module.exports = React.createClass({
  getInitialState() {
    return { 
      query: {},
      results: []
    };
  },
  queryChange(event) {
    // some weird React event pooling stuff requires copy of values to new object.
    var e = $.extend({}, event);
    this.setState(function(previousState, currentProps) {
      previousState.query[e.target.name] = e.target.value;
      return {query: previousState.query};
    });
  },
  submitQuery(event) {
    event.preventDefault();
    var query = this.state.query;
    var params = [];
    for (name in query) {
      params.push(name + '=' + encodeURIComponent(query[name]));
    }
    console.log(params.join('&'));
  },
  render() {
    return (
      <div>
        <QueryForm query={this.state.query} onChange={this.queryChange} onSubmit={this.submitQuery}/>
      </div>
    );
  }
});