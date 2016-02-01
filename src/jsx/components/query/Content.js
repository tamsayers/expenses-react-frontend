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
  _updateResults(data) {
    this.setState({results: data});
  },
  _queryParams() {
    event.preventDefault();
    var params = {};
    if (this.state.query.supplier) {
      params.supplier = this.state.query.supplier;
    }

    return params;
  },
  _submitQuery(event) {
    $.getJSON('/api/expenses/' + this.state.query.from + '/to/' + this.state.query.till, this._queryParams(), this._updateResults);
    event.preventDefault();
  },
  _downloadCsv(event) {
    var url = '/api/expenses/' + this.state.query.from + '/to/' + this.state.query.till;
    var queryParams = this._queryParams();
    queryParams.contentType = 'csv';

    event.target.href = url + '?' + $.param(queryParams);
  },
  render() {
    return (
      <div>
        <QueryForm query={this.state.query} onChange={this.queryChange} onSubmit={this._submitQuery} downloadCsv={this._downloadCsv}/>
        <ResultsTable data={this.state.results} />
      </div>
    );
  }
});