var React = require('react');
var InputText = require("./form/InputTextWithLabel.js");

module.exports = React.createClass({
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
