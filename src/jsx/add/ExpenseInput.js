var React = require('react');
var Inputs = require('../form/InputsWithLabel.js');
var SelectOptions = require('../form/SelectOptions.js');

module.exports = React.createClass({
  render() {
    var expense = this.props.data;
    var onChange = this.props.onChange;
    var options = [{value:'Simple'},{value:'Mileage2'},{value:'Vatable'}];

    return (
      <fieldset className='expense'>
        <Inputs.Text name='date' value={expense.date} onChange={onChange}>Date</Inputs.Text>
        <Inputs.Text name='description' value={expense.description} onChange={onChange}>Description</Inputs.Text>
        <Inputs.Text name='clientName' value={expense.clientName} onChange={onChange}>Client Name</Inputs.Text>
        <Inputs.Text name='supplier' value={expense.supplier} onChange={onChange}>Supplier</Inputs.Text>
        <Inputs.Number name='cost.amount' value={expense.cost.amount} onChange={onChange} step='0.01'>Cost</Inputs.Number>
        <SelectOptions name='cost.type' value={expense.cost.type} options={options} onChange={onChange}/>
      </fieldset>
    );
  }
});
