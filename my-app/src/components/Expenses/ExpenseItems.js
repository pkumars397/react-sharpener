import "./ExpenseItems.css";
import ExpenseDate from "./ExpenseDate.js";
import ExpenseDetails from "./ExpenseDetails.js";
import Card from "../UI/Card.js";
import { useState } from "react";
const ExpenseItems = (props) => {
  const [title, setTitle] = useState(props.title);
  const clickHandle = () => {
    setTitle("updated");
  };
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <ExpenseDetails
        title={title}
        locationOfExpense={props.locationOfExpense}
        price={props.price}
      />
      <button onClick={clickHandle}>change title</button>
    </Card>
  );
};

export default ExpenseItems;
