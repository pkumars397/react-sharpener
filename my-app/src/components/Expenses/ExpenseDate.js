import "./ExpenseDate.css";
const ExpenseDate = (props) => {
  console.log("Child of child render", props);
  const dateYear = props.date.getFullYear();
  const dateDay = props.date.toLocaleString("en-US", { day: "2-digit" });
  const dateMonth = props.date.toLocaleString("en-US", { month: "long" });
  return (
    <div className="expense-date">
      <div className="expense-date__month">{dateMonth}</div>
      <div className="expense-date__year">{dateYear}</div>
      <div className="expense-date__day">{dateDay}</div>
    </div>
  );
};

export default ExpenseDate;
