var React = require('react');
var $ = require('jquery');
var AddExpense = require("./ExpenseInput.js");

module.exports = React.createClass({
  getInitialState() {
    return { expenses: [{cost: {}}] };
  },
  newExpense() {
    this.state.expenses.push({cost: {}});
    this.setState({ expenses: this.state.expenses });
  },
  updateExpense: function(i, event) {
    var setVal = function(obj, props) {
      if (props.length > 1) {
        setVal(obj[props.shift()], props);
      } else {
        obj[props[0]] = event.target.value;
      }
    };
    setVal(this.state.expenses[i], event.target.name.split('.'));
    this.setState({ expenses: this.state.expenses });
  },
  submitExpenses(event) {
    $.ajax({
      url: this.props.url,
      method: 'POST',
      data: JSON.stringify(this.state.expenses),
      contentType: 'application/json',
      dataType: 'json'});

    event.preventDefault();
  },
  render() {
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
