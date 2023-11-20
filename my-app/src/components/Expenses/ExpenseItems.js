import "./ExpenseItems.css";
import ExpenseDate from "./ExpenseDate.js";
import ExpenseDetails from "./ExpenseDetails.js";
import Card from "../UI/Card.js";
const ExpenseItems = (props) => {
  // console.log("Child-render");
  // console.log(props);
  const clickHandl=()=>{
    console.log("deleted")
  }
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <ExpenseDetails
        title={props.title}
        locationOfExpense={props.locationOfExpense}
        price={props.price}
      />
      <button onClick={}>Delete Expense</button>
    </Card>
  );
};

export default ExpenseItems;
