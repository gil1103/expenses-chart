import React from 'react'
import { ExpenseDate } from './ExpenseDate'
import { Card } from './Card'
import '../assets/style/cmps/ExpenseItem.css'

export const ExpenseItem = (props) => {
  const { date, amount, title } = props

  const deleteHandler = () => {
    console.log(props.id)
    props.delete(props.id)
  }

  return (
    <li>
      <Card className='expense-item'>
        <p className='delete-expense' onClick={deleteHandler}>X</p>
        <ExpenseDate date={date}  />
        <div className='description'>
          <h2>{title}</h2>
          <div className='price'>${amount}</div>
        </div>
      </Card>
    </li>
  )
}
