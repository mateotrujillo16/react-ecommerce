// import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Navigation = () => {
  return (
    <nav className="navbar">
      <Link className="nav-link" to="/">
        Home
      </Link>
      <Link className="nav-link" exact to="/Products">
        Products
      </Link>
      <Link className="nav-link" exact to="/Contact">
        Contact
      </Link>
      <Link className="nav-cart" exact to="/Cart">
        cart
      </Link>
    </nav>
  );
};

export default Navigation 