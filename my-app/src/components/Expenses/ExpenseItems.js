import "./ExpenseItems.css";
import ExpenseDate from "./ExpenseDate.js";
import ExpenseDetails from "./ExpenseDetails.js";
import Card from "../UI/Card.js";
const ExpenseItems = (props) => {
  // console.log("Child-render");
  // console.log(props);
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <ExpenseDetails
        title={props.title}
        locationOfExpense={props.locationOfExpense}
        price={props.price}
      />
    </Card>
  );
};

export default ExpenseItems;
