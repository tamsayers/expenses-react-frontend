var React = require('react'),
    ReactDOM = require('react'),
    RequestJson = require('../../services/RequestJson'),
    InputExpense = require('./InputExpense.js'),
    QueryContent = require('../query/Content.js'),
    Button = require('../utils/Button.js');

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
  _removeExpense(index) {
    this.setState(function(previousState, currentProps) {
      return {expenses: previousState.expenses.filter((el, i) => i !== index)};
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
    event.preventDefault();

    RequestJson.post('/api/expenses', this.state.expenses)
               .then(this._addedOk);
  },
  render() {
    var onChangeForExpense = i => this._updateExpense.bind(this, i);
    var onDeleteForExpense = i => this._removeExpense.bind(this, i);
    return (
      <form name="expenses-form" className="expenses-form" onSubmit={this._submitExpenses}>
        {this.state.expenses.map(function(expense, i) {
          return <InputExpense key={i} rowIndex={i} data={expense} onChange={onChangeForExpense(i)} onDelete={onDeleteForExpense(i)}/>;
        })}
        <Button.Click onClick={this._newExpense} >Add</Button.Click>
        <Button.Submit />
      </form>
    );
	}
});
