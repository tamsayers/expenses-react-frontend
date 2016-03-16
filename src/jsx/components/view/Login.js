var React = require('react'),
    Inputs = require('../form/InputsWithLabel'),
    Button = require('../utils/Button'),
    ViewActions = require('../../actions/ViewActions'),
    LoginActions = require('../../actions/LoginActions'),
    LoginConstants = require('../../constants/LoginConstants'),
    LoginStore = require('../../stores/LoginStore'),
    InputStateMixin = require('../../mixins/InputStateMixin');

var Login = React.createClass({
  mixins: [InputStateMixin],
  getInitialState() {
    return {
      message: '',
      inputs: {}
    };
  },
  componentDidMount: function() {
    LoginStore.bind(LoginConstants.LOGIN_SUCCESFUL_EVENT, this._successful);
    LoginStore.bind(LoginConstants.LOGIN_FAILURE_EVENT, this._failed);
  },
  componentWillUnmount: function() {
    LoginStore.unbind(LoginConstants.LOGIN_SUCCESFUL_EVENT, this._successful);
    LoginStore.unbind(LoginConstants.LOGIN_FAILURE_EVENT, this._failed);
  },
  _successful() {
    ViewActions.loggedId();
  },
  _failed() {
    this.setState({
      message: 'Invalid login credentials. Please try again.'
    });
  },
  _onSubmit(event) {
    event.preventDefault();
    LoginActions.login(this.state.inputs.username, this.state.inputs.password);
  },
  render() {
    return (
      <div>
        <div>{this.state.message}</div>
        <form name="login-form" className="login-form" onSubmit={this._onSubmit}>
          <fieldset>
            <legend>Please enter your login details:</legend>
            <Inputs.Text name="username" value={this.state.inputs.username} onChange={this.inputValueChange} autofocus={true}>Username</Inputs.Text>
            <Inputs.Text name="password" value={this.state.inputs.password} onChange={this.inputValueChange}>Password</Inputs.Text>
            <Button.Submit />
          </fieldset>
        </form>
      </div>
    );
  }
});

module.exports = Login;
