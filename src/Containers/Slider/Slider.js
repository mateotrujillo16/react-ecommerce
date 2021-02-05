import React from 'react';
import classes from './Slider.module.css'

const Slider = (props) => {
  const source = 'url(' + props.featured.image + ')'
  return (
    < div className={classes.CardContainer} >
      <button onClick={props.back} className={classes.back} >&#8592;</button>
      <div className={classes.Card}>
        <div style={{ content: source }} className={classes.Image}></div>
        <ul className={classes.Content}>
          <li className={classes.Name}>{props.featured.name}</li>
          <li className={classes.Price}>${props.featured.price}</li>
          <li className={classes.Description}>{props.featured.description}</li>
        </ul>
      </div>
      <button onClick={props.forward} className={classes.foward} >&#8594;</button>
    </ div >
  )
}

export default Slider