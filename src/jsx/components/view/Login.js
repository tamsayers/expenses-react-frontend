var React = require('react'),
    Inputs = require('../form/InputsWithLabel'),
    Button = require('../utils/Button'),
    AuthActions = require('../../actions/AuthActions'),
    InputStateMixin = require('../../mixins/InputStateMixin');

var Login = React.createClass({
  mixins: [InputStateMixin],
  getInitialState() {
    return {
      inputs: {}
    };
  },
  _onSubmit(event) {
    event.preventDefault();
    AuthActions.login(this.state.inputs.username, this.state.inputs.password);
  },
  render() {
    return (
      <form name="login-form" className="login-form" onSubmit={this._onSubmit}>
        <fieldset>
          <legend>Please enter your logine details:</legend>
          <Inputs.Text name="username" value={this.state.inputs.username} onChange={this.inputValueChange} autofocus={true}>Username</Inputs.Text>
          <Inputs.Text name="password" value={this.state.inputs.password} onChange={this.inputValueChange}>Password</Inputs.Text>
          <Button.Submit />
        </fieldset>
      </form>
    );
  }
});

module.exports = Login;
