import React, { Component } from 'react'
import Navigation from '../../Components/Navigation/Navigation'
import Footer from '../../Components/Footer/Footer'
import { Link } from 'react-router-dom'
import './Home.css'
import Slider from '../Slider/Slider'
import Database from '../../Components/Database/Database'

class Home extends Component {
  state = {
    featured: Database.featuredItems,
    current: 0,
    currentItem: Database.featuredItems[0]
  }
  //creating arrows for 
  forwardHandler = () => {
    if (this.state.current <= 1) {
      let next = this.state.current + 1
      let nextProduct = this.state.featured[next]
      this.setState({ current: next, currentItem: nextProduct })
    } else {
      let first = 0
      let firstItem = this.state.featured[0]
      this.setState({ current: first, currentItem: firstItem })
    }
  }

  backHandler = () => {
    if (this.state.current >= 1) {
      let next = this.state.current - 1
      let nextProduct = this.state.featured[next]
      this.setState({ current: next, currentItem: nextProduct })
    } else {
      let first = 2
      let firstItem = this.state.featured[0]
      this.setState({ current: first, currentItem: firstItem })
    }

  }


  render() {
    return (
      <div>
        <Navigation />
        <header className="header-container">
          <div className="Hero">
            <div className="heroText">
              <p>"A Little step into Japan"</p>
              <Link to="/products">
                <button type="button" className="btn">
                  Order Now
              </button>
              </Link>
            </div>
          </div>
        </header>
        {/* <main> */}
        <div className="items">

          <h1>Featured Items</h1>

          <Slider
            forward={this.forwardHandler}
            back={this.backHandler}
            featured={this.state.currentItem}
          />


        </div>
        {/* </main> */}
        <Footer />
      </div>
    )
  }
}

export default Home