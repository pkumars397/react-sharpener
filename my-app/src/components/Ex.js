import React from "react";
// import ReactDOM from "react-dom/client";
function Ex() {
  return React.createElement("div", { className: "expense-item" }, [
    React.createElement("ExpenseDate", { date: "props.date" }),
    React.createElement("div", {}, [
      React.createElement("h1", {}, "Expense1"),
      React.createElement("h1", {}, "Expense1"),
    ]),
  ]);
}
export default Ex;
// return (
// <div className='expense-item'>
// <ExpenseDate date ={props.date} />
// <div>
// <h1>
// Expense 1
// </h1>
// <h1>
// Expense 1
// </h1>
// </div>
// <div>
// )
