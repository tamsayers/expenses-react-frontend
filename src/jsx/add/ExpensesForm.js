var React = require('react');
var ReactDOM = require('react');
var $ = require('jquery');
var AddExpense = require("./ExpenseInput.js");
var QueryContent = require('../query/Content.js');
var Button = require('../utils/Button.js');

module.exports = React.createClass({
  getInitialState() {
    return { expenses: [{cost: {}}] };
  },
  _newExpense() {
    this.setState(function(previousState, currentProps) {
      previousState.expenses.push({cost: {}});
      return {expenses: previousState.expenses};
    });
  },
  _updateExpense(i, event) {
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
      <QueryContent />,
      document.getElementById('content')
    );
  },
  _submitExpenses(event) {
    $.ajax({
      url: '/api/expenses',
      method: 'POST',
      data: JSON.stringify(this.state.expenses),
      contentType: 'application/json',
      dataType: 'json'})
    .done(this._addedOk);

    event.preventDefault();
  },
  render() {
    var onChangeForExpense = i => this._updateExpense.bind(this, i);
    return (
      <form name="expenses-form" className="expenses-form" onSubmit={this._submitExpenses}>
        {this.state.expenses.map(function(expense, i) {
          return <AddExpense key={i} rowIndex={i} data={expense} onChange={onChangeForExpense(i)}/>;
        })}
        <Button.Click onClick={this._newExpense} >Add</Button.Click>
        <Button.Submit />
      </form>
    );
	}
});
