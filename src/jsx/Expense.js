var React = require('react');
var InputText = require('./form/InputTextWithLabel.js');

module.exports = React.createClass({
  render: function() {
    var expense = this.props.data;
    var onChange = this.props.onChange;
    return (
      <fieldset className='expense'>
        <InputText name='date' value={expense.date} onChange={onChange}>Date</InputText>
        <InputText name='description' value={expense.description} onChange={onChange}>Description</InputText>
        <InputText name='clientName' value={expense.clientName} onChange={onChange}>Client Name</InputText>
        <InputText name='supplier' value={expense.supplier} onChange={onChange}>Supplier</InputText>
        <label htmlFor='cost'>Cost</label>
        <input className='expense__cost-amount' type='number' step='0.01' data-ng-model='expense.cost.amount' />
        <select className='expense__cost-type' data-ng-model='expense.cost.costType'>
          <option>Simple</option>
          <option>Mileage</option>
          <option>Vatable</option>
        </select>
      </fieldset>
    );
  }
});
