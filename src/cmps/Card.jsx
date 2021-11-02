import React from 'react'
import '../assets/style/cmps/Card.css'

export function Card (props) {
  const classes = 'card ' + props.className
  return <div className={classes}>{props.children}</div>
}
