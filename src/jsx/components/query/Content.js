const React = require('react'),
    QueryForm = require('./QueryForm.js'),
    ResultsTable = require('./ResultsTable.js'),
    InputStateMixin = require('../../mixins/InputStateMixin'),
    $ = require('jquery');

module.exports = React.createClass({
  mixins: [InputStateMixin],
  getInitialState() {
    return {
      query: {},
      results: []
    };
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
        <QueryForm query={this.state.query} onChange={this.inputValueChange} onSubmit={this._submitQuery} downloadCsv={this._downloadCsv}/>
        <ResultsTable data={this.state.results} />
      </div>
    );
  }
});
