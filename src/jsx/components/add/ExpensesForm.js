var React = require('react'),
    ReactDOM = require('react'),
    AddStore = require('../../stores/AddStore'),
    LoginStore = require('../../stores/LoginStore'),
    AddConstants = require('../../constants/AddConstants'),
    AddActions = require('../../actions/AddExpensesActions'),
    RequestJson = require('../../services/RequestJson'),
    InputExpense = require('./InputExpense.js'),
    QueryContent = require('../query/Content.js'),
    Button = require('../utils/Button.js');

const storedState = () => ({
  expenses: AddStore.expenses()
});

module.exports = React.createClass({
  getInitialState() {
    return storedState();
  },
  componentDidMount() {
    AddStore.bind(AddConstants.ADD_EVENT, this._stateChanged);
  },
  componentWillUnmount() {
    AddStore.unbind(AddConstants.ADD_EVENT, this._stateChanged);
  },
  _stateChanged() {
    this.setState(storedState());
  },
  _updateExpense(i, event) {
    var value = function() {
      if (event.target.type == 'number') {
        return event.target.valueAsNumber;
      } else {
        return event.target.value;
      }
    };

    AddActions.updateExpense(i, event.target.name, value());
  },
  _addedOk() {
    ReactDOM.render(
      <QueryContent />,
      document.getElementById('content')
    );
  },
  _onSubmit(event) {
    event.preventDefault();
    AddActions.save(LoginStore.authToken());
  },
  render() {
    var onChangeExpense = i => this._updateExpense.bind(this, i);
    var onRemoveExpense = i => AddActions.removeExpense.bind(this, i);
    return (
      <form name="expenses-form" className="expenses-form" onSubmit={this._onSubmit}>
        {this.state.expenses.map(function(expense, i) {
          return <InputExpense key={i} rowIndex={i} data={expense} onChange={onChangeExpense(i)} onDelete={onRemoveExpense(i)}/>;
        })}
        <Button.Click onClick={AddActions.addNew} >Add</Button.Click>
        <Button.Submit />
      </form>
    );
  }
});
