const React = require('react'),
      Expenses = require('./Expenses'),
      Login = require('./Login'),
      ViewStore = require('../../stores/ViewStore'),
      ViewConstants = require('../../constants/ViewConstants');

const storedState = () => {
  var view;
  if (ViewStore.current() === ViewConstants.VIEW.EXPENSES) {
    view = Expenses;
  } else {
    view = Login;
  }

  return { view: view };
};

const Main = React.createClass({
  getInitialState() {
    return storedState();
  },
  componentDidMount: function() {
    ViewStore.bind(ViewConstants.VIEW_CHANGE_EVENT, this._viewChanged);
  },
  componentWillUnmount: function() {
    ViewStore.unbind(ViewConstants.VIEW_CHANGE_EVENT, this._viewChanged);
  },
  _viewChanged() {
    this.setState(storedState());
  },
  render() {
    return (
      <this.state.view />
    );
  }
});

module.exports = Main;
