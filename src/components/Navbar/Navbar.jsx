import React from 'react'
import './Navbar.css';

function Navbar() {
  return (
    <div className='navbar'>
        <div className="navContainer">
            <span className="logo">Booking</span>
            <div className="navItems">
                <button className="navButton">Register</button>
                <button className="navButton">Login</button>
            </div>
        </div>
    </div>
  )
}

export default Navbar