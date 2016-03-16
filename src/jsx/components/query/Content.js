const React = require('react'),
      QueryForm = require('./QueryForm.js'),
      ResultsTable = require('./ResultsTable.js'),
      InputStateMixin = require('../../mixins/InputStateMixin'),
      QueryActions = require('../../actions/QueryActions'),
      QueryStore = require('../../stores/QueryStore'),
      QueryConstants = require('../../constants/QueryConstants'),
      LoginStore = require('../../stores/LoginStore'),
      $ = require('jquery');

module.exports = React.createClass({
  mixins: [InputStateMixin],
  getInitialState() {
    return {
      inputs: {},
      results: QueryStore.results()
    };
  },
  componentDidMount() {
    QueryStore.bind(QueryConstants.NEW_RESULTS, this._updateResults);
  },
  componentWillUnmount() {
    QueryStore.unbind(QueryConstants.NEW_RESULTS, this._updateResults);
  },
  _updateResults(data) {
    this.setState({results: QueryStore.results()});
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
    QueryActions.search(LoginStore.authToken(), this.state.inputs.from, this.state.inputs.till, this._queryParams());
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
