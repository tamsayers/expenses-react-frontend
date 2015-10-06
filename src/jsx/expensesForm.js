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
  updateExpense: function(i, propName, value) {
    this.state.expenses[i][propName] = value;
    this.setState({ expenses: this.state.expenses });
  },
  submitExpenses: function(e) {
    $.ajax({
      url: this.props.url,
      method: 'POST',
      data: JSON.stringify(this.state.expenses),
      contentType: 'application/json',
      dataType: 'json'});

    e.preventDefault();
  },
  render: function() {
    var onChangeForExpense = i => this.updateExpense.bind(this, i);
    return (
      <form name="expenses-form" onSubmit={this.submitExpenses}>
        {this.state.expenses.map(function(expense, i) {
          return <AddExpense key={i} data={expense} onChange={onChangeForExpense(i)}/>
        })}
        <button className="expenses-form__add-expense" type="button" onClick={this.newExpense} >Add</button>
        <button className="expenses-form__submit" type="submit">Submit</button>
      </form>
    );
	}
});
