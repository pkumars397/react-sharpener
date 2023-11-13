import "./ExpenseItems.css";

function ExpenseItems() {
  const expenseDate = new Date(2023, 3, 21);
  const expenseTitle = "Car Insurance";
  const expensePrice = 290;
  const LocationOfExpenditure = "Bangalore";
  return (
    <div className="expense-item">
      <div>{expenseDate.toLocaleDateString()}</div>
      <div className="expense-item__description">
        <h2>{expenseTitle}</h2>
        <div className="expense-item__price">{expensePrice}</div>
        <h3>{LocationOfExpenditure}</h3>
      </div>
    </div>
  );
}

export default ExpenseItems;
