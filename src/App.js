import ExpenseItems from './components/ExpenseItem';
function App() {
const expenses = [
  {
    id: 'a1',
    title: "Toilet paper",
    amount: 94,
    date: new Date(2020, 7, 14)
  },
  {
    id: 'a2',
    title: "Toilet Spray",
    amount: 12,
    date: new Date(2022, 7, 14)
  },
  {
    id: 'a3',
    title: "Goods",
    amount: 4,
    date: new Date(2021, 7, 14)
  },
  {
    id: 'a4',
    title: "Items",
    amount: 15,
    date: new Date(2021, 8, 14)
  }

]

  return (
    <div>
      <h2>Let's get started!</h2>
      <ExpenseItems title={expenses[0].title} 
        amount = {expenses[0].amount}
        date = {expenses[0].date}></ExpenseItems>
         <ExpenseItems title={expenses[1].title} 
        amount = {expenses[1].amount}
        date = {expenses[1].date}></ExpenseItems>
         <ExpenseItems title={expenses[2].title} 
        amount = {expenses[2].amount}
        date = {expenses[2].date}></ExpenseItems>
         <ExpenseItems title={expenses[3].title} 
        amount = {expenses[3].amount}
        date = {expenses[3].date}></ExpenseItems>
    </div>
  );
}

export default App;
