var React = require('react');
var ReactDOM = require('react-dom');
//var ExpensesForm = require('./add/ExpensesForm.js');
var QueryContent = require('./query/Content.js');

ReactDOM.render(
//  <ExpensesForm url='/api/expenses' />,
  <QueryContent url='/api/expenses' />,
  document.getElementById('content')
);
