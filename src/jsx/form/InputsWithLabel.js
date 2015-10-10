var React = require('react');

var Input = React.createClass({
  render() {
    var camelCaseToHyphenated = str => str.replace(/(.)([A-Z])/, '$1-$2').toLowerCase();
    var { type, name, children, block, value, onChange, other } = this.props;
    var className = block + "__" + camelCaseToHyphenated(name);
    return (
      <div className={className}>
        <label htmlFor={name}>{children}</label>
        <input type={type} name={name} value={this.props.value} onChange={this.props.onChange} {...other}/>
      </div>
    );
  }
});

module.exports = {
  Number: React.createClass({
    render() {
      return <Input type="number" {...this.props}/>
    }
  }),
  Text: React.createClass({
    render() {
      return <Input type="text" {...this.props}/>
    }
  })
};
