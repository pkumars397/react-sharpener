// import "./App.css";
import ExpenseItems from "./components/Expenses/ExpenseItems";
import Ex from "./components/Expenses/Ex";
const App = () => {
  // console.log("Parent-render");
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
    <div className="App">
      <h1>Lets get Started</h1>
      {/* <ExpenseItems
        title={expenses[0].title}
        price={expenses[0].amount}
        date={expenses[0].date}
        location={expenses[0].locationOfExpense}
      ></ExpenseItems>
      <ExpenseItems
        title={expenses[1].title}
        price={expenses[1].amount}
        date={expenses[1].date}
        location={expenses[1].locationOfExpense}
      ></ExpenseItems>
      <ExpenseItems
        title={expenses[2].title}
        price={expenses[2].amount}
        date={expenses[2].date}
        location={expenses[2].locationOfExpense}
      ></ExpenseItems>
      <ExpenseItems
        title={expenses[3].title}
        price={expenses[3].amount}
        date={expenses[3].date}
        location={expenses[3].locationOfExpense}
      ></ExpenseItems> */}
      {expenses.map((item) => (
        <ExpenseItems
          title={item.title}
          price={item.amount}
          date={item.date}
          locationOfExpense={item.locationOfExpense}
        />
      ))}
      <Ex></Ex>
    </div>
  );
};

export default App;
