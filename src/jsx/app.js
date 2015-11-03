var React = require('react');
var ReactDOM = require('react-dom');
var QueryContent = require('./query/Content.js');
var NavMenu = require('./navigation/Menu.js');

ReactDOM.render(
  <QueryContent />,
  document.getElementById('content')
);

ReactDOM.render(
  <NavMenu />,
  document.getElementById('header__menu')
);
