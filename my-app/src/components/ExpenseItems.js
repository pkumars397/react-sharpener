import "./ExpenseItems.css";

function ExpenseItems(props) {
  console.log(props);
  return (
    <div className="expense-item">
      <div>{props.date.toLocaleDateString()}</div>
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">{props.price}</div>
        <h3>{props.locationOfExpense}</h3>
      </div>
    </div>
  );
}

export default ExpenseItems;
