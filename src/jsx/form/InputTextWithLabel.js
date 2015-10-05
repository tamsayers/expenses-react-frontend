var React = require('react');

module.exports = React.createClass({
  getInitialState: function() {
    return {value: this.props.value};
  },
  handleChange: function(event) {
    this.setState({value: event.target.value});
  },
  render: function() {
    var camelCaseToHyphenated = str => str.replace(/(.)([A-Z])/, '$1-$2').toLowerCase();
    var name = this.props.name;
    var className = this.props.block + "__" + camelCaseToHyphenated(this.props.name);
    return (
      <div className={className}>
        <label htmlFor={name}>{this.props.children}</label>
        <input type="text" name={name} value={this.state.value} onChange={this.handleChange}/>
      </div>
    );
  }
});
