var React = require('react');
var ExpensesForm = require('./ExpensesForm.js');

React.render(
    <ExpensesForm url='http://localhost:9000/expenses' />,
    document.getElementById('content')
);
