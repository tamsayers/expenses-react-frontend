var React = require('react'),
    Input = require('../form/InputsWithLabel.js'),
    Button = require('../utils/Button.js');

module.exports = React.createClass({
  render() {
    return (
      <form name='query-form' className='query-form' onSubmit={this.props.onSubmit}>
        <fieldset>
          <Input.Date name="from" value={this.props.query.from} onChange={this.props.onChange}>Date From</Input.Date>
          <Input.Date name="till" value={this.props.query.till} onChange={this.props.onChange}>Date Till</Input.Date>
          <Input.Text name="supplier" value={this.props.query.supplier} onChange={this.props.onChange} placeholder='Optional supplier'>Supplier</Input.Text>
          <div className="query-form__submit">
            <Button.Submit>View</Button.Submit>
          </div>
          <div className="query-form__download-csv">
            <Button.Click onClick={this.props.downloadCsv}>Download CSV</Button.Click>
          </div>
        </fieldset>
      </form>
    );
  }
});
