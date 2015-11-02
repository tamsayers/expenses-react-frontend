var React = require('react');
var Input = require('../form/InputsWithLabel.js');
var Button = require('../utils/Button.js');

module.exports = React.createClass({
  render() {
    return (
      <form name='query-form' className='query-form' onSubmit={this.props.onSubmit}>
        <fieldset>
          <Input.Text name="from" value={this.props.query.from} onChange={this.props.onChange}>Date From</Input.Text>
          <Input.Text name="till" value={this.props.query.till} onChange={this.props.onChange}>Date Till</Input.Text>
          <div className="query-form__submit">
            <Button.Submit />
          </div>
        </fieldset>
      </form>
    );
  }
});
