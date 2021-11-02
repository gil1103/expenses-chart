import React, { useState } from 'react'
import { Card } from './Card'
import { ExpensesFilter } from './ExpensesFilter'
import { ExpenseItemsList } from './ExpenseItemsList'
import '../assets/style/cmps/Expenses.css'
import { ExpensesChart } from './ExpensesChart'

export const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState('2020')

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear)
  }

  const filteredExpenses = props.expenses.filter(expense => {
    return expense.date.getFullYear().toString() === filteredYear
  })

  return (
    <div>
      <Card className='expenses'>
        <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
        <ExpensesChart expenses={filteredExpenses} />
        <ExpenseItemsList items={filteredExpenses} onDelete={props.onDeleteExpense} />
      </Card>
    </div>
  )
}
