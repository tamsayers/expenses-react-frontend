var React = require('react');
var Result = require('./Result.js');

module.exports = React.createClass({
  render() {
    return (
      <ul className='results-table'>
        {this.props.data.map(function(result, i) {
          return <Result data={result} key={i} rowIndex={i} className='results-table__result' />
        })}
      </ul>
    );
  }
});