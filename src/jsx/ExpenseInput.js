var React = require('react');
var Inputs = require('./form/InputsWithLabel.js');

module.exports = React.createClass({
  render: function() {
    var expense = this.props.data;
    var onChange = this.props.onChange;
    return (
      <fieldset className='expense'>
        <Inputs.Text name='date' value={expense.date} onChange={onChange}>Date</Inputs.Text>
        <Inputs.Text name='description' value={expense.description} onChange={onChange}>Description</Inputs.Text>
        <Inputs.Text name='clientName' value={expense.clientName} onChange={onChange}>Client Name</Inputs.Text>
        <Inputs.Text name='supplier' value={expense.supplier} onChange={onChange}>Supplier</Inputs.Text>
        <Inputs.Number name='cost' value={expense.supplier} onChange={onChange} step='0.01'>Cost</Inputs.Number>
        <select className='expense__cost-type' data-ng-model='expense.cost.costType'>
          <option>Simple</option>
          <option>Mileage</option>
          <option>Vatable</option>
        </select>
      </fieldset>
    );
  }
});
