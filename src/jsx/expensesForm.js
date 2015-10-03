var Expense = React.createClass({
  render: function() {
    return (
      <fieldset className="expense">
        <label htmlFor="date">Date</label>
        <input className="expense__date" type="text" data-ng-model="expense.date" />
        <label htmlFor="description">Description</label>
        <input className="expense__description" type="text" data-ng-model="expense.description" />
        <label htmlFor="clientName">Client Name</label>
        <input className="expense__client-name" type="text" data-ng-model="expense.clientName" />
        <label htmlFor="supplier">Supplier</label>
        <input className="expense__supplier" type="text" data-ng-model="expense.supplier" />
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

React.render(
    <ExpensesForm />,
    document.getElementById('content')
);
