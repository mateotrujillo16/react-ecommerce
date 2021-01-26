import React from 'react'
import classes from './Item.module.css'


const Item = (props) => {
  const source = 'url(' + props.Source + ')'
  return (
    < div className={classes.Card} >
      <div style={{ content: source }} className={classes.Image}></div>
      <ul className={classes.Content}>
        <li className={classes.Price}>${props.Price}</li>
        <li className={classes.Name}>{props.Name}</li>
        <li className={classes.Description}>{props.Description}</li>
      </ul>
      <button classeName={classes.Button}>Add to Cart</button>
    </ div >
  )
}

export default Item