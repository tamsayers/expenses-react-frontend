var React = require('react');

module.exports = React.createClass({
  render() {
    return (
      <select name={this.props.name} value={this.props.value} onChange={this.props.onChange}>
        <option value='-1'>Please select...</option>
        {this.props.options.map(function(option, i) {
          return <option key={i}>{option.value}</option>
        })}
      </select>
    );
  }
});
