var React = require('react');

var Submit = React.createClass({
  render() {
    var buttonContent;
    if (this.props.children) {
      buttonContent = this.props.children;
    } else {
      buttonContent = 'Submit';
    }
    return (
      <button className="button button--submit" type="submit">{buttonContent}</button>
    );
  }
});

var Click = React.createClass({
  render() {
    return (
      <a href="#" className="button" type="button" onClick={this.props.onClick}>{this.props.children}</a>
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
