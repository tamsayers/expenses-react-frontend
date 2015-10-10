var React = require('react');

module.exports = React.createClass({
  render() {
    return (
      <select name={this.props.name} value={this.props.value} onChange={this.props.onChange}>
        {this.props.options.map(function(option, i) {
          return <option key={i}>{option.value}</option>
        })}
      </select>
    );
  }
});
