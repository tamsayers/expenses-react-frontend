var InputText = require("./form/InputText.js");

var Expense = React.createClass({
  render: function() {
    return (
      <fieldset className="expense">
        <InputText name="date" value={this.props.data.date}>Date</InputText>
        <InputText name="description" value={this.props.data.description}>Description</InputText>
        <InputText name="clientName" value={this.props.data.clientName}>Client Name</InputText>
        <InputText name="supplier" value={this.props.data.supplier}>Supplier</InputText>
        <label htmlFor="cost">Cost</label>
        <input className="expense__cost-amount" type="number" step="0.01" data-ng-model="expense.cost.amount" />
        <select className="expense__cost-type" data-ng-model="expense.cost.costType">
          <option>Simple</option>
          <option>Mileage</option>
          <option>Vatable</option>
        </select>
      </fieldset>
    );
  }
});

var ExpensesForm = React.createClass({
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

module.exports = ExpensesForm;
