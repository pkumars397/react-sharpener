function ExpenseDetails(props) {
  console.log(props);
  return (
    <div className="expense-item__description">
      <h2>{props.title}</h2>
      <div className="expense-item__price">{props.price}</div>
      <h3>{props.locationOfExpense}</h3>
    </div>
  );
}
export default ExpenseDetails;
