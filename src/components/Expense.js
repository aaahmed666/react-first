import React, { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import "./Expense.css";
import Card from "./Card";
import ExpenseFilter from "./ExpenseFilter";
import ExpensesChart from "./ExpensesChart";

const Expense = (props) => {
  const [filteredYear, setFilteredYear] = useState("2020");

  const onFilterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredExpense = props.item.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  return (
    <Card className="expenses">
      <ExpenseFilter
        selected={filteredYear}
        onFilterChange={onFilterChangeHandler}
      />
      <ExpensesChart expenses={filteredExpense} />
      {filteredExpense.length === 0 && <p>No Items Found.</p>}
      {filteredExpense.length > 0 &&
        filteredExpense.map((expense) => (
          <ExpenseItem
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
            id={expense.id}
            key={expense.id}
          />
        ))}
    </Card>
  );
};

export default Expense;
