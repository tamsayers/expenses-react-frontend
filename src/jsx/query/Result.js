var React = require('react');

module.exports = React.createClass({
  render() {
    var headerClass = this.props.className + '-header';
    if (this.props.rowIndex == 0) {
      headerClass += ' ' + headerClass + '--first';
    }
    return (
      <li className={this.props.className}>
        <div className={headerClass}>
          <div className='header-item'>Date</div>
          <div className='header-item'>Description</div>
          <div className='header-item'>Client Name</div>
          <div className='header-item'>Supplier</div>
          <div className='header-item'>Cost</div>
        </div>
        <div className={this.props.className + '-data'}>
          <div className='data-item'>{this.props.data.date}</div>
          <div className='data-item'>{this.props.data.description}</div>
          <div className='data-item'>{this.props.data.clientName}</div>
          <div className='data-item'>{this.props.data.supplier}</div>
          <div className='data-item'>£{this.props.data.cost.amount.toFixed(2)} ({this.props.data.cost.costType})</div>
        </div>
      </li>
    );
  }
});
