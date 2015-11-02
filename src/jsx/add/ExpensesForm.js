var React = require('react');
var ReactDOM = require('react');
var $ = require('jquery');
var AddExpense = require("./ExpenseInput.js");
var QueryContent = require('../query/Content.js');

module.exports = React.createClass({
  getInitialState() {
    return { expenses: [{cost: {}}] };
  },
  newExpense() {
    this.setState(function(previousState, currentProps) {
      previousState.expenses.push({cost: {}});
      return {expenses: previousState.expenses};
    });
  },
  updateExpense(i, event) {
    var value = function() {
      if (event.target.type == 'number') {
        return event.target.valueAsNumber;
      } else {
        return event.target.value;
      }
    };

    var setVal = function(obj, props) {
      if (props.length > 1) {
        setVal(obj[props.shift()], props);
      } else {
        obj[props[0]] = value();
      }
    };

    this.setState(function(previousState, currentProps) {
      setVal(previousState.expenses[i], event.target.name.split('.'));
      return {expenses: previousState.expenses};
    });
  },
  _addedOk() {
    ReactDOM.render(
      <QueryContent url='/api/expenses' />,
      document.getElementById('content')
    );
  },
  submitExpenses(event) {
    $.ajax({
      url: this.props.url,
      method: 'POST',
      data: JSON.stringify(this.state.expenses),
      contentType: 'application/json',
      dataType: 'json'})
    .done(this._addedOk);

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
