import React from 'react'
import Item from './Item/Item'
import classes from './Items.module.css'
import LowtoHigh from '../Filter/LowtoHigh/LowtoHigh'
import HightoLow from '../Filter/HightoLow/HightoLow'
import ByProduct from '../Filter/ByProducts/Byproduct'

const Items = (props) => {
  let items = props.Data
  // console.log(props.filter)
  switch (props.filter) {
    case 'lowtohigh':
      LowtoHigh(props)
      break;
    case 'hightolow':
      HightoLow(props)
      break;
    case 'manga':
      items = ByProduct(props, 'manga');
      break;
    case 'snacks':
      items = ByProduct(props, 'snacks');
      break;
    case 'figure':
      items = ByProduct(props, 'figure');
      break;
    default:
      break;
  }
  // console.log(`after switch ${items}`)

  const allProducts = items.map(item => {
    return (
      <Item
        Name={item.name}
        Tag={item.tag}
        Description={item.description}
        Price={item.price}
        key={item.id}
        Source={item.image}
      />
    )
  })

  return (
    <div className={classes.ProductsGrid}>
      {allProducts}
    </div>
  )
};

export default Items