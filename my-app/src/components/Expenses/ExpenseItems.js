import "./ExpenseItems.css";
import ExpenseDate from "./ExpenseDate.js";
import ExpenseDetails from "./ExpenseDetails.js";
import Card from "../UI/Card.js";
import { useState } from "react";
const ExpenseItems = (props) => {
  // console.log("Child-render");
  // console.log(props);
  const [title, setTitle] = useState(props.title);
  const clickHandl = () => {
    setTitle("updated");
  };
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <ExpenseDetails
        title={props.title}
        locationOfExpense={props.locationOfExpense}
        price={props.price}
      />
      <button onClick={clickHandl}>change title</button>
    </Card>
  );
};

export default ExpenseItems;
