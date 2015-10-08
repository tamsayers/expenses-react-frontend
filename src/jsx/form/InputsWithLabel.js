var React = require('react');

var changeHandler = component => function(event) {
  component.setState({ value: event.target.value });
  component.props.onChange(component.props.name, event.target.value);
};

var Input = React.createClass({
  getInitialState: function() {
    return { value: this.props.value };
  },
  handleChange: function(event) {
    this.setState({value: event.target.value});
    this.props.onChange(this.props.name, event.target.value);
  },
  render: function() {
    var camelCaseToHyphenated = str => str.replace(/(.)([A-Z])/, '$1-$2').toLowerCase();
    var { type, name, children, block, value, onChange, other } = this.props;
    var className = block + "__" + camelCaseToHyphenated(name);
    return (
      <div className={className}>
        <label htmlFor={name}>{children}</label>
        <input type={type} name={name} value={this.state.value} onChange={this.handleChange} {...other}/>
      </div>
    );
  }
});

module.exports = {
  Number: React.createClass({
    render: function() {
      return <Input type="number" {...this.props}/>
    }
  }),
  Text: React.createClass({
    render: function() {
      return <Input type="text" {...this.props}/>
    }
  })
};
