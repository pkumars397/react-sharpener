const ExpenseForm = () => {
  const onChangeHandler = (e) => {
    console.log(e.target.value);
  };
  return (
    <div>
      <div>Expense Item</div>
      <input
        onChange={onChangeHandler}
        type="text"
        id="expenseItem"
        value={""}
        name=""
      ></input>
      <lable for="expenseAmount">Expense Amount</lable>
      <input type="text" id="expenseAmount" value="" name=""></input>
      <lable for="date">Expense Item</lable>
      <input type="date" id="date" value="" name=""></input>
    </div>
  );
};

export default ExpenseForm;
