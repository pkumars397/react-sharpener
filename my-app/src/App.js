import ExpenseItems from "./components/Expenses/ExpenseItems";
import NewExpense from "./components/newExpense/NewExpense";
import { useState } from "react";
const Dummy_Data = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date(2020, 7, 14),
    locationOfExpense: "Bangalore",
  },
  {
    id: "e2",
    title: "New TV",
    amount: 799.49,
    date: new Date(2021, 2, 12),
    locationOfExpense: "Bangalore",
  },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2021, 2, 28),
    locationOfExpense: "Bangalore",
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date(2021, 5, 12),
    locationOfExpense: "Bangalore",
  },
];

const App = () => {
  const [expenses, setExpenses] = useState(Dummy_Data);
  const onAddExpenseHandler = (expense) => {
    setExpenses((prevState) => {
      return [expense, ...expenses];
    });
  };
  return (
    <>
      <NewExpense onAddExpense={onAddExpenseHandler} />
      <div className="App" style={{ width: "60%", margin: "auto" }}>
        {expenses.map((item) => (
          <ExpenseItems
            key={item.id}
            title={item.title}
            price={item.amount}
            date={item.date}
            locationOfExpense={item.locationOfExpense}
          />
        ))}
      </div>
    </>
  );
};

export default App;
