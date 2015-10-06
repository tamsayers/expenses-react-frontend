var React = require('react');

module.exports = React.createClass({
  render: function() {
    var camelCaseToHyphenated = str => str.replace(/(.)([A-Z])/, '$1-$2').toLowerCase();
    var name = this.props.name;
    var className = this.props.block + "__" + camelCaseToHyphenated(this.props.name);
    return (
      <div className={className}>
        <label htmlFor={name}>{this.props.children}</label>
        <input type="text" name={name} value={this.props.value} onChange={e => this.props.onChange(e.target.value)}/>
      </div>
    );
  }
});
