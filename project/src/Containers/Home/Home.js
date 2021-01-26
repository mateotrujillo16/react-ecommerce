import React, { Component } from 'react'
// import Navigation from '../../Components/Navigation/NavigationItems/Navigation'
import Footer from '../../Components/Footer/Footer'
import { Link } from 'react-router-dom'
import classes from './Home.css'
import Navigation from '../../Components/Navigation/Navigation'

class Home extends Component {
  render() {
    return (
      <div>
        <Navigation />
        <header className="header-container">
          <div className="Hero">
            <p></p>
          </div>
        </header>
        {/* <main> */}
          <div className="items">
            <Link to="/products">
              <button type="button" className="btn">
                Order Now
              </button>
            </Link>
            <h1>Featured Items</h1>
          </div>
          <div className="product-container">
            <div className="products">
              <section>
                <img
                  src="https://images.vat19.com/covers/large/giant-pocky.jpg"
                  alt="giant pocky"
                />
                <h2>Giant Pocky Chocolate (18pc)</h2>
                <br />
                <p>
                  Pocky is a sweet biscuit covered in milk chocolate. This version
                  of Pocky has been super-sized for better snackabillity.
						    </p>
                <p className="price">Price: $14.99</p>
                <input className="buy" type="submit" value="buy now" />
              </section>
            </div>
            <div className="products">
              <section>
                <img
                  src="https://images-na.ssl-images-amazon.com/images/I/51X5H05S2JL._SX366_BO1,204,203,200_.jpg"
                  alt="manga"
                />
                <h2>Cowboy Bebop</h2>
                <br />
                <p>
                  The extravegant bounty hunters are back and on the hunt for new
                  targets. Cowboy bebop blends jazz music with over the top science
                  fiction.
						    </p>
                <p className="price">Price: $274.99</p>
                <input className="buy" type="submit" value="buy now" />
              </section>
            </div>
            <div className="products">
              <section>
                <img
                  src="https://images-na.ssl-images-amazon.com/images/I/710fiuckQDL._AC_SY450_.jpg"
                  alt="action figure"
                />
                <h2>Gundam Wing Epyon</h2>
                <br />
                <p className="price">Price: $14.99</p>
                <input className="buy" type="submit" value="buy now" />
              </section>
            </div>
            <div className="products">
              <section>
                <img
                  src="https://i5.walmartimages.com/asr/5bf64c97-9e52-487e-8073-677b1e72ec81_1.691d8d0cd2e6e531dd1b97d4a60be0ce.jpeg?odnWidth=612&odnHeight=612&odnBg=ffffff"
                  alt="ramune soda"
                />
                <h2>Ramune Soda (8pc)</h2>
                <br />
                <p>
                  Popular japanese soda that is fizzy and refreshing. Comes in a
                  wide variety of flavors in 6oz bottles.
						    </p>
                <p>Price: $24.99</p>
                <input className="buy" type="submit" value="buy now" />
              </section>
            </div>
          </div>
        {/* </main> */}
        <Footer />
      </div>
    )
  }
}

export default Home