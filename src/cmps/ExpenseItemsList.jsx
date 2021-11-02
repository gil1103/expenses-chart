import React from 'react'
import { ExpenseItem } from './ExpenseItem'
import '../assets/style/cmps/ExpenseItemsList.css'

export const ExpenseItemsList = ({ items, onDelete }) => {
  if (items.length === 0) {
    return <h2 className='expenses-list_falback'>found no expenses</h2>
  }

  return (
    <ul className='expenses-list'>
      {items.map((expense) => {
        return (
          <ExpenseItem
            key={expense.id}
            id={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
            delete={onDelete} // props.onDelete
          />
        )
      })}
    </ul>
  )
}
