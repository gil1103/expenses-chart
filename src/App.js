/* eslint-disable react/react-in-jsx-scope */
import { Expenses } from './cmps/Expenses'
import { NewExpense } from './cmps/NewExpense'
import React, { useState } from 'react'

const INITIAL_EXPENSES = [
  {
    id: 'e1',
    title: 'Toilet Paper',
    amount: 94.12,
    date: new Date(2020, 7, 14)
  },
  {
    id: 'e2',
    title: 'New TV',
    amount: 799.49,
    date: new Date(2021, 2, 12)
  },
  {
    id: 'e3',
    title: 'Car Insurance',
    amount: 294.67,
    date: new Date(2021, 2, 28)
  },
  {
    id: 'e4',
    title: 'New Desk (Wooden)',
    amount: 450,
    date: new Date(2021, 5, 12)
  }
]

function App () {
  const [expenses, setExpenses] = useState(INITIAL_EXPENSES)

  const addExpenseHandler = (newExpenses) => {
    setExpenses(prevExpenses => {
      // return [...prevExpenses].unshift(newExpenses)
      return [newExpenses, ...prevExpenses]
    })
  }

  const deleteExpenseHandler = (expenseId) => {
    setExpenses(prevExpenses => {
      const updatedExpenses = prevExpenses.filter(expense => expense.id !== expenseId)
      return updatedExpenses
    })
  }

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses onDeleteExpense={deleteExpenseHandler} expenses={expenses} />
    </div>
  )
}

export default App
