import React, { Component } from 'react'
// import Item from '../../Components/Items/Item/Item'
import Items from '../../Components/Items/Items'
import data from '../../data.json'
import classes from './Products.module.css'
import Filter from '../../Components/Filter/Filter'
import Footer from '../../Components/Footer/Footer'


class Products extends Component {
  // Need to make a filter to change from high to low and low to high
  state = {
    products: data.products,
    filter: null
  }
  //filters products based on price 
  filterHandler = (type) => {
    switch (type) {
      case 'normal':
        this.setState({ filter: 0 })
        break;
      case 'hightolow':
        this.setState({ filter: 'hightolow' })
        break;
      case 'lowtohigh':
        this.setState({ filter: 'lowtohigh' })
        break;
      case 'snacks':
        this.setState({ filter: 'snacks' })
        break;
      case 'manga':
        this.setState({ filter: 'manga' })
        break;
      case 'figure':
        this.setState({ filter: 'figure' })
        break;
      default:
        break;
    }
  }
  render() {
    return (
      <div>
        <Filter className={classes.Filter} filter={this.filterHandler} />
        {/* <Filter className={classes.Filter} filter={this.filterHandler} /> */}
        <Items filter={this.state.filter} Data={this.state.products} />
        <Footer />

      </div>
    )
  }
}

export default Products