import React from 'react';
import classes from './Slider.module.css'

const Slider = (props) => {
  const source = 'url(' + props.featured.image + ')'

  // let source = props.featured.image
  return (

    < div className={classes.Card} >
      <div style={{ content: source }} className={classes.Image}></div>
      <li className={classes.Name}>{props.name}</li>
      <button onClick = {props.back}>BUTTON</button>
        <ul className={classes.Content}>
          <li className={classes.Name}>{props.featured.name}</li>
          <li className={classes.Price}>${props.featured.price}</li>
          <li className={classes.Description}>{props.featured.description}</li>
          {/* <div className={classes.ButtonContainer}> */}

          {/* </div> */}
        </ul>
        <button onClick = {props.forward}>BUTTON</button>
     

    </ div >
  )
}

export default Slider