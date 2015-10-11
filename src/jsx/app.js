var React = require('react');
//var ExpensesForm = require('./add/ExpensesForm.js');
var QueryContent = require('./query/Content.js');

React.render(
  //<ExpensesForm url='/api/expenses' />,
  <QueryContent />,
  document.getElementById('content')
);
