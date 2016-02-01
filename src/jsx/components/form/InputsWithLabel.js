const React = require('react');

const Input = React.createClass({
  render() {
    var { type, name, children, value, onChange, ...other } = this.props;
    return (
      <div className='input-with-label'>
        <label htmlFor={name}>{children}</label>
        <input type={type} name={name} value={this.props.value} onChange={this.props.onChange} {...other}/>
      </div>
    );
  }
});

module.exports = {
  Number: React.createClass({
    render() {
      return <Input type='number' {...this.props}/>
    }
  }),
  Date: React.createClass({
    render() {
      return <Input type='date' {...this.props}/>
    }
  }),
  Text: React.createClass({
    render() {
      return <Input type='text' {...this.props}/>
    }
  })
};
