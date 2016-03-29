const React = require('react'),
      ExpensesActions = require('../../actions/ExpensesActions.js');

const PageLink = React.createClass({
  render() {
    return (
      <a href="#" className="nav-menu__item-link" onClick={this.props.onClick}>{this.props.children}</a>
    );
  }
});

module.exports = React.createClass({
  render() {
    return (
      <ul className="nav-menu">
        <li className="nav-menu__item">
          <PageLink onClick={ExpensesActions.addNewView}>Add Expenses</PageLink>
        </li>
        <li className="nav-menu__item">
          <PageLink onClick={ExpensesActions.queryView}>Search</PageLink>
        </li>
      </ul>
    );
  }
});
