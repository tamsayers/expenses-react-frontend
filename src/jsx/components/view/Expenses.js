var React = require('react'),
    QueryContent = require('../query/Content.js'),
    NavMenu = require('../navigation/Menu.js');

var Expenses = React.createClass({
  getInitialState() {
    return {
      content: QueryContent
    };
  },
  _updateContent(Component) { return e =>
    this.setState({
      content: Component
    });
  },
  render() {
    return (
      <div>
        <div id="header">
          <div id="header__menu">
            <NavMenu updateContent={this._updateContent}/>
          </div>
        </div>
        <this.state.content />
      </div>
    );
  }
});

module.exports = Expenses;