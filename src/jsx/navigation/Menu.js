var React = require('react');
var ReactDOM = require('react-dom');
var ExpensesForm = require('../add/ExpensesForm.js');
var QueryContent = require('../query/Content.js');

var PageLink = React.createClass({
  render() {
    return (
      <a href="#" className="nav-menu__item-link" onClick={this.props.onClick}>{this.props.children}</a>
    );
  }
});

module.exports = React.createClass({
  _updateContent(Component) { return e => 
    ReactDOM.render(
      <Component />,
      document.getElementById('content')
    );
  },
  render() {
    return (
      <ul className="nav-menu">
        <li className="nav-menu__item">
          <PageLink onClick={this._updateContent(ExpensesForm)}>Add Expenses</PageLink>
        </li>
        <li className="nav-menu__item">
          <PageLink onClick={this._updateContent(QueryContent)}>Search</PageLink>
        </li>
      </ul>
    );
  }
});
