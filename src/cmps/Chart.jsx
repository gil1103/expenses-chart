import React from 'react'
import { ChartBar } from './ChartBar'
import '../assets/style/cmps/Chart.css'

export const Chart = (props) => {
  const datPointsValues = props.dataPoints.map(dataPoint => dataPoint.value)
  const totalMaximum = Math.max(...datPointsValues)

  return (
    <div className='chart'>
      {props.dataPoints.map((dataPoint) => {
        return (
          <ChartBar
            key={dataPoint.label}
            value={dataPoint.value}
            maxValue={totalMaximum}
            label={dataPoint.label}
          />
        )
      })}
    </div>
  )
}
