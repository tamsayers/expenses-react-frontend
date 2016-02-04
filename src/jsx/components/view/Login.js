var React = require('react'),
    Inputs = require('../form/InputsWithLabel'),
    InputStateMixin = require('../../mixins/InputStateMixin');

var Login = React.createClass({
  mixins: [InputStateMixin],
  getInitialState() {
    return {};
  },
  _onSubmit() {
    LoginAction.login(this.state.username, this.state.password);
  },
  render() {
    return (
      <form name="login-form" classNane="login-form" onSubmit={this._onSubmit}>
        <fieldset>
          <legend>Please enter your logine details:</legend>
          <Inputs.Text name="username" value={this.state.username} onChange={this.inputValueChange} autofocus={true}>Username</Inputs.Text>
          <Inputs.Text name="password" value={this.state.password} onChange={this.inputValueChange}>Username</Inputs.Text>
        </fieldset>
      </form>
    );
  }
});

module.exports = Login;
