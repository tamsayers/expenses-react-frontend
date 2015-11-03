var React = require('react');

var Submit = React.createClass({
  render() {
    return (
      <button className="button button--submit" type="submit">Submit</button>
    );
  }
});

var Click = React.createClass({
  render() {
    return (
      <button className="button" type="button" onClick={this.props.onClick}>{this.props.children}</button>
    );
  }
});

var Delete = React.createClass({
  render() {
    return (
      <button className="button button--delete" type="button" onClick={this.props.onClick}>X</button>
    );
  }
});

module.exports = {
  Submit: Submit,
  Delete: Delete,
  Click: Click
}
