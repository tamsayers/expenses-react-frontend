var React = require('react');
var ExpensesForm = require('./form/ExpensesForm.js');

React.render(
  <ExpensesForm url='/expenses' />,
  document.getElementById('content')
);
