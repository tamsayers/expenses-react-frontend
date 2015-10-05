var React = require('react');
var Expense = require("./Expense.js");

module.exports = React.createClass({
  getInitialState: function() {
    return { expenses: [{}] };
  },
  addExpense: function() {
    this.state.expenses.push({});
    this.setState({ expenses: this.state.expenses });
  },
	render: function() {
	  var postExpenses = function(e) {
	    alert('submit form');
	    e.preventDefault();
	  }

	  return (
	    <form className="expenses-form" onsubmit={postExpenses}>

	      {this.state.expenses.map(function(expense, index) {
	        return <Expense key={index} data={expense}/>
	      })}
	      <button className="expenses-form__add-expense" type="button" onClick={this.addExpense} >Add</button>
	      <button className="expenses-form__submit" type="submit">Submit</button>
	    </form>
	  );
	}
});
