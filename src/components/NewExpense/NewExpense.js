import React from 'react';

import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const NewExpense = (props) => {
  const saveExpenseDataHandler =(enterdedExpenseData)=>{
    const expenseData ={
      ...enterdedExpenseData,
      id: Math.random().toString()
    }

    // console.log(expenseData);
    props.onExpenseChange(expenseData);
  }
  return (
    <div className='new-expense'>
      <ExpenseForm onSaveExpenseData={saveExpenseDataHandler}/>
    </div>
  );
};

export default NewExpense;
