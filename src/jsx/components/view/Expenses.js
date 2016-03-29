var React = require('react'),
    QueryContent = require('../query/Content.js'),
    ExpensesForm = require('../add/ExpensesForm.js'),
    ExpensesConstants = require('../../constants/ExpensesConstants'),
    ExpensesStore = require('../../stores/ExpensesStore'),
    NavMenu = require('../navigation/Menu.js');

const storedState = () => {
  var content;
  if (ExpensesStore.content() === ExpensesConstants.VIEW.ADD_NEW) {
    content = ExpensesForm;
  } else {
    content = QueryContent;
  }

  return { content: content };
};


const Expenses = React.createClass({
  getInitialState() {
    return storedState();
  },
  componentDidMount: function() {
    ExpensesStore.bind(ExpensesConstants.VIEW_CHANGE_EVENT, this._updateContent);
  },
  componentWillUnmount: function() {
    ExpensesStore.unbind(ExpensesConstants.VIEW_CHANGE_EVENT, this._updateContent);
  },
  _updateContent() {
    this.setState(storedState());
  },
  render() {
    return (
      <div>
        <div id="header">
          <div id="header__menu">
            <NavMenu />
          </div>
        </div>
        <div id="content">
          <this.state.content />
        </div>
      </div>
    );
  }
});

module.exports = Expenses;
