import "./ExpenseItems.css";
import ExpenseDate from "./ExpenseDate.js";
import ExpenseDetails from "./ExpenseDetails.js";
function ExpenseItems(props) {
  // console.log("Child-render");
  // console.log(props);
  return (
    <div className="expense-item">
      <ExpenseDate date={props.date} />
      <ExpenseDetails
        title={props.title}
        locationOfExpense={props.locationOfExpense}
        price={props.price}
      />
    </div>
  );
}

export default ExpenseItems;
