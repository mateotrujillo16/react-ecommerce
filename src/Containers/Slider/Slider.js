import React from 'react';
import classes from './Slider.module.css'

const Slider = (props) => {
  const source = 'url(' + props.featured.image + ')'

  // let source = props.featured.image
  return (

    < div className={classes.CardContainer} >
      <i onClick = {props.back} className = {classes.back} class='fas fa-chevron-left'>button</i>
      {/* <button onClick = {props.back} className = {classes.back}>BUTTON BACK</button> */}
      <div style={{ content: source }} className={classes.Image}></div>
      <li className={classes.Name}>{props.name}</li>    
        <ul className={classes.Content}>
          <li className={classes.Name}>{props.featured.name}</li>
          <li className={classes.Price}>${props.featured.price}</li>
          <li className={classes.Description}>{props.featured.description}</li>
        </ul>
        <i onClick = {props.forward} className = {classes.forward} class='fas fa-chevron-right'>button</i>
    </ div >
  )
}

export default Slider