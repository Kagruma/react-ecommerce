// import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Navigation = () => {
  return (
    <nav className="navbar">
      
      <Link className="nav-link" to="/">
       
      </Link>
      <Link className="nav-link" exact to="/Products">
        
      </Link>
      <Link className="nav-link" exact to="/Contact">
        
      </Link>
      <Link className="nav-cart" exact to="/Cart">
        
      </Link>
    </nav>
  );
};

export default Navigation 