import React from 'react'
import classes from './Filter.module.css'

const Filter = (props) => (
  <div>
    <label>Filter by: </label>
    <select onChange={e => props.filter(e.target.value)} className={classes.Filter}>
      <option className={classes.filterName} value="normal"></option>
      <option value="hightolow">High to Low</option>
      <option value="lowtohigh">Low to High</option>
      <option className={classes.filterName} value="normal"></option>
      <option value="snacks">Snacks</option>
      <option value="manga">Manga</option>
      <option value="figure">Figures</option>
    </select>

    {/* <select onChange={e => props.filter(e.target.value)} className={classes.Filter}>
      <option className={classes.filterName} value="normal"></option>
      <option value="hightolow">Hight to Low</option>
      <option value="lowtohigh">Low to High</option>
      <option className={classes.filterName} value="normal"></option>
      <option value="snacks">Snacks</option>
      <option value="manga">Manga</option>
      <option value="figure">Figures</option>
    </select> */}
  </div>

)


export default Filter 