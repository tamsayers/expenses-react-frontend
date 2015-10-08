var React = require('react');

var changeHandler = component => function(event) {
  component.setState({ value: event.target.value });
  component.props.onChange(component.props.name, event.target.value);
};

var Number = React.createClass({
  getInitialState: function() {
    return { value: this.props.value };
  },
  handleChange: function(event) {
    this.setState({value: event.target.value});
    this.props.onChange(this.props.name, event.target.value);
  },
  render: function() {
    var camelCaseToHyphenated = str => str.replace(/(.)([A-Z])/, '$1-$2').toLowerCase();
    var { name, children, block, value, onChange, other } = this.props;
    var className = block + "__" + camelCaseToHyphenated(name);
    return (
        <div className={className}>
        <label htmlFor={name}>{children}</label>
        <input type="number" name={name} value={this.state.value} onChange={this.handleChange} {...other}/>
        </div>
    );
  }
});

var Text = React.createClass({
  getInitialState: function() {
    return {value: this.props.value};
  },
  handleChange: function(event) {
    this.setState({value: event.target.value});
    this.props.onChange(this.props.name, event.target.value);
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

module.exports = {
    Number: Number,
    Text: Text
}