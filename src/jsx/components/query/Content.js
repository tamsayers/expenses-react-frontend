const React = require('react'),
    QueryForm = require('./QueryForm.js'),
    ResultsTable = require('./ResultsTable.js'),
    InputStateMixin = require('../../mixins/InputStateMixin'),
    RequestJson = require('../../services/RequestJson'),
    LoginStore = require('../../stores/LoginStore'),
    $ = require('jquery');

module.exports = React.createClass({
  mixins: [InputStateMixin],
  getInitialState() {
    return {
      inputs: {},
      results: []
    };
  },
  _updateResults(data) {
    this.setState({results: data});
  },
  _queryParams() {
    var params = {};
    if (this.state.inputs.supplier) {
      params.supplier = this.state.inputs.supplier;
    }

    return params;
  },
  _submitQuery(event) {
    event.preventDefault();
    RequestJson.get('/api/expenses/' + this.state.inputs.from + '/to/' + this.state.inputs.till, this._queryParams(), LoginStore.authToken())
               .then(this._updateResults);
  },
  _downloadCsv(event) {
    var url = '/api/expenses/' + this.state.inputs.from + '/to/' + this.state.inputs.till;
    var queryParams = this._queryParams();
    queryParams.contentType = 'csv';

    event.target.href = url + '?' + $.param(queryParams);
  },
  render() {
    return (
      <div>
        <QueryForm query={this.state.inputs}
                   onChange={this.inputValueChange}
                   onSubmit={this._submitQuery}
                   downloadCsv={this._downloadCsv}/>
        <ResultsTable data={this.state.results} />
      </div>
    );
  }
});
