var React = require('react'),
    Inputs = require('../form/InputsWithLabel'),
    Button = require('../utils/Button'),
    AuthActions = require('../../actions/AuthActions'),
    InputStateMixin = require('../../mixins/InputStateMixin');

var Login = React.createClass({
  mixins: [InputStateMixin],
  getInitialState() {
    return {};
  },
  _onSubmit(event) {
    event.preventDefault();
    AuthActions.login(this.state.username, this.state.password);
  },
  render() {
    return (
      <form name="login-form" classNane="login-form" onSubmit={this._onSubmit}>
        <fieldset>
          <legend>Please enter your logine details:</legend>
          <Inputs.Text name="username" value={this.state.username} onChange={this.inputValueChange} autofocus={true}>Username</Inputs.Text>
          <Inputs.Text name="password" value={this.state.password} onChange={this.inputValueChange}>Password</Inputs.Text>
          <Button.Submit />
        </fieldset>
      </form>
    );
  }
});

module.exports = Login;
