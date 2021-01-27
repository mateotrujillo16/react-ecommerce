import React from 'react'
import Footer from '../../Components/Footer/Footer'
import Navigation from '../../Components/Navigation/Navigation'
import './Contact.css'

const Contact = () => {
  return (
    <div>
      <Navigation />
      <div className='FormContainer'>
        <form>
          <div id="contact-heading">
            <h1>Contact Us</h1>
            <h2>Would you like to request any items to be added...</h2>
          </div>
          <div id="contact-box">
            <div className="contact">
              <label>
                First Name <br />
                <input type="text" name="firstname" placeholder="First Name" />
              </label>
            </div>
            <div className="contact">
              <label>
                Last Name <br />
                <input type="text" placeholder="Last Name" />
              </label>
            </div>
            <div className="contact">
              <label>
                Email <br />
                <input type="email" placeholder="Email" />
              </label>
            </div>
            <div className="contact">
              <label>
                Phone Number <br />
                <input type="text" placeholder="Phone Number" />
              </label>
            </div>
            <div className="contact">
              <label
              >Comments <br />
                <textarea placeholder="Comments..."></textarea>
              </label>
            </div>
            <div>
              <input type="submit" />
            </div>
          </div>
        </form>
      </div>
      <Footer />
    </div>
  )
}

export default Contact;