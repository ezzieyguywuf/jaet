import React from 'react';
import ReactDOM from 'react-dom';

function Expense(props) {
    const date = props.date;
    return (
      <tr>
        <td>{date.toLocaleDateString(undefined, {dateStyle: "medium"})}</td>
        <td>{props.description}</td>
        <td>{props.category}</td>
        <td>${props.amount}</td>
      </tr>
    )
}

function ExpenseTable(props) {
  const rows = props.expenses.map((expense, index) =>
        <Expense date={expense.date}
                 description={expense.description}
                 category={expense.category}
                 amount={expense.amount}
                 key={index}
        />
      );

  return (
    <table>
      <tbody>
        {rows}
      </tbody>
    </table>
  )
}

function AddExpense() {
  return (
    <button>+ Add Expense</button>
  );
}

const EXPENSES = [
  {
    date: new Date("2021-10-03"),
    description: "Exxon",
    amount: 26.34,
    category: "Auto:Fuel"
  },
  {
    date: new Date("2021-11-13"),
    description: "Whole Foods",
    amount: 324.50,
    category: "Food:Groceries"
  },
]

function App() {
  return (
    <div>
      <AddExpense />
      <ExpenseTable expenses={EXPENSES} />
    </div>
  )
}

ReactDOM.render(App(), document.getElementById('root'));
