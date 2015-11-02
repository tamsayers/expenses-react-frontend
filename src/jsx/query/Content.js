var React = require('react');
var QueryForm = require('./QueryForm.js');
var ResultsTable = require('./ResultsTable.js');
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
    $.get('/api/expenses/' + this.state.query.from + '/to/' + this.state.query.till, function(data) {
      this.setState({results: data});
    }.bind(this));
  },
  render() {
    return (
      <div>
        <QueryForm query={this.state.query} onChange={this.queryChange} onSubmit={this.submitQuery}/>
        <ResultsTable data={this.state.results} />
      </div>
    );
  }
});