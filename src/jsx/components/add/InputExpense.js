var React = require('react');
var Inputs = require('../form/InputsWithLabel.js');
var SelectOptions = require('../form/SelectOptions.js');
var Button = require('../utils/Button.js');

module.exports = React.createClass({
  render() {
    var options = [{value:'Simple'},{value:'Mileage2'},{value:'Vatable'}];
    var className = 'input-expense';
    if (this.props.rowIndex == 0) {
      className += ' ' + className + '--first';
    }

    return (
      <fieldset className={className}>
        <Inputs.Text name='date' value={this.props.data.date} onChange={this.props.onChange}>Date</Inputs.Text>
        <Inputs.Text name='description' value={this.props.data.description} onChange={this.props.onChange}>Description</Inputs.Text>
        <Inputs.Text name='clientName' value={this.props.data.clientName} onChange={this.props.onChange}>Client Name</Inputs.Text>
        <Inputs.Text name='supplier' value={this.props.data.supplier} onChange={this.props.onChange}>Supplier</Inputs.Text>
        <Inputs.Number name='cost.amount' value={this.props.data.cost.amount} onChange={this.props.onChange} step='0.01' min='0'>Cost</Inputs.Number>
        <SelectOptions name='cost.costType' value={this.props.data.cost.type} options={options} onChange={this.props.onChange}/>
        <Button.Delete onClick={this.props.onDelete} />
      </fieldset>
    );
  }
});
