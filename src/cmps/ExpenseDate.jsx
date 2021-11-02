import '../assets/style/cmps/ExpenseDate.css'

export function ExpenseDate (props) {
  const { date } = props
  const month = date.toLocaleString('en-US', { month: 'long' })
  const day = date.toLocaleString('en-US', { day: '2-digit' })
  const year = date.getFullYear()

  return (
    <div className='expanse-date'>
      <div className='expanse-date_month'>{month}</div>
      <div className='expanse-date_year'>{year}</div>
      <div className='expanse-date_day'>{day}</div>
    </div>
  )
}
