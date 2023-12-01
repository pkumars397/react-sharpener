import React from "react";
import ExpenseForm from "./ExpenseForm";

import "./NewExpense.css";

const NewExpense = (props) => {
  const onSaveHandler = (expenseData) => {
    expenseData = {
      ...expenseData,
      id: Math.random(),
    };
    props.onAddExpense(expenseData);
  };
  return (
    <div className="new-expense">
      <ExpenseForm onSaveData={onSaveHandler} />
    </div>
  );
};

export default NewExpense;
