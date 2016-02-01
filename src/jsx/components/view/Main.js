var React = require('react');
var QueryContent = require('../query/Content.js');
var NavMenu = require('../navigation/Menu.js');

var Main = React.createClass({
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

module.exports = Main;
