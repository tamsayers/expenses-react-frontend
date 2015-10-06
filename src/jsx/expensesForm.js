var React = require('react');
var $ = require('jquery');
var AddExpense = require("./Expense.js");

module.exports = React.createClass({
  getInitialState: function() {
    return { expenses: [{}] };
  },
  newExpense: function() {
    this.state.expenses.push({});
    this.setState({ expenses: this.state.expenses });
  },
  submitExpenses: function(e) {
    $.post(this.props.url, JSON.stringify(this.state.expenses));
    e.preventDefault();
  },
  render: function() {
    return (
      <form name="expenses-form" onSubmit={this.submitExpenses}>
        {this.state.expenses.map(function(expense, index) {
          return <AddExpense key={index} data={expense}/>
        })}
        <button className="expenses-form__add-expense" type="button" onClick={this.newExpense} >Add</button>
        <button className="expenses-form__submit" type="submit">Submit</button>
      </form>
    );
	}
});
