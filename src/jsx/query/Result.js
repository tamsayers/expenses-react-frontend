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
          <div className='header-item'>Gross</div>
          <div className='header-item'>Vat</div>
          <div className='header-item'>Net</div>
          <div className='header-item'>Details</div>
        </div>
        <div className={this.props.className + '-data'}>
          <div className='data-item'>{this.props.data.date}</div>
          <div className='data-item'>{this.props.data.description}</div>
          <div className='data-item'>{this.props.data.clientName}</div>
          <div className='data-item'>{this.props.data.supplier}</div>
          <div className='data-item'>£{this.props.data.amount.gross}</div>
          <div className='data-item'>{this.props.data.amount.vat}</div>
          <div className='data-item'>{this.props.data.amount.net}</div>
          <div className='data-item'>{this.props.data.amount.details}</div>
        </div>
      </li>
    );
  }
});
