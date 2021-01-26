import React from 'react'
import classes from './Footer.css'

const Footer = () => {
  return (
    <footer className ="footer-container">
      
        <div className="inner-footer">
          <div className="logo">
            <img
              src="https://dewey.tailorbrands.com/production/brand_version_mockup_image/515/3867915515_31e4c417-026a-4d15-8a8b-3031b5604280.png?cb=1602002614"
              alt="logo"
            />
          </div>
          <p>
            Copyright &copy; 2020 by Mateo Trujillo <br />
            <a
              href="https://www.facebook.com/life.in.japan.co.jp/"
              target="_blank"
              rel="noopener"
            >facebook<i className="fab fa-facebook"></i
            ></a>
            <a
              href="https://twitter.com/japansafetravel?lang=en"
              target="_blank"
              rel="noopener"
            >twitter <i className="fab fa-twitter"></i
            ></a>
            <a
              href="https://www.instagram.com/visitjapanjp/?hl=en"
              target="_blank"
              rel="noopener"
            >instagram<i className="fab fa-instagram"></i
            ></a>
          </p>
          <br />
        </div>
      
    </footer>
  );
};

export default Footer