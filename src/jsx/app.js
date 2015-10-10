var React = require('react');
var ExpensesForm = require('./ExpensesForm.js');

React.render(
  <ExpensesForm url='/expenses' />,
  document.getElementById('content')
);
