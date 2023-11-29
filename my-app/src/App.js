import ExpenseItems from "./components/Expenses/ExpenseItems";
import Ex from "./components/Expenses/Ex";
import NewExpense from "./components/newExpense/NewExpense";
const App = () => {
  const expenses = [
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
  return (
    <>
      <NewExpense />
      <div className="App" style={{ width: "60%", margin: "auto" }}>
        {expenses.map((item) => (
          <ExpenseItems
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
