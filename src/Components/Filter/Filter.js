import React from 'react'
import classes from './Filter.module.css'

const Filter = (props) => (
  <div className = {classes.FilterContainer}>
    <label className="filtertext"
    >Filter by: </label>
    <select onChange={e => props.filter(e.target.value)} className={classes.Filter}>
      <option className={classes.filterName} value="normal">All</option>
      <option value="hightolow">High to Low</option>
      <option value="lowtohigh">Low to High</option>
    </select>
  </div>

)


export default Filter 