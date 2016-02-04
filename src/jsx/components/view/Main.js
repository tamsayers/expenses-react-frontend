var React = require('react'),
    Expenses = require('./Expenses'),
    Login = require('./Login'),
    ViewStore = require('../../stores/ViewStore'),
    ViewConstants = require('../../constants/ViewConstants');

var Main = React.createClass({
  getInitialState() {
    return {
      view: ViewStore.current()
    };
  },
  componentDidMount: function() {
    ViewStore.bind(ViewConstants.VIEW_CHANGE_EVENT, this._viewChanged);
  },
  componentWillUnmount: function() {
    ViewStore.unbind(ViewConstants.VIEW_CHANGE_EVENT, this._viewChanged);
  },
  _viewChanged() {
    this.setState({
      view: ViewStore.current()
    });
  },
  render() {
    var view;
    if (this.state.view === ViewConstants.VIEW.EXPENSES) {
      view = <Expenses />;
    } else {
      view = <Login />;
    }
    return view;
  }
});

module.exports = Main;
