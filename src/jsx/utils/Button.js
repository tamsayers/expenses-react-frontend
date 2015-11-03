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

module.exports = {
  Submit: Submit,
  Click: Click
}
