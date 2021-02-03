import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import Contact from '../Containers/Contact/Contact'
import Home from '../Containers/Home/Home'
import Checkout from '../Containers/Checkout/Checkout'
import Auxiliary from '../hoc/Auxiliary/Auxiliary'
import Products from '../Containers/Products/Products';

class Sunakku extends Component {
  render() {
    return (
      <Auxiliary>
        <Route path='/' exact component={Home} />
        <Route path='/Products' exact component={Products} />
        <Route path='/Checkout' exact component={Checkout} />
        <Route path='/Contact' exact component={Contact} />
      </Auxiliary>

      
    )
  }
}

export default Sunakku;