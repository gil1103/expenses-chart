import '../assets/style/cmps/ExpensesFilter.css'

export const ExpensesFilter = (props) => {
  const filterChangeHandler = (event) => {
    props.onChangeFilter(event.target.value)
  }

  return (
    <div className='expenses-filter'>
      <div className='expenses-filter__control'>
        <label htmlFor='selected-year'>Filter by Year</label>
        <select name='selected-year' value={props.selected} onChange={filterChangeHandler} id='selectFilter'>
          <option value='2022'>2022</option>
          <option value='2021'>2021</option>
          <option value='2020'>2020</option>
          <option value='2019'>2019</option>
        </select>
      </div>
    </div>
  )
}
