var React = require('react'),
    Expenses = require('./Expenses'),
    Login = require('./Login'),
    ViewStore = require('../../stores/ViewStore');

var Main = React.createClass({
  getInitialState() {
    return {
      view: ViewStore.current()
    };
  },
  componentDidMount: function() {
    ViewStore.bind('change', this._viewChanged);
  },
  componentWillUnmount: function() {
    ViewStore.unbind('change', this._viewChanged);
  },
  _viewChanged() {
    this.setState({
      view: ViewStore.current()
    });
  },
  render() {
    var view;
    if (this.state.view == 'login') {
      view = <Login />;
    } else {
      view = <Expenses />;
    }
    return view;
  }
});

module.exports = Main;
